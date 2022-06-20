
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Pages/Index';
import Signin from './Pages/Sign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />}  />

      </Routes>
     
    </Router>
  );
}

export default App;
