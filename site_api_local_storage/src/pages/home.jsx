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
          nome: pais.name?.common || "Sem nome",
          nomeOficial: pais.name?.official || "Sem nome oficial",
          capital: pais.capital?.join(", ") || "Sem capital",
          lingua: pais.languages ? Object.values(pais.languages).join(", ") : "Desconhecida",
          moeda: pais.currencies 
            ? Object.values(pais.currencies).map(m => m.name).join(", ") 
            : "Sem moeda oficial",
          populacao: pais.population || "Desconhecida",
          continente: pais.continents?.join(", ") || "Desconhecido",
          regiao: pais.region || "Desconhecida",
          status: pais.independent ? "Independente" : "Não independente",
          bandeira: pais.flags?.png || "Sem bandeira",
          maps: pais.maps?.googleMaps || "Sem mapa",
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
    <div>
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
