import React, { useState,useEffect } from 'react';
import QuestionList from '../components/QuestionList';
import {useParams} from "react-router-dom";
import { getjwt } from "../../shared/components/jwt";
const SubjectQuestions = (props) => {
    let { subjectName } = useParams();
    // console.log(subjectName)
    useEffect(()=>{ 
        fetchQuestions()
    },[])
    const [Questions,setQuestions]=useState([])
    const fetchQuestions = async () =>{
        const jwt=getjwt()
        const data=await fetch(`http://localhost:4000/api/v1/${subjectName}/viewAll`,{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization:`Bearer ${jwt} `
            },
        })
        const items=await data.json()
        console.log(items.data);
        setQuestions(items.data)
    }
    return ( <QuestionList  data={Questions} /> );
}
 
export default SubjectQuestions;