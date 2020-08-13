import React, { Component } from 'react';
import {
  ThemeProvider,
  Text,
  Div } from "atomize";


  const theme = {
  shadows: {
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  }
};

class Navbar extends Component {
    state = {  }
    
    render() { 
        return ( 
            <ThemeProvider theme={theme}>
    <Div
      h="3.5rem"
      p={{ x: "1rem" }}
      shadow="new-shadow"
      rounded="lg"
      d="flex"
      align="center"
      justify="center"
      textColor="medium"
    >
      <Text textSize="display1">CODE 4 LAB</Text>
    </Div>
  </ThemeProvider>
 );
    }
}
 
export default Navbar;