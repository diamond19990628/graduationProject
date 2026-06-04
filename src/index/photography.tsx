import { useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Photography1 from "../assets/photography1.png";
import Photography2 from "../assets/photography2.png";
import Photography3 from "../assets/photography3.png";
import Photography4 from "../assets/photography4.png";
import PhotoGraphy5 from "../assets/photography5.png";
import Photography6 from "../assets/photography6.png";
import style from "./photography.module.css";
const imgList = [
    {id:1, src:Photography1},
    {id:2, src:Photography2},
    {id:3, src:Photography3},
    {id:4, src:Photography4},
    {id:5, src:PhotoGraphy5},
    {id:6, src:Photography6}
]
const photograph: React.FC = () => {
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

    return (
        <>
            <div className={style.main_body_header}>
                <h1 className={style.main_body_title}>摄影</h1>
                <div className={style.btn_box}>
                    <div className={`${style.prev} ${isPrevDown ? style.isdown : ''}`} onMouseDown={handlePrevMouseDown} onMouseUp={handleMouseUp}>
                        &lt;
                    </div>
                    <div className={`${style.next} ${isNextDown ? style.isdown : ''}`} onMouseDown={handleNextMouseDown} onMouseUp={handleMouseUp}>
                        &gt;
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Autoplay,Navigation]}
                navigation={{
                    nextEl: `.${style.next}`,
                    prevEl: `.${style.prev}`
                }}
                slidesPerView="auto"
                spaceBetween={2}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className={style.swiper}
                >
                {imgList.map((img) => (
                    <SwiperSlide key={img.id}>
                    <img src={img.src} alt={`Photography ${img.id}`} className={style.swiper_img}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
        
    )
}
export default photograph;