import { useEffect, useState } from "react";
import "./pagina2.css"

function Pagina2() {
    const [pais, setPais] = useState(null);

    useEffect(() => {
        const paisSalvo = localStorage.getItem("paisSelecionado");
        if (paisSalvo) {
            setPais(JSON.parse(paisSalvo));
        }
    }, []);

    if (!pais) {
        return (
            <center>
                <p>Carregando dados...</p>
            </center>
        );
    }

    return (
        <center>
            <div className="bloco-todos">
                <h2>Detalhes do País:</h2>
                <hr />
                <div className="teste">
                    <p className="bloco1">
                        <strong>Lingua:</strong> {pais.lingua || "Desconhecido"}
                    </p>
                    <p className="bloco2">
                        <strong>Moeda:</strong> {pais.moeda || "Desconhecida"}
                    </p>
                    <p className="bloco3">
                        <strong>População:</strong> {pais.populacao || "Desconhecida"}
                    </p>
                </div>
            </div>
      <p style={{color: "black", fontSize: "1.2em", position: "fixed", top: "93%", right: "1%"}}>Feito por Laura e Ana</p>

        </center>
    );
}

export default Pagina2;