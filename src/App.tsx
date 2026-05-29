import { useState } from "react";
import Header from "./component/Header/Header";
import Menu from "./component/Menu/Menu";
import Main from "./index/index";
import ProductDesign from "./productDesign/index";
import Detail from "./reallyProject/details";
import ReallyProject from "./reallyProject/index";
import UIDesign from "./UIDesign/index";
import VisualDesign from "./VisualDesign";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  if (currentPage === 6) {
    return <Detail setAppPage={setCurrentPage}/>;
  }
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        {currentPage===1 && <Main/>}
        {currentPage===2 && <VisualDesign/>}
        {currentPage===3 && <UIDesign/>}
        {currentPage===4 && <ProductDesign/>}
        {currentPage===5 && <ReallyProject setAppPage={setCurrentPage}/>}
      </div>
    </>
  );
};

export default App;