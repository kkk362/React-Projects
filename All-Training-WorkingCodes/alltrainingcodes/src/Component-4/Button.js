import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToggleButton,Button,CloseButton } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        return (
           <div className="App">
            <h1>This is my mail component</h1>
            <Button  >BootStrapButton</Button><br></br>
            <ToggleButton>ToggleButton</ToggleButton><br></br>
            <CloseButton>Close btn</CloseButton>  
           </div>
    )}
}
