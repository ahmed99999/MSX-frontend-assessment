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
        choice: null,
        newQuestion: "",
        newQuestionChoices: []
    };

    async componentDidMount() {
        const questionId = this.props.match.params.id;
        if (questionId === 'new') return this.setState({ isLoaded: true, questionId });
        const questionObj = new QuestionClass(questionId);
        const question = await questionObj.getQuestion();
        this.setState({ question, questionId, isLoaded: true });
    }

    handleChange = choice => {
        this.setState({ choice });
    };

    handleVote = async () => {
        const { choice, questionId } = this.state;
        if (choice == null) return;
        const questionObj = new QuestionClass(questionId);
        const choiceId = choice.url.replace(`/questions/${questionId}/choices/`, "");
        await questionObj.addChoice(choiceId);
        const question = await questionObj.getQuestion();
        this.setState({ question });
    };

    addQuestion = async () => {
        const { newQuestion, newQuestionChoices } = this.state;
        const questionObj = new QuestionClass();
        const question = await questionObj.addQuestion({
            question: newQuestion,
            choices: newQuestionChoices
        });
        this.setState({ question, questionId: question.url.replace('/questions/', '') });
    }

    handleNewQuestion = newQuestion => {
        this.setState({ newQuestion });
    }

    handleNewChoices = newChoices => {
        const newQuestionChoices = newChoices.split(',');
        this.setState({ newQuestionChoices });
    }

    componentDidUpdate() { console.log('update'); }

    render() {
        const { question, isLoaded } = this.state;
        return (
            <React.Fragment>
                {!isLoaded && <Loading />}
                {isLoaded && <div className="row question-details" >
                    <div className="col-1"></div>
                    <div className="col-10">
                        {question && <div>
                            <Question question={question} source={false} handleChange={this.handleChange} />
                            <button className="btn btn-primary float-right" onClick={this.handleVote}>vote</button>
                        </div>}
                        {!question && <div>
                            <div className="input-group input-group-lg input-class">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Question</span>
                                </div>
                                <input type="text" className="form-control" onChange={(e) => this.handleNewQuestion(e.target.value)} aria-describedby="inputGroup-sizing-lg" />
                            </div>
                            <div className="input-group input-group-lg input-class">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">choices</span>
                                </div>
                                <input type="text" className="form-control" placeholder="seperate choices by ',' comma" onChange={(e) => this.handleNewChoices(e.target.value)} aria-describedby="inputGroup-sizing-lg" />
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={this.addQuestion}>Add Question</button>
                            </div>
                        </div>}
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