import "./App.css";
import { BrowserRouter as Router, Switch, Routes } from "react-router-dom";
import Navbar from "./componentes/navegacion/Navbar";
import Inicio from "./componentes/paginas/Inicio";
import Pokemon from "./componentes/paginas/Pokemon";
import Items from "./componentes/paginas/Items";



function App() {


  return (
    <div className="App">

     
        <Navbar />

         <Route>
          <Router path="/" exact component={Inicio} />
          <Router path="/Pokemon" component={Pokemon} />
          <Router path="/Items" component={Items} />
        </Route> 

     
    </div>
  );
}

export default App;
