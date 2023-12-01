import { Accordion } from "react-bootstrap";
// Import tất cả biểu tượng
import s from "src/assets/scss/layout/MainLayout.module.scss";
import NavItem from "./NavItem";
import { Item } from "src/assets/nav/_nav";
import React from "react";
import { getIcon } from "src/utils/contain";

// Đối tượng chứa tất cả các biểu tượng
// import * as ICON from "react-icons/md";
// import * as ICON2 from "react-icons/gi";
// function getIcon(iconName: string | undefined) {
//   const iconTemp: any = ICON;
//   const iconTemp2: any = ICON2;
//   if (iconName)
//     if (iconTemp[iconName]) {
//       return React.createElement(iconTemp[iconName]);
//     } else {
//       if (iconTemp2[iconName]) return React.createElement(iconTemp[iconName]);
//       else return null;
//     }
//   else return null;
// }
function NavGroup({ items }: { items: Item }) {
  const icon = getIcon(items.iconName);
  //   console.log("test icon g: ", icon);
  return (
    <>
      {!!items.items && (
        <Accordion className={s.nav__content_group} flush>
          <Accordion.Item eventKey="1" className={s.items}>
            <Accordion.Header className={s.title}>
              {icon && <div className={s.icon}>{icon}</div>}

              {items.name}
            </Accordion.Header>
            <Accordion.Body className={s.group}>
              {items.items?.map((item, index) => {
                return <NavItem key={index} item={item} />;
              })}
              {/* <NavItem
                                item={items.items[0]}
                            /> */}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}

export default NavGroup;
