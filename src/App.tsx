import  { FC } from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Home from './Layout/Home'
import Login from './Components/Common/Login'
import ServiceCategory from './Pages/ServiceCategory'
import Subcategory from './Pages/Subcategory'
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users'
import Provider from './Pages/Provider'
import Subscription from './Pages/Subscription'
import Appointment from './Pages/Appointment'
import Polls from './Pages/Polls'
import Settings from './Pages/Settings'


const App: FC = () => {


  return (
    // <BrowserRouter>
    <Router>
        {/* <Home /> */}
          <Routes>
            <Route path='/' element={<Login />}></Route>
           <Route path='/home' element={<Home />}>
                <Route path='dashboard' index element={<Dashboard />}></Route>
                <Route path='service' element={<ServiceCategory />}></Route>
                 <Route path='subcategory' element={<Subcategory />}></Route>
                 <Route path='users' element={<Users />}></Route>
                 <Route path='provider' element={<Provider />}></Route>
                 <Route path='subscription' element={<Subscription />}></Route>
                 <Route path='appointment' element={<Appointment />}></Route>
                 <Route path='poll' element={<Polls />}></Route>
                 <Route path='settings' element={<Settings />}></Route>





           </Route>
            
          </Routes>
        </Router>
    // </BrowserRouter>
  )
}

export default App