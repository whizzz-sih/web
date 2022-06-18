import logo from './logo.svg';
import './App.css';
import './index.css';
import Landing from './pages/Landing'
import Navbarr from './components/Navv.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  
  return (


    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>

    
   
  );
}

export default App;
