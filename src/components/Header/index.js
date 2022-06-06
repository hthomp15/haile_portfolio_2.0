import React from 'react';
import Nav from '../Nav/index.js';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <header className="header">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    );
  }

export default Header;