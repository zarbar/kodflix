import React from 'react';
import './Home.css';
import Gallery from '../Gallery.js/Gallery';
import killerTomato from './killer-tomato.jpg';

export default function Details(props) {
    return (

        <>
            <h1>Welcome to Kodflix</h1>
            <img src={killerTomato} alt='attack of the killer tomatoes' />
            <Gallery />
        </>
    );
} 