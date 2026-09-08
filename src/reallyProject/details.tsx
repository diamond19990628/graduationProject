import { useNavigate } from "react-router-dom";
import Hb1 from "../assets/haibao1.png";
import Hb2 from "../assets/haibao2.png";
import Hb3 from "../assets/haibao3.png";
import Hb4 from "../assets/haibao4.png";
import Header from "../component/Header/Header";
import { useQueryPage } from "../router/useRoutePage";
import style from "./details.module.css";
const Details:React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useQueryPage("page", 1, 2);
    const handleToReallyProduct = () => {
        navigate("/projects?page=2");
    }
    return(
        <>
            <Header/>
            <div style={{ display: "flex" }}>
                <div className={style.left}>
                    <div className={style.returnBtn} onClick={handleToReallyProduct}>&lt;</div>
                </div>
                <div className={style.detailBody}>
                    {currentPage === 1 && <>
                    <div className={style.detailImg}>
                        <img src={Hb1} className={style.img}/>
                    </div>
                    <div className={style.detailImg}>
                        <img src={Hb2} className={style.img}/>
                    </div>
                    </>}
                    {currentPage === 2 && <>
                    <div className={style.detailImg}>
                        <img src={Hb3} className={style.img}/>
                    </div>
                    <div className={style.detailImg}>
                        <img src={Hb4} className={style.img}/>
                    </div>
                    </>}
                </div>
            </div>
            <nav className={style.pagination} aria-label="海报详情翻页">
                <button type="button" aria-label="上一页" disabled={currentPage === 1}
                    className={`${style.pageButton} ${currentPage === 1 ? style.hidden : ""}`}
                    onClick={() => setCurrentPage(currentPage - 1)}>&lt;</button>
                <button type="button" aria-label="下一页" disabled={currentPage === 2}
                    className={`${style.pageButton} ${currentPage === 2 ? style.hidden : ""}`}
                    onClick={() => setCurrentPage(currentPage + 1)}>&gt;</button>
            </nav>
        </>
    );
}
export default Details
