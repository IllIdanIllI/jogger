import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../store';
import ContactPage from '../../../containers/ContactPage';
import renderer from 'react-test-renderer';

test('ContactPage test', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Router>
                <ContactPage />
            </Router>
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

