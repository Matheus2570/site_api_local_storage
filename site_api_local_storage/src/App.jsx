import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Nav from "./components/navBarra"
import Pagina1 from "./pages/pagina1";
import Pagina2 from "./pages/pagina2";
import Pagina3 from "./pages/pagina3"





function App() {
  return (
<>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Pagina1/>}/>
        <Route path="/page2" element={<Pagina2/>}/>
        <Route path="/page3" element={<Pagina3/>}/>
      </Routes>
    </BrowserRouter>
</> 
  );
}

export default App;
