import style from "./Menu.module.css";
type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  currentPage:number
}
const menuList = [
  '关于我',
  '我的爱好',
  '视觉传达设计',
  'UI界面设计',
  '产品设计',
  '已落地项目'
]
const Menu: React.FC<Props> = ({setCurrentPage,currentPage}) => {
  const handleMenuMove = (index : number)=>{
    setCurrentPage(index);
  }

  return (
    <section className={style.section}>
      <h1 className={style.title}>Profile</h1>
      <h1 className={style.subtitle}>简介</h1>
      <ul className={style.ul}>
        {menuList.map((item,index) => (
          <li className={`${style.li} ${index === currentPage ? style.mouseClick : ''}`} key={index} onClick={() => handleMenuMove(index)}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Menu