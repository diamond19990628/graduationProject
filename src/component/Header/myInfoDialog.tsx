type Props = {
    isOpen:boolean
}
import style from "./myInfoDialog.module.css";
const MYInfoDialog:React.FC<Props> = ({isOpen}) => {
    return(
        <>
            <div className={`${style.main} ${isOpen?"":style.hidden}`}>
                <div className={style.header}>
                    <div className={style.ball}></div>
                    <span className={style.span}>联系方式</span>
                </div>
                <div className={style.body}>
                    <p className={style.p}>邮箱：<span className={style.span2}>2420430363@qq.com</span></p>
                    <p className={style.p}>微信：<span className={style.span2}>Alaiama0919</span></p>
                    <p className={style.p}>手机号：<span className={style.span2}>19002524091</span></p>
                    <p className={style.bottom}>期待您的联系！</p>
                </div>
            </div>
        </>
    );
}
export default MYInfoDialog;