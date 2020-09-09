import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import AuthorizationPage from './components/AuthorizationPage';
import Header from './containers/Header';

function App() {
    return (
        <>
            <Router>
                <Header isAuthenticate={false} />
                <Switch>
                    <Route exact path='/'>
                        <AuthorizationPage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
