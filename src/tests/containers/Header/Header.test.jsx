import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../store';
import Header from '../../../containers/Header';
import renderer from 'react-test-renderer';

test('Header test', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
