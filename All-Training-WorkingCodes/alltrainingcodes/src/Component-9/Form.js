import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
    };
    this.submit = this.submit.bind(this);
  }
  validate() {
    if (this.state.username == "" && this.state.password == "") {
      this.setState({ usernameError: "Pls enter Username" });
      this.setState({ passwordError: "Pls enter Password" });
    }
    // else if(!this.state.username.includes("@") && this.state.password.length<5)
    // {
    //     this.setState(
    //         {
    //             usernameError:"Must include @ sign",
    //             passwordError:"Password length should be more than 5"
    //         }

    //     )

    // }
    else if (!this.state.username.includes("@")) {
      this.setState({
        usernameError: "Must include @ sign",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length should be more than 5",
      });
    } else {
      return true;
    }
  }
  submit() {
    this.setState({
      usernameError: "",
      passwordError: "",
    });
    if (this.validate()) {
      if (
        this.state.username == "Raj@gmail.com" &&
        this.state.password == "raj@123"
      )
        alert("Valid" + this.state.username);
      else {
        alert("InValid Username/Password");
      }
    }
  }
  render() {
    return (
      <>
        <div>Appforms</div>
        <h1>Form with Validation</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ username: event.target.value });
          }}
        ></input>
        <p style={{ color: "red" }}>{this.state.usernameError}</p>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        ></input>
        <p style={{ color: "red" }}>{this.state.passwordError}</p>
        <br></br>
        <button onClick={this.submit}>Submit</button>
        {/* <button onClick={this.submit1}>Submit1</button> */}
        Name:
        <input type="text" value={this.state.username}></input>
        <h1>Your username= {this.state.username}</h1>
      </>
    );
  }
}
