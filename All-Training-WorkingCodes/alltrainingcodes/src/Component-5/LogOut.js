import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LogOut extends Component {
    constructor()
    {
        super();
        sessionStorage.removeItem("token");
    }
  render() {
    return (
      <div>LogOut
         <Link to="/">LogOut</Link>
      </div>
    )
  }
}
