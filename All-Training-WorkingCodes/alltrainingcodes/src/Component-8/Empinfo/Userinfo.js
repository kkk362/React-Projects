import React, { Component } from 'react'

export default class Userinfo extends Component {
constructor()
{
    super();
    this.state={users:""}

}
refereshList()
{
    const url="https://reqres.in/api/users";
    fetch(url).then((resp)=>{
        resp.json().then((result=>{
           // console.warn(result);
           this.setState({users:result.data})
        }))
    })

}
componentDidMount()
{
    this.refereshList();
}

  render() {
    return (
      <><div>Userinfo</div>
      <table>
            <tr>
                <th>Employoyee Id</th>
                <th>Email</th>
                <th>Employoyee first_name</th>
                <th>Employoyee last_name</th>
                <th>Employoyee avatar</th>
            
            </tr>

            {
            this.state.users?this.state.users.map(x => <tr>
                <td> {x.id}  </td>
                <td> {x.email}  </td>
                <td> {x.first_name}  </td>
                <td> {x.last_name}  </td>
                <td><a href={x.avatar}>{x.email} </a>   </td>

            </tr>

            ):null
        }


        </table></>

    )
  }
}
