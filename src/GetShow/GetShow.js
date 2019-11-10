import Show from '../DisplayShow/DisplayShow';
import React from 'react';
import ShowList from '../ShowList/ShowList';

export default function GetShow() {
    return (
        <div className="container">
            {ShowList()
                .map(show => (
                    <Show image={show.image}
                        title={show.title}
                        id={show.id}
                        key={show.id}
                    />
                ))}
        </div>
    )
} 