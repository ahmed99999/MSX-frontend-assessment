import React, { Component } from 'react';
import QuestionClass from '../../services/questionsService';
import Question from '../Question';
import './style.css';

class Questions extends Component {
    state = {
        isLoaded: false,
        questions: []
    }

    async componentDidMount() {
        const questions = await QuestionClass.getQuestions();
        this.setState({ questions, isLoaded: true });
    }

    render() {
        const { questions } = this.state;
        return (
            <div className="row questions">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="row">
                        {questions.map((question, index) => (
                            <Question key={index} question={question} />
                        ))}
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default Questions;