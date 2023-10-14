import { Row, Col, Dropdown, Image } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import s from 'src/assets/scss/layout/MainLayout.module.scss';
function MainHeader({ setNav }: { setNav: () => void }) {
    return (
        <Row className={s.header__top}>
            <Col
                xl={2} lg={2} md={2} className={s.header__top_menu} >
                <AiOutlineMenu
                    onClick={() => setNav()}
                />
            </Col>
            <Col
                xl={{ span: 2, offset: 8 }} lg={{ span: 2, offset: 8 }} md={{ span: 2, offset: 8 }}
                className={s.header__top_infor}
            >
                <Dropdown >
                    <Dropdown.Toggle variant="infor">
                        <Image
                            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/353850980_1960093747700292_5690321343157348782_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oPs7uc-c0hgAX_UtgRp&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBybiZwaoXwzxYCG-gXYyEvbaRbwsEv27RQGgOj8wpngQ&oe=652D534C"
                            className={s.avatar}
                            roundedCircle
                        />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <h4>Nguyễn Quốc Thiện</h4>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Thông tin tài khoản
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Đăng xuất
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    );
}

export default MainHeader;