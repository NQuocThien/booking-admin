import CIcon from '@coreui/icons-react';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import SimpleBar from 'simplebar-react'
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
                <Nav>
                    <SideBarNav items={items} />
                </Nav>
            </Row>
        </div>

    )


}

export default MainNavigation;