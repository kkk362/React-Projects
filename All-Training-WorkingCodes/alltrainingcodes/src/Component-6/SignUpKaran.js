import axios from 'axios';
import React, { Component } from 'react'
export default class SignUpKaran extends Component {

    constructor(){
        super();
        this.state={
            "emp_Name": "",
            "emp_Email": "",
            "emp_Phone":"",
            "doj": "",
            "emp_Dept": "",
            "leave_Bal": "",
            "password": ""
        }
        this.create=this.create.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    create(){
       axios.post("url",
       {
        emp_Name: this.state.emp_Name,
        emp_Email:this.state.emp_Email,
        emp_Phone:this.state.emp_Phone,
        doj: this.state.doj,
        emp_Dept: this.state.emp_Dept,
        leave_Bal:"12",
        password:this.state.password
       }).then(res =>{
           alert("New Employee Inserted");
       }).catch(err =>{
           alert("Error")
       })
    
    }
    handleChange(e)
    {
      this.setState(e);
    }


    render() {
        return (
                <form>
                    <h3>Register</h3>
    
                    <div className="form-group">
                        <label>Employee Name </label>
                        <input type="text" name="Name" onChange={(e)=>this.handleChange({emp_Name:e.target.value})} className="form-control" placeholder="Enter Name" />
                    </div>
    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="Email" onChange={(e)=>this.handleChange({emp_Email:e.target.value})} className="form-control" placeholder="Enter Email" />
                    </div>
    
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" name="Number" onChange={(e)=>this.handleChange({emp_Phone:e.target.value})} className="form-control" placeholder="Enter Number" />
                    </div>

                    <div className="form-group">
                        <label>Date Of Join</label>
                        <input type="date" name="DOJ" onChange={(e)=>this.handleChange({doj:e.target.value})} className="form-control" placeholder="Date of Join" />
                    </div>

                    <div className="form-group">
                        <label>Department</label>
                        <input type="text" name="Department" onChange={(e)=>this.handleChange({emp_Dept:e.target.value})} className="form-control" placeholder="Enter Department" />
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"  name="Password"  onChange={(e)=>this.handleChange({emp_Dept:e.target.value})}  className="form-control" placeholder="Enter password" />
                    </div>
    
                    <button type="submit" onClick={this.create} className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>
                </form>
  

        )
    }
}