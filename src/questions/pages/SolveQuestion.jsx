import React, { useEffect,useState } from 'react';
import { Row,Col,Text , Button, ThemeProvider,Textarea } from "atomize";
import {useParams} from "react-router-dom";
import { getjwt } from "../../shared/components/jwt";
import  ResultStatus  from '../components/ResultStatus';


const SolveQuestion = () => {
    let { questionId } = useParams();
    const [source,setSource]=useState("");
    const [errMessage,setErrMessage]=useState("");
    const [Question,setQuestion]=useState({})
    const [qstatus,setQstatus]=useState("")
    const [score,setScore]=useState(0)
    useEffect(()=>{ 
        fetchQuestions()
    },[questionId])
    const fetchQuestions = async () =>{
        const jwt=getjwt()
        const data=await fetch(`http://localhost:4000/api/v1/view-question/${questionId}`,{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization:`Bearer ${jwt} `
            }
        })
        const items=await data.json()
        // console.log(items.data)
        setQuestion(items.data)
    }
    const sourceChange=(e)=>{
        setSource(e.currentTarget.value)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setQstatus("checking")
        const jwt=getjwt()
        const payload= {
            "qid":questionId,
            "source":source,
            "language":"python3"
        }
        const data= await fetch("http://localhost:4000/api/v1/judge",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization:`Bearer ${jwt} `
            },
            body: JSON.stringify(payload)
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
              if (data.success==false) {
                  setQstatus("failed")
                // console.log(data.message)
                // setErrMessage(data.message)
              } else {
                setQstatus("passed")
                setScore(data.score)
              }
            }) 
    }
    return ( 
        <ThemeProvider>
        <div bg="warning700">
        <Row justify="center">
        <Text
            textSize="display1"
            textAlign="center"
            textWeight="500"
            textColor="medium"
        >
          </Text>
        </Row>
        <br/>
        <Row justify="center">
        <Col size={8}>
            <Row justify="center" >
            {Question.question}
            </Row>
            <br/>
            <Row justify="center" >
            Input Format
            <br/>
                {Question.input_format}
                </Row>
                <br/>
            <Row justify="center" >
                Output Format
                <br/>
                {Question.output_format}
            </Row>
            <br/>
            <Row justify="center">
            <Col>
                Expected Input
                <br/>
                {Question.input_format}
                </Col>
            <Col>
            Expected Output
            <br/>
                {Question.output_format}
                </Col>
            </Row>
            <br/>
            <Row justify="center" >
                Explanation
                <br/>
                {Question.explanation}
            </Row>
            <br/>
            <form onSubmit={handleSubmit}>
            <Row justify="center" >
                    <Textarea onChange={sourceChange} placeholder="Enter your code" />
            </Row>
            <br/>
            <Row justify="center">
                <Button 
                    shadow="3"
                    hoverShadow="4" roundes="xl" type="submit">
                    Submit
                </Button>
            </Row>
            </form>
        </Col>
        <Col>
        {qstatus===""?null:<ResultStatus status={qstatus} score={score}/>}
        </Col>
        </Row>
        </div>
        </ThemeProvider> );
}

export default SolveQuestion;
