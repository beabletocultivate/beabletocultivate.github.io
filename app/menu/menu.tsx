import { useState } from "react";
import { Link, useLocation } from 'react-router';

import './menu.css';

import menu from '../resources/menu.png';
import menuClose from '../resources/menu-close.png';
import strings from '../resources/strings';

const menuItems = [
    { name: strings.homePage, link: "/", en: "HOME" },
    { name: strings.program, link: "/program", en: "TIMETABLE" },
    { name: strings.information, link: "/information", en: "INFORMATION" },
    { name: strings.about, link: "/about", en: "ABOUT" },
];

function MenuItems(props: { open: boolean, closeMenu: () => void }) {
    const location = useLocation();

    return (
        <div className={`fixed inset-0 z-[60] bg-background-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center select-none ${props.open ? "fade-in" : "fade-out"}`}>
            {/* Top Watermark */}
            <div className="absolute top-8 md:top-10 left-0 right-0 text-center pointer-events-none px-16">
                <span className="text-xs uppercase tracking-[0.25em] text-primary-variant font-maru font-bold">
                    ✦ {strings.eventFullName} ✦
                </span>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 items-center text-center my-auto">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <Link 
                            to={item.link} 
                            key={index} 
                            onClick={props.closeMenu}
                            className="group flex flex-col items-center gap-1 transition-all duration-300 transform hover:scale-105"
                        >
                            <span className={`text-[11px] md:text-xs font-mono tracking-[0.25em] uppercase transition-colors ${
                                isActive ? "text-primary-variant font-bold" : "text-text-subtle group-hover:text-primary-variant"
                            }`}>
                                {item.en}
                            </span>
                            <h1 className={`text-4xl md:text-5xl font-maru font-bold tracking-wide transition-all duration-300 ${
                                isActive 
                                    ? "text-gradient-sunset drop-shadow-lg scale-105" 
                                    : "text-white/80 group-hover:text-white group-hover:drop-shadow-[0_0_16px_rgba(255,110,84,0.6)]"
                            }`}>
                                {item.name}
                            </h1>
                        </Link>
                    );
                })}
            </div>

            <div className="absolute bottom-8 md:bottom-10 text-xs text-text-subtle font-maru text-center px-4">
                <p>{strings.eventTagline}</p>
            </div>
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
            <MenuItems open={open} closeMenu={() => { setOpen(false); }} />
            <div className={`fixed top-6 left-6 ${open ? 'z-[60]' : 'z-40'}`}>
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                >
                    <img
                        src={open ? menuClose : menu}
                        alt="Menu Toggle"
                        className={`
                            w-6 h-6 object-contain
                            transition-transform duration-300
                            ${open ? "spin-open" : "spin-close"}
                            filter brightness-200
                        `}
                    />
                </button>
            </div>
        </>
    );
}