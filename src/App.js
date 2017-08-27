import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Slot from './components/Slot'
import Login from './components/Login'
import TodoApp from './components/TodoApp/App'

class App extends Component {
  render() {
    return (
      <div>


        <Router>
          <div>
            <Link to="/slot"><button>SLot</button></Link>
            <Link to="/login"><button>로그인</button></Link>
            <Link to="/todo"><button>TodoApp</button></Link>
            <Link to="/gallery"><button>Image Gallery</button></Link>

            <hr />
            <Route exact path="/slot" component={Slot} />
            <Route path="/login" component={Login} />
            <Route path="/todo" component={TodoApp} />



          </div>
        </Router>



      </div>
    );
  }
}

export default App;
