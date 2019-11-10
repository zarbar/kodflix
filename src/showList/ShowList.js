import React from 'react';
import avatar from '../images/avatar.jpg';
import biglittle from '../images/biglittle.jpg';
import curb from '../images/curb.jpg';
import GLOW from '../images/GLOW.jpg';
import naked from '../images/naked.jpg';
import rupaul from '../images/rupaul.png';
import Show from '../Show/Show';

export default function ShowList(props) {

    let showList = [
        { image: avatar, title: "Avatar the Last Airbender", id: 'avatar-airbender' },
        { image: biglittle, title: "Big Little Lies", id: 'big-little-lies' },
        { image: curb, title: "Curb Your Enthusiasm", id: 'curb-your-enthusiasm' },
        { image: GLOW, title: "GLOW", id: 'GLOW' },
        { image: naked, title: "Naked Director", id: 'naked-director' },
        { image: rupaul, title: "Ru Paul's Drag Race UK", id: 'Ru-Paul-UK' }
    ];

    let displayShow = showList
        .map((show) => {
            return (<Show image={show.image} title={show.title} id={show.id} />)
        });

    return (
        <div className="container">
            {displayShow}
        </div>
    )
} 