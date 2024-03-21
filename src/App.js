import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>

      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
