import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navigate} from 'react-router-dom';
export default class Admin  extends Component {
    constructor()
    {
        super();
        const token=sessionStorage.getItem("token");
        let loggedIn=true;
        if(token==null)
        {
            loggedIn=false;

        }
        this.state={
            loggedIn
        }
    }
  render() {
    if(this.state.loggedIn===false)
    {
         return <Navigate to="/"></Navigate>
    }
    return (
      <div>Admin is Authorize Page


        <Link to="/LogOut">LogOut</Link>
      </div>

    )
  }
}
