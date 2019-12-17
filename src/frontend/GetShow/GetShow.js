import Show from '../DisplayShow/DisplayShow';
import React, { useState, useEffect } from 'react';

export default function GetShow() {
    const [shows, setShows] = useState('');

    useEffect(() => {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(json => setShows(json))
    }, [])

    if (shows) {
        return (
            <div className="container">
                {shows.map(show => (
                    <Show
                        title={show.title}
                        id={show.id}
                        key={show.id} />)
                )}
            </div>
        )
    }

    return (
        <div className="container">
        </div>
    )
}


// useEffect(() => {
//     fetch('/rest/shows')

        // displays as a string as shown at: http://localhost:3002/rest/shows  - a stringified version of the return function in the backend shows.js function

        // .then(res => res.json())

        //we are converting this string back into an JS object (which in this case is an array, as that was in the original return function)

        // .then(json => setShows(json))

    //setting this array as the shows state variable

// }, [])