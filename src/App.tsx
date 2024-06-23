
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/home'
import FindCar from './pages/find-car'
import { AuthProvider } from './hooks/useAuth'
import { CarsProvider } from './hooks/useCars'
import Car from './pages/dashboard/car'
import LayoutDashboard from './layouts/layout-dashboard'
import CreateCar from './pages/dashboard/create-car'
import ListCars from './pages/dashboard/list-cars'
import EditCar from './pages/dashboard/edit-car'
import Login from './pages/auth/login'

function App() {


  return (
    <>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/find-cars' element={<FindCar />} />
            {/* <CarsProvider>
            </CarsProvider> */}
          </Route>

          <Route element={<LayoutDashboard />} path='/dashboard'>
            <Route index element={<Car />} />
            <Route path='/dashboard/create' element={<CreateCar />} />
            <Route path='/dashboard/list' element={<ListCars />} />
            <Route path='/dashboard/edit' element={<EditCar />} />
          </Route>
          <Route path="/login" element={<Login />} />

          {/* <Route path="/dashboard">
          <Route index element={
            <Protected>
              <HomeDashboard />
            </Protected>
          } />
          <Route path="login" element={<Login />} />
        </Route> */}
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
