import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN } from "./actionTypes";

export const setUser = (userData) => {
    return async (dispatch) => {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        dispatch({ type: 'SET_USER', payload: userData });
    };
};

export const clearUser = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('user');
        dispatch({ type: 'CLEAR_USER' });
    };
};

export const loadUser = () => {
    return async (dispatch) => {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
            dispatch({ type: 'SET_USER', payload: JSON.parse(storedUser) });
        }
    };
};



