import React from 'react';
import './App.css';
import Header from './components/Header/index.js';
import About from './components/About/index.js';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <main>
          <About></About>
          {/* <Projects></Projects> */}
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
