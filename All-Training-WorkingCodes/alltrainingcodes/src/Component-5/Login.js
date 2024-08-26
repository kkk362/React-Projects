import React, { Component } from 'react'
import {Navigate} from 'react-router-dom';

export default class Login extends Component {
    constructor(props)
    {
        super(props);
        let loggedIn=false;
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onDataChange=this.onDataChange.bind(this);
        this.SubmitForm=this.SubmitForm.bind(this);

    }
    SubmitForm(e)
    {
        e.preventDefault();
        const {username,password}=this.state;
        if(username==="A" && password==="B")
        {
            sessionStorage.setItem("token","asdfasdfsdf");
            this.setState({
                loggedIn:true
            })
        }

    }
    onDataChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
    if(this.state.loggedIn)
    {
        return <Navigate to="/admin"></Navigate>
    }
    return (
      <><div>Login</div>
      <form onSubmit={this.SubmitForm}>
        <input type="text" placeholder="Enter A as Username" name="username" onChange={this.onDataChange} value={this.state.username}></input>
        <br></br>
        <input type="password" placeholder='Enter B as password' name="password"  onChange={this.onDataChange} value={this.state.password}></input>
        <br></br>
        <input type="submit" value="submit"  ></input>
        <br></br>
        </form></>
    )
  }
}
