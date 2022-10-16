import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbarra from './components/Navbarra';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./views/Contact";
import Home from "./views/Home";
import Error from "./views/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarra />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/Contact" element={ <Contact />} />
            <Route path="/*" element={ <Error />} />
          </Routes>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
