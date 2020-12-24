import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';

import './styles.scss';

const BackgroundComponent = (props) => {
    const {
        animatedCharacter,
        className,
        orientation,
        src
    } = props;

    const {
        displayName
    } = BackgroundComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    const imageClassNames = classNames(
        `${displayName}__image`,
        `${displayName}__image--${orientation}`
    );

    const characterClassNames = classNames(
        `${displayName}__character`,
        `${displayName}__character--${orientation}`
    );

    return (
        <div className={componentClassNames}>
            <img
                className={imageClassNames}
                src={src}
            />
            <img
                className={characterClassNames}
                src={animatedCharacter}
            />
        </div>
    );
};

BackgroundComponent.displayName = 'BackgroundComponent';

BackgroundComponent.propTypes = {
    className: PropTypes.string,
    orientation: PropTypes.string,
    src: PropTypes.string
};

BackgroundComponent.defaultProps = {
    className: '',
    orientation: 'center',
    src: ''
};

export default BackgroundComponent;
