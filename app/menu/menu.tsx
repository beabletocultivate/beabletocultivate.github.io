import { useState } from "react";
import { Link, useLocation } from 'react-router';

import './menu.css';

import menu from '../resources/menu.png';
import menuClose from '../resources/menu-close.png';
import strings from '../resources/strings';

const menuItems = [
    { name: strings.homePage, link: "/", en: "HOME", jp: "トップ" },
    { name: strings.program, link: "/program", en: "TIMETABLE", jp: "タイムテーブル" },
    { name: strings.information, link: "/information", en: "INFORMATION", jp: "開催概要" },
    { name: strings.about, link: "/about", en: "ABOUT", jp: "耕云について" },
];

function MenuItems(props: { open: boolean, closeMenu: () => void }) {
    const location = useLocation();

    return (
        <div className={`fixed inset-0 z-50 bg-background-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:gap-10 ${props.open ? "fade-in" : "fade-out"}`}>
            {/* Festival Watermark in Menu */}
            <div className="absolute top-10 text-center">
                <span className="text-xs uppercase tracking-widest text-primary font-maru font-bold">
                    ✦ {strings.eventFullName} // {strings.eventJpName} ✦
                </span>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 items-center text-center">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <Link 
                            to={item.link} 
                            key={index} 
                            onClick={props.closeMenu}
                            className="group flex flex-col items-center gap-1 transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="text-xs tracking-[0.2em] text-primary-variant/75 font-maru font-medium">
                                {item.en} // {item.jp}
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

            <div className="absolute bottom-10 text-xs text-text-subtle font-maru">
                {strings.cultivateInstagram} • {strings.eventTagline}
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
            <div className="fixed top-6 left-6 z-50">
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