import { Item } from "@src/assets/nav/_nav";
import { Nav } from "react-bootstrap";
import s from 'src/assets/scss/layout/MainLayout.module.scss';
function NavTitle({ item }: { item: Item }) {
    return (
        <Nav.Item
            className={s.nav__content_title}
        >
            <h5 className={s.title}>{item.name}</h5>
        </Nav.Item>
    );
}

export default NavTitle;