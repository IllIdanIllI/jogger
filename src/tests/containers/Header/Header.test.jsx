import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../../../containers/Header';

describe('<Header /> unit test', () => {
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
                    <Header />
                </Router>
            </Provider>
        );
    });

    it('Should redirect work carefully', () => {
        expect(wrapper.find('header')).toHaveLength(1);
        wrapper
            .find('a')
            .at(2)
            .simulate('click');
        expect(wrapper.find('header')).toEqual({});
    });

    it('Text equals', () => {
        const svg = wrapper.find('.header__items-filter-instance_inactive');
        console.log(svg.at(1).debug());

        expect(svg.at(1).text()).toEqual('filter.svg');
    });
    it('Match snap', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
