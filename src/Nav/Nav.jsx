import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <ul id='menu'>
        <li><a href='#'>Início</a></li>
        <li><a href='#sobre'>Sobre</a></li>
        <li><a href='#'>Soluções</a></li>
        <li><a href='#'><img id='logo' src={logo} alt='Logo' className={isScrolled ? 'small-logo' : ''}/></a></li>
        <li><a href='#visao'>Visão</a></li>
        <li><a href='#contatos'>Contatos</a></li>
        <li><a href='#certificacoes'>Certificações e ESG</a></li>
      </ul>
    </nav>
  );
}
