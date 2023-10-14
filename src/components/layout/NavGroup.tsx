import { Accordion, Nav } from "react-bootstrap";
import { RiDashboard2Line } from "react-icons/ri";
import { FaBeer, FaCoffee, FaMusic, FaCar, FaHeart } from 'react-icons/fa'; // Import tất cả biểu tượng
import s from 'src/assets/scss/layout/MainLayout.module.scss';
import NavItem from "./NavItem";
import { Item } from "@src/assets/nav/_nav";
import { IconType } from "react-icons/lib";
import React from "react";
// Đối tượng chứa tất cả các biểu tượng
const iconComponents: { [key: string]: IconType } = {
    FaBeer: FaBeer,
    FaCoffee: FaCoffee,
    FaMusic: FaMusic,
    FaCar: FaCar,
    FaHeart: FaHeart,
    RiDashboard2Line,
};

function getIcon(iconName: string | undefined) {
    if (iconName)
        if (iconComponents[iconName]) {
            return React.createElement(iconComponents[iconName]);
        } else {
            return null;
        }
    else
        return null
}
function NavGroup({ items }: { items: Item }) {
    const icon = getIcon(items.iconName)
    return (
        <>
            {!!items.items && (

                <Accordion className={s.nav__content_group} flush>
                    <Accordion.Item eventKey="1" className={s.items}>
                        <Accordion.Header className={s.title}>
                            {icon && <div
                                className={s.icon}
                            >
                                {icon}
                            </div>
                            }

                            {items.name}
                        </Accordion.Header>
                        <Accordion.Body>
                            {
                                items.items?.map((item, index) => {
                                    return (
                                        <NavItem
                                            key={index}
                                            item={item}
                                        />
                                    )
                                })
                            }
                            {/* <NavItem
                                item={items.items[0]}
                            /> */}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )}
        </>

    );
}

export default NavGroup;