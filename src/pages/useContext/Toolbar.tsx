import React, { useContext } from "react";
import { ThemeContext } from "./index";

function Toolbar() {
    return (
        <div>
            <p>这个组件可以切换主题</p>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme: any = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            这个按钮的主题是：{theme.name}
        </button>
    );
}

export default Toolbar;