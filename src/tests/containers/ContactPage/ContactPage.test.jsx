import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ContactPage from '../../../containers/ContactPage';

describe('<ContactPage /> unit test', () => {
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
                    <ContactPage />
                </Router>
            </Provider>
        );
    });
    it('should be valid text', () => {
        expect(wrapper.find('.contact-container').text()).toEqual(
            'For mo information call: 102'
        );
    });
    it('Match snap', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
