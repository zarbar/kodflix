import React from 'react';

export default function Show(props) {
    return (
        <div className="image-container">
            <img className="tv-show-poster" src={props.image} alt={props.title} />
            <div className="tv-show-overlay">
                <h2>{props.title}</h2>
            </div>
        </div>
    );
} 