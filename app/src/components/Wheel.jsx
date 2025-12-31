import WheelComponent from 'react-wheel-of-prizes'

import data from '../data/data.json'

const allyList = []

data.map((ally) => (
    allyList.push(ally.name)
))

const shuffledAllyList = allyList.sort(() => Math.random() - 0.5)

const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
]

const onFinished = (winner) => {
    console.log(winner);
  };

export function Wheel() {
    return (
        <div className="wheel-container">
            <WheelComponent
                segments={shuffledAllyList}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='white'
                contrastColor='black'
                buttonText='Lancer'
                isOnlyOnce={false}
                size={250}
                upDuration={100}
                downDuration={1000}
                fontFamily='Arial'
             />
        </div>
    )
}
