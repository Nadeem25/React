import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComponent';
import ClassComp from './components/ClassComponent';
import State from "./components/State"
import EventHandling from './components/EventHandling';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import FormComponent from './components/FormComponent';
import LifecycleMethods from './components/LifecycleMethodsA';
import ClickCounterComp from './components/Higer Order/ClickCounterComp';
import HoverCounterComp from './components/Higer Order/HoverCounterComp';
import { UserProvider } from './components/Context/userContext';
import ComponentA from './components/Context/ComponentA';

function App() {
  //console.log(`Inside in App Component`);
  return (
    <div className="App">
      <h3>----------------------------Context------------------------------------------------------------</h3>
      <UserProvider value = "Vishwas">
        <ComponentA />
      </UserProvider>
      <h3>--------------------Higer Order Component------------------------------------------------------</h3>
      <ClickCounterComp name="Vishwas"/>
      <HoverCounterComp />
      <h3>---------------------------Lifecycle Method----------------------------------------------------</h3>
      <LifecycleMethods />
      <h3>----------------------------Form Control-------------------------------------------------------</h3>
      <FormComponent />
      <h3>----------------------------List Rendering-----------------------------------------------------</h3>
      <ConditionalRendering/>
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
