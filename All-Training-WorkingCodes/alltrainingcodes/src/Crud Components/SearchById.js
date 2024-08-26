import React,{Component} from 'react';
import axios from 'axios'; 
export default class SearchById extends Component 
{ 
    constructor () 
    { 
        super () ;  
        this.state = { 
            emp_Id:'',
            emp_Name:'',
            emp_Email:'',
            emp_Phone:'',
            emp_Doj:'',
            emp_Dept:'',
            emp_LeaveBal:'' 
            } 
           this.searchbyid=this.searchbyid.bind(this);
    }
             searchbyid (e)
             { 
                e.preventDefault(); 
                let id=this.state.emp_Id ; 
                axios.get('http://localhost:12246/api/CRUD/SearchById/' + id) 
                .then(response => {
                     this.setState ( { 
                         emp_Id:response.data.emp_Id,
                         emp_Name:response.data.emp_Name,
                         emp_Email:response.data.emp_Email,
                         emp_Phone:response.data.emp_Phone,
                         emp_Doj:response.data.emp_Doj,
                         emp_Dept:response.data.emp_Dept,
                         emp_LeaveBal:response.data.emp_LeaveBal 
                    }) 
                }).catch(error=>{ 
                    console.warn(error) ;
                })
            }

            render()
            { 
                const { emp_Id } = this.state ;
                const { emp_Name } = this.state ; 
                const { emp_Email } = this.state ;
                const { emp_Phone } = this.state ;
                const { emp_Doj } = this.state ;
                const { emp_Dept } = this.state ;
                const { emp_LeaveBal } = this.state ; 
                return(
                <>
                     <div>SearchById</div><label>Enter the Id</label> 
                     <input type = "text" name = " emp_Id " onChange ={(e)=>this.setState({emp_Id:e.target.value})}></input>
                     <button onClick = {(e)=>this.searchbyid (e)}>Search</button> 
                     <table>
                         <tr> 
                             <td>Emp_Id </td> 
                             <td>Emp_Name</td>
                             <td>Emp_Email</td>
                             <td>Emp_Phone</td>
                             <td>Emp_Doj</td>
                             <td>Emp_Dept</td>
                             <td>Emp_LeaveBal</td>
                             </tr>
                             <tr> 
                             <td>{emp_Id}</td> 
                             <td>{emp_Name}</td> 
                             <td>{emp_Email}</td>
                             <td>{emp_Phone}</td>
                             <td>{emp_Doj}</td>
                             <td>{emp_Dept}</td>
                             <td>{emp_LeaveBal}</td> 
                             </tr> 
                             </table>
                             </>
                )
            }
        }
    
