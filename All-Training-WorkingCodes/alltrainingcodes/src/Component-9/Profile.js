import React, { Component } from 'react'

export default class Profile extends Component {
constructor()
{
    super();
    this.ss =this.testFun.bind(this)
}


  render() {
    return (
      <div>Profile
      <button onClick={()=>this.testFun()}>Submit</button>
      <button onClick={this.testFun.bind(this)}>Submit</button>
      <button onClick={this.ss}>Submit</button>
      </div>
    )
  }
  testFun()
  {
    alert("Hello Test");
  }
}
