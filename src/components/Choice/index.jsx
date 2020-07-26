import React from 'react';
import './style.css';

const Choice = ({ choice, handleChange }) => {
    return (
        <li className="list-group-item">
            <div className="form-check choice">
                <input
                    className="form-check-input"
                    name="choice"
                    type="radio"
                    id="exampleRadios1"
                    onChange={() => handleChange(choice)}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">{choice.choice}</label>
                <span className="float-right" >Number of votes: {choice.votes}</span>
            </div>
        </li>
    );
}

export default Choice;