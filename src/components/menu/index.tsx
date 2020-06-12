import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Menu = () => {
    const menuList = [{
        path: '/', title: "basic"
    }, {
        path: '/state', title: "useState demo"
    }, {
        path: '/effect', title: "useEffect demo"
    }, {
        path: '/context', title: "useContext demo"
    }, {
        path: '/reducer', title: "useReducer demo"
    }, {
        path: '/callback', title: "useCallback demo"
    }, {
        path: '/ref', title: "useRef demo"
    }, {
        path: '/memo', title: "useMemo demo"
    }, {
        path: '/imperativeHandleDemo', title: "useImperativeHandle demo"
    }];
    return (
        <ul className="menu">
            {menuList.map(menu => <li key={menu.path}><Link to={menu.path}>{menu.title}</Link></li>)}
        </ul>
    )
}

export default Menu;