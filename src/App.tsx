
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/home'
import FindCar from './pages/find-car'
import { AuthProvider } from './hooks/useAuth'
import { CarsProvider } from './hooks/useCars'
import Car from './pages/dashboard/car'

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

          <Route path='/dashboard'>
            <Route index element={<Car />}>

            </Route>
          </Route>
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
