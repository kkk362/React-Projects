import logo from './logo.svg';
import './App.css';
import Message  from './Account/Message';
import Mycom from './Account/Mycom';
import Eventex1 from './Account/Eventex1';
import Ex1 from './Lifecycle/Ex1';
import Ex2    from './Lifecycle/Ex2';

function App() {
    function testfun2(){
    alert("test12");
    }

  return (
    <>
    <div className="App"> <h1>Hello this is my App  Main Component</h1> </div>
    <Message />
    <Mycom/>
    <Eventex1/>
    <Ex1/>
    <Ex2/>
    <button onClick={testfun2} >call this fun</button>
    </>
  );

}

export default App;
