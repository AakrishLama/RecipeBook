import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Food from './screens/Food';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createFood" element={<Food />} />
      </Routes>
    </Router>
  )
}

export default App;
