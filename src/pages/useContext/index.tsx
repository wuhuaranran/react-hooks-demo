import React, { createContext, useState } from "react";
import Toolbar from "./Toolbar";

const themes = [
    {
        name: "light",
        foreground: "#000000",
        background: "#eeeeee"
    },
    {
        name: "dark",
        foreground: "#ffffff",
        background: "#222222"
    }
];

export const ThemeContext = createContext(themes[0]);

function ContextDemo() {

    const [currentTheme, setCurrentTheme] = useState(0);
    const changeTheme = () => {
        setCurrentTheme(c => Number(!c))
    }
    return (
        <ThemeContext.Provider value={themes[currentTheme]}>
            <Toolbar />
            <button onClick={changeTheme}>换一个</button>
        </ThemeContext.Provider>
    );
}

export default ContextDemo;