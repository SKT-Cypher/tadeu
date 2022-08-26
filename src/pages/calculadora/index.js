import { useState } from "react";
import './index.scss';

export default function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resul, setResul] = useState(0);


    function somar() {
        let x = n1 + n2;
        setResul(x);
    }

    return(
        <section className="cotador">

            <h1> Calculadora</h1>

            <div> Número 1: <input type="number" value={n1} onChange={e => setN1(Number(e.target.value))}></input> </div>
            <div> Número 2: <input type="number" value={n2} onChange={e => setN2(Number(e.target.value))}></input> </div>
            <div>  {resul} </div>

            <button onClick={somar}> SOMAR </button>
        </section>
    )
}

