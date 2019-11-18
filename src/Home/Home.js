import React from 'react';
import './Home.css';
import GetShow from '../GetShow/GetShow';
import killerTomato from './killer-tomato.jpg';

export default function Details(props) {
    return (

        <>
            <div className='welcomeHeader'>
            <h1>Welcome to Kodflix</h1>
            </div>
            <img src={killerTomato} alt='attack of the killer tomatoes' />
            < GetShow />
        </>
    );
} 