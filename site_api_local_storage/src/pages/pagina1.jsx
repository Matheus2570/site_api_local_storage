import { useEffect, useState } from "react";
import "./pagina1.css"

function Pagina1() {
  const [paises, setPais] = useState(null);

  useEffect(() => {
    const paisSalvo = localStorage.getItem("paisSelecionado");
    if (paisSalvo) {
      setPais(JSON.parse(paisSalvo));
    }
  }, []);

  if (!paises) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="card">
        <h2 className="titulo">Detalhes do País</h2>
      <p><strong>Nome Oficial:</strong> {paises.nomeOficial}</p>
      <p><strong>Mapa:</strong> {paises.maps}</p>
      <p><strong>Status:</strong> {paises.status}</p>
      <p><strong>Bandeira:</strong></p>
<img 
        src={paises.bandeira} 
        alt={`Bandeira de ${paises.nomeOficial || "país desconhecido"}`} 
        style={{ width: "200px", border: "1px solid #ccc", borderRadius: "8px" }} 
      />  
        </div>
      </div>
    </div>
  );
}

export default Pagina1;