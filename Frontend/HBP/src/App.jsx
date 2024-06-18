import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import Signin from './Components/Signin'
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
