import React, { Component } from "react";

export default class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }
  updateSubmit(event) {
    alert("You have entered the UserName and CompanyName successfully.");
    event.preventDefault();
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        AppForm2
        <form onSubmit={this.updateSubmit}>
          <h1>Uncontrolled Form Example</h1>
          <label>
            Name:
            <input type="text" name="uname" id="uname" ref={this.input} />
          </label>
          <label>
            CompanyName:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
