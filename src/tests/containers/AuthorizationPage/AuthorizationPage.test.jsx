import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthorizationPage from '../../../containers/AuthorizationPage';

describe('<AuthorizationPage /> unit test', () => {
    const initialState = {
        authentication: { isAuthenticated: true },
        jogStore: { isFilterActive: false },
    };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <AuthorizationPage />
                </Router>
            </Provider>
        );
    });
    it('should be redirect', () => {
        const redirect = wrapper.find('Redirect');
        expect(redirect).not.toBeNull();
        expect(redirect.prop('to')).toEqual('/jogs');
    });
    it('Match snap', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
