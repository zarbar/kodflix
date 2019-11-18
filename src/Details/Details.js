import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import ShowList from '../ShowList/ShowList';
import './Details.css';

export default function Details(props) {
    let { details } = useParams();
    const [thisShow, setThisShow] = useState('show title here');
    const [synopsis, setSynopsis] = useState('show title here');
    const [showImage, setShowImage] = useState('');
    const [message, setMessage] = useState('');

    let findShow = () => {
        let show = ShowList().find(show => show.id === details);
        setThisShow(show ? show.title : undefined);
        setSynopsis(show ? show.synopsis : 'Synopsis coming soon');
        setShowImage(show ? show.image : '');
    };

    useEffect(
        () => {
            findShow();
        }, []
    )

    React.useEffect(
        () => {
            setTimeout(() => setMessage('Coming Soon'), 3000);
        }, [thisShow]
    )

    if (thisShow === undefined) {
        return <Redirect to='/notFound' />
    }

    return (
        <>
            <div className="containerDetails">
                <div className="itemDetails">
                    <h1>{thisShow}</h1>
                    <div className='synopsis'>
                        <h2>{synopsis}</h2>
                        <h3>
                            {message} <br />
                            <a href='/'>Go Back</a>
                        </h3>
                    </div>
                </div>
                <div className="itemDetails">
                    <img className='imageDetails' src={showImage} alt={thisShow} />
                </div>
            </div>

        </>
    );

}


