import Login from './Login';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Car from './Car';
function App() {
  return (
    <div >
      <About/>
      <Login/>
      <Contact Name ="karan" Address ="Laxmi Road"/> 
      <Home Id ="100" Name ="Karan " Salary ="500000"/>
      <Car/>
    </div>
  );
}

export default App;
