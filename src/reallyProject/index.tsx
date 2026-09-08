import { useNavigate } from "react-router-dom";
import aiCard from "../assets/ai-card-overview.webp";
import tshyMiniProject from "../assets/ReallyProject1.png";
import ReallyProject21 from "../assets/ReallyProject2_1.png";
import ReallyProject22 from "../assets/ReallyProject2_2.png";
import teaInvitation from "../assets/tea-invitation.webp";
import { useQueryPage } from "../router/useRoutePage";
import style from "./index.module.css";

const ReallyProject:React.FC = () => {
    const navigate = useNavigate();
    const [currentPage,setCurrentPage] = useQueryPage("page", 1, 4);
    const handleNextPage = () => {
        setCurrentPage(currentPage+1);
    }
    const handlePrevPage = () => {
        setCurrentPage(currentPage-1);
    }
    const handleToDetail = () => {
        navigate("/projects/poster");
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
                                <h3 className={style.showFileh3} onClick={handleToDetail}>(查看更多)</h3>
                            </div>
                        </>
                    )}
                    {currentPage === 3 && (
                        <>
                            <h2 className={style.projectName}>《AI CARD智能卡牌设备》</h2>
                            <img className={style.aiCardImage} src={aiCard} alt="AI CARD智能卡牌设备" />
                            <button className={style.detailLink} onClick={() => navigate("/projects/ai-card")}>（查看详情）</button>
                        </>
                    )}
                    {currentPage === 4 && (
                        <>
                            <h2 className={style.projectName}>《秦淮区非遗馆雨花茶展区邀请函》</h2>
                            <img className={style.invitationImage} src={teaInvitation} alt="秦淮区非遗馆雨花茶展区邀请函" />
                        </>
                    )}
                </div>
                <div className={style.nextBody}>
                    <div className={`${style.next} ${currentPage==4?style.hidden:""}`} onClick={handleNextPage}>&gt;</div>
                </div>
            </div>
            
        </div>
    );
}
export default ReallyProject;
