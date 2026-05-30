type Props = {
    setDialogState:React.Dispatch<React.SetStateAction<boolean>>
}
import { useState } from "react";
import style from "./startDialog.module.scss";
const StartDialog:React.FC<Props> = ({setDialogState}) => {
    const [isStart,setStart] = useState(false);
    const handleToStart = () => {
        setStart(true);
    }
    const handleCloseDialog = () => {
        setDialogState(false);
    }
    return(
        <>
            <div className={style.layer1}></div>
            <div className={style.layer2}></div>
            <div className={style.layer3}></div>
            <div className={style.layer4}></div>
            <div className={style.layer5}></div>
            <div className={`${style.main} ${isStart?style.startMain:""}`} onAnimationEnd={handleCloseDialog}>
                <div className={style.body}>
                    <h1 className={`${style.h1} ${isStart?style.startTitle:""}`}>Alaia's Portfolio</h1>
                    <p className={style.p}>欢迎进入我的作品集</p>
                    <div onClick={handleToStart} className={style.btn}>我准备好了</div>
                </div>
            </div>
        </>
        
    );
}
export default StartDialog;