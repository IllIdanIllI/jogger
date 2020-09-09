import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import AuthorizationPage from './containers/AuthorizationPage';
import Header from './containers/Header';
import { PrivateRoute } from './containers/routers/PrivateRouter';
import JogsPage from './containers/JogsPage';

function App() {
    return (
        <Router>
            <Header />
            <div className="content-container">
                <Switch>
                    <Route exact path={['/', '/login']}>
                        <AuthorizationPage />
                    </Route>
                    <PrivateRoute exact path="/jogs">
                        <JogsPage />
                    </PrivateRoute>
                    <PrivateRoute exact path="/info">
                        <JogsPage />
                    </PrivateRoute>
                    <PrivateRoute exact path="/contact">
                        <JogsPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
