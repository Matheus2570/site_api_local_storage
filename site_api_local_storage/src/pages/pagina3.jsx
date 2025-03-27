import { useEffect, useState } from "react"; 
import "./pagina3.css"; 

function Pagina3() { 
  // ESTADO PARA ARMAZENAR INFORMAÇÕES DO PAÍS
  const [informacoesPais, setInformacoesPais] = useState(null); 


   // USE EFFECT PARA BUSCAR INFORMAÇÕES DO PAÍS NO LOCAL STORAGE
useEffect(() => {
  // BUSCA INFORMAÇÕES DO PAÍS NO LOCAL STORAGE
  const salvarInformacoes = localStorage.getItem("paisSelecionado");
  // VERIFICA SE HÁ INFORMAÇÕES DO PAÍS
  if (salvarInformacoes) {
    // ATUALIZA O ESTADO COM AS INFORMAÇÕES DO PAÍS
    setInformacoesPais(JSON.parse(salvarInformacoes));
  }
}, []);

  // VERIFICA SE HÁ INFORMAÇÕES DO PAÍS
  if (!informacoesPais) { 
    return <h2>Nenhuma informação de país disponível.</h2>; 
  } 

  // ATRIBUIÇÃO DAS INFORMAÇÕES DO PAÍS
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
      <p style={{color: "black", fontSize: "0.9em", position: "fixed", top: "93%", right: "1%"}}>Feito por Vitor e Valentina</p>

    </div> 
  ); 
} 

export default Pagina3;