import { Row, Col, Dropdown, Image } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { useAuth } from "src/context/AuthContext";
function MainHeader({ setNav }: { setNav: () => void }) {
  const { userInfor, logout, isLoginIn } = useAuth();
  // console.log('header', isLoginIn)
  return (
    <Row className={s.header__top}>
      <Col xl={2} lg={2} md={2} className={s.header__top_menu}>
        <AiOutlineMenu onClick={() => setNav()} />
      </Col>
      <Col
        xl={{ span: 2, offset: 8 }}
        lg={{ span: 2, offset: 8 }}
        md={{ span: 2, offset: 8 }}
        className={s.header__top_infor}>
        <Dropdown>
          <Dropdown.Toggle variant="infor">
            <Image
              src={userInfor?.linkImage?.url ? userInfor.linkImage.url : ""}
              className={s.avatar}
              roundedCircle
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <h4>{userInfor?.username}</h4>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to={"/me"} className={s.header__top_infor_item}>
                Thông tin tài khoản
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                logout();
              }}
              className={s.header__top_infor_item}>
              Đăng xuất
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default MainHeader;
