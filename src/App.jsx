 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Cabecalho from "./Cabecalho"; 
 import "./reset.css";
import Home from "./Home";
import Cadastro from "./Cadastro";


function App() {

  return (
    <>
      <BrowserRouter>
      <Cabecalho/>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
