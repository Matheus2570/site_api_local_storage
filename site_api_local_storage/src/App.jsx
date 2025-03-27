import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Nav from "./components/navBarra"
import Pagina1 from "./pages/pagina1";




function App() {
  return (
<>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Pagina1/>}/>
      </Routes>
    </BrowserRouter>
</> 
  );
}

export default App;
