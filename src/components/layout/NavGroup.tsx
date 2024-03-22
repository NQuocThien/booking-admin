import { Accordion } from "react-bootstrap";
// Import tất cả biểu tượng
import s from "src/assets/scss/layout/MainLayout.module.scss";
import NavItem from "./NavItem";
import { Item } from "src/assets/nav/_nav";
import { getIcon } from "src/utils/contain";
function NavGroup({ items }: { items: Item }) {
  const icon = getIcon(items.iconName);
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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}

export default NavGroup;
