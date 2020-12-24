import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import ChristmasCardView from './views/ChristmasCardView';

import {
    ROUTE_CHRISTMAS_CARD
} from './routes';

import './styles/styles.scss';

const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Redirect
                    exact
                    from={'/index.html'}
                    to={ROUTE_CHRISTMAS_CARD}
                />
                <Route
                    component={ChristmasCardView}
                    exact
                    path={ROUTE_CHRISTMAS_CARD}
                />
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
