import { useEffect, useState } from "react";
 
function Pagina1() {
  const [paises, setPais] = useState(null);
 
  useEffect(() => {
    const paisSalvo = localStorage.getItem("paisSelecionado");
    if (paisSalvo) {
     
        setPais(JSON.parse(paisSalvo));
      }
  }, []);
 

 
  return (
<div>
<h2>Detalhes do País</h2>
<p><strong>Nome Oficial:</strong> {paises.nomeOficial}</p>
<p><strong>Capital:</strong> {paises.capital}</p>
<p><strong>Língua:</strong> {paises.lingua}</p>


</div>
  );
}
 
export default Pagina1;