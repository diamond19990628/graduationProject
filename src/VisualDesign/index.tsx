import { useState } from "react";
import style from "./index.module.css";
import InformationVisualzation from "./InformationVisualization/InformationVisualization";
const menuList:Array<any> = [
    {menu_id:1,menu_name:"信息可视化设计",ballClassName:"ball1",menu_className:"menu_body_1"},
    {menu_id:2,menu_name:"海报/插画设计",ballClassName:"ball2",menu_className:"menu_body_2"},
    {menu_id:3,menu_name:"静态网页排版设计",ballClassName:"ball3",menu_className:"menu_body_3"}
];
const VisualDesign:React.FC = ()=>{
    const [currentId,setCurrentId] = useState(0);
    const handleMenuClick = (event:React.MouseEvent)=>{
        const menu_id = event.currentTarget.getAttribute("data-id");
        setCurrentId(Number(menu_id));
    }
    return(
        <div className={style.main}>
            {currentId==0&&(
                <>
                    <h1 className={style.title1}>视觉传达设计</h1>
                    <h3 className={style.title2}>Visual communication design</h3>
                    <div className={style.body}>
                        <ul className={style.ul}>
                            {menuList.map((item)=>(
                                <div className={style[item.menu_className]}>
                                    <div className={style[item.ballClassName]}></div>
                                    <li key={item.menu_id} className={style.menu_li} data-id={item.menu_id} onClick={handleMenuClick}>{item.menu_name}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </>
            )}
            {currentId===1 && <InformationVisualzation currentId={setCurrentId}/>}
        </div>
    );
}
export default VisualDesign;