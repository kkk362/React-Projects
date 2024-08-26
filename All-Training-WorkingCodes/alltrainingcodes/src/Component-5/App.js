import './App.css';
import { ContactUs } from './Component-5/ContactUs';
import Login from './Component-5/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Admin from './Component-5/Admin';
import LogOut from './Component-5/LogOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/LogOut' element={<LogOut/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;