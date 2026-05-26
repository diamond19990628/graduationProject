import { useState } from "react";
import Header from "./component/Header/Header";
import Menu from "./component/Menu/Menu";
import Main from "./index/index";
import ProductDesign from "./productDesign/index";
import UIDesign from "./UIDesign/index";
import VisualDesign from "./VisualDesign";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu setCurrentPage={setCurrentPage}/>
        {currentPage===1 && <Main/>}
        {currentPage===2 && <VisualDesign/>}
        {currentPage===3 && <UIDesign/>}
        {currentPage===4 && <ProductDesign/>}
      </div>
    </>
  );
};

export default App;