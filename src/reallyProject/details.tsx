import { useNavigate } from "react-router-dom";
import Hb1 from "../assets/haibao1.png";
import Hb2 from "../assets/haibao2.png";
import Header from "../component/Header/Header";
import style from "./details.module.css";
const Details:React.FC = () => {
    const navigate = useNavigate();
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
                    <div className={style.detailImg}>
                        <img src={Hb1} className={style.img}/>
                    </div>
                    <div className={style.detailImg}>
                        <img src={Hb2} className={style.img}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Details