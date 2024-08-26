import React, { Component } from 'react'
import './App.css';
import Showemployee from './Component-8/Empinfo/Showemployee';
import Editemployee from './Component-8/Empinfo/Editemployee';
import {BrowserRouter,Routes,Route,Link}  from 'react-router-dom';
import Userinfo from './Component-8/Empinfo/Userinfo';

export default class App extends Component {
  render() {
    return (
        <><h1>This is main page</h1>
        <BrowserRouter>
            <ul>
                <li>    <Link to="/">Showemployee</Link></li>
                <li>    <Link to="/Editemployee">Editemployee</Link></li>
                <li>    <Link to="/Userinfo">Userinfo</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Showemployee />}></Route>
                <Route path='/Editemployee' element={<Editemployee />}></Route>
                <Route path='/Userinfo' element={<Userinfo />}></Route>

            </Routes>
        </BrowserRouter></>
    )
  }
}
