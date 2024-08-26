//1) Nothing to add in index.js
//2) add the code from index.css to our project index.css
//3)we need to install (a) To install React Router, all you have to do is run "npm install react-router-dom"
//                     (b) To install bootstrap "npm install react-bootstrap bootstrap"
//4)import these in App.js (a)import 'bootstrap/dist/css/bootstrap.min.css';
//                         (b)import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// To install axios run this command "npm install axios" & then just import "import axios from 'axios' ".
// This is used for HTTP request during API


//import BootstrapTrail from './BootstrapTrail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './login.component';
import SignUp from './signup.component';
import MyLeave from './MyLeave';
import PendingLeave from './PendingLeave';
import ApplyLeave from './ApplyLeave';
import ApproveDenyLeave from './ApproveDenyLeave';
import SignUpKaran from './SignUpKaran';
import ApplyLeaveKaran from './ApplyLeaveKaran';

function App()
 {
  return (
    <Router>
 <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
            Leave Management System
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/MyLeave'}>
                    My Leave
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to={'/PendingLeave'}>
                    Pending Leave
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/ApplyLeave'}>
                    Apply Leave
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/ApproveDenyLeave'}>
                  ApproveDenyLeave
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/SignUpKaran'}>
                 SignUpKaran
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/ApplyLeaveKaran'}>
                  ApplyLeaveKaran
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/MyLeave"  element={<MyLeave/>}/>
              <Route path="/PendingLeave"  element={<PendingLeave/>}/>
              <Route path="/ApplyLeave"  element={<ApplyLeave/>}/>
              <Route path="/ApproveDenyLeave"  element={<ApproveDenyLeave/>}/>
              <Route path="/SignUpKaran"  element={<SignUpKaran/>}/>
              <Route path="/ApplyLeaveKaran"  element={<ApplyLeaveKaran/>}/>
            </Routes>
          </div>
        </div>
      </div>
      </Router>
  );
}

export default App;
