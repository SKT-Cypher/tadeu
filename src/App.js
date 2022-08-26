import { CardPessoa } from './pages/component';
import './App.css';

function App() {
  return (
    <section className="pagina">
      <h1>componentes</h1>

      <section className='opa'>

        <div><CardPessoa nome="Yasuo" maestria={1000000} elo="Platina" avatar="./transferir.jpg" 
        alinhamento="row" margem="margem1"/> </div> 

         <br></br> <br></br> <br></br> 

        <div><CardPessoa nome="Zed" maestria={400000} elo="Prata" avatar="./zed.jpg"
         alinhamento="row2" margem="margem2"/> </div>

        <br></br> <br></br> <br></br> 
       
        <div><CardPessoa nome="Master Yi" maestria={1000} elo="Diamante" avatar="yi.jpg" alinhamento=
        "colum" margem="margem3"/></div>

         <br></br> <br></br> <br></br> 

         </section>
    </section>

    
  );
}

export default App;
