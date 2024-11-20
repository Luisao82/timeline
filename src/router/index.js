import { BrowserRouter,Routes,Route } from "react-router-dom";

import Inicio from "../views/inicio";
import Mesa from "../views/mesa"
import Configuration from "../views/configuration";

const  Router = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>   
          <Route path="/" element={<Inicio />} exact />             
          <Route path="/Partida" element={<Mesa />} exact />
          <Route path="/Configuration" element={<Configuration />} exact />
        </Routes>             
      </BrowserRouter>
    </>
  )
}

export default Router