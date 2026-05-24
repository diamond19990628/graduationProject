import { useState } from "react";
import style from "./index.module.css";
import Iphone from "./Iphone/Iphone";
const UIDesignIndex:React.FC = () => {
    const [currentPage,setCurrentPage] = useState(0);
    const handlePageChange = (event:React.MouseEvent) => {
        const pageId = event.currentTarget.getAttribute("data-id");
        setCurrentPage(Number(pageId));
    }
    return(
        <div className={style.main}>
            {currentPage===0&&(
                <>
                    <h1 className={style.title1}>UI界面设计</h1>
                    <h3 className={style.title2}>User Interface Design</h3>
                    <div className={style.indexBody}>
                        <div className={style.iphone}>
                            <div className={style.iphone_btn} data-id="1" onClick={handlePageChange}>手机端</div>
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
        </div>
        
    );
}
export default UIDesignIndex