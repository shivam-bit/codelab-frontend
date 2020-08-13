import React, { useState,useEffect } from 'react';
import SubjectList from '../components/SubjectList';
import { getjwt } from "../../shared/components/jwt";
const Subjects = () => {
    useEffect(()=>{ 
        fetchSubjects()
    },[])
    const [SUBJECTS,setItems]=useState([])
    const fetchSubjects = async () =>{
        const jwt=getjwt()
        const data=await fetch('http://localhost:4000/api/v1/all-subjects',{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization:`Bearer ${jwt} `
            }
        })
        const items=await data.json()
        // console.log(items.data);
        setItems(items.data)
    }
    return ( 
        <SubjectList data={SUBJECTS} />
     );
}
 
export default Subjects;
