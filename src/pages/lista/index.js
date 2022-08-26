import { useState } from "react";
import './index.scss'



export default function Tarefas() {
    const [tarefa, setTarefa] = useState('');
    const [lista, setLista] = useState([]);

    function addTarefa() {
        let novaLista = [...lista, tarefa];
        setLista(novaLista);
        setTarefa('');
    }

    function removerTarefa(t) {
        let novaLista = lista.filter(item => item !== t);
        setLista(novaLista);


    }

    function ItemTarefa(props) {

        return (
            <li>
                <span> {props.item} </span>                        
                <span onClick={e => props.removerTarefa(props.item)}> (x) </span>
            </li>
        )
    }
    


    return (
        <section className='pagina-tarefas'>
            <h1> Tarefas </h1> 

            <div>
                Nova Tarefa: <input type='text' value={tarefa} onChange={e => setTarefa(e.target.value)} /> 
                
                <button onClick={addTarefa}> Adicionar </button>
            </div>

            <ul>
                {lista.map(item => 
                    <ItemTarefa
                        key={item}
                        item={item}
                        removerTarefa={removerTarefa} />
                )}
            </ul>

        </section>
    )
}