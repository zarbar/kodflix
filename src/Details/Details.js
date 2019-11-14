import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import ShowList from '../ShowList/ShowList';

export default function Details(props) {
    const [message, setMessage] = useState('');

    React.useEffect(
        () => {
            setTimeout(() => setMessage('Coming Soon! :-P'), 3000);
        }, []
    )
    let { details } = useParams();

    let thisShow = ShowList().find(show => show.id === details);

    return (
        <>
            <h1>This is the details page for:<br />
                {thisShow.title}
            </h1>
            <Link to='/'>Go Back</Link>
            <br />
            <div>{message}</div>


        </>
    );
} 