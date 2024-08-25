import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComponent';
import ClassComp from './components/ClassComponent';
import State from "./components/State"

function App() {
  console.log(`Inside in App Component`);
  return (
    <div className="App">
      <State />
      <FunctionComp name="Nadeem"/>
      <ClassComp name="Nadeem" />
    </div>
  );
}

export default App;
