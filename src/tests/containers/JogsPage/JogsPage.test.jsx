import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import JogPage from '../../../containers/JogsPage';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { receiveJogs } from '../../../actions/jogsActions';
const mockStore = configureMockStore([thunk]);

describe('<JogPage /> unit test', () => {
    const initialState = {
        authentication: { isAuthenticated: true },
        jogStore: { isFilterActive: false, jogs: [] },
    };
    let store, wrapper;

    beforeEach(async () => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <JogPage />
                </Router>
            </Provider>
        );
        try {
            await store.dispatch(receiveJogs());
        } catch (e) {
            expect(e.response.status).toEqual(401);
        }
    });
    it('should be appropriate link', () => {
        const link = wrapper.find('Link');
        expect(link.prop('to')).toEqual('/jogs/add');
    });
    it('should be text about empty', () => {
        const span = wrapper.find('span').at(1);
        expect(span).not.toBeNull();
        expect(span.text()).toEqual('Create your first jog');
    });
    it('Match snap', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
