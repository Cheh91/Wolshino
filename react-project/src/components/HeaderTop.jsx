import React from 'react';
import './../App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const HeaderTop = () => {

    const headerTopContainer = {
        width: '1440px',
        margin: '0 auto',
        padding: '0 15px'
    }

    const item = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

    const number = {
        fontSize: '28px'
    }

    const numberItem = {
        textDecoration: "none",
        color: '#8fc74a',
        fontWeight: '300',
        
    }

    const numberBold = {
        fontWeight: '700'
    }

    const title = {
        fontWeight: '500',
        fontSize: '41px',
        color: '#9ba7b4',
        letterSpacing: '2px'
    }

    const button = {
        background: 'none',
        border: '1px solid #8fc74a',
        outline: 'none',
        fontSize: '14px',
        color: '#8fc74a',
        textTransform: 'uppercase',
        fontWeight: '700',
        padding: '14px 36px',
        borderRadius: '25px'
    }

    

    return (
        <div style={headerTopContainer}>
            <div style={item}>
                <div style={number}>
                    <a style={numberItem} href="#">+2  495 <span style={numberBold}>134-27-72</span></a>
                </div>
                <div style={title}>
                wolshino.com
                </div>
                <button style={button}>your question</button>
            </div>
        </div>
    );
}

export default HeaderTop;
