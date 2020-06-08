import React from 'react';
import './App.css';

import Home from './components/Home';
import Product from './components/Product';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <h1 ><center>Products App</center></h1>
        <div className='container'>
        <Header/>
          <Switch>
          <Route exact path='/' component={ Home} />
          <Route path='/product' component={Product}/>
          
        </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
