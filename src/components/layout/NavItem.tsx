import { Badge, Nav } from "react-bootstrap";
import * as MaterialDesign from "react-icons/md";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import React from "react";
import { Item } from "src/assets/nav/_nav";
import { Link, useLocation } from "react-router-dom";
import { getIcon2 as t } from "src/utils/contain";

interface IProps {
  item: Item;
}

// Đối tượng chứa tất cả các biểu tượng
// function getIcon(iconName: string | undefined) {
//   const listIcon: any = MaterialDesign;
//   if (iconName)
//     if (listIcon[iconName]) {
//       return React.createElement(listIcon[iconName]);
//     } else {
//       return null;
//     }
//   else return null;
// }
function NavItem({ item }: IProps) {
  const location = useLocation();
  const icon = t(item.iconName);
  // console.log("test icon i: ", icon);
  return (
    <Nav.Item
      // className={s.nav__content_item}
      className={`${s.nav__content_item} ${
        location.pathname === item.to ? s.active : ""
      }`}>
      {icon && <div className={s.icon}>{icon}</div>}
      <Link to={(item.to && item.to) || ""} className={s.title}>
        {item.name}
      </Link>
      <Badge bg={item.badge?.color} className={s.badge}>
        {item.badge?.nameBadge}
      </Badge>
    </Nav.Item>
  );
}

export default NavItem;
