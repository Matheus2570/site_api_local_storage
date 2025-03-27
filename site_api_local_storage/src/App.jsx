import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Nav from "./components/navBarra"
import Pagina1 from "./pages/pagina1";
import Pagina2 from "./pages/pagina2";





function App() {
  return (
<>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Pagina1/>}/>
        <Route path="/page2" element={<Pagina2/>}/>
      </Routes>
    </BrowserRouter>
</> 
  );
}

export default App;
