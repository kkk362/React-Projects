import React  from "react";
export default class Eventex1 extends React.Component{
    testfun()
    {
        alert("hello this is test fun");
    }
    render()
    {
        return(
            <div>
                <button onClick={()=>this.testfun()}>submit</button>

                <button onClick={this.testfun.bind(this)}>submit1</button>
            </div>
        )
    }

}