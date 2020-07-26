import React, { Component } from 'react';
import QuestionClass from '../../services/questionsService';
import Loading from '../common/Loading';
import { Link } from 'react-router-dom';
import Question from '../Question';
import './style.css';

class QuestionDetails extends Component {
    state = {
        questionId: 0,
        question: null,
        isLoaded: false,
        choice: null
    };

    async componentDidMount() {
        const questionId = this.props.match.params.id;

        const questionObj = new QuestionClass(questionId);
        const question = await questionObj.getQuestion();
        this.setState({ question, questionId, isLoaded: true });
    }

    handleChange = choice => {
        this.setState({ choice });
    };

    handleVote = async () => {
        const { choice, questionId } = this.state;
        const questionObj = new QuestionClass(questionId);
        const choiceId = choice.url.replace(`/questions/${questionId}/choices/`, "");
        const choiceObj = await questionObj.addChoice(choiceId);
        console.log(choiceObj);
        const question = await questionObj.getQuestion();
        this.setState({ question, choice: choiceObj });
    };

    render() {
        const { question, isLoaded } = this.state;
        return (
            <React.Fragment>
                {!isLoaded && <Loading />}
                {isLoaded && <div className="row question-details" >
                    <div className="col-1"></div>
                    <div className="col-10">
                        <Question question={question} source={false} handleChange={this.handleChange} />
                        <button className="btn btn-primary float-right" onClick={this.handleVote}>vote</button>
                    </div>
                    <div className="col-1">
                        <Link to="/questions" className="btn btn-primary" >Questions</Link>
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}

export default QuestionDetails;