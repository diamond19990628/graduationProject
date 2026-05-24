type Props = {
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>
}
import { useState } from "react";
import cztmVideo from "../../assets/czNoodes.mp4";
import sshxVideo from "../../assets/sshyVideo.mp4";
import xgyVideo from "../../assets/xgyVideo.mp4";
import xyypVideo from "../../assets/xyypVideo.mp4";
import xyypVideo2 from "../../assets/xyypVideo2.mp4";
import zjshVideo from "../../assets/zjshVideo.mp4";
import ScrollDialog from "../../component/common/Dialog";
import style from "./Iphone.module.css";
const smartPhoneList:Array<any> = [
    {page_id:1,name:"'鲜趣园'App界面设计",src:xgyVideo},
    {page_id:2,name:"“仲景生活”App界面设计",src:zjshVideo},
    {page_id:3,name:"“食尚华夏”手机端界面设计",src:sshxVideo},
    {page_id:4,name:"“校园医陪”手机端界面设计",src:xyypVideo},
    {page_id:5,name:"“池州滩面”手机端界面设计",src:cztmVideo}
];
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
        <>
            <h1 className={style.h1} onClick={handleReturn}>&lt;&nbsp;&nbsp;手机端</h1>
            <div className={style.iphoneBody}>
                <div className={style.prev_body}>
                    <div className={`${style.prev} ${currentPageID===1?style.hidden:""}`} onClick={handlePrevPage}>
                        &lt;
                    </div>
                </div>
                <div className={style.startLink}>
                    {currentPageID !== 4 && (
                        <ScrollDialog AppName={
                            smartPhoneList.find(item=>item.page_id===currentPageID)?.name || ""
                        } src={
                            smartPhoneList.find(item=>item.page_id===currentPageID)?.src|| ""
                        }/>
                    )}
                    {currentPageID === 4 &&(
                        <div className={style.school_body}>
                            <h2 className={style.school}>“校园医陪”手机端界面设计</h2>
                            <div>
                                <ScrollDialog AppName={"《患者端》"} src={xyypVideo} font_size={1.2}/>
                                <ScrollDialog AppName={"《陪诊端》"} src={xyypVideo2} font_size={1.2}/>
                            </div>
                        </div>
                    )}
                    <p>点击上方标题可播放视频</p>
                </div>
                <div className={style.next_body}>
                    <div className={`${style.next} ${currentPageID===smartPhoneList.length?style.hidden:""}`} onClick={handleNextPage}>
                        &gt;
                    </div>
                </div>
            </div>
        </>
    );
}
export default Iphone;