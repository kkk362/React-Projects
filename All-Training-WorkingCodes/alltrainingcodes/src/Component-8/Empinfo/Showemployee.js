import React, { Component } from 'react'

export default class Showemployee extends Component {
constructor()
{
    super();
    this.state={empinfo:[]};
   
}
refreshList()
{
    this.setState({
        empinfo:[
            {"EmpId":101,"EmpName":"Raj","EmpAddress":"A-100 sector 5"  },
            {"EmpId":102,"EmpName":"Raj kumar","EmpAddress":"B-100 sector 5"  },
            {"EmpId":103,"EmpName":"Rajee","EmpAddress":"C-100 sector 5"  }
        
        ]
    });
}
componentDidMount()
{
    this.refreshList();
}

  render() {
  //  const {empinfo}=this.state;

    return (
      <><div>Showemployee</div>
      <table>
<tr>
    <th>Employoyee Id</th>
    <th>Employoyee Name</th>
    <th>Employoyee Address</th>
</tr>

    {
     this.state.empinfo.map(x=>
        <tr>
        <td> {x.EmpId}  </td>
        <td> {x.EmpName}  </td>
        <td> {x.EmpAddress}  </td>
       
        </tr>
        
        ) 
    }


      </table>
      
      
      
      </>
    )
  }
}
