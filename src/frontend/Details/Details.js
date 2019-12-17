import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import './Details.css';

export default function Details(props) {

    // defining states
    const { details } = useParams();
    const [thisShow, setThisShow] = useState('show title here');
    const [synopsis, setSynopsis] = useState('show synopsis');
    const [message, setMessage] = useState('');
    const [imgSrc, setImgSrc] = useState('');

    //fetch shows from backend into state = shows 
    useEffect(() => {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(shows => {
                let show = shows
                    .find(showObject => showObject.id === details);
                if (!show) { return <Redirect to='/notFound' /> }
                else {
                    setThisShow(show.title ? 
                        show.title : 
                        'title coming soon'
                    );
                    setSynopsis(show.synopsis ? 
                        show.synopsis :
                        'Synopsis coming soon'
                    );
                    setImgSrc(show.id)
                }
            })
    }, [details])

    useEffect(
        () => {
            setTimeout(() => setMessage('Coming Soon'), 3000);
        }, [thisShow]
    )

    if(!imgSrc) { return <div />; }
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
                    <img className='imageDetails' src={require(`../images/${imgSrc}.jpg`)} alt={thisShow} />
                </div>
            </div>
        </>
    );
}


