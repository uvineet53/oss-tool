import Main from './Main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;