import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;