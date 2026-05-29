
type Props = {
    currentPage:Number
};
import module_11 from "../assets/ModuleDesign1_1.png";
import module_12 from "../assets/ModuleDesign1_2.png";
import module_13 from "../assets/ModuleDesign1_3.png";
import module_21 from "../assets/ModuleDesign2_1.png";
import module_22 from "../assets/ModuleDesign2_2.png";
import module_23 from "../assets/ModuleDesign2_3.png";
import module_31 from "../assets/ModuleDesign3_1.png";
import module_32 from "../assets/ModuleDesign3_2.png";
import module_33 from "../assets/ModuleDesign3_3.png";
import module_41 from "../assets/ModuleDesign4_1.png";
import module_42 from "../assets/ModuleDesign4_2.png";
import style from "./moduleDesign.module.css";
const ModuleDesign:React.FC<Props> = ({currentPage}) => {
    return(
        
        <>
            {currentPage==1 && (
                <>
                    <div className={style.img1_body}>
                        <img src={module_11} className={style.img1}/>
                    </div>
                    <div className={style.img1_body}>
                        <img src={module_12} className={style.img1}/>
                    </div>
                    <div className={style.img1_body}>
                        <img src={module_13} className={style.img1}/>
                    </div>
                </>
            )}
            {currentPage==2 && (
                <>
                    <div className={style.img2_body}>
                        <img src={module_21} className={style.img2_1}/>
                    </div>
                    <div className={style.img2_2_body}>
                        <img src={module_22} className={style.img2}/>
                    </div>
                    <div className={style.img2_3_body}>
                        <img src={module_23} className={style.img3}/>
                    </div>
                </>
            )}
            {currentPage==3 && (
                <>
                    <div className={style.img3_left}>
                        <img src={module_31} className={style.img3_imageBox}></img>
                    </div>

                    <div className={style.img3_right}>
                        <div className={style.img3_topSmall}>
                            <img src={module_32} className={style.img3_imageBox}></img>
                        </div>

                        <div className={style.img3_topLarge}>
                            <img src={module_33} className={style.img3_imageBox}></img>
                        </div>
                    </div>
                </>
            )}
            {currentPage==4 && (
                <>
                    <div className={style.img4_box}>
                        <img src={module_41} className={style.img4_img}/>
                    </div>
                    <div className={style.img4_box}>
                        <img src={module_42} className={style.img4_img}/>
                    </div>
                </>
            )}
        </>
    );
}
export default ModuleDesign;