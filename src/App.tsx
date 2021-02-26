import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() { // um componente sempre retorna um html
  return ( 
    <div className="container">
      <ExperienceBar />
    </div>
  );
  // 'className="container"' para podermos estilizar através do css 
}

export default App;
