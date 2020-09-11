import React from 'react';
import InfoPage from '../../../containers/InfoPage';
import renderer from 'react-test-renderer';

test('Info page test', () => {
    const component = renderer.create(<InfoPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
