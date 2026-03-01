import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FiHome,
    FiBriefcase,
    FiUser,
    FiMail,
    FiFolder
} from "react-icons/fi";

import {
    AiFillHome,
} from "react-icons/ai";

import {
    HiBriefcase,
    HiUser,
    HiMail,
    HiFolder
} from "react-icons/hi";

import "./BottomNav.css";

const navItems = [
    {
        path: "/",
        label: "Home",
        icon: <FiHome />,
        activeIcon: <AiFillHome />
    },
    {
        path: "/about",
        label: "About",
        icon: <FiUser />,
        activeIcon: <HiUser />
    },
    {
        path: "/experience",
        label: "Experience",
        icon: <FiBriefcase />,
        activeIcon: <HiBriefcase />
    },
    {
        path: "/projects",
        label: "Projects",
        icon: <FiFolder />,
        activeIcon: <HiFolder />
    },
    {
        path: "/contact",
        label: "Contact",
        icon: <FiMail />,
        activeIcon: <HiMail />
    }
];

const BottomNav = () => {
    const location = useLocation();

    const itemWidth = 100 / navItems.length;

    const activeIndex = navItems.findIndex(
        item => item.path === location.pathname
    );

    return (
        <nav className="bottom-nav">
            <div
                className="active-indicator"
                style={{
                    width: `${itemWidth}%`,
                    transform: `translateX(${activeIndex * 100}%)`
                }}
            />

            {navItems.map((item, index) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className="nav-item"
                >
                    {({ isActive }) => (
                        <>
                            <div className="nav-icon">
                                {isActive ? item.activeIcon : item.icon}
                            </div>
                            <span className="nav-label">{item.label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;