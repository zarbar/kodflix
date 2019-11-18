import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from "react-router-dom";
import ShowList from '../ShowList/ShowList';

export default function Details(props) {
    let { details } = useParams();
    // const [message, setMessage] = useState('');
    const [thisShow, setThisShow] = useState('show title here');

    let findShow = () => {
        let show = ShowList().find(show => show.id === details);
        setThisShow(show ? show.title : undefined);
    };

    useEffect(
        () => {
            findShow();
        }, []
    )

    if (thisShow === undefined) {
        return <Redirect to='/notFound' />
    }

    return (
        <>
            <h1>This is the details page for:<br />
                {thisShow}<br />
            </h1>
            <Link to='/'>Go Back</Link>
            <br />
            {/* <div>{message}</div> */}
        </>
    );

}


  // React.useEffect(
    //     () => {
    //         setTimeout(() => setMessage('Coming Soon! :-P'), 3000);
    //     }, []
    // )