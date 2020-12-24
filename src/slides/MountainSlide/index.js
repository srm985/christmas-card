
import BackgroundComponent from '../../components/BackgroundComponent';

import dessertImage from '../../assets/slides/mountain.svg';

const MountainSlide = (props) => {
    const {
        displayName
    } = MountainSlide;

    return (
        <div className={displayName}>
            <BackgroundComponent
                {...props}
                src={dessertImage}
            />
        </div>
    );
};

MountainSlide.displayName = 'MountainSlide';

export default MountainSlide;
