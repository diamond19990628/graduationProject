import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
const menuList = [
  { label: "关于我", to: "/" },
  { label: "我的爱好", to: "/interests" },
  { label: "视觉传达设计", to: "/visual-design" },
  { label: "UI界面设计", to: "/ui-design" },
  { label: "产品设计", to: "/product-design" },
  { label: "已落地项目", to: "/projects" },
];
const Menu = () => (
  <section className={style.section}>
    <h1 className={style.title}>Profile</h1>
    <h1 className={style.subtitle}>简介</h1>
    <ul className={style.ul}>
      {menuList.map(item => (
        <li key={item.to} className={style.li}>
          <NavLink to={item.to} end={item.to === "/"}
            className={({ isActive }) => `${style.link} ${isActive ? style.mouseClick : ""}`}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </section>
);
export default Menu;
