import React ,{Component} from "react";
class Message extends Component{
constructor()
{
    super();
    this.state={
        "id":101,
        "Name":"Raj",
        "Salary":40000,
        "count":0
    }
}
    updateState()
    {
        this.setState({
            Name:"kumar",
            count:this.state.count+1

        })
    }

    render()
    {
        console.log("Render call multiple times")
        return(

            <><h1>Id={this.state.id}</h1>
            <h1>Name={this.state.Name}</h1>
            <h1>salary={this.state.Salary}</h1>
            <h1>Count={this.state.count}</h1>         

            <button onClick={()=>this.updateState()}>Subscribe</button>
            </>
        )
    }
}

export default Message