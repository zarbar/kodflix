import avatar from '../images/avatar.jpg';
import biglittle from '../images/biglittle.jpg';
import curb from '../images/curb.jpg';
import GLOW from '../images/GLOW.jpg';
import naked from '../images/naked.jpg';
import rupaul from '../images/rupaul.png';

export default function ShowList() {
    return [
        { image: avatar, title: "Avatar the Last Airbender", id: 'avatar-airbender' },
        { image: biglittle, title: "Big Little Lies", id: 'big-little-lies' },
        { image: curb, title: "Curb Your Enthusiasm", id: 'curb-your-enthusiasm' },
        { image: GLOW, title: "GLOW", id: 'GLOW' },
        { image: naked, title: "Naked Director", id: 'naked-director' },
        { image: rupaul, title: "Ru Paul's Drag Race UK", id: 'Ru-Paul-UK' }
    ];
}