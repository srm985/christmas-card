
import BackgroundComponent from '../../components/BackgroundComponent';

import cactus from '../../assets/cactus.gif';
import dessertImage from '../../assets/slides/desert.svg';

import './styles.scss';

const DesertSlide = (props) => {
    const {
        displayName
    } = DesertSlide;

    return (
        <div className={displayName}>
            <div className={`${displayName}__text-block`}>
                <p className={`${displayName}__text`}>
                    {'Elit aute velit aliquip labore dolore aute officia cupidatat. Veniam cupidatat tempor anim elit culpa mollit consequat enim sint. Do aliqua velit ex ad sint incididunt ex exercitation consequat eu minim adipisicing consectetur ut.'}
                </p>
            </div>
            <BackgroundComponent
                {...props}
                animatedCharacter={cactus}
                src={dessertImage}
            />
        </div>
    );
};

DesertSlide.displayName = 'DesertSlide';

export default DesertSlide;
