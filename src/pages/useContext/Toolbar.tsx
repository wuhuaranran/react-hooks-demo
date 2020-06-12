import React, { useContext } from "react";
import { ThemeContext } from "./index";

function Toolbar(props: any) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme: any = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}

export default Toolbar;