import './App.css';
import Login from './component/login/login';
import SignUp from './component/signUp/signUp';
import ForgetPassword from "./component/forgetPassword/forgetPassword";
import ResetPassword from "./component/resetPassword/resetPassword";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard';
import {Provider} from 'react-redux';
import store from './services/redux/store/store'
import {ProtectedRoute} from '../src/services/auth/protected';
import Trash from '../src/component/trash/trash'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <Switch>
        <>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route path="/forgetPass" component={ForgetPassword} />
        <Route path="/resetpassword" component={ResetPassword} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
        <BrowserRouter>
          <ProtectedRoute	path={"/dashboard/trash"} component={Trash}/>
        </BrowserRouter>
        </>
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
