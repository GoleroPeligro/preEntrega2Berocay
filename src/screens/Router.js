import Home from "../screens/Home";
import ItemDetail from "../components/Home/ItemDetail/ItemDetail";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/container/ItemListConatiner/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer name= "Pablo"/>}></Route>
        <Route path="/category/:cat" element={<Home />}></Route>
        <Route path="/product/:idProduct" element={<ItemDetail />}></Route>
        <Route path="/*" element={<div>404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;