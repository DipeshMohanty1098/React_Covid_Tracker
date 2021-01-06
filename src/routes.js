import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import States from './components/states';

const Routes = () =>{
    return(
        <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/all_states" component={States}/>
            <Route path="/:state_index" component={States}/>
        </Switch>
        </div>
    )
}

export default Routes;