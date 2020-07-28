import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import QuestionDetails from './index'
import './style.css';

configure({ adapter: new Adapter() });

describe('QuestionDetails', () => {

    const question = {
        published_at: new Date(),
        url: "/questions/1",
        question: "favorite programing laungage",
        choices: ["choice 1", "choice 2, choice 3"]
    };

    it('QuestionDetails: renders without crashing', () => {
        const tree = renderer.create(<QuestionDetails />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('QuestionDetails: isLoaded state rendering', () => {
        const component = shallow(<QuestionDetails />);
        const instance = component.instance();
        expect(instance.state.isLoaded).toBeFalsy();
    });

});