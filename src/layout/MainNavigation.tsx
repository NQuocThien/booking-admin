import { Row, Col, Image, Nav } from 'react-bootstrap'
import s from 'src/assets/scss/layout/MainLayout.module.scss'
import items from 'src/assets/nav/_nav';
import SideBarNav from 'src/components/layout/SideBarNav';
function MainNavigation() {

    return (
        <div>
            <Row className={s.nav__top}>
                <Image src={'/logo.png'} height={64} />
            </Row>
            <Row
                className={s.nav__content}
            >
                <Nav variant="pills">
                    <SideBarNav items={items} />
                </Nav>
            </Row>
        </div>

    )


}

export default MainNavigation;