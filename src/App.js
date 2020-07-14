import React from 'react';
import logo from './logo.svg';
import Login from './component/Login/Login'
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Register from './component/register/register';

function App() {
  return (
    <div className="App">
      <div>        
              <Router>
                <Switch >
                  <Route path="/" exact component={Login} />:
                  <Route path="/register"  component={Register} />
                </Switch>
                </Router>
          </div>



   {/* <Login></Login> */}
   {/* <Register></Register> */}
    </div>
  );
}

export default App;
