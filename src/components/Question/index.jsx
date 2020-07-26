import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './style.css';

const Quesion = ({ question }) => {
    const publishedAt = moment(question.published_at).format("YYYY-MM-DD HH:mm");
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
                        <Link to={question.url} className="btn btn-primary float-right d-inline">View Quesion</Link>
                    </div>
                </blockquote>
            </div>
        </div>
    );
}

export default Quesion;