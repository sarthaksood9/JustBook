// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createContext, useState } from "react";

// export const UserContext = createContext();

// export const userProvider = ({ children }) => {
//     const [user, setUser] = useState("");

//     useEffect(() => {
//         const loadUserData = async () => {
//             const storedUser = await AsyncStorage.getItem('user');
//             if (storedUser) {
//                 setUser(JSON.parse(storedUser));
//             }
//         };

//         loadUserData();
//     }, []);

//     const logIn = async (userData) => {
//         setUser(userData);
//         await AsyncStorage.setItem('user', JSON.stringify(userData));
//     };

//     const logOut = async () => {
//         setUser(null);
//         await AsyncStorage.removeItem('user');
//         await AsyncStorage.removeItem('cart');
//     };

//     return (
//         // Provide user state and authentication functions to children components
//         <UserContext.Provider value={{ user, logIn, logOut }}>
//             {children}
//         </UserContext.Provider>
//     );
// }


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

    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};
