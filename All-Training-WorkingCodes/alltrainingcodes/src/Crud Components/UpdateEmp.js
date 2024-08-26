import React, { Component } from 'react'
import axios from 'axios'

export default class UpdateEmp extends Component {
    constructor(){
        super();
        this.state={
            emp_Id:'',
            emp_Name:'',
            emp_Email:'',
            emp_Phone:'',
            emp_Doj:'',
            emp_Dept:'',
            emp_LeaveBal:''
        }
        this.UpdateEmp=this.UpdateEmp.bind(this);
        this.handlechange=this.handlechange.bind(this);
    }

    UpdateEmp(){
        let emp_Id=this.state.emp_Id;
        axios.put('http://localhost:12246/api/CRUD/UpdateEmp/'+emp_Id,{
            emp_Name:this.state.emp_Name,
            emp_Email:this.state.emp_Email,
            emp_Phone:this.state.emp_Phone,
            emp_Doj:this.state.emp_Doj,
            emp_Dept:this.state.emp_Dept,
            emp_LeaveBal:this.state.emp_LeaveBal
        }).then(response=>{
            console.warn(response);
            alert("Data Updated");
        }).catch(error=>{
            alert("error");
        });
    }

    handlechange(object){
        this.setState(object);    }

    render() {
        return (
           <> <div>Update Employee Details</div>
            <table>
                <tr>
                    <td>Emp_Id</td>
                    <td><input type="text" name="emp_Id" onChange={(e)=>this.handlechange({emp_Id:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Emp_Name</td>
                    <td><input type="text" name="emp_Name" onChange={(e)=>this.handlechange({emp_Name:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Emp_Email</td>
                    <td><input type="text" name="emp_Email" onChange={(e)=>this.handlechange({emp_Email:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Emp_Phone</td>
                    <td><input type="text" name="emp_Phone" onChange={(e)=>this.handlechange({emp_Phone:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Emp_Doj</td>
                    <td><input type="text" name="emp_Doj" onChange={(e)=>this.handlechange({emp_Doj:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Emp_Dept</td>
                    <td><input type="text" name="emp_Deptt" onChange={(e)=>this.handlechange({emp_Dept:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Emp_LeaveBal</td>
                    <td><input type="text" name="emp_leaveBal" onChange={(e)=>this.handlechange({emp_LeaveBal:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>
                        <button type='button' onClick={this.UpdateEmp}>Update</button>
                    </td>
                </tr>
            </table>
            </>
        )
    }
}
