type Props = {
    setAppPage:React.Dispatch<React.SetStateAction<number>>
}
import { useState } from "react";
import tshyMiniProject from "../assets/ReallyProject1.png";
import ReallyProject21 from "../assets/ReallyProject2_1.png";
import ReallyProject22 from "../assets/ReallyProject2_2.png";
import style from "./index.module.css";

const ReallyProject:React.FC<Props> = ({setAppPage}) => {
    const [currentPage,setCurrentPage] = useState(1);
    const handleNextPage = () => {
        setCurrentPage(currentPage+1);
    }
    const handlePrevPage = () => {
        setCurrentPage(currentPage-1);
    }
    const handleToDetail = () => {
        setAppPage(6);
    }
    return(
        <div className={style.main}>
            <h1 className={style.pageTitle}>已落地项目</h1>
            <div className={style.projectBody}>
                <div className={style.prevBody}>
                    <div className={`${style.prev} ${currentPage===1?style.hidden:""}`} onClick={handlePrevPage}>&lt;</div>
                </div>
                
                <div className={style.projectContent}>
                    {currentPage==1&&(
                        <>
                            <h2 className={style.projectName}>《汀山花语花店小程序》</h2>
                            <div className={style.qrBox}>
                                <img src={tshyMiniProject} className={style.qrImg} />
                            </div>
                        </>
                    )}
                    {currentPage==2&&(
                        <>
                            <h2 className={style.projectName}>《汀山花语花店海报设计》</h2>
                            <div className={style.qrBox2}>
                                <div className={style.left}>
                                    <img src={ReallyProject21}/>
                                </div>
                                <div className={style.right}>
                                    <img src={ReallyProject22}/>
                                </div>
                            </div>
                            <div className={style.showFileBody}>
                                <h3 className={style.showFileh3} onClick={handleToDetail}>(查看源文件)</h3>
                            </div>
                        </>
                    )}
                </div>
                <div className={style.nextBody}>
                    <div className={`${style.next} ${currentPage==2?style.hidden:""}`} onClick={handleNextPage}>&gt;</div>
                </div>
            </div>
            
        </div>
    );
}
export default ReallyProject;