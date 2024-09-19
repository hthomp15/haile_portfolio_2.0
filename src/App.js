import React from 'react';
import './App.css';
import About from './pages/About/index';
import Work from './pages/Work/index';
import Footer from './components/Footer/index';
import Nav from './components/Nav/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Router>
        <header>
          <Nav />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/haile_portfolio_2.0" element={<About />} />
            <Route path="/haile_portfolio_2.0/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
