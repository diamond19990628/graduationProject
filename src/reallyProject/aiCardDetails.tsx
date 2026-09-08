import { Link } from "react-router-dom";
import ThreeDDesign from "../assets/3DDesign.mp4";
import ReallyThreeDesign from "../assets/Really3Ddesign.mp4";
import back from "../assets/ai-card-back.webp";
import front from "../assets/ai-card-front.webp";
import inside from "../assets/ai-card-inside.webp";
import miniProgram from "../assets/ai-card-mini-program.webp";
import screen from "../assets/ai-card-screen.webp";
import Header from "../component/Header/Header";
import { useQueryPage } from "../router/useRoutePage";
import style from "./aiCardDetails.module.css";

const sections = ["设备结构设计", "设备内部", "产品展示视频", "设备对应小程序"];

export default function AICardDetails() {
  const [page, setPage] = useQueryPage("section", 1, sections.length);
  return (
    <>
      <Header />
      <main className={style.main}>
        <Link className={style.back} to="/projects?page=3" aria-label="返回已落地项目">〈</Link>
        <div className={style.body}>
          <nav className={style.navigation} aria-label="AI CARD详情分类">
            {sections.map((label, index) => (
              <button key={label} className={`${style.section} ${page === index + 1 ? style.active : ""}`}
                aria-current={page === index + 1 ? "page" : undefined} onClick={() => setPage(index + 1)}>{label}</button>
            ))}
          </nav>
          <section className={style.content} aria-label={sections[page - 1]}>
            {page === 1 && <div className={style.structure}>
              <video className={style.videoPlaceholder} controls playsInline preload="metadata">
                <source src={ReallyThreeDesign} type="video/mp4"/>
              </video>
              <div className={style.productImages}>
                <img className={style.device} src={back} alt="设备背面结构" />
                <img className={style.device} src={front} alt="设备正面结构" />
                <img className={style.screen} src={screen} alt="设备屏幕显示效果" />
              </div>
            </div>}
            {page === 2 && <svg className={style.inside} viewBox="0 0 760 530" role="img" aria-label="设备内部：锂电池、扬声器、PCBA、显示屏、led灯条、NFC模块">
              <defs><marker id="card-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M1 1 L7 4 L1 7" fill="none" stroke="#83cdd6" strokeWidth="1.5" /></marker></defs>
              <svg x="120" y="45" width="520" height="390" viewBox="900 650 2300 1725">
                <image href={inside} width="4032" height="3024" />
              </svg>
              <g fill="none" stroke="#83cdd6" strokeWidth="3" markerEnd="url(#card-arrow)">
                <path d="M280 215 V85" /><path d="M175 250 H90" />
                <path d="M580 195 H710" /><path d="M490 295 H660" />
                <path d="M410 340 V465" /><path d="M290 340 V500" />
              </g>
              <g fontSize="19" fill="#111" textAnchor="middle">
                <text x="280" y="32">锂电池</text><text x="53" y="256">扬声器</text>
                <text x="728" y="176">PCBA</text><text x="690" y="301">显示屏</text>
                <text x="445" y="485">led灯条</text><text x="290" y="527">NFC模块</text>
              </g>
            </svg>}
            {page === 3 && <video src={ThreeDDesign} className={style.videoPlaceholder} controls playsInline preload="metadata"></video>}
            {page === 4 && <img className={style.miniProgram} src={miniProgram} alt="碰碰星小程序介绍页面" />}
          </section>
        </div>
      </main>
    </>
  );
}
