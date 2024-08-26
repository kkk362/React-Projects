import React, { Component } from 'react'
export default class BookStore extends Component {
constructor()
{
    super();
    this.state=
    {  
         Books:[],
        id:'',
        title:'',
        description:''    

    }
    this.create=this.create.bind(this);
    this.update=this.update.bind(this);
    this.delete=this.delete.bind(this);
    this.handleChange=this.handleChange.bind(this);
}

refereshList()
{
   
    let url="https://localhost:44320/api/Books";
    fetch(url).then(response=>response.json()).then(result=>{
        this.setState({Books:result});
    })
}
componentDidMount()
{
    this.refereshList();
}
componentDidUpdate()
{
    this.refereshList();
}

    create()
    {
      //e.preventDefault();

        fetch("https://localhost:44320/api/Books",
        {
        "method":"POST",
        "headers":{
            "content-type":"application/json",
            "accept":"application/json"
        },
        body:JSON.stringify({
            title:this.state.title,
            description:this.state.description

        })

    }).then(response=>response.json()).then(response=>{
        alert("data inserted");
       // console.log(response);
    })
    .catch(err=>{
        console.warn(err);
    })

    }

    update(e)
    {
        e.preventDefault();
        let id=this.state.id;

        fetch("https://localhost:44320/api/Books/"+id,
        {
        "method":"PUT",
        "headers":{
            "content-type":"application/json",
            "accept":"application/json"
        },
        body:JSON.stringify({
            title:this.state.title,
            description:this.state.description

        })

    }).then(response=>response.json()).then(response=>{
        alert("data updated");
       // console.log(response);
    })
    .catch(err=>{
        console.warn(err);
    }) 
    }

    
    delete(e)
    {
        e.preventDefault();
        let id=this.state.id;
        fetch("https://localhost:44320/api/Books/"+id,
        {
        "method":"DELETE",
        "headers":{
            "content-type":"application/json",
            "accept":"application/json"
        }
    }).then(response=>response.json()).then(response=>{
        alert("data Deleted");
       // console.log(response);
    })
    .catch(err=>{
        console.warn(err);
    })
  
    }
    handleChange(changeObject)
    {
        this.setState(changeObject);

        
    }
  render() {
    const {Books}=this.state;
    return (
        <div className="App">
          <form>
            <table>
              <tr>
                <td><label >BookId</label>
                <input type="text" name="id" onChange={(e)=>this.handleChange({id:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >BookTitle</label>
                <input type="text" name="title" onChange={(e)=>this.handleChange({title:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >BookDescription</label>
                  <input type="text" name="description"  onChange={(e)=>this.handleChange({description:e.target.value})}></input>
                
                </td>
    
              </tr>
              
              <tr>
                <td><button type="button" onClick={this.create}>Add</button>
                <button type="button" onClick={(e)=>this.update(e)}>Update</button>
                <button type="button" onClick={(e)=>this.delete(e)}>Delete</button>
                 </td>
              
              </tr>
            </table>
          
          </form>

         <table>
            <tr>
                <td>Book Id</td>
                <td>Book title</td>
                <td>Book Description</td>
            </tr>
{
    Books.map(a=>
    <tr>
        <td>{a.id}</td>
        <td>{a.title}</td>
        <td>{a.description}</td>
    </tr>
    )
}

            </table>
          
        </div>
      );
  }
}
