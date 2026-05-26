import { useState } from "react";
import style from "./index.module.css";
const menuList = [
    {id:1,name:"博物馆衍生产品设计"},
    {id:2,name:"儿童安抚挂饰产品设计"},
    {id:3,name:"礼盒设计"},
    {id:4,name:"文创产品设计"},
    {id:5,name:"咖啡机产品设计"},
    {id:6,name:"珠宝设计"},
    {id:7,name:"建模设计"}
];
const ProductDesign:React.FC = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const changePage = (event:React.MouseEvent) => {
        const PageID = event.currentTarget.getAttribute("data-id");
        setCurrentPage(Number(PageID));
    }
    return(
        <div className={style.main}>
            <div className={style.header}>
                <h1 className={style.title1}>产品设计</h1>
                <h3 className={style.title2}>Product Design</h3>
                <ul className={style.ul}>
                    {menuList.map((item)=>(
                        <li className={style.li} key={item.id} data-id={item.id} style={{color:`${currentPage===item.id?"#F38D52":"#AAAAAA"}`,borderRight:`${item.id<menuList.length?"1px solid black":""}`}} onClick={changePage}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className={style.body}>

            </div>
        </div>
    );
}
export default ProductDesign;