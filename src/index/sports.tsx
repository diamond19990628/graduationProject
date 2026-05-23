import { useState } from "react";
import Badminton from "../assets/Badminton.png";
import Ski from "../assets/ski.png";
import Swim from "../assets/swim.png";
import style from "./sports.module.css";
const sportsList = [
    {id:1,name:"滑雪",src:Ski,background:"linear-gradient(145deg,rgba(140,246,111,0.2),rgba(228,81,81,0.2),rgba(255,243,133,0.2))",isShow:"false"},
    {id:2,name:"羽毛球",src:Badminton,background:"linear-gradient(145deg,rgba(111,136,246,0.2),rgba(250,99,99,0.2),rgba(155,219,134,0.2))",isShow:"false"},
    {id:3,name:"游泳",src:Swim,background:"linear-gradient(145deg,rgba(217,111,246,0.2),rgba(81,228,81,0.2),rgba(135,133,255,0.2))",isShow:"false"}
];
const Sports:React.FC = ()=>{
    const [currentId,setCurrentId] = useState(0);
    const [list,setList] = useState(sportsList);
    const [currentName,setCurrentName] = useState("");
    const handleClick = (event:React.MouseEvent)=>{
        const id = event.currentTarget.getAttribute("data-id");
        setCurrentId(Number(id));
        setList(
            list.map(item=>item.id===currentId?{...item,isShow:"true"}:item)
        );
        console.log(list);
    }
    return(
        <>
            <div className={style.sports_body}>
                {list.map((item)=>(
                    <div className={style.sports_card}>
                        <div className={style.sports_contents} style={{background:item.background}} onClick={handleClick} data-id={item.id}>
                            <div className={style.sports_photo_show}>
                                {item.id===currentId||item.isShow==="true"?<img className={style.img} src={item.src}/>:"点击"}
                            </div>
                        </div>
                        <p>{item.id===currentId||item.isShow==="true"?item.name:""}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Sports;