
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure this import is correct

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        };

        loadUserData();
    }, []);

    const logIn = async (userData) => {
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
    };

    const logOut = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('cart');
    };

    const addToWishlist = async (item) => {
        if (user) {
            // Check if item already exists in wishlist to prevent duplicates
            const existingWishlist = user.data?.wishlist || [];
            const itemExists = existingWishlist.some((wishlistItem) => wishlistItem.id === item.id);

            if (!itemExists) {
                const updatedWishlist = [...existingWishlist, item];
                const updatedUser = {
                    ...user,
                    data: {
                        ...user.data,
                        wishlist: updatedWishlist,
                    },
                };

                setUser(updatedUser);
                await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
            }
        }
    };

    return (
        <UserContext.Provider value={{ user, logIn, logOut,addToWishlist }}>
            {children}
        </UserContext.Provider>
    );
};
