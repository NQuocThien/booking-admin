import { Row, Col, Image, Nav } from "react-bootstrap";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Item, _navAdmin, _navClinic, _navDoctor } from "src/assets/nav/_nav";
import SideBarNav from "src/components/layout/SideBarNav";
import { useAuth } from "src/context/AuthContext";
function MainNavigation() {
  const { isLoginIn, userInfor } = useAuth();
  let items: Item[] = [];
  if (isLoginIn) {
    const roles = userInfor?.roles;
    if (userInfor?.roles?.includes("admin")) items = _navAdmin;
    else {
      if (roles?.includes("clinic")) items = _navClinic;
      else if (roles?.includes("doctor")) items = _navDoctor;
    }
  }
  return (
    <div>
      <Row className={s.nav__top}>
        <Image src={"/logo.png"} height={64} />
      </Row>
      <Row className={s.nav__content}>
        <Nav variant="pills">
          <SideBarNav items={items} />
        </Nav>
      </Row>
    </div>
  );
}

export default MainNavigation;
