import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import authenticationReducer from '../reducers/authenticationReducer';
import jogsReducer from '../reducers/jogsReducer';

export function createSnapshot(component) {
    it(`${component.name()} Snapshot test`, () => {
        expect(component.debug()).toMatchSnapshot();
    });
}

export const createReducers = () =>
    createStore(
        combineReducers({
            jogStore: jogsReducer,
            authentication: authenticationReducer,
        })
    );

export function componentWithStore(component) {
    return (
        mockStore = createStore(
            combineReducers(
                {
                    jogStore: jogsReducer,
                    authentication: authenticationReducer,
                },
                { authentication: { isAuthenticated: true } }
            )
        )
    ) =>
        mount(
            <Provider store={mockStore}>
                <Router>{component}</Router>
            </Provider>
        );
}
