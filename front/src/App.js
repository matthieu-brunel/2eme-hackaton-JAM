import React from 'react';
import MainPage from './components/HomePage/mainpage';
import { Switch, Route } from 'react-router-dom';
import Scene1 from './components/Scene1/Scene1';
import Scene2 from './components/Scene2/Scene2';
import Scene3 from './components/Scene3/Scene3';
import Scene4 from './components/Scene4/Scene4';
import Scene5 from './components/Scene5/Scene5';
function App() {
  return ( 
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/scene1" component={Scene1}/>
       <Route exact path="/scene2" component={Scene2}/>
       <Route exact path="/scene3" component={Scene3}/>
       <Route exact path="/scene4" component={Scene4}/>
       <Route exact path="/scene5" component={Scene5}/>
      </Switch>
    </div>

  );
}

export default App;
