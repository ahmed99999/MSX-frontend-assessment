import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Choice from '../Choice';
import './style.css';

const Quesion = ({ question, source, handleChange }) => {
    const publishedAt = moment(question.published_at).format("YYYY-MM-DD");
    return (
        <div className="card question">
            <div className="card-header">
                Quesion: {question.url.replace("/questions/", "")}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{question.question}</p>
                    <div>
                        <footer className="blockquote-footer d-inline"><cite title="Source Title">Published At: </cite>{publishedAt}</footer>
                        {source && <Link to={question.url} className="btn btn-primary float-right d-inline">View Quesion</Link>}
                    </div>
                </blockquote>
            </div>
            {!source && <div className="card-body">
                <ul className="list-group">
                    {question.choices.map((choice, index) => (
                        <Choice key={index} choice={choice} handleChange={handleChange} />
                    ))}
                </ul>
            </div>}
        </div>
    );
}

export default Quesion;