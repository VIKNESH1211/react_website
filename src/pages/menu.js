import React from "react";
import { MenuList } from "../helpers/programs";
import MenuItem from "../components/menuItem";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Programs</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              age={menuItem.age}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;