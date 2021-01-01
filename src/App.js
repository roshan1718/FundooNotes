import './App.css';
import Login from './component/login/login';
import SignUp from './component/signUp/signUp';
import ForgetPassword from "./component/forgetPassword/forgetPassword";
import ResetPassword from "./component/resetPassword/resetPassword";

import {Route, Switch} from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route path="/forgetPass" component={ForgetPassword} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route exact path="/dashboard" component={Dashboard}/>
        </>
      </Switch>
    </div>
  );
}

export default App;
