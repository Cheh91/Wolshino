import React from 'react';
// import { green } from 'color-name';
// import { NONAME } from 'dns';
import './../App.css';

const HeaderNav = () => {
  
  const headerContainer = {
    width: '1440px',
    margin: '0 auto',
    padding: '0 15px'
  }

  const link = {
    color: "#9ba7b4",
    textDecoration: "none",
    textTransform: 'uppercase',
    fontWeight: '500'
  }

  const li = {
    listStyleType: "none"
  }

  const ul = {
    paddingLeft: "0px",
    margin: "0",
    width: '690px',
    display: 'flex', 
    justifyContent: 'space-between',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '130px'
  }


  return (
    <div style={headerContainer}>
      <nav>
        <ul style={ul}>
            <li style={li}>
              <a style={link} href="#">about</a>
            </li>
            <li style={li}>
              <a style={link} href="#">projects</a>
            </li>
            <li style={li}>
              <a style={link} href="#">gallery</a>
            </li>
            <li style={li}>
              <a style={link} href="#">houses</a>
            </li>
            <li style={li}>
              <a style={link} href="#">general plan</a>
            </li>
            <li style={li}>
              <a style={link} href="#">location</a>
            </li>
        </ul>
      </nav>
    </div>
  );

}

export default HeaderNav;