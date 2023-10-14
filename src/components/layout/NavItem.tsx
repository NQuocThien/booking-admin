import { Badge, Nav } from "react-bootstrap";
import * as MaterialDesign from "react-icons/md";
import s from 'src/assets/scss/layout/MainLayout.module.scss';
import React from "react";
import { Item } from "@src/assets/nav/_nav";
import { Link } from "react-router-dom";
// Đối tượng chứa tất cả các biểu tượng
function getIcon(iconName: string | undefined) {
    const listIcon: any = MaterialDesign
    if (iconName)
        if (listIcon[iconName]) {
            return React.createElement(listIcon[iconName]);
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
            <Link
                to={item.to && item.to || ''}
                className={s.title}
            >
                {item.name}
            </Link>
            <Badge
                bg={item.badge?.color}
                className={s.badge}
            >{item.badge?.nameBadge}</Badge>
        </Nav.Item>
    );
}

export default NavItem;