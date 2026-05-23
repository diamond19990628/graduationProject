type Props = {
    currentId:React.Dispatch<React.SetStateAction<number>>,
};
import { useEffect, useRef, useState } from "react";
import DhDesign1 from "../../assets/DhDesign1.png";
import DhDesign2 from "../../assets/DhDesign2.png";
import HfzDesign1 from "../../assets/HfzDesign.png";
import HfzDesign2 from "../../assets/HfzDesign2.png";
import HfzDesign3 from "../../assets/HfzDesign3.png";
import Pharmacology1 from "../../assets/Illustration_desigin1.png";
import Pharmacology2 from "../../assets/Illustration_design2.png";
import Pharmacology3 from "../../assets/Illustration_design3.png";
import qcyjDesign1 from "../../assets/Illustration_qkyj_design1.png";
import qcyjDesign2 from "../../assets/Illustration_qkyj_design2.png";
import qcyjDesign3 from "../../assets/Illustration_qkyj_design3.png";
import qcyjDesign4 from "../../assets/Illustration_qkyj_design4.png";
import NxSheepDesign1 from "../../assets/nxsheepDesign1.png";
import NxSheepDesign2 from "../../assets/nxsheepDesign2.png";
import PyxDesign1 from "../../assets/PyxDesign1.png";
import PyxDesign2 from "../../assets/PyxDesign2.png";
import style from "./Illustration.module.css";
const Illustration:React.FC<Props> = ({currentId})=>{
    const [currentPage,setCurrentPage] = useState(0);
    const bodyRef = useRef<HTMLDivElement>(null);
    const Initballs:Array<any> = [
        { id: 1, text: "《宁夏盐池·滩羊》", x: 300, y: 0, className:"ball1",speed:15},
        { id: 2, text: "《江中药品》", x: 100, y: 300, className:"ball2",speed:15},
        { id: 3, text: "《皮影戏》", x: 200, y: 600, className:"ball3",speed:15},
        { id: 4, text: "《敦煌之旅》", x: 600, y:300, className:"ball4",speed:15},
        { id: 5, text: "《和凤镇》", x: 800, y:0, className:"ball5",speed:15},
        { id: 6, text: "《黔城游记》", x: 900, y:500, className:"ball6",speed:15},
    ];
    const [balls, setBalls] = useState(Initballs);
    const BallRun = (ballID:number) => {
        if (!bodyRef.current) return;
        const width = bodyRef.current.clientWidth;
        const height = bodyRef.current.clientHeight;
        setBalls(list=>list.map(ball=>ball.id === Number(ballID)
            ? {
                ...ball,
                x:Math.random() * (width - 200),
                y:Math.random() * (height-400)-200,
                speed:10+Math.random() * 5
            }:ball
        ));
    }
    const handleClick = (event:React.MouseEvent)=>{
        const pageID = event.currentTarget.getAttribute("data-id");
        setCurrentPage(Number(pageID));
    }
    useEffect(()=>{
        if (currentPage !== 0) return;
        const timer = setTimeout(()=>{
            Initballs.map(ball=>{
                BallRun(ball.id);
            });
        },50)
        return () => clearTimeout(timer);
    },[currentPage])
    const handleReturn = ()=>{
        currentId(0);
    }
    const handleMenu = () => {
        setCurrentPage(0);
    }
    return(
        <>
            {currentPage==0&&(
                <>
                    <h1 className={style.h1} onClick={handleReturn}>&lt;&nbsp;&nbsp;海报/插画设计</h1>
                    <div className={style.body} ref={bodyRef}>
                        {balls.map((item)=>(
                            <div data-id={item.id} 
                                className={style[item.className]} 
                                onTransitionEnd={()=>BallRun(item.id)}
                                style={{transform:`translate(${item.x}px,${item.y}px)`,transition:`transform ${item.speed}s linear`}}
                                onClick={handleClick}
                             >
                                {item.text}
                            </div>
                        ))}
                    </div>
                </>
            )}
            {currentPage==1&&(
                <>
                    <h1 className={style.design_h1} onClick={handleMenu}>&lt;&nbsp;&nbsp;《宁夏盐池·滩羊》品牌形象设计</h1>
                    <div className={style.design_body}>
                        <div className={style.sheep}>
                            <img src={NxSheepDesign1} className={style.sheep_img}/>
                        </div>
                        <div className={style.sheep}>
                            <img src={NxSheepDesign2} className={style.sheep_img}/>
                        </div>
                    </div>
                    <div className={style.useToolsBody}>
                        <div className={style.toolsBall}></div>
                        <h3>使用工具：</h3><span>Phocreate&nbsp;+&nbsp;Illustrator</span>
                    </div>
                </>
            )}
            {currentPage==2&&(
                <>
                    <h1 className={style.design_h1} onClick={handleMenu}>&lt;&nbsp;&nbsp;《江中药品》插画海报设计</h1>
                    <div className={style.design_body}>
                        <div>
                            <img src={Pharmacology1}/>
                        </div>
                        <div>
                            <img src={Pharmacology2}/>
                        </div>
                        <div>
                            <img src={Pharmacology3}/>
                        </div>
                    </div>
                    <div className={style.useToolsBody}>
                        <div className={style.toolsBall}></div>
                        <h3>使用工具：</h3><span>Phocreate&nbsp;+&nbsp;Illustrator</span>
                    </div>
                </>
            )}
            {currentPage==3&&(
                <>
                    <h1 className={style.design_h1} onClick={handleMenu}>&lt;&nbsp;&nbsp;《皮影戏》非遗手册设计</h1>
                    <div className={style.design_body}>
                        <div>
                            <img src={PyxDesign1} className={style.Pyx1}/>
                        </div>
                        <div>
                            <img src={PyxDesign2} className={style.Pyx2}/>
                        </div>
                        
                    </div>
                    <div className={style.useToolsBody}>
                        <div className={style.toolsBall}></div>
                        <h3>使用工具：</h3><span>Adobe Illustrator</span>
                    </div>
                </>
            )}
            {currentPage==4&&(
                <>
                    <h1 className={style.design_h1} onClick={handleMenu}>&lt;&nbsp;&nbsp;《敦煌之旅》三折页设计</h1>
                    <div className={style.design_body}>
                        <div>
                            <img src={DhDesign1} className={style.Dh1}/>
                        </div>
                        <div>
                            <img src={DhDesign2} className={style.Dh2}/>
                        </div>
                        
                    </div>
                    <div className={style.useToolsBody}>
                        <div className={style.toolsBall}></div>
                        <h3>使用工具：</h3><span>Adobe Illustrator</span>
                    </div>
                </>
            )}
            {currentPage==5&&(
                <>
                    <h1 className={style.design_h1} onClick={handleMenu}>&lt;&nbsp;&nbsp;《和凤镇》VI手册设计</h1>
                    <div className={style.design_body}>
                        <div>
                            <img src={HfzDesign1}/>
                        </div>
                        <div>
                            <img src={HfzDesign2}/>
                        </div>
                        <div>
                            <img src={HfzDesign3}/>
                        </div>
                    </div>
                    <div className={style.useToolsBody}>
                        <div className={style.toolsBall}></div>
                        <h3>使用工具：</h3><span>Photoshop&nbsp;+&nbsp;Illustrator</span>
                    </div>
                </>
            )}
            {currentPage==6&&(
                <>
                    <h1 className={style.design_h1} onClick={handleMenu}>&lt;&nbsp;&nbsp;《黔城游记》海报设计</h1>
                    <div className={style.design_body}>
                        <div style={{width:"25%",height:"100%"}} className={style.QcyjImg1} >
                            <img src={qcyjDesign1}/>
                        </div>
                        <div style={{width:"25%",height:"100%"}} className={style.QcyjImg2}>
                            <img src={qcyjDesign2} />
                        </div>
                        <div style={{width:"25%",height:"100%"}} className={style.QcyjImg3}>
                            <img src={qcyjDesign3} />
                        </div>
                        <div style={{width:"25%",height:"100%"}} className={style.QcyjImg4}>
                            <img src={qcyjDesign4} />
                        </div>
                    </div>
                    <div className={style.useToolsBody}>
                        <div className={style.toolsBall}></div>
                        <h3>使用工具：</h3><span>Photoshop&nbsp;+&nbsp;Illustrator</span>
                    </div>
                </>
            )}
        </>
    );
}
export default Illustration;