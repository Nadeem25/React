import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComponent';
import ClassComp from './components/ClassComponent';
import State from "./components/State"
import EventHandling from './components/EventHandling';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  console.log(`Inside in App Component`);
  return (
    <div className="App">
      <h3>--------------------------------State----------------------------------------------------------</h3>
      <State />
      <h3>----------------------------Functional Component-----------------------------------------------</h3>
      <FunctionComp name="Nadeem"/>
      <h3>----------------------------Class Component----------------------------------------------------</h3>
      <ClassComp name="Nadeem" />
      <h3>----------------------------Event Handling-----------------------------------------------------</h3>
      <EventHandling/>
      <h3>----------------------------Event Binding------------------------------------------------------</h3>
      <EventBind/>
      <h3>----------------------------Parent-Child Relation----------------------------------------------</h3>
      <ParentComponent/>
    </div>
  );
}

export default App;
