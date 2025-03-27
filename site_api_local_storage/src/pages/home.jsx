import { useEffect, useState } from "react";
import "./home.css"; // Importa os estilos

function SeletorDePais() {
  const [paises, setPaises] = useState([]); // Lista de países
  const [paisSelecionado, setPaisSelecionado] = useState(null); // País selecionado

  useEffect(() => {
    const buscarPaises = async () => {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all");
        const dados = await resposta.json();

        // Formata os dados dos países
        const paisesFormatados = dados.map((pais) => ({
          nome: pais.name?.common || "Sem nome",
          capital: pais.capital?.join(", ") || "Sem capital",
          moeda: pais.currencies  ? Object.values(pais.currencies).map((m) => m.name).join(", ")  : "Sem moeda oficial",
          populacao: pais.population || "Desconhecida",
          continente: pais.continents?.join(", ") || "Desconhecido",
          bandeira: pais.flags?.png || "Sem bandeira",
        }));

        // Ordena os países por ordem alfabética
        setPaises(paisesFormatados.sort((a, b) => a.nome.localeCompare(b.nome)));
      } catch (erro) {
        console.error("Erro ao buscar países:", erro);
      }
    };

    buscarPaises();
  }, []);

  // Atualiza o estado quando um país é selecionado
  const selecionarPais = (evento) => {
    const pais = paises.find((p) => p.nome === evento.target.value);
    setPaisSelecionado(pais);
  };

  // Salva as informações no LocalStorage
  const salvarPais = () => {
    if (paisSelecionado) {
      localStorage.setItem("paisSelecionado", JSON.stringify(paisSelecionado));
      alert(`País salvo: ${paisSelecionado.nome}`);
    }
  };

  return (
    <div className="conteiner">
      <div className="titulo">Selecione um país:</div>

      <select className="seletor" onChange={selecionarPais}>
        <option value="">Selecione um país</option>
        {paises.map((pais) => (
          <option key={pais.nome} value={pais.nome}>
            {pais.nome}
          </option>
        ))}
      </select>

      {paisSelecionado && (
        <div className="cartao">
          <img className="bandeira" src={paisSelecionado.bandeira} alt={paisSelecionado.nome} />
        </div>
      )}


      <button className="botao" onClick={salvarPais} disabled={!paisSelecionado}>
        Salvar no LocalStorage
      </button>
    </div>
  );
}

export default SeletorDePais;
