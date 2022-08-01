import React from "react";
import '../style/Testinomio.css';


function Testimonio(props){
  return(
    <div className='contenedor'>

    <img className='imagen-testimonio'
     src={require(`../img/imagen-${props.imagen}.jpeg`)} 
      alt='Foto Julian'/>

      <div className='contenedor-texto'>
        <p className='nombre'><strong>
          {props.nombre}</strong> . {props.pais}</p>
        <p className='cargo'>{props.cargo} - <b>{props.empresa}</b></p>
        <p className="texto">{props.testinomio}</p>
      </div>
    </div>

  );
}

export default Testimonio;