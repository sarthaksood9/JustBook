import { useState, useEffect } from 'react';


const useDebounce = (func, delay, [dependencies],setLoading) => {
    useEffect(() => {
        const debounc = setTimeout(() => {
            func();
            setLoading(true)
        }, delay);

        return () => {
            clearTimeout(debounc);
            setLoading(false);
        };
    }, [...dependencies, delay]);
};

export default useDebounce;