import { useEffect, useState } from "react";
import style from "./index.module.css";
import Iphone from "./Iphone/Iphone";
import Web from "./Web/Web";
type ball = {
    id:number,
    positive_x:number,
    positive_y:number,
    duration:number
};

const UIDesignIndex:React.FC = () => {
    const [currentPage,setCurrentPage] = useState(0);
    const handlePageChange = (event:React.MouseEvent) => {
        const pageId = event.currentTarget.getAttribute("data-id");
        setCurrentPage(Number(pageId));
    }
    const [balls,setBalls] = useState<ball[]>([]);
    //生成泡泡
    const createBall = ():ball => {
        return{
            id:Date.now()+Math.random(),
            positive_x:Math.random() * window.innerWidth,
            positive_y:window.innerHeight + 100,
            duration:Math.random() * 4 + 2
        };
        
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            const newBall = createBall();
            setBalls(prev=>[...prev,newBall]);
            setTimeout(()=>{
                setBalls(prev=>prev.filter(item=>item.id !== newBall.id))
            },newBall.duration * 1000)
        },300)
        return ()=>clearInterval(timer);
    },[])
    return(
        <div className={style.main}>
            {balls.map((item) => (
                <div
                    key={item.id}
                    className={style.bubble}
                    style={{
                    left: `${item.positive_x}px`,
                    top: `${item.positive_y}px`,
                    animationDuration: `${item.duration}s`
                    }}
                />
            ))}
            {currentPage===0&&(
                <>
                    <h1 className={style.title1}>UI界面设计</h1>
                    <h3 className={style.title2}>User Interface Design</h3>
                    <div className={style.indexBody}>
                        <div className={style.iphone}>
                            <div className={style.iphone_btn} data-id="1" onClick={handlePageChange}>手机端</div>
                        </div>
                        <div className={style.bubble_body}>
                            <>
                                <span className={style.span1}>UI</span>
                                <span className={style.span2}>Design</span>
                            </>
                        </div>
                        <div className={style.web}>
                            <div className={style.Web_btn} data-id="2" onClick={handlePageChange}>网页端</div>
                        </div>
                    </div>
                </>
            )}
            {currentPage===1&&(
                <>
                    <Iphone setCurrentPage={setCurrentPage}/>
                </>
            )}
            {currentPage===2&&(
                <>
                    <Web setCurrentPage={setCurrentPage}/>
                </>
            )}
        </div>
        
    );
}
export default UIDesignIndex