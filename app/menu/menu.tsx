import { useState } from "react";
import { Link } from 'react-router';

import './menu.css';

import menu from '../resources/menu.png';
import menuClose from '../resources/menu-close.png';
import strings from '../resources/strings';

const menuItems = [
    { name: strings.homePage, link: "/" },
    { name: strings.program, link: "/program" },
    { name: strings.information, link: "/information" },
    { name: strings.slash, link: "/slash" },
]

function MenuItems(props: { open: boolean, closeMenu: () => void }) {
    return (
        <div className={`fixed top-0 left-0 w-svw h-svh bg-menu-background flex flex-col gap-12 items-center justify-center ${props.open ? "fade-in" : "fade-out"}`}>
            {
                menuItems.map((item, index) => (
                    <Link to={item.link} key={index} onClick={props.closeMenu}>
                        <h1 className="text-5xl text-white cursor-pointer hover:underline">
                            {item.name}
                        </h1>
                    </Link>
                ))
            }
        </div>
    );
}

export default function Menu(props: { style?: 'light' | 'dark' }) {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!open);
    }

    return (
        <>
            <MenuItems open={open} closeMenu={() => { setOpen(false) }} />
            <div className="fixed top-8 left-8 w-12 h-12">
                <img
                    src={open ? menuClose : menu}
                    alt="Menu Toggle"
                    className={`
                        w-full h-full cursor-pointer
                        transition-transform duration-500
                        ${open ? "spin-open" : "spin-close"}
                        ${(!open && props.style === 'dark') ? 'icon-dark' : ''}
                        `}
                    onClick={toggleMenu}
                />
            </div>
        </>
    );
}