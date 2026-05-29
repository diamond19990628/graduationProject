import Myphoto from "../assets/myPhoto.png";
import style from "./index.module.css";
const Mypage = () => {
    return(
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.top_left}>
                    <h1 className={style.title1}>关于我</h1>
                    <h3 className={style.title2}>About me</h3>
                    <div className={style.myinfo}>
                        <div className={style.myinfo_left}>
                            <div className={style.myPhoto}>
                                <img src={Myphoto} className={style.img}/>
                            </div>
                            <div className={style.myName}>
                                <p className={style.p}>马荧荧</p>
                                <p className={style.p}>Alaia</p>
                            </div>
                        </div>
                        <div className={style.myinfo_right}>
                            <p className={style.p2}>21岁</p>
                            <p className={style.p2}>产品设计专业在读</p>
                            <p className={style.p2}>交互·视觉·创意设计</p>
                        </div>
                    </div>
                </div>
                <div className={style.top_right}>
                    <div className={style.basicInfo}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>基础信息</h1>
                        </div>
                        <div className={style.detail}>
                            <p className={style.p3}>所在城市：<span className={style.span}>南京</span></p>
                            <p className={style.p3}>求职意向：<span className={style.span}>UI界面设计师/网页设计师</span></p>
                            <p className={style.p3}>个人优势：<span className={style.span}>能紧跟时代潮流，擅用AIGC，熟悉国内外设计风向</span></p>
                        </div>
                    </div>
                    <div className={style.skillsInfo}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>专业技能</h1>
                        </div>
                        <div className={style.detail}>
                            <p className={style.p3}>设计软件：<span className={style.span}>Figma/Illustrator/Photoshop/Procreate/VS Code/</span></p>
                            <p className={style.p3} style={{marginTop:"-1vw"}}><span className={style.span} style={{marginLeft:"16%"}}>Rhino/Key shot</span></p>
                            <p className={style.p3}>求职意向：<span className={style.span}>UI界面设计师/网页设计师</span></p>
                            <p className={style.p3}>个人优势：<span className={style.span}>能紧跟时代潮流，擅用AIGC，熟悉国内外设计风向</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.down}>
                <div className={style.header}>
                    <div className={style.ball}></div>
                    <h1 className={style.title3}>个人经历</h1>
                </div>
                <div className={style.detail2}>
                    <p className={style.p3}>教育背景：<span className={style.span}>南京传媒学院 本科</span></p>
                    <p className={style.p3}>获奖经历：<span className={style.span}>第十六届“艺融杯”江苏艺术设计大赛 铜奖</span></p>
                    <p className={style.p3} style={{marginTop:"-1vw"}}><span className={style.span} style={{marginLeft:"8.7%"}}>第八届“憧憬·美丽中国”艺术设计大赛 银奖</span></p>
                    <p className={style.p3} style={{marginTop:"-1vw"}}><span className={style.span} style={{marginLeft:"8.7%"}}>第十一届“金埔杯”国际城市景观设计大赛 优秀奖</span></p>
                    <p className={style.p3} style={{marginTop:"-1vw"}}><span className={style.span} style={{marginLeft:"8.7%"}}>第三届“律动·儿童友好城市设计”专项赛 优秀奖</span></p>
                </div>
            </div>
            <div className={style.myIdea}>
                <div className={style.header_idea}>
                    <div className={style.ball}></div>
                    <h1 className={style.title3}>个人理念</h1>
                </div>
                <div className={style.ideaContents}>拥抱Ai浪潮，让技术赋能审美，在智能时代雕琢更完美的设计作品</div>
            </div>
        </div>
    )
}
export default Mypage;