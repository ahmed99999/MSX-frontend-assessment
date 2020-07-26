import React from 'react';
import { Link } from 'react-router-dom';

const Quesion = ({ question }) => {
    return (
        <div className="card">
            <div className="card-header">
                Quesion: {question.url.replace("/questions/", "")}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{question.question}</p>
                    <footer className="blockquote-footer"><cite title="Source Title">Published At: </cite>{question.published_at}</footer>
                    <Link to={question.url} className="btn btn-primary float-right">View Quesion</Link>
                </blockquote>
            </div>
        </div>
    );
}

export default Quesion;