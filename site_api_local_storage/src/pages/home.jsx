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
          nomeOficial: pais.name?.official || "Sem nome oficial",
          capital: pais.capital ? pais.capital[0] : "Sem capital",
          lingua: pais.languages? Object.values(pais.languages).join(", ")  : "Desconhecida",     
          moeda: pais.currencies ? Object.values(pais.currencies).map((m) => m.name).join(", ") : "Sem moeda oficial",           
          populacao: pais.population ? pais.population.toLocaleString() : "Desconhecida",
          continente: pais.continents ? pais.continents[0] : "Desconhecido",
          regiao: pais.region || "Desconhecida",
          status: pais.independent ? "Independente" : "Não independente",
          bandeira: pais.flags?.png || "Sem bandeira",
          maps: pais.maps?.googleMaps || "Sem link para o mapa"
        }));

 // Object.values() extrai todos os valores de um objeto e retorna em um array. 


// Para o exemplo:
// pais.currencies = { 
// USD: { name: "Dollar" }, 
// EUR: { name: "Euro" } 
// }
// Object.values(pais.currencies) 
// retorna: [{ name: "Dollar" }, { name: "Euro" }]


// pais.languages = { eng: "English", spa: "Spanish" }
// Object.values(pais.languages) retorna: ["English", "Spanish"]

// 'join' junta elementos de um array em uma string, separando com o que for especificado (ex: vírgula)
// 'name?.official' acessa o nome oficial de um país de forma segura, retornando undefined se não existir

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
