import { Badge, Nav } from "react-bootstrap";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { useRef } from "react";
import { Item } from "src/assets/nav/_nav";
import { Link, useLocation } from "react-router-dom";
import { getIcon as t } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
interface IProps {
  item: Item;
}
function NavItem({ item }: IProps) {
  const location = useLocation();
  const icon = t(item.iconName);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleClick = () => {
    checkExpirationToken();
    if (linkRef.current) linkRef.current.click();
  };
  const { checkExpirationToken } = useAuth();
  return (
    <Nav.Item
      className={`${s.nav__content_item} ${
        location.pathname === item.to ? s.active : ""
      }`}
      onClick={handleClick}>
      <div className="">
        {icon && <div className={s.icon}>{icon}</div>}
        <Link
          to={(item.to && item.to) || ""}
          className={s.title}
          ref={linkRef}
          onClick={handleClick}>
          {item.name}
        </Link>
        <Badge bg={item.badge?.color} className={s.badge}>
          {item.badge?.nameBadge}
        </Badge>
      </div>
    </Nav.Item>
  );
}

export default NavItem;
