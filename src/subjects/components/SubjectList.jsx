import React from 'react';
import SubjectItem from './SubjectItem';
const SubjectsList = (props) => {
    if (props.data.length===0){
    return ( 
        <div>
        <h2>No subjects</h2>
        </div>
     );
    }
    return(
        <ul>
        {props.data.map(subject => (
            <SubjectItem key={subject._id} id={subject._id} name={subject.subject_name} />
        ))}
        </ul>
    )
}
 
export default SubjectsList;