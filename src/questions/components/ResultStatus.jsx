import React, { Component } from 'react';
import { Icon } from "atomize";
const ResultStatus = (props) => {
    return ( 
        <div>
      
        {props.status===""?<h1>"Not submitted"</h1>: null}
        {props.status==="checking"? <div> <h1>checking</h1><Icon name="Loading" size="20px" /></div>:null }
        {props.status==="failed"?<div> <h1>Failed</h1><Icon name="Cross" size="20px" /></div>:null }
        {props.status==="passed"?<div> <h1>Passed</h1><Icon name="Checked" size="20px" /></div>:null }
        {props.score>0?<div>Plagirisim Score : {props.score} </div>:null }
        </div>
        );
}
 
export default ResultStatus;