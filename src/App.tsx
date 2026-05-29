import { useState } from "react";
import StartDialog from "./component/common/startDialog";
import Header from "./component/Header/Header";
import Menu from "./component/Menu/Menu";
import Main from "./index/index";
import Mypage from "./mypage/index";
import ProductDesign from "./productDesign/index";
import Detail from "./reallyProject/details";
import ReallyProject from "./reallyProject/index";
import UIDesign from "./UIDesign/index";
import VisualDesign from "./VisualDesign";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [DialogState,setDialogState] = useState(true);
  if (currentPage === 6) {
    return <Detail setAppPage={setCurrentPage}/>;
  }
  if(DialogState){
    return <StartDialog setDialogState={setDialogState}/>
  }
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        {currentPage===0 && <Mypage/>}
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