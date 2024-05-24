import React, {useContext} from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();


export const ThemeProvider = ({children}) => {

}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}
export const useThemeUpdateContext = () => {
    return useContext(ThemeUpdateContext);
}