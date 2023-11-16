import React from 'react';
import { BrowserRouter,Route, Routes,} from 'react-router-dom'
import Login from './views/Login'
import Homepage from './views/homepage'

const App = () => {
 return (
  <BrowserRouter>
    <Routes>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Homepage} />
      </Routes>
      </BrowserRouter>
 );
};

export default App;