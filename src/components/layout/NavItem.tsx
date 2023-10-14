import { Badge, Nav } from "react-bootstrap";
import { RiDashboard2Line } from "react-icons/ri";
import { FaBeer, FaCoffee, FaMusic, FaCar, FaHeart } from 'react-icons/fa'; // Import tất cả biểu tượng
import { IconType } from "react-icons/lib";
import s from 'src/assets/scss/layout/MainLayout.module.scss';
import React from "react";
import { Item } from "@src/assets/nav/_nav";

// Đối tượng chứa tất cả các biểu tượng
const iconComponents: { [key: string]: IconType } = {
    FaBeer: FaBeer,
    FaCoffee: FaCoffee,
    FaMusic: FaMusic,
    FaCar: FaCar,
    FaHeart: FaHeart,
    RiDashboard2Line,
};

function getIcon(iconName: string | undefined) {
    if (iconName)
        if (iconComponents[iconName]) {
            return React.createElement(iconComponents[iconName]);
        } else {
            return null;
        }
    else
        return null
}
function NavItem({ item }: { item: Item }) {
    const icon = getIcon(item.iconName)
    return (
        <Nav.Item
            className={s.nav__content_item}
        >
            {icon && <div
                className={s.icon}
            >
                {icon}
            </div>
            }
            <div className={s.title}>{item.name}</div>
            <Badge
                bg={item.badge?.color}
                className={s.badge}
            >{item.badge?.nameBadge}</Badge>
        </Nav.Item>
    );
}

export default NavItem;