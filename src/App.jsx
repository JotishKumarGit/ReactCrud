
import './App.css'
import Create from './Components/Create';
import Update from './Components/Update';
import Display from './Components/Display';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="container" style={{marginTop:"50px"}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} ></Route>
          <Route path='/read' element={<Display />}> </Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
