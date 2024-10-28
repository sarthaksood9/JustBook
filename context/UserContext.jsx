
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        user: {
            name: "Sarthak",
            address: "",
            email: "",
            phone: "1234567890",
            role: "user"
        },
        data: {
            wishlist: [{ "club": "Celebrity Lounge", "features": [[Object], [Object]], "hostedBy": "Doja Cat", "id": 1, "img": "../assets/Images/AirBnb/img1.jpg", "imgUrl": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1440&im_q=highq", "name": "Join a living room session with Doja", "place": "Coming October", "price": "Hosted by Doja Ca", "wish": false }],
            recent: [{ "club": "Celebrity Lounge", "dateAdded": "2024-10-03T05:55:54.086Z", "features": [[Object], [Object]], "hostedBy": "Doja Cat", "id": 1, "img": "../assets/Images/AirBnb/img1.jpg", "imgUrl": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1440&im_q=highq", "name": "Join a living room session with Doja", "place": "Coming October", "price": "Hosted by Doja Ca", "wish": false }]
        }
    });
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const loadUserData = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            // console.log(storedUser);
            const storedUsersList = await AsyncStorage.getItem('usersList');

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            if (storedUsersList) {
                setUsersList(JSON.parse(storedUsersList));
            }
        };

        loadUserData();
    }, []);
    

    const exist = async (userData) => {
        // console.log(existingUser.user.phone,userData.phone);

        let storedUsersList = await AsyncStorage.getItem('usersList');
        const ss = JSON.parse(storedUsersList);


        const userExists = ss.some(existingUser => existingUser.user.phone == userData.phone);


        if (userExists) {
            return true
        }
        return false;
    }

    const logIn = async (userData) => {
        const userExists = usersList.find(existingUser => existingUser.user.phone === userData.user.phone);
        if (userExists) {
            const updatedUser = {
                user: {
                    name: userExists.user.name,
                    address: userExists.user.address,
                    email: userExists.user.email,
                    phone: userExists.user.phone,
                    role: userExists.user.role
                },
                data: {
                    wishlist: userExists.data.wishlist,
                    recent: userExists.data.recent
                }
            };

            setUser(updatedUser);

            await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
            

        }
        else {
            const updatedUsersList = [...usersList, userData];
            setUsersList(updatedUsersList);
            await AsyncStorage.setItem('usersList', JSON.stringify(updatedUsersList));
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        }

    };

    const logOut = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('cart');
    };

    const addToWishlist = async (item) => {
        if (user) {
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

                await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
                setUser(updatedUser);
            }
        }
    };

    return (
        <UserContext.Provider value={{ user, usersList, logIn, logOut, addToWishlist, exist }}>
            {children}
        </UserContext.Provider>
    );
};
