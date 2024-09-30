import React from 'react'
import { createContext, useState } from 'react'


export const Themecontext = createContext();

const ThemecontextProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    return (
        <Themecontext.Provider value={{ setTheme, theme }}>
            {children}
        </Themecontext.Provider>
    )
}
export default ThemecontextProvider;