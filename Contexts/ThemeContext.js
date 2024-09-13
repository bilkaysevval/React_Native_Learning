import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeHandler = ({ children }) => {
    const systemTheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
                setIsDarkMode(savedTheme === 'dark');
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        await AsyncStorage.setItem('theme', newTheme);
    };


    const theme = {
        isDarkMode,
        colors: {
            background: isDarkMode ? '#000' : '#fff',
            text: isDarkMode ? '#fff' : '#000',
            buttonBackground: isDarkMode ? '#00008B' : '#ADD8E6',
        },
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
