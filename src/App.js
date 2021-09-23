import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from '../src/pages/Home'


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">


    <Switch>
    
      <Route path='/' component={Home} exact/>
    
    </Switch>
      </div>
    </BrowserRouter>

    
    </>
  );
}

export default App;
