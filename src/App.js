import './App.css';
import Login from './component/login/login';
import SignUp from './component/signUp/signUp';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
