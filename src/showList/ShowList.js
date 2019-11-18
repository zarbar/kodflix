import avatar from '../images/avatar.jpg';
import biglittle from '../images/biglittle.jpg';
import curb from '../images/curb.jpg';
import GLOW from '../images/GLOW.jpg';
import naked from '../images/naked.jpg';
import rupaul from '../images/rupaul.png';

export default function ShowList() {
    return [
        { image: avatar, title: "Avatar the Last Airbender", id: 'avatar-airbender', synopsis: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.' },

        { image: biglittle, title: "Big Little Lies", id: 'big-little-lies', synopsis: 'The apparently perfect lives of upper-class mothers, at a prestigious elementary school, unravel to the point of murder when a single-mother moves to their quaint Californian beach town.' },

        { image: curb, title: "Curb Your Enthusiasm", id: 'curb-your-enthusiasm', synopsis: 'He\'s got it all: a loving wife, good friends, a successful career, a great home...what could possibly go wrong for Larry David? Seinfeld co-creator Larry David stars as himself in this hilarious, off-kilter comedy series that presents an unflinching, self-deprecating depiction of his life.' },

        { image: GLOW, title: "GLOW", id: 'GLOW', synopsis: 'A look at the personal and professional lives of a group of women who perform for a wrestling organization in Los Angeles during the 1980s.' },

        { image: naked, title: "Naked Director", id: 'naked-director', synopsis: 'Follows the story of Toru Muranishi\'s unusual and dramatic life filled with big ambitions as well as spectacular setbacks in his attempt to turn Japan\'s porn industry on its head' },

        { image: rupaul, title: "Ru Paul's Drag Race UK", id: 'Ru-Paul-UK', synopsis: 'RuPaul has come to the UK in search of a queen with the most charisma, uniqueness, nerve and talent.' }
    ];
}