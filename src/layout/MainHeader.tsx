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
        {/* // thông tin user */}
        <Dropdown>
          <Dropdown.Toggle variant="infor" className={s.dropdown}>
            <Image
              src={userInfor?.linkImage?.url ? userInfor.linkImage.url : ""}
              className={s.avatar}
              roundedCircle
            />
            <div className={s.infor}>
              <h6>{userInfor?.username}</h6>
              <p>{userInfor?.roles}</p>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <h5>{userInfor?.username}</h5>
              {/* <p>{userInfor?.email}</p> */}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to={"/admin-page/me"} className={s.header__top_infor_item}>
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
