import React from "react";
export default class Car extends React.Component
{
    constructor()
    {
    super();
    this.state = {Brand:"Ford",Model:"Mustang",Color:"Black",Year:"1994"};
    this.Id = "101";
    }

     Changecarname()
     {
       this.setState( {
        Brand:"BMW"
   })
        
     }
    
    render()
    {
        return(
        <div>
        <h1>{this.Id}</h1>
        <h1>MY {this.state.Brand}</h1>
        <p>
        It is a {this.state.Color} {this.state.Model} {this.state.Year}
        </p>

        <button onClick={()=>this.Changecarname()}> Change </button>
        </div>
        );
    }
}