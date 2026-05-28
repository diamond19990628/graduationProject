
type Props = {
    currentPage:Number
};
import module_11 from "../assets/ModuleDesign1_1.png";
import module_12 from "../assets/ModuleDesign1_2.png";
import module_13 from "../assets/ModuleDesign1_3.png";
import module_21 from "../assets/ModuleDesign2_1.png";
import module_22 from "../assets/ModuleDesign2_2.png";
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
                        <img src={module_21} className={style.img1}/>
                    </div>
                    <div className={style.img2_2_body}>
                        <img src={module_22} className={style.img2}/>
                    </div>
                </>
            )}
        </>
    );
}
export default ModuleDesign;