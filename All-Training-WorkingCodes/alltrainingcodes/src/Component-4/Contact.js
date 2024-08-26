const Contact = (props) => { 
    console.log(props);
    
    return (
    <><div>
    <h1> Name = {props.Name}</h1>
    <h2>address = {props.Address}</h2>
    </div><div>
    <h1> Name = {props.Name}</h1>
    <h2>Address = {props.Address}</h2>
    </div></>
    
    );
   }
   export default Contact;