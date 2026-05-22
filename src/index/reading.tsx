import { useState } from "react";
import Book1 from "../assets/book1.svg?react";
import Book2 from "../assets/book2.svg?react";
import Book3 from "../assets/book3.svg?react";
import Book4 from "../assets/book4.svg?react";
import Book5 from "../assets/book5.svg?react";
import Book6 from "../assets/book6.svg?react";
import Book7 from "../assets/book7.svg?react";
import style from "./reading.module.css";
const bookList = [
    {id:1, name:"红楼梦", src:Book1,comment:"我常想曹雪芹在悼红轩中“披阅十载，增删五"+
        "次时，该是怀着怎样的心情？他写尽人间百"+
        "态，却又在字里行间藏着对生命的悲悯。那些"+
        "鲜活的人物，无论是主子还是丫鬟，都在时代"+
        "的洪流中身不由己，他们的悲欢离合、兴衰荣"+
        "辱，最终都化作了对“世事洞明皆学问，人情"+
        "练达即文章”的无奈注解。\n\n"+
        "这梦般的故事，道尽了人生的荒诞与真实，也"+
        "让我们在百年之后，依然能从文字里照见自己"+
        "的影子——繁华终会落幕，但那些曾闪耀过的"+
        "人性光芒，终究不会被时光完全掩埋。"
    },
    {id:2,name:"我与地坛", src:Book2,comment:"史铁生以笔为杖，将身体的苦难化作精神的力量，用文字照亮无数迷茫的心灵。他告诉我们，生命的意义从不在于完美无缺，而在于直面困境后依然热爱生活，在有限的时光里拓宽精神的边界。地坛不仅是史铁生的精神家园，更成为我们每个人的心灵慰藉，提醒我们接纳命运的不完美，以平和之心面对挫折，以坚韧之姿奔赴生活。<br><br>合上书卷，地坛的古柏与母亲的身影依旧清晰。《我与地坛》是一部生命启示录，它让我们在苦难中看见希望，在遗憾中懂得珍惜，即便身处泥泞，也始终心怀暖阳，向阳而行。"},
    {id:3,name:"无字之书与生长", src:Book3,comment:"原来最朴素的表达，早把生存的哲学揉进了肌理，如同树木的年轮，在看不见的地方，记录着风的方向。读完后，我忽然明白，所谓结束，不过是换了种存在的方式。那些被反复摩挲的字句，早已顺着指尖渗入血脉，成为判断温度的标尺、丈量善恶的准绳。就像烧尽的草木化作春泥，看似消失的，都在以更隐秘的方式，参与着下一场生长。<br><br>原来真正的永恒，从不在凝固的形态里，而在那些被记住的褶皱、被消化的字句里——它们不再是书页上的符号，而是成为了凝视世界的眼睛，丈量脚步的土地，成为“我”之所以为“我”的，不可分割的部分。"},
    {id:4,name:"活着", src:Book4,comment:"活着，就是最好的答案。《活着》不是一本让人绝望的书，而是一首献给生命的赞歌。它让我们看见：即使命运如蝼蚁，灵魂也可如鲲鹏。合上书页，或许会更懂得：在无常的世界里，认真活着，已是一种英雄主义。"},
    {id:5,name:"平凡的世界", src:Book5,comment:"这本书让我感受到了生活的平凡与伟大。在这个世界上，大多数人都是平凡的，但正是这些平凡的人，用他们的勤劳和智慧，创造了不平凡的生活。这本书让我懂得了要珍惜眼前的生活，要勇敢地面对困难，要坚定地追求自己的梦想。它是一部值得反复品味的经典之作，每一次阅读都会有新的感悟和收获。"},
    {id:6,name:"Let them", src:Book6,comment:"读完《Let Them》，我脑海里一直回响着一句话——“不要干涉别人的因果”。其实这本书用这句话特别契合。它教会我们，当别人做出某种选择的时候，无论你是喜欢还是不喜欢，认同还是不认同，都可以用一句简单的话回应：Let them。让他们去做，让他们去走，让他们去经历。<br><br>《Let Them》让我学会了放下“控制”的执念。原来我们能掌控的，永远只是自己。你想要别人善良，那是你的期待，但别人是否善良，是他们的因果；你希望别人理解你，那是你的渴望，但别人是否理解，是他们的选择。与其花力气去改变别人，不如守住自己的善意和清醒。"},
    {id:7,name:"百年孤独", src:Book7,comment:"《百年孤独》是魔幻现实主义的代表作，通过布恩迪亚家族七代人的兴衰历程，展现了拉丁美洲的历史变迁。马尔克斯以独特的叙事手法，将现实与幻想融为一体，创造出一个既熟悉又陌生的世界。书中的人物命运多舛，但他们始终保持着对生活的热爱和对未来的憧憬。这部作品不仅是文学的瑰宝，更是对人性的深刻探讨。"}
];
const Reading: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [comment, setComment] = useState("");
    const [title, setTitle] = useState("");
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const bookId = event.currentTarget.getAttribute("data-id");
        const book = bookList.find((item)=>{return item.id === Number(bookId)});
        if (book) {
            setComment(book.comment);
            setTitle(book.name);
        }
    }
    return(
        <>
            <h2 className={style.h2}>（试试点击这些书）</h2>
            <div className={style.page}>
                <div className={style.book}>
                    <div className={style.book_list}>
                        {bookList.slice(0,4).map((item)=>(
                            <div key={item.id} className={style.book_img} onClick={handleClick} data-id={item.id}>
                                {<item.src/>}
                            </div>
                        ))}
                    </div>
                    <div className={style.book_list2}>
                        {bookList.slice(4,bookList.length).map((item)=>(
                            <div key={item.id} data-id={item.id} className={style.book_img2} onClick={handleClick}>
                                {<item.src/>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.showComment}>
                    <div className={style.remark}>
                        <div className={style.remark_content}>
                            <h3 className={style.remark_title}>{title===""?"":`《${title}》`}</h3>
                            <h4 className={style.h4}>{title===""?"":`我的感受`}</h4>
                            <p className={style.remark_text}>{comment}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    );
}
export default Reading;