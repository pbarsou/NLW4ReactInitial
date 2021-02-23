import { useState } from 'react'; /* 'hook' que permite que modifiquemos o Estado das coisas. Estado é 
uma informação que queremos armazenar dentro do componente, que irá mudar ao longo do tempo. */

interface ButtonProps { // criação de Propriedade
  color: string; // propriedade 'color' sendo uma 'string'
  children: string; // pega os filhos (conteúdo) do componente
}

export function Button(props: ButtonProps) { /* exportando a função // como parâmetro passamos as
propriedades */
  const [counter, setCounter] = useState(1); /* 'useState' é um array de 2 posições, sendo o primeiro o
  valor e o segundo a função modificadora */

  function increment() { // função de incremento

    setCounter(counter + 1); /* no 'React', por conta da imutabilidade, nós não conseguimos alterar 
    varíaveis em memória, por isso não podemos passar 'counter ++;'. Dessa forma, precisamos ou criar 
    uma nova váriavel ou manipulá-la. Foi oq fizemos. */
  }
  return (
    <button 
    type="button" 
    style={{ backgroundColor: props.color}}
    onClick={increment}>
      {props.children} <strong>{counter}</strong>
    </button>
    // para se colocar código js dentro do html no React typescript, usamos as '{}'
    /* em 'style={{ backgroundColor: props.color}}' usamos chave dentro de chave por estarmos utilizando
    código js */
    // 'onClick' é um evento do Botão, que ao ativado, chama a função '{increment}'
  )
}