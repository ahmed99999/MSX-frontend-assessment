import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Choice from './index'
import './style.css';

configure({ adapter: new Adapter() });

describe('Choice', () => {
    const choice = {
        choice: "choice 1",
        votes: 3
    };

    it('Choice: renders without crashing', () => {
        const tree = renderer.create(<Choice choice={choice} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});