import SlideComponent from '../../components/SlideComponent';
import SliderComponent from '../../components/SliderComponent';

import cactus from '../../assets/cactus.gif';
import chicken from '../../assets/chicken.gif';
import jellyfish from '../../assets/jellyfish.gif';
import desert from '../../assets/slides/desert.svg';
import farm from '../../assets/slides/farm.svg';
import mountain from '../../assets/slides/mountain.svg';
import ocean from '../../assets/slides/ocean.svg';

const ChristmasCardView = () => {
    const {
        displayName
    } = ChristmasCardView;

    const slideList = [
        {
            backgroundImage: desert,
            character: cactus,
            text: 'Pariatur eu amet do aliquip adipisicing. Veniam et amet aliqua consectetur. Nisi eu ut in qui exercitation. Nulla id aliqua tempor in ad quis commodo ad. Pariatur consequat sint aute reprehenderit do aliquip anim veniam veniam nulla dolore ex minim veniam. Esse magna labore aute do Lorem nostrud ipsum eu laborum duis.'
        },
        {
            backgroundImage: mountain,
            character: cactus,
            text: 'Fugiat aliquip pariatur proident consectetur anim ut in. Reprehenderit enim laborum cupidatat nisi sunt ipsum in. Elit sit laborum voluptate consectetur magna.'
        },
        {
            backgroundImage: farm,
            character: chicken,
            characterLocation: 2,
            text: 'Fugiat aliquip pariatur proident consectetur anim ut in. Reprehenderit enim laborum cupidatat nisi sunt ipsum in. Elit sit laborum voluptate consectetur magna.'
        },
        {
            backgroundImage: ocean,
            character: jellyfish,
            characterLocation: 0,
            text: 'Fugiat aliquip pariatur proident consectetur anim ut in. Reprehenderit enim laborum cupidatat nisi sunt ipsum in. Elit sit laborum voluptate consectetur magna.'
        }
    ];

    const slides = slideList.map((slideDetails) => {
        const {
            backgroundImage,
            character,
            characterLocation,
            text
        } = slideDetails;

        return (
            <SlideComponent
                backgroundImage={backgroundImage}
                character={character}
                characterLocation={characterLocation}
                text={text}
            />
        );
    });

    return (
        <main className={displayName}>
            <SliderComponent>
                {slides}
            </SliderComponent>
        </main>
    );
};

ChristmasCardView.displayName = 'ChristmasCardView';

export default ChristmasCardView;
