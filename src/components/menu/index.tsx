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
        path: '/layoutEffect', title: "useLayoutEffect demo"
    }];
    const [current, setCurrent] = useState(0);
    const changeMenu = (index: number) => {
        setCurrent(index);
    }
    return (
        <ul className="menu">
            {menuList.map((menu: any, index: number) =>
                <li
                    key={index}
                    onClick={() => { changeMenu(index) }}
                    className={index === current ? 'current' : ''}
                >
                    <Link to={menu.path}>
                        {menu.title}
                    </Link>
                </li>)}
        </ul>
    )
}

export default Menu;