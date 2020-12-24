import SlideComponent from '../../components/SlideComponent';
import SliderComponent from '../../components/SliderComponent';

import DesertSlide from '../../slides/DesertSlide';
import MountainSlide from '../../slides/MountainSlide';

import desert from '../../assets/slides/desert.svg';

const ChristmasCardView = () => {
    const {
        displayName
    } = ChristmasCardView;

    return (
        <main className={displayName}>
            <SliderComponent>
                <SlideComponent backgroundImage={desert} />
                <DesertSlide />
                <MountainSlide />
            </SliderComponent>
        </main>
    );
};

ChristmasCardView.displayName = 'ChristmasCardView';

export default ChristmasCardView;
