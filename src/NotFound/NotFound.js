import React from 'react';
// import { useLocation } from "react-router-dom";

export default function NotFound(props) {

    // let location = useLocation();

    return (
        <>
            <h1>Did you get lost?</h1>
            {/* <h2>{location.pathname} isn't happening.</h2> */}
            <h2>Time to <a href='/'>start again</a></h2>
        </>
    );
} 