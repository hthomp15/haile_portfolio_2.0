import React from 'react';
import './App.css';
import Header from './components/Header/index.js';
import About from './components/About/index.js';
import Projects from './components/Projects/index.js';
import Footer from './components/Footer/index.js';

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
        <Header></Header>
        <main>
          <About></About>
          <Projects></Projects>
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
