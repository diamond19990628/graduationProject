import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
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
import AICardDetails from "./reallyProject/aiCardDetails";

const Layout = () => (
  <>
    <Header />
    <div style={{ display: "flex" }}><Menu /><Outlet /></div>
  </>
);

const App = () => {
  const [DialogState, setDialogState] = useState(true);
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Mypage />} />
          <Route path="interests/:category?" element={<Main />} />
          <Route path="visual-design/:category?" element={<VisualDesign />} />
          <Route path="ui-design/:category?" element={<UIDesign />} />
          <Route path="product-design/:category?" element={<ProductDesign />} />
          <Route path="projects" element={<ReallyProject />} />
        </Route>
        <Route path="projects/poster" element={<Detail />} />
        <Route path="projects/ai-card" element={<AICardDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {DialogState && pathname !== "/projects/poster" && pathname !== "/projects/ai-card" && <StartDialog setDialogState={setDialogState} />}
    </>
  );
};

export default App;
