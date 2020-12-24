import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';

import './styles.scss';

const SlideComponent = (props) => {
    const {
        backgroundImage,
        className,
        orientation
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

    return (
        <div className={componentClassNames}>
            <div className={`${displayName}__text-block`}>
                <p className={`${displayName}__text`}>
                    {'Elit aute velit aliquip labore dolore aute officia cupidatat. Veniam cupidatat tempor anim elit culpa mollit consequat enim sint. Do aliqua velit ex ad sint incididunt ex exercitation consequat eu minim adipisicing consectetur ut.'}
                </p>
            </div>
            <div className={sceneClassNames}>
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
    className: PropTypes.string,
    orientation: PropTypes.string
};

SlideComponent.defaultProps = {
    backgroundImage: '',
    className: '',
    orientation: 'center'
};

export default SlideComponent;
