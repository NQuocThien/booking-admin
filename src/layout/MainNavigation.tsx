import { Row, Image, Nav } from "react-bootstrap";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Item, _navAdmin, _navClinic, _navDoctor } from "src/assets/nav/_nav";
import SideBarNav from "src/components/layout/SideBarNav";
import { useAuth } from "src/context/AuthContext";
import { GetRole } from "src/utils/enum-value";
import { useEffect, useLayoutEffect, useState } from "react";
function MainNavigation() {
  const { isLoginIn, userInfor, currRole } = useAuth();
  // let items: Item[] = [];
  const [items, setItems] = useState<Item[]>([]);
  // console.log('Routing: '+ )
  useLayoutEffect(() => {
    const roles = userInfor?.roles;
    if (currRole === GetRole.Admin) setItems(_navAdmin);
    else {
      if (currRole === GetRole.Clinic) setItems(_navClinic);
      else if (currRole === GetRole.Doctor) setItems(_navDoctor);
      else if (currRole === GetRole.Staff) setItems(_navClinic);
    }
    // console.log("--> Test currRole:", currRole);
  }, [isLoginIn, currRole]);

  return (
    <div>
      <Row className={s.nav__top}>
        <Image className={s.nav__top_logo} src={"/imgs/logo/Logo.png"} />
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
