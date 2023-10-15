import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import s from 'src/assets/scss/layout/MainLayout.module.scss'
import MainHeader from './MainHeader';
// import HeaderBottom from './BottomHeader';
import MainNavigation from './MainNavigation';
import MainContent from './MainContent';
import { useGetSettingQuery } from 'src/graphql/webbooking-service.generated';
import ToastsPcn from 'src/components/toasts/toasts';

function MainLayout() {
    const [showed, setShowed] = useState<boolean>(true);
    const changedShowed = () => {
        if (showed)
            setShowed(false)
        else
            setShowed(true)
    }
    const { refetch: refetchData, data: dataSetting } = useGetSettingQuery({
        fetchPolicy: 'no-cache'
    })
    // console.group('test data: ')
    // console.log(dataSetting)
    // console.groupEnd()
    return (
        <Container fluid className={s.App}>
            <ToastsPcn />
            <Row
                className='no-gutters'
            >
                {/* // navigation */}
                {showed && (
                    <Col
                        xl={2} lg={2} md={2}
                        className={s.nav}
                    >
                        <MainNavigation />
                    </Col>
                )}
                {/* // content */}
                {showed && (
                    <Col
                        xl={10} lg={10} md={10}
                        className={s.body}
                    >
                        {/* // header */}
                        <Row className={s.header}>
                            <MainHeader
                                setNav={changedShowed}
                            />
                        </Row>
                        {/* // main */}
                        <Row className={s.main}>
                            <MainContent />
                        </Row>
                        {/* //footer */}
                        <Row className={s.footer}>
                            <footer>
                                <div className={s.footer__conent}> &copy; Nguyễn Quốc Thiện - DTH205987 - DH21TH2</div>
                            </footer>
                        </Row>
                    </Col>
                )}
                {!showed && (

                    <Col
                        xl={12} lg={12} md={12}
                        className={s.body}
                    >
                        {/* // header */}
                        <Row className={s.header}>
                            <MainHeader
                                setNav={changedShowed}
                            />
                        </Row>
                        {/* // main */}
                        <Row className={s.main}>
                            <MainContent />
                        </Row>
                        {/* //footer */}
                        <Row className={s.footer}>
                            <footer>
                                <div className={s.footer__conent}> &copy; Nguyễn Quốc Thiện - DTH205987 - DH21TH2</div>
                            </footer>
                        </Row>
                    </Col>
                )}

            </Row>

        </Container>);
}

export default MainLayout;