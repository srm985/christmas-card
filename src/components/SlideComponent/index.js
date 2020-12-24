import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';

import './styles.scss';

const SlideComponent = (props) => {
    const {
        backgroundImage,
        character,
        characterLocation,
        className,
        orientation,
        text
    } = props;

    const {
        displayName
    } = SlideComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    const sceneClassNames = classNames(
        `${displayName}__scene`,
        `${displayName}__scene--oriented-${orientation}`
    );

    const characterClassNames = classNames(
        `${displayName}__character`,
        `${displayName}__character--${characterLocation}`
    );

    return (
        <div className={componentClassNames}>
            <div className={`${displayName}__text-block`}>
                <p className={`${displayName}__text`}>
                    {text}
                </p>
            </div>
            <div className={sceneClassNames}>
                <img
                    className={characterClassNames}
                    src={character}
                />
                <img
                    className={`${displayName}__background-image`}
                    src={backgroundImage}
                />
            </div>
        </div>
    );
};

SlideComponent.displayName = 'SlideComponent';

SlideComponent.propTypes = {
    backgroundImage: PropTypes.string,
    character: PropTypes.string,
    characterLocation: PropTypes.number,
    className: PropTypes.string,
    orientation: PropTypes.string,
    text: PropTypes.string
};

SlideComponent.defaultProps = {
    backgroundImage: '',
    character: '',
    characterLocation: 3,
    className: '',
    orientation: 'center',
    text: ''
};

export default SlideComponent;
