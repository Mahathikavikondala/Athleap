import logo from './logo.svg';
import Login from './components/Login.js';
import Athleap from './components/index.js';
import Contact from './components/contact.js';
import Aboutus from './components/aboutus.js';
import Men from './components/men.js';
import Women from './components/women.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="/home" element={<Athleap/>}>
        </Route>
        <Route path="/contact" element={<Contact/>}>
        </Route>
        <Route path="/aboutus" element={<Aboutus/>}>
        </Route> 
        <Route path="/men" element={<Men/>}>
        </Route>
        <Route path="/women" element={<Women/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
