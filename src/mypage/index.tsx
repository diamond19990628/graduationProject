import Myphoto from "../assets/myPhoto.png";
import style from "./index.module.css";

const awards = [
    { name: '第十六届"艺融杯"江苏艺术设计大赛', prize: "铜奖" },
    { name: '第八届"憧憬·美丽中国"艺术设计大赛', prize: "银奖" },
    { name: '2026"华夏奖"文化艺术设计大赛（春季）', prize: "银奖" },
    { name: '第三届"律动·儿童友好城市设计"专项赛', prize: "优秀奖" },
];

const internshipTasks = [
    "参与AI智能硬件全流程工作,开展竞品调研分析,挖掘用户痛点,输出产品版本规划",
    "树立用户需求,对接硬件、市场多团队,跟进样机调试与开发测试.",
    "独自完成产品手绘草图,3D建模",
    "调研Kickstarter等海外众筹市场,协助制定众筹营销方案.",
    "策划小红书,抖音,B站等pintail种草内容,持续运营管理账号,主力项目传播."
];

const Mypage = () => {
    return (
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.top_left}>
                    <h1 className={style.title1}>关于我</h1>
                    <h3 className={style.title2}>About me</h3>
                    <div className={style.myinfo}>
                        <div className={style.myinfo_left}>
                            <div className={style.myPhoto}>
                                <img src={Myphoto} className={style.img} />
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

                    <div className={style.leftSection}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>个人经历</h1>
                        </div>
                        <div className={style.leftDetail}>
                            <p className={style.p3}>
                                教育背景：<span className={style.span}>南京传媒学院 本科</span>
                            </p>
                            <div className={style.awards}>
                                <p className={style.p3}>获奖经历：</p>
                                <div className={style.awardList}>
                                    {awards.map((award, index) => (
                                        <div className={style.awardRow} key={index}>
                                            <span className={style.awardName}>{award.name}</span>
                                            <span className={style.awardPrize}>{award.prize}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={style.leftSection2}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>我的优势</h1>
                        </div>
                        <div className={style.leftDetail}>
                            <p className={style.p3}>
                                <span className={style.span}>1. 能跟紧时代潮流，适应大环境，熟悉AIGC工具的使用。</span>
                            </p>
                            <p className={style.p3}>
                                <span className={style.span}>2. 对交互设计很热爱，乐于探索挖掘更多技能。</span>
                            </p>
                            <p className={style.p3}>
                                <span className={style.span}>
                                    3. 除了设计，对代码也有基本的了解，有信心能够与研发磨合得更好，一起产出更多优秀项目。
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.top_right}>
                    <div className={style.basicInfo}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>基础信息</h1>
                        </div>
                        <div className={style.right_basic_body}>
                            <p className={style.p3_right}>所在城市：<span className={style.span}>南京</span></p>
                            <p className={style.p3_right}>
                                求职意向：
                                <span className={style.span}>UI界面设计师/网页设计师/产品经理</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.skillsInfo}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>专业技能</h1>
                        </div>
                        <div className={style.skills_body}>
                            <p className={style.p3_right}>
                                设计软件：
                                <span className={style.span}>
                                    Figma/Illustrator/Photoshop/Procreate/Rhino/Key shot
                                </span>
                            </p>
                            <p className={style.p3_right}>
                                专业方向：
                                <span className={style.span}>
                                    UI界面设计/网页设计/视觉设计/基础交互设计/产品建模
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={style.internshipInfo}>
                        <div className={style.header}>
                            <div className={style.ball}></div>
                            <h1 className={style.title3}>实习经历</h1>
                        </div>
                        <div className={style.internshipInfo_body}>
                            <p className={style.p3_right}>
                                南京新端智能科技有限公司：<span className={style.span}>2026.7.1-8.30 | AI产品经理实习生</span>
                            </p>
                            <ul className={style.taskList}>
                                {internshipTasks.map((task) => (
                                    <li className={style.taskItem} key={task}>
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.myIdea}>
                <div className={style.header_idea}>
                    <div className={style.ball}></div>
                    <h1 className={style.title3}>个人理念</h1>
                </div>
                <div className={style.ideaContents}>
                    <span className={style.btn_span}>
                        拥抱Ai浪潮，让技术赋能审美，在智能时代雕琢更完美的设计作品
                    </span>
                </div>
            </div> */}
        </div>
    );
};

export default Mypage;
