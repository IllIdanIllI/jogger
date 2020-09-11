import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../store';
import JogPage from '../../../containers/JogsPage';
import renderer from 'react-test-renderer';

test('Jog page test', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Router>
                <JogPage />
            </Router>
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
