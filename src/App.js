import "./App.css";
import Kep from "./komponens/Kep";
import { adatLista } from "./adatok.js";
import React, {useState} from "react";
function App() {
  const [kepIndex, setNagyKep]=useState(0);
  function nagyKepCsere(id){
    console.log("Nagykep csere",id);
    setNagyKep(id);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kepgaléria</h1>
      </header>
      <article>
        <div className="fokep">
          <h3>Kep címe</h3>
          <Kep adat={adatLista[kepIndex]} />
          <p>Leírás</p>
        </div>
        <div className="galeria">
          {adatLista.map((elem, index) => {
            return (<Kep adat={elem} key={index} nagyKepCsere={nagyKepCsere} />);
          }
          )
        }
        </div>
      </article>
      <footer>
        <p>Pálóci Ernő</p>
      </footer>
    </div>
  );
}

export default App;
