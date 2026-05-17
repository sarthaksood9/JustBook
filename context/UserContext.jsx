
import React, { createContext, useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

const DEFAULT_USER = {
    profile: {
        name: '',
        address: '',
        email: '',
        phone: '',
        role: 'user',
    },
    wishlist: [],
    recentVisits: [],
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load user data from AsyncStorage on mount
    useEffect(() => {
        const loadUserData = async () => {
            try {
                setLoading(true);
                setError(null);

                const storedUser = await AsyncStorage.getItem('user');
                const storedUsersList = await AsyncStorage.getItem('usersList');

                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }

                if (storedUsersList) {
                    setUsersList(JSON.parse(storedUsersList));
                } else {
                    // Initialize empty users list
                    setUsersList([]);
                }
            } catch (err) {
                console.error('Error loading user data from AsyncStorage:', err);
                setError('Failed to load user data');
                // Continue anyway - app is still usable
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);

    const exist = async (userData) => {
        try {
            const storedUsersList = await AsyncStorage.getItem('usersList');

            if (!storedUsersList) {
                return false;
            }

            const userList = JSON.parse(storedUsersList);
            const userExists = userList.some(
                (existingUser) => existingUser.profile.phone === userData.profile.phone
            );

            return userExists;
        } catch (err) {
            console.error('Error checking if user exists:', err);
            return false;
        }
    };

    const logIn = async (userData) => {
        try {
            setError(null);
            const userExists = usersList.find(
                (existingUser) => existingUser.profile.phone === userData.profile.phone
            );

            if (userExists) {
                // User already exists - load their data
                setUser(userExists);
                await AsyncStorage.setItem('user', JSON.stringify(userExists));
            } else {
                // New user - add to users list
                const updatedUsersList = [...usersList, userData];
                setUsersList(updatedUsersList);
                setUser(userData);

                await AsyncStorage.setItem('usersList', JSON.stringify(updatedUsersList));
                await AsyncStorage.setItem('user', JSON.stringify(userData));
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Login failed. Please try again.');
        }
    };

    const logOut = async () => {
        try {
            setError(null);
            setUser(null);
            await AsyncStorage.removeItem('user');
        } catch (err) {
            console.error('Error during logout:', err);
            setError('Logout failed');
        }
    };

    const addToWishlist = async (item) => {
        if (!user) return;

        try {
            setError(null);
            const wishlist = user.wishlist || [];
            const itemExists = wishlist.some((wishItem) => wishItem.id === item.id);

            if (!itemExists) {
                const updatedUser = {
                    ...user,
                    wishlist: [...wishlist, { ...item, wish: true }],
                };

                setUser(updatedUser);
                await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

                // Also update users list
                const updatedUsersList = usersList.map((u) =>
                    u.profile.phone === user.profile.phone ? updatedUser : u
                );
                setUsersList(updatedUsersList);
                await AsyncStorage.setItem('usersList', JSON.stringify(updatedUsersList));
            }
        } catch (err) {
            console.error('Error adding to wishlist:', err);
            setError('Failed to add to wishlist');
        }
    };

    const removeFromWishlist = async (itemId) => {
        if (!user) return;

        try {
            setError(null);
            const updatedUser = {
                ...user,
                wishlist: user.wishlist.filter((item) => item.id !== itemId),
            };

            setUser(updatedUser);
            await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

            // Also update users list
            const updatedUsersList = usersList.map((u) =>
                u.profile.phone === user.profile.phone ? updatedUser : u
            );
            setUsersList(updatedUsersList);
            await AsyncStorage.setItem('usersList', JSON.stringify(updatedUsersList));
        } catch (err) {
            console.error('Error removing from wishlist:', err);
            setError('Failed to remove from wishlist');
        }
    };

    const addToRecentVisits = async (item) => {
        if (!user) return;

        try {
            setError(null);
            const recentVisits = user.recentVisits || [];
            const itemExists = recentVisits.some((visit) => visit.id === item.id);

            if (!itemExists) {
                const itemWithTimestamp = {
                    ...item,
                    dateAdded: new Date().toISOString(),
                };

                const updatedUser = {
                    ...user,
                    recentVisits: [itemWithTimestamp, ...recentVisits],
                };

                setUser(updatedUser);
                await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
            }
        } catch (err) {
            console.error('Error adding to recent visits:', err);
            setError('Failed to add to recent visits');
        }
    };

    // Memoize context value to avoid unnecessary re-renders
    const contextValue = useMemo(
        () => ({
            user,
            usersList,
            loading,
            error,
            logIn,
            logOut,
            addToWishlist,
            removeFromWishlist,
            addToRecentVisits,
            exist,
        }),
        [user, usersList, loading, error]
    );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
