import React from 'react';

// import './App.css';
import HeaderNav from './components/HeaderNav.jsx';
import HeaderTop from './components/HeaderTop.jsx';
import Types from './components/Types.jsx';
import About from './components/About.jsx';
import News from './components/News.jsx';



const App = () => {

  // const container = {
  //   width: '1440px',
  // }

  return (
    <div>
      <HeaderNav />
      <HeaderTop />
      <Types />
      <About />
      <News />
    </div>
  );
}

export default App;
