import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        {/* <CakeContainer />
        <HookCakeContainer />
        <HookIceCreamContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
