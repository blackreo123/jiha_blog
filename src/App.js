
import './App.css';
import Contents from './Contents';
import WriteContent from './WriteContent';
import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
      <div className="black-nav">
        <Link to='/'><div className="blogTitle">JIHA Blog</div></Link>
        <Link to='/write'><button className="writeContent">글쓰기</button></Link>
      </div>
      <center>
        <Switch>
          <Route exact path='/'>
            <div className="contentBox">    
            <Contents></Contents>
            </div>
          </Route>
          
          <Route exact path='/write'>
            <WriteContent></WriteContent>
          </Route>
        </Switch>
      </center>
    </div>
  );
}

export default App;
