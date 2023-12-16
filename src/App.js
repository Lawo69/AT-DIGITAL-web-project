import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Services, Aboutus, Contactus, Careers, Home } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
