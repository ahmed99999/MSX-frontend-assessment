import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Question from './index'
import './style.css';

configure({ adapter: new Adapter() });

describe('Question', () => {

    const question = {
        published_at: new Date(),
        url: "/questions/1",
        question: "favorite programing laungage",
        choices: ["choice 1", "choice 2, choice 3"]
    };

    it('Question: renders without crashing', () => {
        const tree = renderer.create(<Question question={question} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});