import logo from './logo.svg';
import './App.css';
import './index.css';
import Landing from './pages/Landing'
import Navbarr from './components/Navv.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Call from './pages/Call';
import Prerecorded from './pages/Prerecorded';
import Payment from './pages/Payment';
import Live from './pages/Live';
import Description from './pages/Description';
import Allpackages from './pages/Allpackages';
import Forgot from './pages/Forgot.jsx';

function App() {

  
  return (


    <HashRouter>
    <Routes>
    <Route path="/" element={<Landing />}/>
      <Route path="/web" element={<Landing />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tnc" element={<Terms />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/call" element={<Call />} />
        <Route path="/pre" element={<Prerecorded />} />
        <Route path="/allpackages" element={<Allpackages />} />
        <Route path="/description" element={<Description />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/live" element={<Live />} />
        <Route path="/payment" element={<Payment />} />

      {/* </Route> */}
    </Routes>
  </HashRouter>

    
   
  );
}

export default App;
