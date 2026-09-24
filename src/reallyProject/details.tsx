import { useNavigate } from "react-router-dom";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Hb5 from "../assets/h5jpg.jpg";
import Hb1 from "../assets/haibao1.png";
import Hb2 from "../assets/haibao2.png";
import Hb3 from "../assets/haibao3.png";
import Hb4 from "../assets/haibao4.png";
import Header from "../component/Header/Header";
import style from "./details.module.css";
const posters = [Hb1, Hb2, Hb3, Hb4,Hb5];
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
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={{ prevEl: "#poster-prev", nextEl: "#poster-next" }}
                        slidesPerView={2}
                        slidesPerGroup={1}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        className={style.swiper}
                    >
                        {posters.map((src, index) => (
                            <SwiperSlide key={src} className={style.detailImg}>
                                <img src={src} alt={`海报 ${index + 1}`} className={style.img}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <nav className={style.pagination} aria-label="海报轮播">
                <button id="poster-prev" type="button" aria-label="上一张"
                    className={style.pageButton}>&lt;</button>
                <button id="poster-next" type="button" aria-label="下一张"
                    className={style.pageButton}>&gt;</button>
            </nav>
        </>
    );
}
export default Details
