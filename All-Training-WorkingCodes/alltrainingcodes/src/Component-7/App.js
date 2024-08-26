import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ToggleButton, CloseButton } from 'react-bootstrap';
import ShowAllbooks from './Component-7/ShowAllbooks'

function App() {
  return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form>
  <h1>This is my mail component</h1>
  <Button >BootStrapButton</Button>
  <ToggleButton>ToggleButton</ToggleButton>
  <CloseButton/>
  <ShowAllbooks/>
  </>
    
  );
}

export default App;
