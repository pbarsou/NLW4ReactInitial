import { Button } from './Button'; // sendo 'Button' um componente

function App() { // um componente sempre retorna um html
  return ( 
    <div> 
      <Button color="red">
        Botão 1
      </Button>
      <Button color="blue">
        Botão 2
      </Button>
      <Button color="green">
        Botão 3
      </Button>
    </div>

    // para exibir mais de 1 mesmo componente, é necessário por em uma 'div'
    // passamos a cor como propriedade
    // conteúdo do botão sendo passado como 'children'
  );
}

export default App;
