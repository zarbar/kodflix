import React from 'react';
import Show from './Show';
import avatar from './images/avatar.jpg';
import biglittle from './images/biglittle.jpg';
import curb from './images/curb.jpg';
import GLOW from './images/GLOW.jpg';
import rupaul from './images/rupaul.png';
import naked from './images/naked.jpg';

export default function TVShows() {
    return (
        <>
            <div className="container">
                <Show image={avatar} title={"Avatar the Last Airbender"} />
                <Show image={biglittle} title={"Big Little Lies"} />
                <Show image={curb} title={"Curb Your Enthusiasm"} />
            </div >
            <div className="container">
                <Show image={GLOW} title={"GLOW"} />
                <Show image={naked} title={"Naked Director"} />
                <Show image={rupaul} title={"Ru Paul's Drag Race UK"} />
            </div >
        </>
    );
}
