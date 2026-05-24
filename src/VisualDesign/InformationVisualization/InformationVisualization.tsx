type Props = {
    currentId:React.Dispatch<React.SetStateAction<number>>,
};
import { useState } from "react";
import DesignImg1 from "../../assets/design_sun_1.png";
import DesignImg2 from "../../assets/design_sun_2.png";
import DesignImg3 from "../../assets/Information_desigin3.png";
import DesignImg4 from "../../assets/Information_desigin4.png";
import DesignImg5 from "../../assets/Information_design5.png";
import Mini1 from "../../assets/mini1.png";
import Mini2 from "../../assets/mini2.png";
import Mini3 from "../../assets/mini3.png";
import Mini4 from "../../assets/mini4.png";
import style from "./InformationVisualzation.module.css";
const InformationVisualzation:React.FC<Props> = ({currentId}) => {
    const [currentPage,setCurrentPage] = useState(1);
    const totalPage = 5;
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
    const handleReturnMenu = ()=>{
        currentId(0);
    }
    const handleNextPage = () =>{
        setCurrentPage(currentPage+1);
    }
    const handlePrevPage = () =>{
        if(currentPage==1){
            return;
        }
        setCurrentPage(currentPage-1);
    }
    return(
        <>
            <div className={style.title}>
                <h1 className={style.h1} onClick={handleReturnMenu}>&lt;&nbsp;&nbsp;信息可视化设计</h1>
            </div>
            <div className={style.body}>
                <div className={`${style.prev} ${currentPage===1?style.hidden:""} ${isPrevDown?style.isdown:""}`} onClick={handlePrevPage} onMouseDown={handlePrevMouseDown} onMouseUp={handleMouseUp}>&lt;</div>
                {currentPage===1&&(
                    <>
                        <div className={style.imgBody}>
                            <h3 className={style.h3}>《太阳能与传统能源对比》中英双版</h3>
                            <div className={style.design_body}>
                                <img src={DesignImg1} className={style.img}/>
                                <img src={DesignImg2} className={style.img}/>
                            </div>
                        </div>
                    </>
                )}
                {currentPage===2&&(
                    <>
                        <div className={style.imgBody}>
                            <h3 className={style.h3}>《微观场景的科技渗透》</h3>
                            <div className={style.mini1_body}>
                                <img src={Mini1} className={style.miniImage}/>
                                <img src={Mini2} className={style.miniImage}/>
                            </div>
                            <div className={style.mini2_body}>
                                <img src={Mini3} className={style.miniImage}/>
                                <img src={Mini4} className={style.miniImage}/>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==3&&(
                    <>
                        <div className={style.imgBody}>
                            <h3 className={style.h3}>《年轻人情绪不稳定》</h3>
                            <div className={style.design_body}>
                                <img src={DesignImg3} className={style.img}/>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==4&&(
                    <>
                        <div className={style.imgBody}>
                            <h3 className={style.h3}>《你真的会吃轻食吗》</h3>
                            <div className={style.design_body}>
                                <img src={DesignImg4} className={style.img}/>
                            </div>
                        </div>
                    </>
                )}
                {currentPage==5&&(
                    <>
                        <div className={style.imgBody}>
                            <h3 className={style.h3}>《医疗守护，健康相伴》</h3>
                            <div className={style.design_body}>
                                <img src={DesignImg5} className={style.img}/>
                            </div>
                        </div>
                    </>
                )}
                <div className={`${style.next} ${currentPage===totalPage?style.hidden:""} ${isNextDown?style.isdown:""}`} onClick={handleNextPage} onMouseDown={handleNextMouseDown} onMouseUp={handleMouseUp}>&gt;</div>
            </div>
        </>
    );
}
export default InformationVisualzation;