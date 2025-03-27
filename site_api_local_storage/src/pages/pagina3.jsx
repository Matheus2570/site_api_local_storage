import { useEffect, useState } from "react";
import "./pagina3.css";

function Pagina3() {
  const [informacoesPais, setInformacoesPais] = useState(null);

  useEffect(() => {
    const salvarInformacoes = localStorage.getItem("paisSelecionado");
    if (salvarInformacoes) {
      setInformacoesPais(JSON.parse(salvarInformacoes));
    }
  }, []);

  if (!informacoesPais) {
    return <h2>Nenhuma informação de país disponível.</h2>;
  }

  const paisSelecionado = informacoesPais;

  return (
    <div className="container1">
      <h2>Detalhes do País</h2>
      <p className="informacoes-p">
        <strong>Capital:</strong> {paisSelecionado.capital}
      </p>
      <p className="informacoes-p">
        <strong>Continente:</strong> {paisSelecionado.continente}
      </p>
      <p className="informacoes-p">
        <strong>Região:</strong> {paisSelecionado.regiao}
      </p>
    </div>
  );
}

export default Pagina3;
