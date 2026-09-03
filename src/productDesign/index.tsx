import { useState } from "react";
import ChildProductDesign1 from "../assets/ChildProductDesign1.png";
import ChildProductDesign2 from "../assets/ChildProductDesign2.png";
import ChildProductDesign3 from "../assets/ChildProductDesign3.png";
import ChildProductDesign4 from "../assets/ChildProductDesign4.png";
import diamondDesign1 from "../assets/DiamondDesign1.png";
import diamondDesign2 from "../assets/DiamondDesign2.png";
import diamondDesign3 from "../assets/DiamondDesign3.png";
import boxDesign1 from "../assets/boxDesign1.png";
import boxDesign2 from "../assets/boxDesign2.png";
import boxDesign3 from "../assets/boxDesign3.png";
import boxDesign4 from "../assets/boxDesign4.png";
import coffeeDesign1 from "../assets/coffeeProductDesign1.png";
import coffeeDesign2 from "../assets/coffeeProductDesign2.png";
import coffeeDesign3 from "../assets/coffeeProductDesign3.png";
import museumDesign1 from "../assets/museumDesign.png";
import museumDesign2 from "../assets/museumDesign2.png";
import museumDesign3 from "../assets/museumDesign3.png";
import museumDesign4 from "../assets/museumDesign4.png";
import museumDesign5 from "../assets/museumDesign5.png";
import wcDesign1 from "../assets/wcProductDesign1.png";
import wcDesign2 from "../assets/wcProductDesign2.png";
import wcDesign3 from "../assets/wcProductDesign3.png";
import wcDesign4 from "../assets/wcProductDesign4.png";
import wcDesign5 from "../assets/wcProductDesign5.png";
import wcDesign6 from "../assets/wcProductDesign6.png";
import wcDesign7 from "../assets/wcProductDesign7.png";
import wcDesign8 from "../assets/wcProductDesign8.png";
import style from "./index.module.css";
// 引入图片组件
import ModuleDesign from "./moduleDesign";
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
    const [currentModulePage,setCurrentModulePage] = useState(1);
    const handleNextModulePage = () => {
        setCurrentModulePage(currentModulePage+1);
    }
    const handlePrevModulePage = () => {
        setCurrentModulePage(currentModulePage-1);
    }
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
                {currentPage===1 && (
                    <>
                        <div className={style.left}>
                            <img src={museumDesign1} className={style.img}/>
                        </div>
                        <div className={style.right}>
                            <div className={style.right_top}>
                                <div className={style.museum_small_body}>
                                    <img src={museumDesign2} className={style.small_img}/>
                                </div>
                                <div className={style.museum_small_body}>
                                    <img src={museumDesign3} className={style.small_Child_img}/>
                                </div>
                            </div>
                            <div className={style.right_down}>
                                <div className={style.museum_small_body}>
                                    <img src={museumDesign4} className={style.small_Child_img}/>
                                </div>
                                <div className={style.museum_small_body}>
                                    <img src={museumDesign5} className={style.small_Child_img}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage===2 && (
                    <>
                        <div className={style.Child_left}>
                            <img src={ChildProductDesign1} className={style.img}/>
                        </div>
                        <div className={style.Child_right}>
                            <div className={style.child_right_top}>
                                <img src={ChildProductDesign2} className={style.child_top_img}/>
                            </div>
                            <div className={style.child_right_down}>
                                <div>
                                    <img src={ChildProductDesign3} className={style.small_Child_img}/>
                                </div>
                                <div>
                                    <img src={ChildProductDesign4} className={style.small_Child_img}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage===3 && (
                    <>
                        <div className={style.boxBody}>
                            <div className={style.box_top}>
                                <div className={style.box_img_body}>
                                    <img src={boxDesign1} className={style.box_design_img}/>
                                </div>
                                <div className={style.box_img_body}>
                                    <img src={boxDesign2} className={style.box_design_img}/>
                                </div>
                            </div>
                            <div className={style.box_down}>
                                <div className={style.box_img_body}>
                                    <img src={boxDesign3} className={style.box_design_img}/>
                                </div>
                                <div className={style.box_img_body2}>
                                    <img src={boxDesign4} className={style.box_design_img2}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage===4 && (
                    <>
                        <div className={style.wxBody}>
                            <div className={style.wxBody_left}>
                                <div className={style.wxBody_left_img}>
                                    <img src={wcDesign1} className={style.wc_design_img}/>
                                </div>
                                <div className={style.wxBody_left_img2}>
                                    <img src={wcDesign2} className={style.wc_design_img}/>
                                </div>
                            </div>
                            <div className={style.wxBody_right}>
                                <div className={style.wxBody_right_top}>
                                    <img src={wcDesign3} className={style.wxBody_right_top_img}/>
                                    <img src={wcDesign4} className={style.wxBody_right_top_img}/>
                                    <img src={wcDesign5} className={style.wxBody_right_top_img}/>
                                </div>
                                <div className={style.wxBody_right_down}>
                                    <img src={wcDesign6} className={style.wxBody_right_top_img}/>
                                    <img src={wcDesign7} className={style.wxBody_right_top_img}/>
                                    <img src={wcDesign8} className={style.wxBody_right_top_img}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage===5 && (
                    <>
                        <div className={style.coffeeBody}>
                            <div className={style.coffee_body_left}>
                                <img src={coffeeDesign1} className={style.coffee_img_left}/>
                            </div>
                            <div className={style.coffee_right}>
                                <div className={style.coffee_right_body}>
                                    <img src={coffeeDesign2} className={style.coffee_img_right}/>
                                </div>
                                <div className={style.coffee_right_body}>
                                    <img src={coffeeDesign3} className={style.coffee_img_right}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==6 && (
                    <>
                        <div className={style.diamondDesignBody}>
                            <div className={style.diamond_body_left}>
                                <img src={diamondDesign1} className={style.diamond_img_left}/>
                            </div>
                            <div className={style.diamond_right}>
                                <div className={style.diamond_right_body}>
                                    <img src={diamondDesign2} className={style.diamond_img_right}/>
                                </div>
                                <div className={style.coffee_right_body}>
                                    <img src={diamondDesign3} className={style.diamond_img_right}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==7 && (
                    <>
                        <div className={style.moduleDesignBody}>
                            <div className={style.moduleheader}>
                                <div className={style.ball}></div>
                                <h1 className={style.module_title}>使用工具：<span className={style.module_title2}>Rhino+Key shot</span></h1>
                            </div>
                            <div className={style.moduleBody}>
                                <ModuleDesign currentPage={currentModulePage}/>
                            </div>
                            <div className={style.btn_body}>
                                <div className={`${style.prev} ${currentModulePage===1?style.hidden:""}`} onClick={handlePrevModulePage}>&lt;&lt;</div>
                                <div className={`${style.next} ${currentModulePage===4?style.hidden:""}`} onClick={handleNextModulePage}>&gt;&gt;</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default ProductDesign;