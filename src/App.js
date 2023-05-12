import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div>
      Hello World
      <Person name="Asief Mahir" age={26} skills={["Js", "React"]}/>
      {/* <Person name="Imrul Vai" age={25} skills={["css", "Node", "Js", "React"]}/> */}
    </div>
  )
  
}

export default App;
