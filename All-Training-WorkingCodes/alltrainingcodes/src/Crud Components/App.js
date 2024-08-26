import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ShowAllEmp from './ShowAllEmp'
import DeleteEmp from './DeleteEmp'
import UpdateEmp from './UpdateEmp'
import SearchById from './SearchById'
import InsertLeave from './InsertLeave'

export default class App extends Component {
  render() {
    return (
      <>
      <div className='App'>
      <BrowserRouter>
            <div className='App'><h1>Leave Management System</h1></div>
            <ul>
                
                <li><Link to="/">ShowAllEmp</Link>  </li> 
                <li><Link to="/DeleteEmp">DeleteEmp</Link></li>
                <li><Link to="/UpdateEmp">UpdateEmp</Link></li>
                <li><Link to="/InsertLeave">InsertLeave</Link></li>
                <li><Link to="/SearchById">SearchById</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<ShowAllEmp />}></Route>
                <Route path='/DeleteEmp' element={<DeleteEmp />}></Route>
                <Route path='/UpdateEmp' element={<UpdateEmp />}></Route>
                <Route path='/InsertLeave' element={<InsertLeave />}></Route>
                <Route path='/SearchById' element={<SearchById />}></Route>
                {/* <Route path='*' element={<Pagenotfound />}></Route> */}
            </Routes>
        </BrowserRouter>
        </div></>
    )
  }
}
