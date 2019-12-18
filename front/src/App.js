import React from 'react';
import MainMenu from './components/MainMenu';
import { Switch, Route } from 'react-router-dom';
import Scene2 from './components/scene2';
import Scene3 from './components/scene3';
import Scene1 from './components/scene1';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/scene1" component={Scene1}/>
       <Route exact path="/scene2" component={Scene2}/>
       <Route exact path="/scene3" component={Scene3}/>
      </Switch>
    </div>

  );
}

export default App;
