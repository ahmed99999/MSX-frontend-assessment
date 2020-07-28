import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Loading from './index'
import './style.css';

configure({ adapter: new Adapter() });

describe('Loading', () => {

    it('Loading: renders without crashing', () => {
        const tree = renderer.create(<Loading />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});