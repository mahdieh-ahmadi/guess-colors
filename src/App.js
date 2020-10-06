import React, { useEffect  } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Route , Switch} from 'react-router-dom'

import Main from './containers/main'


const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      {/* <Switch>
      <Route path = '/Auth'  component={ Auth }/>
      <Route path = '/Select_movie'  component={ Select }/>
      <Route path = '/' component={ Main }/>
      </Switch> */}
      <Main />
      
    </div>
    </BrowserRouter>
  )
}

export default App;
