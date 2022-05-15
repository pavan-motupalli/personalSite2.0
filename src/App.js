import Particles  from 'react-particles-js';
import config from './config';
import './App.css';

function App() {
  return (
    
    <Particles className="particles" params={config.particles} />
  );
}

export default App;
