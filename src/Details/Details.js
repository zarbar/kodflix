import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Details(props) {
    const [message, setMessage] = useState('');

    React.useEffect(
        () => {
            const timedMsg = setTimeout(() => setMessage('Coming Soon! :-P'), 3000)
            return () => clearTimeout(timedMsg)
        }, []
    )

    return (
        <>
            <h1>This is the details page<br /></h1>
            <Link to='/'>Go Back</Link>
            <br />
            <div>{message}</div>


        </>
    );
} 