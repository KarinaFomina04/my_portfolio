import React from "react";
import s from './Header.module.scss'
import Nav from "../Nav/Nav";

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    )
}

export default Header;