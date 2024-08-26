import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function MyLeave() 
{
  return (
    <>
    <div><h1>Leave Applications Section</h1></div>

    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>Leave ID</th>
          <th>Number of days</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Leave Type</th>
          <th>Status</th>
          <th >Reason</th>
          <th>Applied On</th>
          <th>Manager Comments</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>101</td>
          <td>10</td>
          <td>10/08/2022</td>
          <td>20/08/2022</td>
          <td>Sick</td>
          <td>Approved</td>
          <td >Not Feeling Well</td>
          <td>09/08/2022</td>
          <td>Please Take Care</td>
        </tr>
        <tr>
          <td>102</td>
          <td>10</td>
          <td>10/08/2022</td>
          <td>20/08/2022</td>
          <td>Sick</td>
          <td>Approved</td>
          <td>Not Feeling Well</td>
          <td>09/08/2022</td>
          <td>Please Take Care</td>
        </tr>
        <tr>
          <td>103</td>
          <td>10</td>
          <td>10/08/2022</td>
          <td>20/08/2022</td>
          <td>Sick</td>
          <td>Approved</td>
          <td >Not Feeling Well</td>
          <td>09/08/2022</td>
          <td>Please Take Care</td>
        </tr>
      </tbody>
    </Table>

    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        New Application
      </Button>
      </div>
    
    </>


  )
}
