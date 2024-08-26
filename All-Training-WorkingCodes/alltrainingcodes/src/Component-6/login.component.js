import React, { Component } from "react";

export default class Login extends Component {
    constructor()
{
    super();
    this.state={
        emp_id:"",
        password:""
    }
    this.Login=this.Login.bind(this);

}

validate()
{
    if(this.state.emp_id=="" &&  this.state.password=="")
    {
        this.setState({emp_idError:"Pls enter Username"});
        this.setState({passwordError:"Pls enter Password"});
    }
    else{
        return true;
    }

}

Login(e)
{
    e.preventDefault();
    if (this.validate())
    {
        let emp_id = this.state.emp_id;
        let password = this.state.password;
        fetch("url"+emp_id+"/"+password).then(res =>res.json()).then(result =>
            {
                console.log(result);
                if(result>0)
                {
                    window.location='path';
                }
                else
                {
                    alert ("Invalid Credentials");
                }
            }).catch(err =>{
                console.warn(err);
                alert("error");
            })
    }
}
// submit()
// {
 
//     if(this.validate())
//     {
//         if(this.state.emp_id == 1 && this.state.password=="raj@123")
//     alert("Valid"+this.state.emp_id);
//     else{
//         alert("Invalid Employee ID/Password");
//     }
//     }

// }
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Emp_ID</label>
                    <input type="number" className="form-control" onChange={(e)=>this.handleChange({emp_id:e.target.value})} placeholder="Enter emp_id" />
                </div>

            

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{this.handleChange({password:e.target.value})}} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.Login}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
