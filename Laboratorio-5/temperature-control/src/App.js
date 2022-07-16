import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  //let temperatureColor = 'cold'
  //let temperatureValue = '10'
  
  const [temperature, setTemperature] = useState({
    value: 10,
    color: "cold"
  });

// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 

// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

const updateTemperature = () => {
  setTemperature(previousState => {
    if(temperature.value == 30){
      return { ...previousState, value: 30}
    }else{
      var x = temperature.value + 1
      checkTemperature(x);
      return { ...previousState, value: x }
    }
  });
}

const updateTemperature2 = () => {
  setTemperature(previousState => {
    if(temperature.value == 0){
      return { ...previousState, value: 0 }
    }else{
      var x = temperature.value - 1
      checkTemperature(x);
      return { ...previousState, value: x }
    }
  });
}

const checkTemperature = (x) => {
  setTemperature(previousState => {
    if(x >= 20){
      return{ ...previousState, color: "hot" }
    }else{
      return{ ...previousState, color: "cold" }
    }
  });
}

// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperature.color}`}>
          {temperature.value}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={updateTemperature}>+</button>
        <button onClick={updateTemperature2}>-</button>
      </div>
    </div>
  );
}

export default App;
