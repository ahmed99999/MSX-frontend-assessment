import React, { Component } from 'react';
import QuestionClass from '../../services/questionsService';
import Question from '../Question';
import Loading from '../common/Loading';
import './style.css';
import { Link } from 'react-router-dom';

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
        const { questions, isLoaded } = this.state;
        return (
            <React.Fragment>
                {!isLoaded && <Loading />}
                {isLoaded && <div className="row questions">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            {questions.map((question, index) => (
                                <Question key={index} question={question} source={true} handleChange={null} />
                            ))}
                        </div>
                    </div>
                    <div className="col-1">
                        <Link to="/questions/new" className="btn btn-primary" >Add Question</Link>
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}

export default Questions;