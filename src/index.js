import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calculadora from './pages/calculadora/index.js';
import Tarefas from './pages/lista';
import SituacaoAluno from './pages/Aluno';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SituacaoAluno/>
  </React.StrictMode>
);

