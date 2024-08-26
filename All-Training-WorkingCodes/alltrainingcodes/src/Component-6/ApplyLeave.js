import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'

export default function ApplyLeave() 
{
  return (
    <>
    <div><h1> Apply Leave</h1></div>

    <Form>
     
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" placeholder="dd/mm/yyyy" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" placeholder="dd/mm/yyyy" />
        </Form.Group>

      

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Number of days</Form.Label>
        <Form.Control placeholder="Number of days" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Leave Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Sick Leave</option>
            <option>Maternity</option>
            <option>Earned leave</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Leave Reason</Form.Label>
        <Form.Control placeholder="Tell us your leave reason" />
      </Form.Group>
     

    <Button  as="input" type="button" value="Apply" />{' '}
    <Button  as="input" type="submit" value="Cancel" />{' '}
    </Form>
    </>
    
  )
}
