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
      <p><strong>Capital:</strong> {paises.capital}</p>
      <p><strong>Língua:</strong> {paises.lingua}</p>
        </div>
      </div>
    </div>
  );
}

export default Pagina1;