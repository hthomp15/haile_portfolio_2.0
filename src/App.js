import React from 'react';
import './App.css';
import About from './pages/About/index';
import Work from './pages/Work/index';
import Footer from './components/Footer/index';
import Nav from './components/Nav/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">


      <main className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">

        <Router>
          <header>
            <Nav></Nav>
          </header>
          <Routes>
            <Route path="/haile_portfolio_2.0" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </main>

    </div>
  );
}

export default App;
