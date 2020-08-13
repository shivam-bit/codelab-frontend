import React, { useState } from 'react';
import { Row,Text, Input,Button , ThemeProvider } from "atomize";
import { Redirect } from "react-router";
const Register = (props) => {
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [isLoggedIn,setLogin]=useState(false);
    const [Name,setName]=useState("");
    const [Course,setCourse]=useState("BCA");
    const [Roll,setRoll]=useState("");
    const [Year,setYear]=useState("");
    const [errMessage,setErrMessage]=useState("");
    const emailChange=(e)=>{
        setEmail(e.currentTarget.value)
      }
    const passwordChange=(e)=>{
        setPassword(e.currentTarget.value)
      }
    const nameChange=(e)=>{
        setName(e.currentTarget.value)
    }
    const courseChange=(e)=>{
        setCourse(e.currentTarget.value)
    }
    const rollChange=(e)=>{
        setRoll(e.currentTarget.value)
    }
    const yearChange=(e)=>{
        setYear(e.currentTarget.value)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const payload={
            "email":Email,
            "password":Password,
            "name":Name,
            "course":Course,
            "roll":Roll,
            "year_of_admission":Year
          }
          const data= await fetch("http://localhost:4000/api/v1/register",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(payload)
          })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              console.log(data.message)
              setErrMessage(data.message)
            } else {
              localStorage.setItem("token", data.token)
            }
            setLogin(data.success)
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
            Register your account
              </Text>
            </Row>
            <br/>
            <form onSubmit={handleSubmit}>
                <Row justify="center" >
                    <Input placeholder="Name" rounded="xl" hoverShadow="4" id="name" onChange={nameChange} />
                </Row>
                <br/>
                <Row justify="center" >
                    <Input id="email" placeholder="E-mail" rounded="xl" hoverShadow="4" onChange={emailChange} />
                </Row>
                <br/>
                <Row justify="center" >
                    <Input id="password" placeholder="password" rounded="xl" hoverShadow="4" onChange={passwordChange}  />
                </Row>
                <br/>
                <Row justify="center" >
                    <Input id="course" placeholder="Course - MCA or BCA" rounded="xl" hoverShadow="4" onChange={courseChange} />
                </Row>
                <br/>
                <Row justify="center" >
                    <Input id="roll"placeholder="Roll" rounded="xl" hoverShadow="4" onChange={rollChange} />
                </Row>
                <br/>
                <Row justify="center" >
                    <Input id="year_of_admission" placeholder="year of admission" rounded="xl" hoverShadow="4" onChange={yearChange} />
                </Row>
                <br/>
                <Row justify="center">
                    <Button 
                        shadow="3"
                        hoverShadow="4" rounded="xl" type="submit">
                        Create
                    </Button>
                </Row>
            </form>
            </div>
            {isLoggedIn?<Redirect to='/subjects'/>:null}
            {errMessage===""?null:<h2>{errMessage}</h2>}
            </ThemeProvider>
         );
}
export default Register;