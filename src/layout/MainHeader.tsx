import { Row, Col, Dropdown, Image, Form } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { useAuth } from "src/context/AuthContext";
import { GetRole } from "src/utils/enum-value";
import { getEnumValueRole } from "src/utils/getData";
function MainHeader({ setNav }: { setNav: () => void }) {
  const { userInfor, logout, isLoginIn, currRole, handleChangeCurrRole } =
    useAuth();
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
              src={userInfor?.avatar?.url ? userInfor.avatar.url : ""}
              className={s.avatar}
              roundedCircle
            />
            <div className={s.infor}>
              <h6>{userInfor?.username}</h6>
              <p>{currRole}</p>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <h5>{userInfor?.username}</h5>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              as={Link}
              to={"/me"}
              className={s.header__top_infor_item}>
              Thông tin tài khoản
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                logout();
              }}
              className={s.header__top_infor_item}>
              Đăng xuất
            </Dropdown.Item>
            {userInfor?.roles && userInfor?.roles?.length > 1 && (
              <>
                <Dropdown.Divider />
                <Form>
                  <p className="mx-3">Đổi vai trò:</p>
                  <Form.Select
                    onChange={(e) => {
                      if (e.currentTarget.value)
                        handleChangeCurrRole(e.currentTarget.value as GetRole);
                    }}
                    value={currRole}>
                    {userInfor.roles.map((role, i) => (
                      <option key={i} value={getEnumValueRole(role)}>
                        {role}
                      </option>
                    ))}
                  </Form.Select>
                </Form>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default MainHeader;
