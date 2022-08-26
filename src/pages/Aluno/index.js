import { useEffect, useState } from "react";
import './index.scss';

export default function SituacaoAluno(){
    const [media, setMedia] = useState(0);
    const [resul, setResul] = useState('---')


    function vereficarSituacao() {
        
        if (media >=5 ) {
            setResul('Aluno Passou!');
        }
        else if (media >= 3 && media < 5){
            setResul('Aluno está de recuperação');
        }
        else {
            setResul('Aluno ja era');
        }

       
    }



    return(
        <section className="page">
            <h1> Situação Aluno</h1>

            <div>
                Médias :  <input type="text" value={media} onChange={e => setMedia(Number(e.target.value))}></input>
            </div>

            <div>
                {resul}
            </div>

            <button onClick={vereficarSituacao}> Vereficar</button>
        </section>
    )
}