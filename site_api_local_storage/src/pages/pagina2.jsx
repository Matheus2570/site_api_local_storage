import { useState } from "react";
import "./pagina2.css"

function Pagina2() {
    const [lingua] = useState(() => JSON.parse(localStorage.getItem("lingua")) || "")
    const [moeda] = useState(() => JSON.parse(localStorage.getItem("moeda")) || "")
    const [populacao] = useState(() => JSON.parse(localStorage.getItem("populacao")) || "")


return (
    <div className="bloco-todos">
    <section className="bloco1">
        <h3>Língua</h3>
        <p>{lingua}</p>
    </section>

<section className="bloco2">
<h3>Moeda</h3>
<p>{moeda}</p>
</section>

<section className="bloco3">
        <h3>População</h3>
        <p>{populacao}</p>
    </section>
    </div>
)
}
export default Pagina2