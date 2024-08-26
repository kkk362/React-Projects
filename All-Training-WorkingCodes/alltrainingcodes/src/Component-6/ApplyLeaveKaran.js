import Button from 'react-bootstrap/Button';
import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class ApplyLeaveKaran extends Component 
{
  constructor(){
    super();
    this.state={
       "emp_Id":'',
       "no_OfDays":'',
       "start_Date":'',
       "end_Date":'',
       "applied_On":'',
       "leave_Type":'',
       "leave_Status":'',
       "leave_Reason":'',
       "manager_Comment":''
        
    }
    this.CreateApplyLeave=this.CreateApplyLeave.bind(this);
    this.handleChange=this.handleChange.bind(this);
}
CreateApplyLeave()
{
    axios.post("url",
    {
     emp_Id:"1000",
     no_OfDays:this.state.no_OfDays,
     start_Date:this.state.start_Date,
     end_Date:this.state.end_Date,
     applied_On:"2022-07-28",
     leave_Type:"Sick",
     leave_Status:"Pending",
     leave_Reason:this.state.leave_Reason,
     manager_Comment:"Nhi milegi leave"

    }).then(res =>{
        console.warn(res);
        alert("data inserted");
    }).catch(err =>{
        alert("error");
    })

}
handleChange(e)
{
    this.setState(e);
}

  render(){
  return (
    // <Form>
     
    //     <Form.Group className="mb-3" controlId="formGridEmail">
    //       <Form.Label>Start Date</Form.Label>
    //       <Form.Control type="date" placeholder="dd/mm/yyyy" />
    //       <input type="date" name="start_Date" onChange={(e)=>this.handlechange({start_Date:this.target.value})}></input>
    //     </Form.Group>
      
    //     <Form.Group className="mb-3" controlId="formGridEmail">
    //       <Form.Label>End Date</Form.Label>
    //       <Form.Control type="date" onChange={(e)=>this.handleChange({end_Date:e.target.value})} placeholder="dd/mm/yyyy" />
    //       <input type="date" name="end_Date" onChange={(e)=>this.handlechange({end_Date:this.target.value})}></input>
    //     </Form.Group>

      

    //   <Form.Group className="mb-3" controlId="formGridAddress2">
    //     <Form.Label>Number of days</Form.Label>
    //     <Form.Control onChange={(e)=>this.handleChange({no_OfDays:e.target.value})} placeholder="Number of days" />
    //     <input type="number" name="no_OfDays" onChange={(e)=>this.handlechange({no_OfDays:this.target.value})}></input>
    //   </Form.Group>

    //     {/* <Form.Group as={Col} controlId="formGridState">
    //       <Form.Label>Leave Type</Form.Label>
    //       <Form.Select defaultValue="Choose...">
    //         <option>Sick Leave</option>
    //         <option>Maternity</option>
    //         <option>Earned leave</option>
    //         <Form.Control leave_Type=defaultValue/>
    //         <Form.Control onChange={(e)=>this.handlechange({leave_Type:this.target.value})} placeholder="Leave Type" />
    //       </Form.Select>
    //     </Form.Group> */}

    //     <Form.Group className="mb-3" controlId="formGridAddress2">
    //     <Form.Label>Leave Reason</Form.Label>
    //     <Form.Control onChange={(e)=>this.handleChange({leave_Reason:e.target.value})}  placeholder="Tell us your leave reason" />
    //     <input type="text" name="leave_Reason" onChange={(e)=>this.handlechange({leave_Reason:e.target.value})}></input>
    //   </Form.Group>
     // <Button  as="input" type="button" value="Apply" onClick={this.CreateApplyLeave} />
    // <Button  as="input" type="submit" value="Cancel" />
    // </Form>
     
    <form>
                    <h3>Register</h3>
    
                    <div className="form-group">
                        <label>Start Date </label>
                        <input type="date" onChange={(e)=>this.handleChange({start_Date:e.target.value})} className="form-control" placeholder=" Enter Start Date" />
                    </div>
    
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="date"  onChange={(e)=>this.handleChange({end_Date:e.target.value})} className="form-control" placeholder=" Enter End date" />
                    </div>
    
                    <div className="form-group">
                        <label>Number of days </label>
                        <input type="number"  onChange={(e)=>this.handleChange({no_OfDays:e.target.value})} className="form-control" placeholder="Enter Number of days" />
                    </div>

                    <div className="form-group">
                        <label>Leave Type</label>
                        <input type="text" onChange={(e)=>this.handleChange({leave_Type:e.target.value})} className="form-control" placeholder="Enter the Leave Type " />
                    </div>

                    <div className="form-group">
                        <label>Leave Reason</label>
                        <input type="text"  onChange={(e)=>this.handleChange({leave_Reason:e.target.value})} className="form-control" placeholder="Enter Leave Reason" />
                    </div>
    
                    <br/>
                    
                    <button type="submit" onClick={this.CreateApplyLeave} className="btn btn-dark btn-lg btn-block"> Apply </button> {' '}
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Cancel</button>
    </form>
  )
  }
}