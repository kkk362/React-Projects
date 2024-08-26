import React from "react";
class Ex2 extends React.Component{
constructor(){
    super();
    this.state={
        Active:null,
        Who:null

    }
    console.warn("This is constructor")
}
componentDidUpdate()
{
    console.warn("this is componentDidMount")
    if(this.state.Who==null)
    {
    this.setState({Who:"My name is Raj"})
    }
}
render()
{

console.warn("This is Render")
    return(
        <div><h1>componentDidMount {this.state.Who}</h1>
        <button onClick={()=>{this.setState({Active:"yes"})}}>submit</button>
        
        </div>

    )
}


}
export default Ex2;