import Login from './AdminPanel/Login'
import Dashboard from './AdminPanel/Dashboard'
import AdminCoffee from './AdminPanel/Coffee'
import AdminReviews from './AdminPanel/Reviews'
import Users from './AdminPanel/Users'
import AdminHome from './AdminPanel/Home'
import Home from './components/Home'
import About from './components/About'
import Coffee from './components/Coffee'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='/dashboard/home' element={<AdminHome />}></Route>
          <Route path='/dashboard/coffee' element={<AdminCoffee />}></Route>
          <Route path='/dashboard/reviews' element={<AdminReviews />}></Route>
          <Route path='/dashboard/users' element={<Users />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
