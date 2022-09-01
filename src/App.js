import "./App.css";
import {BrouserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./componentes/navegacion/Navbar"
import Inicio from "./componentes/paginas/Inicio"
import Pokemon from "./componentes/paginas/Pokemon"
import Items from "./componentes/paginas/Items"


function App() {
  return (
    <div className="App">
    <router>
      <Navbar/>
    </router>
    
    </div>
  );
}

export default App;
