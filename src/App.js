import './App.css';
import Testinomio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
      <h1>Desarrollador Web</h1>
      <Testinomio 
      imagen='perfil'
      nombre='Julian Bedoya Serna'
      pais='Colombia'
      cargo='Desarrollador de web'
      empresa='Facebook'
      testinomio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and' />
            <Testinomio 
      imagen='G2'
      nombre='Neko'
      pais='China'
      cargo='Gato'
      empresa='Mordelon'
      testinomio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and' />
             <Testinomio 
      imagen='G1'
      nombre='Nala'
      pais='Peru'
      cargo='Gato'
      empresa='Jugar'
      testinomio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and' />
     
      </div>
    </div>
  );
}

export default App;
