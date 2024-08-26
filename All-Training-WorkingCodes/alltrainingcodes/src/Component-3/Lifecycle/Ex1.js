import React from "react";

class Ex1 extends React.Component
{
constructor()
{
    super();
    console.warn("This is constructor")
}
componentDidMount()
{
    console.warn("this is componentDidMount")
}
render()
{
console.warn("This is Render")
    return(
        <div>Life Cycle Methods</div>
    )
}


}
export default Ex1;