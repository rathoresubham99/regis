import React from 'react';
import Register from './components/Register'
import {Route, Switch, Router} from 'react-router-dom';
import history from './history';
import Viewsubmissions from './components/Viewsubmissions'
function App() {
  return (
   <>

   <Router history={history}>

       <Route exact path='/' component={Register}/>
       <Route path='/view' component={Viewsubmissions}/>
   </Router>


   </> 
  )
}

export default App;
