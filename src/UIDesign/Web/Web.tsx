type Props = {
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>
}
const WebList = [
    {page_id:1,name:"“食尚华夏”网页端界面设计",src:SSWebVideo},
    {page_id:2,name:"“儿童社区医院疫苗接种”电子屏设计",src:WebSub},
    {page_id:3,name:"“Ai薪引擎”网页设计",src:AIVideo},
];
import { useState } from "react";
import AIVideo from "../../assets/AIVideo.mp4";
import SSWebVideo from "../../assets/ssWebVideo.mp4";
import WebSub from "../../assets/WebSubSearch.mp4";
import style from "./Web.module.css";
const Iphone:React.FC<Props> = ({setCurrentPage}) => {
    const [currentPageID,setCurrentPageID] = useState(1);
    const handleReturn = () => {
        setCurrentPage(0);
    }
    const handleNextPage = () => {
        setCurrentPageID(currentPageID+1);
    }
    const handlePrevPage = () => {
        setCurrentPageID(currentPageID-1);
    }
    return(
        <div className={style.webPage}>
            <h1 className={style.h1} onClick={handleReturn}>&lt;&nbsp;&nbsp;网页端</h1>
            <div className={style.iphoneBody}>
                <div className={style.prev_body}>
                    <div className={`${style.prev} ${currentPageID===1?style.hidden:""}`} onClick={handlePrevPage}>
                        &lt;
                    </div>
                </div>
                <div className={style.startLink}>
                    <h2 className={style.videoTitle}>{WebList.find(item=>item.page_id===currentPageID)?.name || ""}</h2>
                    <video key={WebList.find(item=>item.page_id===currentPageID)?.page_id} className={style.videoBody} src={
                        WebList.find(item=>item.page_id===currentPageID)?.src || ""
                    } controls/>
                </div>
                <div className={style.next_body}>
                    <div className={`${style.next} ${currentPageID===WebList.length?style.hidden:""}`} onClick={handleNextPage}>
                        &gt;
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Iphone;