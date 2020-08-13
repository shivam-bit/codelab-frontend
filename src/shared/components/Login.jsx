import React, { useState } from 'react';
import { Row,Text, Input,Button, ThemeProvider } from "atomize";
import { Redirect } from "react-router";

const Login = (props) => {
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [isLoggedIn,setLogin]=useState(false);
  const [errMessage,setErrMessage]=useState("");
  const emailChange=(e)=>{
    setEmail(e.currentTarget.value)
  }
  const passwordChange=(e)=>{
    setPassword(e.currentTarget.value)
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const solution={
      "email":Email,
      "password":Password
    }
    const data= await fetch("http://localhost:4000/api/v1/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(solution)
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
        console.log(isLoggedIn)
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
            Login into your account
              </Text>
            </Row>
            <br/>
            <form onSubmit={handleSubmit}>
                <Row justify="center" >
                    <Input id="email" placeholder="E-mail" rounded="xl" hoverShadow="4" onChange={emailChange} />
                </Row>
                <br/>
                <Row justify="center" >
                    <Input id="password" placeholder="Password" rounded="xl" hoverShadow="4" onChange={passwordChange} />
                </Row>
                <br/>
                <Row justify="center">
                    <Button 
                        shadow="3"
                        hoverShadow="4" roundes="xl" type="submit">
                        Login
                    </Button>
                </Row>
            </form>
            </div>
            {isLoggedIn?<Redirect to='/subjects'/>:null}
            {errMessage===""?null:<h2>{errMessage}</h2>}
            </ThemeProvider>
   );
}
 
export default Login;
 
