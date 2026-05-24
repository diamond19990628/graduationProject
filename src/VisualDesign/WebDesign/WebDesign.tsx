type Props = {
    currentId:React.Dispatch<React.SetStateAction<number>>,
};
import { useState } from "react";
import Alala1 from "../../assets/AlAlaDesign1.png";
import Alala2 from "../../assets/AlAlaDesign2.png";
import Alala3 from "../../assets/AlAlaDesign3.png";
import HIM1 from "../../assets/HIMDesign1.png";
import HIM2 from "../../assets/HIMDesign2.png";
import MiniPlant1 from "../../assets/MiniPlantDesign1.png";
import MiniPlant2 from "../../assets/MiniPlantDesign2.png";
import MiniPlant_Ipad1 from "../../assets/MiniPlantDesign_Ipad1.png";
import MiniPlant_Ipad2 from "../../assets/MiniPlantDesign_Ipad2.png";
import MiniPlant_Ipad3 from "../../assets/MiniPlantDesign_Ipad3.png";
import MOMO1 from "../../assets/MOMODesign1.png";
import MOMO3 from "../../assets/MOMODesign3.png";
import MOMO2 from "../../assets/MONODesign2.png";
import WebIndexDesign1 from "../../assets/WebIndexDesign1.png";
import WebIndexDesign2 from "../../assets/WebIndexDesign2.png";
import WebIndexDesign3 from "../../assets/WebIndexDesign3.png";
import WebIndexDesign4 from "../../assets/WebIndexDesign4.png";
import style from "./WebDesign.module.css";
const WebDesign:React.FC<Props> = ({currentId}) => {
    const [currentPage,setCurrentPage] = useState(1);
    const handleReturn = () => {
        currentId(0);
    }
    const handleNextPage = () => {
        setCurrentPage(currentPage+1);
    }
    const handlePrevPage = () => {
        setCurrentPage(currentPage-1);
    }
    const [isNextDown, setNextMouseDown] = useState(false);
    const [isPrevDown, setPrevMouseDown] = useState(false);
    const handleNextMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
        setNextMouseDown(true);
    };
    const handlePrevMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
        setPrevMouseDown(true);
    };
    const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = (event) => {
        setNextMouseDown(false);
        setPrevMouseDown(false);
    };
    return(
        <>
            <h1 className={style.h1} onClick={handleReturn}>&lt;&nbsp;&nbsp;静态网页排版设计</h1>
            <div className={style.imgBody}>
                {currentPage==1&&(
                    <>
                        <div className={style.design_title}><div className={style.ball1}></div><h3>Mimi Plant 微景观品牌官网设计</h3></div>
                        <div className={style.MiniPlantDesignBody}>
                            <div className={style.MiniPlantDesign1}>
                                <img src={MiniPlant1} className={style.MiniPlantDesignImg1}/>
                            </div>
                            <div className={style.MiniPlantDesign2}>
                                <img src={MiniPlant2}/>
                            </div>
                            <div className={style.MiniPlantDesign3}>
                                <div className={style.miniPlantDesign3Body}>
                                    <img src={MiniPlant_Ipad1}/>
                                </div>
                                <div className={style.miniPlantDesign3Body}>
                                    <img src={MiniPlant_Ipad2}/>
                                </div>
                                <div className={style.miniPlantDesign3Body}>
                                    <img src={MiniPlant_Ipad3}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==2&&(
                    <>
                        <div className={style.design_title}><div className={style.ball2}></div><h3>ALAlA 服装品牌官网设计</h3></div>
                        <div className={style.MiniPlantDesignBody_Alala}>
                            <div className={style.MiniPlantDesign1_Alala}>
                                <img src={Alala1} className={style.MiniPlantDesignImg1_Alala}/>
                            </div>
                            <div className={style.MiniPlantDesign2_Alala}>
                                <img src={Alala2} className={style.MiniPlantDesignImg2}/>
                            </div>
                            <div className={style.MiniPlantDesign3_Alala}>
                                <img src={Alala3}/>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==3&&(
                    <>
                        <div className={style.design_title}><div className={style.ball3}></div><h3>MOMO 航运物流公司官网设计</h3></div>
                        <div className={style.MiniPlantDesignBody_Alala}>
                            <div className={style.MiniPlantDesign1_Alala}>
                                <img src={MOMO1} className={style.MiniPlantDesignImg1_Alala}/>
                            </div>
                            <div className={style.MiniPlantDesign2_Alala}>
                                <img src={MOMO2} className={style.MiniPlantDesignImg2}/>
                            </div>
                            <div className={style.MiniPlantDesign3_Alala}>
                                <img src={MOMO3}/>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==4&&(
                    <>
                        <div className={style.HIMDesignBody}>
                            <div className={style.HIMDesignTitle}><div className={style.ball4}></div><h3>HIM官网再设计</h3></div>
                            <div className={style.HIMDesign1}>
                                <img src={HIM1} className={style.MIMDesignImg1}/>
                            </div>
                            <div className={style.HIMDesign2}>
                                <img src={HIM2} className={style.MIMDesignImg2}/>
                            </div>
                        </div>
                        
                    </>
                )}
                {currentPage==5&&(
                    <>
                        <div className={style.design_title}><div className={style.ball5}></div><h3>网页首页排版设计</h3></div>
                        <div className={style.WebIndexDesignBody}>
                            <div className={style.designBody1}>
                                <div className={style.designImgBody1}>
                                    <img src={WebIndexDesign1} className={style.WebDesignImg}/>
                                </div>
                                <div className={style.designImgBody2}>
                                    <img src={WebIndexDesign2} className={style.WebDesignImg}/>
                                </div>
                            </div>
                            <div className={style.designBody2}>
                                <div className={style.designImgBody3}>
                                    <img src={WebIndexDesign3} className={style.WebDesignImg}/>
                                </div>
                                <div className={style.designImgBody4}>
                                    <img src={WebIndexDesign4} className={style.WebDesignImg}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={style.btn}>
                <div className={`${style.prev} ${currentPage==1?style.hidden:""} ${isPrevDown ? style.isdown:""}`} onClick={handlePrevPage} onMouseDown={handlePrevMouseDown} onMouseUp={handleMouseUp}>
                    &lt;
                </div>
                <div className={`${style.next} ${currentPage===5?style.hidden:""} ${isNextDown ? style.isdown:""}`} onClick={handleNextPage} onMouseDown={handleNextMouseDown} onMouseUp={handleMouseUp}>
                    &gt;
                </div>
            </div>
        </>
    );
}
export default WebDesign;