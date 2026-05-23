import IMG from "../assets/OtherPhoto.png";
import style from "./other.module.css";
const Other:React.FC = ()=>{
    return (
        <div className={style.otherBody}>
            <div className={style.otherContents}>
                <div className={style.otherContentsBody}>
                    <div className={style.ball}></div>
                    <p className={style.contents}>闲暇时我喜欢尝试国内外各种Ai软件，从文字创作、智能绘图到页面交互、效率工具，只要是新鲜上线的产品都会主动去体验摸索。
    乐于研究不同Ai的特点和用法，始终保持对新技术的好奇与热情，让自己一直走在潮流前沿，不被时代落下。</p>
                </div>
                <div className={style.otherContentsBody}>
                    <div className={style.ball}></div>
                    <p className={style.contents}>我喜欢尝试各类新鲜事物，主动关注国内外前沿设计动态与海外潮流趋势，热衷于挖掘小众创意、先锋理念与多元审美，
始终保持强烈的好奇心与探索欲，乐于吸收国际前沿视野并融入自身思考，不断提升审美与设计感知力。</p>
                </div>
            </div>
            <div className={style.photoBody}>
                <img src={IMG}/>
            </div>
        </div>
    );
};
export default Other;