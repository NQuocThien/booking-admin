import { Row, Image, Nav } from "react-bootstrap";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import {
  Item,
  _navAdmin,
  _navClinic,
  _navDoctor,
  _navStaffGeneral,
  _navStaffManager,
  _navStaffManagerPending,
  _navStaffPackage,
  _navStaffSpecialties,
  _navStaffVaccination,
} from "src/assets/nav/_nav";
import SideBarNav from "src/components/layout/SideBarNav";
import { useAuth } from "src/context/AuthContext";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import { useEffect, useState } from "react";
function renderStaffPermission(permission: string[]): Item[] {
  var items: Item[];
  if (permission.includes(GetEPermission.Magager)) {
    items = _navStaffManager;
  } else {
    items = _navStaffGeneral;
    if (permission.includes(GetEPermission.MagagerPending)) {
      items = [...items, ..._navStaffManagerPending];
    }
    if (permission.includes(GetEPermission.ManagerSpecialty)) {
      items = [...items, ..._navStaffSpecialties];
    }

    if (permission.includes(GetEPermission.MagagerPackage)) {
      items = [...items, ..._navStaffPackage];
    }
    if (permission.includes(GetEPermission.MagagerVaccine)) {
      items = [...items, ..._navStaffVaccination];
    }
  }
  return items;
}
function MainNavigation() {
  const { isLoginIn, userInfor, currRole, infoStaff } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    // console.log("===> Change Rolo: " + currRole, currRole === GetRole.Staff);

    if (currRole === GetRole.Admin) setItems(_navAdmin);
    else {
      if (currRole === GetRole.Facility) setItems(_navClinic);
      else if (currRole === GetRole.Doctor) setItems(_navDoctor);
      else if (currRole === GetRole.Staff) {
        if (infoStaff) {
          const items = renderStaffPermission(infoStaff.permissions);
          setItems(items);
        }
      }
    }
  }, [isLoginIn, currRole, infoStaff]);

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
