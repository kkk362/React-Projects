import React, { Component } from 'react'
import axios from 'axios';

export default class ShowAllEmp extends Component {
    constructor(){
        super();
        this.state={
            Employee:[]
        }
    }
    componentDidMount(){
        // const employees = [
        //     {
        //       emp_Id: 1,
        //       emp_Name: "John Doe",
        //       emp_Email: "john.doe@example.com",
        //       emp_Phone: "+1234567890",
        //       emp_Doj: "2022-01-15",
        //       emp_Dept: "Sales",
        //       emp_LeaveBal: 12
        //     },
        //     {
        //       emp_Id: 2,
        //       emp_Name: "Jane Smith",
        //       emp_Email: "jane.smith@example.com",
        //       emp_Phone: "+0987654321",
        //       emp_Doj: "2021-06-23",
        //       emp_Dept: "Marketing",
        //       emp_LeaveBal: 8
        //     },
        //     {
        //       emp_Id: 3,
        //       emp_Name: "Alice Johnson",
        //       emp_Email: "alice.johnson@example.com",
        //       emp_Phone: "+1122334455",
        //       emp_Doj: "2020-11-30",
        //       emp_Dept: "HR",
        //       emp_LeaveBal: 15
        //     },
        //     {
        //       emp_Id: 4,
        //       emp_Name: "Bob Brown",
        //       emp_Email: "bob.brown@example.com",
        //       emp_Phone: "+2233445566",
        //       emp_Doj: "2019-03-12",
        //       emp_Dept: "Engineering",
        //       emp_LeaveBal: 10
        //     },
        //     {
        //       emp_Id: 5,
        //       emp_Name: "Emily Davis",
        //       emp_Email: "emily.davis@example.com",
        //       emp_Phone: "+3344556677",
        //       emp_Doj: "2018-08-05",
        //       emp_Dept: "Finance",
        //       emp_LeaveBal: 20
        //     }
        //   ];
        //   this.setState({Employee:employees})
        axios.get('http://localhost:12246/api/CRUD/DisplayAll').then(response=>{
            this.setState({Employee:response.data})
        }).catch(error=>{
            console.warn(error);
        })
    }

  render() {
      const {Employee}=this.state;
    return (
      <><div>ShowAllEmp</div>
      <table align={'center'} border={1} cellPadding={10}>
        <tr>
            <td>Emp_Id</td>
            <td>Emp_Name</td>
            <td>Emp_Email</td>
            <td>Emp_Phone</td>
            <td>Emp_Doj</td>
            <td>Emp_Dept</td>
            <td>Emp_LeaveBal</td>
        </tr>
        {
            Employee.map(a=>
        <tr>
            <td>{a.emp_Id}</td>
            <td>{a.emp_Name}</td>
            <td>{a.emp_Email}</td>
            <td>{a.emp_Phone}</td>
            <td>{a.emp_Doj}</td>
            <td>{a.emp_Dept}</td>
            <td>{a.emp_LeaveBal}</td>
        </tr>
            )
        }
      </table>
      </>
    )
  }
}
