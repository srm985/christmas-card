import PropTypes from 'prop-types';
import {
    Children,
    cloneElement,
    useState
} from 'react';
import {
    useSwipeable
} from 'react-swipeable';

const SliderComponent = (props) => {
    const {
        children
    } = props;

    const {
        displayName
    } = SliderComponent;

    const [
        currentSlideNumber,
        setSlideNumber
    ] = useState(0);

    const [
        slideOrientationVertical,
        setSlideOrientationVertical
    ] = useState('middle');

    const [
        slideOrientationHorizontal,
        setSlideOrientationHorizontal
    ] = useState('center');

    const slideList = Children.toArray(children);

    const onSwiped = (eventData) => {
        const {
            dir: swipeDirection
        } = eventData;

        const slideListLength = slideList.length;

        const isSwipeUp = swipeDirection === 'Up';

        if (isSwipeUp && currentSlideNumber < slideListLength - 1) {
            setSlideOrientationVertical('middle');
            setSlideOrientationHorizontal('center');
            setSlideNumber(currentSlideNumber + 1);
        } else if (!isSwipeUp && currentSlideNumber > 0) {
            setSlideOrientationVertical('middle');
            setSlideOrientationHorizontal('center');
            setSlideNumber(currentSlideNumber - 1);
        }
    };

    const handlers = useSwipeable({
        onSwiped
    });

    const {
        [currentSlideNumber]: currentSlide
    } = slideList;

    const sensor = new window.Gyroscope();
    sensor.start();

    sensor.onreading = () => {
        const {
            x: pitch,
            y: yaw
        } = sensor;

        const thresholdHigh = 1.6;
        const thresholdLow = 1;

        if (pitch > thresholdHigh) {
            setSlideOrientationVertical('top');
        } else if (pitch < (thresholdHigh * -1)) {
            setSlideOrientationVertical('bottom');
        } else if ((slideOrientationVertical === 'top' && pitch < (thresholdLow * -1))
        || (slideOrientationVertical === 'bottom' && pitch > thresholdLow)) {
            setSlideOrientationVertical('middle');
        }

        if (yaw > thresholdHigh) {
            setSlideOrientationHorizontal('left');
        } else if (yaw < (thresholdHigh * -1)) {
            setSlideOrientationHorizontal('right');
        } else if ((slideOrientationHorizontal === 'left' && yaw < (thresholdLow * -1))
        || (slideOrientationHorizontal === 'right' && yaw > thresholdLow)) {
            setSlideOrientationHorizontal('center');
        }
    };

    return (
        <section
            {...handlers}
            className={displayName}
        >
            {cloneElement(currentSlide, {
                orientation: `${slideOrientationVertical}-${slideOrientationHorizontal}`
            })}
        </section>
    );
};

SliderComponent.displayName = 'SliderComponent';

SliderComponent.propTypes = {
    children: PropTypes.node
};

SliderComponent.defaultProps = {
    children: ''
};

export default SliderComponent;
