import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../store';
import AuthorizationPage from '../../../containers/AuthorizationPage';
import renderer from 'react-test-renderer';

test('AuthorizationPage test', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Router>
                <AuthorizationPage />
            </Router>
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
