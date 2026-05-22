import { useState } from "react";
import style from "./index.module.css";
import Photography from "./photography";
import Reading from "./reading";
const menuList:{id:number, name:string}[] = [
    {id:0, name:"摄影"},
    {id:1, name:"阅读"},
    {id:2, name:"探索"},
    {id:3, name:"更多..."}
];
const Main:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMenuMove = (index : number)=>{
        setActiveIndex(index);
    }
    return (
        <div className={style.main}>
            <div className={style.main_header}>
                <h1 className={style.title}>我的爱好</h1>
                <h2 className={style.subtitle}>My interests</h2>
                <ul className={style.ul}>
                    {menuList.map((item,index)=>(<li key={item.id} className={`${style.li} ${index === activeIndex ? style.mouseClick : ''}`} onClick={()=>handleMenuMove(index)}>{item.name}</li>))}
                </ul>
            </div>
            <div className={style.main_body}>
                {activeIndex === 0 && <Photography />}
                {activeIndex === 1 && <Reading />}
            </div>
        </div>
        
    );
}
export default Main;