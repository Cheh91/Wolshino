import React from 'react';

// import './App.css';
import HeaderNav from './components/HeaderNav.jsx';
import HeaderTop from './components/HeaderTop.jsx';
import Section from './components/Section.jsx';
import About from './components/About.jsx';



const App = () => {

  // const container = {
  //   width: '1440px',
  // }

  return (
    <div>
      <HeaderNav />
      <HeaderTop />
      <Section />
      <About />
    </div>
  );
}

export default App;
