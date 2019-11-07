import React from 'react';
import Show from '../Show/Show';
import avatar from './images/avatar.jpg';
import biglittle from './images/biglittle.jpg';
import curb from './images/curb.jpg';
import GLOW from './images/GLOW.jpg';
import naked from './images/naked.jpg';
import rupaul from './images/rupaul.png';

export default function Gallery() {
    return (
        <>
            <div className="container">
                <Show image={avatar} title={"Avatar the Last Airbender"} id={'avatar-airbender'} />
                <Show image={biglittle} title={"Big Little Lies"} id={'big-little-lies'} />
                <Show image={curb} title={"Curb Your Enthusiasm"} id={'curb-your-enthusiasm'} />
                <Show image={GLOW} title={"GLOW"} id={'GLOW'} />
                <Show image={naked} title={"Naked Director"} id={'naked-director'} />
                <Show image={rupaul} title={"Ru Paul's Drag Race UK"} id={'Ru-Paul-UK'} />
            </div >
        </>
    );
}
