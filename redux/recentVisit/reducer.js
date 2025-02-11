
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TO_RECENT, LOAD_INITIAL_RECENTS } from './actionTypes';
import { useState } from 'react';

// let arr = [];

const loadInitialState = async () => {
    const storedItems = await AsyncStorage.getItem('recentItems');
    let arr = JSON.parse(storedItems);
    return arr
};


const saveRecentItemsToStorage = async (item) => {
    await AsyncStorage.setItem('recentItems', JSON.stringify(item));
};


const initialState = {
    items: [],
};


export const recentVisitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_RECENT:
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                return state;
            }

            const updatedItems = [...state.items, action.payload];
            saveRecentItemsToStorage(updatedItems);

            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case LOAD_INITIAL_RECENTS:
            
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};


// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ADD_TO_RECENT } from './actionTypes';

// const saveRecentItemsToStorage = async (items) => {
//     try {
//         await AsyncStorage.setItem('recentItems', JSON.stringify(items));
//     } catch (error) {
//         console.error('Error saving recent items to storage', error);
//     }
// };

// // Function to load recent items from AsyncStorage
// const loadRecentItemsFromStorage = async () => {
//     try {
//         const storedItems = await AsyncStorage.getItem('recentItems');
//         return storedItems ? JSON.parse(storedItems) : [];
//     } catch (error) {
//         console.error('Error loading recent items from storage', error);
//         return [];
//     }
// };

// export const loadInitialState = async () => {
//     const recentItems = await loadRecentItemsFromStorage();
//     return {
//         recentItems,
//     };
// };


// const xx = loadInitialState();


// const initialState = {
//     items:  []
// };

// // Function to save recent items to AsyncStorage


// export const recentVisitReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_RECENT:
//             const existingItem = state.items.find(item => item.id === action.payload.id);

//             if (existingItem) {
//                 return state;
//             }

//             const updatedItems = [...state.items, action.payload];

//             // Save the updated items list to AsyncStorage
//             saveRecentItemsToStorage(updatedItems);

//             return {
//                 ...state,
//                 items: updatedItems,
//             };

//         default:
//             return state;
//     }
// };

// Load the initial state from AsyncStorage when your app starts
