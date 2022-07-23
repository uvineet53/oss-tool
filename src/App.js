import Main from './Main';
import React from 'react';
import Error from './Error';
import Main1 from './Main1.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path="/tipIceBerg" exact element={<Main1/>}/>
        <Route path="/error" exact element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;