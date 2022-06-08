import React from 'react';
import './App.css';
import About from './components/About/index';
import Work from './pages/Work/index';
import Footer from './components/Footer/index';
import Nav from './components/Nav/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>
      <main>
       <Router>
         <Routes>
           <Route path="/" element={<About />} />
           <Route path="/work" element={<Work />} />
         </Routes>
       </Router>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
