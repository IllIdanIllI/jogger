import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddJogsPage from '../../../containers/AddJogsPage';
import { updateJog } from '../../../actions/jogsActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);

describe('<AddJogsPage /> unit test', () => {
    const initialState = {
        authentication: { isAuthenticated: true },
        jogStore: { isFilterActive: false },
    };
    // const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <AddJogsPage />
                </Router>
            </Provider>
        );
    });
    it('Simulate update', async () => {
        const newJog = {
            date: 3,
            time: 3,
            distance: 3,
            jog_id: 1,
            user_id: 1,
        };
        try {
            await store.dispatch(updateJog(newJog));
        } catch (e) {
            expect(e.response.status).toEqual(401);
        }
    });

    it('Match snap', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
