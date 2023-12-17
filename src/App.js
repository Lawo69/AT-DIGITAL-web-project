import { Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from "./component/footer/Footer";
import { Navbar } from './component/navbar/Navbar';
import  Home  from './pages/home/homescreen/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;