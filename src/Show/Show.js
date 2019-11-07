import React from 'react';
import { Link } from "react-router-dom";

export default function Show(props) {
    return (
        <div className="image-container">
            <Link to={props.id}>
                <img className="tv-show-poster" src={props.image} alt={props.title} />
                <div className="tv-show-overlay">
                    <h2>{props.title}</h2>
                </div>
            </Link>
        </div>
    );
} 