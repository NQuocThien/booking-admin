import NavItem from "./NavItem";
import NavTitle from "./NavTitle";
import NavGroup from "./NavGroup";
import { Item } from "@src/assets/nav/_nav";

function SideBarNav({ items }: { items: Item[] }) {
    return (
        <>
            {items?.map((item, index) => {
                if (item.component === 'NavItem')
                    return (
                        <NavItem
                            key={index}
                            item={item}
                        />)
                if (item.component === 'NavTitle')
                    return (
                        <NavTitle
                            key={index}
                            item={item}
                        />)
                if (item.component === 'NavGroup')
                    return (
                        <NavGroup
                            key={index}
                            items={item}
                        />)
            })}
        </>);
}

export default SideBarNav;
