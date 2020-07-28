import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Questions from './index'
import './style.css';

configure({ adapter: new Adapter() });

describe('Questions', () => {

    it('Questions: renders without crashing', () => {
        const tree = renderer.create(<Questions />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Questions: number of users', () => {
        const component = shallow(<Questions />);
        const instance = component.instance();
        expect(instance.state.isLoaded).toBeFalsy();
    });

});