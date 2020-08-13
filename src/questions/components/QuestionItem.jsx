import React from 'react';
import { Link } from 'react-router-dom';
import {Row,Col,Text } from "atomize";
import { Button } from 'atomize/dist';
const QuestionItem = (props) => {
    const text= props.heading
    console.log(text)
    const style={
        color:"white"
    }
    return ( 
        <div align="center" justify="center" d="flex">
            <br />
            <Row align={{ xs: "space-around", lg: "center" }} 
            justify="center" 
            rounded="md" 
            bg="info700"
            hoverBg="info700"
            h="5%"
            w="50%"
            hoverShadow="5"
            d="flex">

            <Col size={8} justify="center" >
                <Text tag="h1" textSize="heading" m={{ b: "4rem" }} style={style}>
                    {props.heading}
                </Text>
            </Col>
            <Col size={4} justify="center" >
                <Link to={`/solve/${props.id}`}><Button>Solve</Button></Link>
            </Col>
            </Row>
            <br />
        </div>
     );
}
 
export default QuestionItem;