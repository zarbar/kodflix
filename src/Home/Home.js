import React from 'react';
import './Home.css';
import ShowList from '../showList/ShowList';
import killerTomato from './killer-tomato.jpg';

export default function Details(props) {
    return (

        <>
            <h1>Welcome to Kodflix</h1>
            <img src={killerTomato} alt='attack of the killer tomatoes' />
            <ShowList />
        </>
    );
} 