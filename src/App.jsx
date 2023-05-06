import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/contacto" element={<Contacto/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
