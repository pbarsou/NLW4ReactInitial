import React from 'react'; 
import ReactDOM from 'react-dom'; /* forma que o 'React' tem de trabalhar com o browser (web). O DOM é a 
árvore de elementos do HTML */
import App from './App'; // App é o nosso componente principal

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') /* busta o elemento que contém o 'id=root' no documento '.html' e joga
  o que está dentro do 'DOM' (neste caso '<App />') no elemento */

  /* '<App />' é o nosso componente principal. Componentes no 'React' são formas de isolar pedaços de 
  código e reaproveitá-los. (imagine como os widgets do Flutter) // essa forma de se escrever como uma 
  tag HTML, chamamos de JSX, que é a forma de utilização de js ou typescript dentro do html */
  // '<App />' é o componente que contém todos os outros.
);

