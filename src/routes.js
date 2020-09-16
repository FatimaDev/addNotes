import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import Home from './components/Home';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';



const Routes = () => {
    return(
        <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/add" exact component={AddNote}/>
            <Route path ="/edit/:id" exact component={EditNote}/>
            <Route path ="/delete/:id" exact component={DeleteNote}/>


        </Switch>
    )
}
export default Routes;