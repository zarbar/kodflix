import React from 'react';
import { Link } from "react-router-dom";

export default function Details(props) {
    return (
        <>
            This is the movie details page<br />
            <Link to='/'>Go Back</Link>
        </>
    );
} 