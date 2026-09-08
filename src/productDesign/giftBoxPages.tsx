import style from "./giftBoxPages.module.css";
import laiConcept from "../assets/gift-lai-concept.webp";
import laiPackagesTop from "../assets/gift-lai-packages-top.webp";
import laiPackagesBottom from "../assets/gift-lai-packages-bottom.webp";
import laiDetailsTop from "../assets/gift-lai-details-top.webp";
import laiDetailsMiddle from "../assets/gift-lai-details-middle.webp";
import laiOverview from "../assets/gift-lai-overview.webp";
import bambooConcept from "../assets/gift-bamboo-concept.webp";
import bambooBasket from "../assets/gift-bamboo-basket.webp";
import bambooPackages from "../assets/gift-bamboo-packages.webp";
import bambooMaterials from "../assets/gift-bamboo-materials.webp";

export default function GiftBoxPages({ page }: { page: number }) {
    return <section className={style.page}>
        {page === 2 && <>
            <h2 className={style.title}>来伊份月光中秋礼盒包装设计</h2>
            <div className={style.laiyifen}>
                <div className={style.leftColumn}>
                    <img src={laiConcept} alt="来伊份礼盒设计理念" />
                    <img src={laiPackagesTop} alt="来伊份月饼包装第一组" />
                    <img src={laiPackagesBottom} alt="来伊份月饼包装第二组" />
                </div>
                <div className={style.rightColumn}>
                    <img className={style.detailsTop} src={laiDetailsTop} alt="礼盒展开与角色设计" />
                    <img className={style.detailsMiddle} src={laiDetailsMiddle} alt="礼盒不同角度" />
                    <img src={laiOverview} alt="来伊份礼盒与手提袋整体效果" />
                </div>
            </div>
        </>}
        {page === 3 && <>
            <h2 className={style.title}>竹韵·秋夕竹编月饼礼盒设计</h2>
            <div className={style.bamboo}>
                <img className={style.concept} src={bambooConcept} alt="竹韵秋夕设计灵感与文化内涵" />
                <img className={style.basket} src={bambooBasket} alt="竹编月饼礼盒效果图" />
                <img className={style.packages} src={bambooPackages} alt="八款月饼包装" />
                <img className={style.materials} src={bambooMaterials} alt="礼盒材质工艺与搭配说明" />
            </div>
        </>}
    </section>;
}
