import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import AuthorizationPage from './containers/AuthorizationPage';
import Header from './containers/Header';
import { PrivateRoute } from './containers/routers/PrivateRouter';
import JogsPage from './containers/JogsPage';
import InfoPage from './containers/InfoPage';
import ContactPage from './containers/ContactPage';
import { JOGS_URL, INFO_URL, LOGIN_URL } from './constants/constants';

function App() {
    return (
        <Router>
            <Header />
            <div className="content-container">
                <Switch>
                    <Route exact path={['/', `${LOGIN_URL}`]}>
                        <AuthorizationPage />
                    </Route>
                    <PrivateRoute exact path={JOGS_URL}>
                        <JogsPage />
                    </PrivateRoute>
                    <PrivateRoute exact path={INFO_URL}>
                        <InfoPage />
                    </PrivateRoute>
                    <PrivateRoute exact path={CONTACT_URL}>
                        <ContactPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
