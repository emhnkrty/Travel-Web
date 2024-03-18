import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Login from './Components/Navbar/Login'; // Login bileşenini ekledik
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} /> {/* Login bileşenini buraya ekledik */}
          {/* Diğer sayfalarınız için de buraya benzer Route bileşenlerini ekleyebilirsiniz */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
