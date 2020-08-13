import React from 'react';
import QuestionItem from './QuestionItem'
const QuestionList = (props) => {
    console.log(props.data)
    if (props.data.length===0){
        return ( 
            <div>
            <h2>No subjects</h2>
            </div>
         );
        }
    return(
        <ul>
        {props.data.map(question => (
            <QuestionItem key={question._id} id={question._id} heading={question.question} />
        ))}
        </ul>
    )
}
 
export default QuestionList;