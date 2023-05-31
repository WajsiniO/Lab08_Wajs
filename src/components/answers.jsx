import React from "react";
import Table from "./table/table";
const Answers = (props) => {
    return (
        <div>
            <Table markedAnswer={props.markedAnswer} checkAnswer={props.checkAnswer} answers={props.currentAnswers} >
            </Table>
        </div>
    )
};

export default Answers;