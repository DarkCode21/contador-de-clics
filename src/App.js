import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Logo from './img/DarkCode.png';
import { useState } from 'react';


function App() {
  
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className='App'>
      <div className='darkcode-logo-contenedor'>
        <img className='darkcode-logo'
          src={Logo}
          alt='Logo de darkCode' />
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
