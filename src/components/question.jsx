import React from 'react';

const Question = (props) => {
    return (
        <div>
            <p>Question: <b>{props.currentIndex}/{props.allQuestions}</b></p>
            <p className={"fw-bold"}>{props.currentQuestion}</p>
        </div>
    )
;}

export default Question;