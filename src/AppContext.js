import { createContext } from 'react';

export const defaultObject = {
    isUserLoggedIn: false,
    toggleLoggedIn: () => { },
};

export const AppContext = createContext(defaultObject);