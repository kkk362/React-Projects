import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function PendingLeave() {
  return (
    <>
    <div><h1>PendingLeave</h1></div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th colSpan={2} >Employee ID</th>
          <td> 1001 </td>
          <th colSpan={2}>Employee Name </th>
        <td> Karan Khandelwal</td>
          <th colSpan={2}>Employee Leave Balance</th>
          {/* <td> 25 </td> */}

         </tr>

         <tr>
          <th>Leave ID</th>
          <th>Number of days</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Leave Type</th>
          <th>Status</th>
          <th>Reason</th>
          
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>1</td>
          <td>5</td>
          <td>5/08/2022</td>
          <td>10/08/2022</td>
          <td>Sick</td>
          <td>Approved</td>
          <td >Not Feeling Well</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>4</td>
          <td>12/08/2022</td>
          <td>16/08/2022</td>
          <td>Marriage</td>
          <td>Approved</td>
          <td>Brother's wedding</td>
         
        </tr>
       
      </tbody>

{/* ==================================================================================== */}

      <thead>
        <tr>
          
          <th colSpan={2}>Employee ID</th>
          <td> 1002 </td>
          <th colSpan={2}>Employee Name </th>
        <td> Ramesh Tripathi </td>
          <th colSpan={2}>Employee Leave Balance</th>
          {/* <td> 25 </td> */}
          
         </tr>

         <tr>
          <th>Leave ID</th>
          <th>Number of days</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Leave Type</th>
          <th>Status</th>
          <th>Reason</th>
          
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>1</td>
          <td>5</td>
          <td>5/08/2022</td>
          <td>10/08/2022</td>
          <td>Sick</td>
          <td>Approved</td>
          <td >Not Feeling Well</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>4</td>
          <td>12/08/2022</td>
          <td>16/08/2022</td>
          <td>Marriage</td>
          <td>Approved</td>
          <td>Brother's wedding</td>
         
        </tr>
        </tbody>
    </Table>

    <Button  as="input" type="button" value="Approve" />{' '}
    <Button  as="input" type="submit" value="Deny" />{' '}
 
    </>
    
  )
}
