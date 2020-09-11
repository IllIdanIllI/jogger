import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../store';
import AddJogsPage from '../../../containers/AddJogsPage';
import renderer from 'react-test-renderer';

test('AddJogsPage test', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Router>
                <AddJogsPage />
            </Router>
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

