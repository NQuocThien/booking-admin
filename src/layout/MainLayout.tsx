import { Container, Row, Col } from 'react-bootstrap';
import s from 'src/assets/scss/layout/MainLayout.module.scss'
import MainHeader from './MainHeader';
import HeaderBottom from './BottomHeader';
import MainNavigation from './MainNavigation';
function MainLayout() {
    return (
        <Container fluid>
            <Row
                className='no-gutters'
            >
                <Col
                    xl={2} lg={2} md={2}
                    className={s.nav}
                >
                    <MainNavigation />
                </Col>
                <Col
                    xl={10} lg={10} md={10}
                    className={s.body}
                >
                    <Row className={s.header}>
                        <MainHeader />
                    </Row>
                    <Row>
                        <h1>content</h1>
                    </Row>
                    <Row>
                        <footer>
                            footer
                        </footer>
                    </Row>
                </Col>

            </Row>

        </Container>);
}

export default MainLayout;