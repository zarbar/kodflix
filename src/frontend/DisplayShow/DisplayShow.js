import React from 'react';
import { Link } from "react-router-dom";
import './DisplayShow.css';

export default function Show(props) {
    let imageSrc = `../images/${props.id}.jpg`;

    return (
        <div className="image-container">
            <Link to={props.id} show={props, imageSrc}>
                <img src={require(`../images/${props.id}.jpg`)} alt={props.title} />
                <div className="tv-show-overlay">
                    <h2>{props.title}</h2>
                </div>
            </Link>
        </div>
    );
}
