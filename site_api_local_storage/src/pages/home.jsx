import { useEffect, useState } from "react";

function SeletorDePais() {
  const [paises, setPaises] = useState([]); // Lista de países
  const [paisSelecionado, setPaisSelecionado] = useState(null); // País selecionado

  useEffect(() => {
    const buscarPaises = async () => {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all");
        const dados = await resposta.json();

        // Formata os dados necessários
        const paisesFormatados = dados.map((pais) => ({
          nome: pais.name.common,
          nomeOficial: pais.name.official,
          capital: pais.capital ? pais.capital[0] : "Sem capital",
          lingua: pais.languages   ? (pais.languages) : "Desconhecida",
          moeda: pais.currencies  ? (pais.currencies)   : "Sem moeda oficial",
          populacao: pais.population  ? pais.population.toLocaleString() : "Desconhecida",
          continente: pais.continents ? pais.continents[0] : "Desconhecido",
          regiao: pais.region || "Desconhecida",
          status: pais.independent ? "Independente" : "Não independente",
          bandeira: pais.flags.png,
          maps: pais.maps.googleMaps,
        }));

        // Ordena os países por nome
        setPaises(
          paisesFormatados.sort((a, b) => a.nome.localeCompare(b.nome))
        );
      } catch (erro) {
        console.error("Erro ao buscar países:", erro);
      }
    };

    buscarPaises();
  }, []);

  // Atualiza o estado quando um país é selecionado
  const handleSelecionarPais = (evento) => {
    const pais = paises.find((p) => p.nome === evento.target.value);
    setPaisSelecionado(pais);
  };

  // Salva as informações no localStorage
  const salvarPais = () => {
    if (paisSelecionado) {
      localStorage.setItem("paisSelecionado", JSON.stringify(paisSelecionado));
      alert(`País salvo: ${paisSelecionado.nome}`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Selecione um país:</h2>

      <select onChange={handleSelecionarPais}>
        <option value="">Selecione um país</option>
        {paises.map((pais) => (
          <option key={pais.nome} value={pais.nome}>
            {pais.nome}
          </option>
        ))}
      </select>

<img src={paisSelecionado?.bandeira} 
alt={paisSelecionado?.nome}/>


      <button onClick={salvarPais} disabled={!paisSelecionado}>
        Salvar no LocalStorage
      </button>
    </div>
  );
}

export default SeletorDePais;
