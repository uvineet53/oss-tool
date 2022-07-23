import Main from './Main';
import React from 'react';
import Error from './Error';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path='/vulnerabilities' eact element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;