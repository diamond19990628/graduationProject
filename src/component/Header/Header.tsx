import { useState } from "react";
import Myphoto from "../../assets/img/Myphoto.png";
import StatePhoto from "../../assets/img/state.png";
import style from "./Header.module.css";
import MyInfoDialog from "./myInfoDialog";
const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleOpenMyInfo: React.MouseEventHandler<HTMLImageElement> = ()=>{
    setIsHovered(!isHovered);
  }


  return (
    <header className={style.header}>
      <h1 className={style.h1}>Alaia's Portfolio</h1>
      <span className={style.span}>欢迎进入我的作品集!</span>
      <div className={style.button}>
        <div className={style.move}>
          <img src={StatePhoto} alt="State Photo"
        className={style.StatePhoto} 
        style={isHovered ? { transform: "rotate(90deg)", transition: "0.7s",cursor: "pointer" } : {transition: "0.7s",cursor: "pointer"}} 
        onClick={handleOpenMyInfo}
        />
        </div>
        <img src={Myphoto} alt="My Photo" className={style.Myphoto}/>
      </div>
      <MyInfoDialog isOpen={isHovered}/>
    </header>
  )
}

export default Header