import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import PaymentConfirm from './pages/confirm/ConfirmPage'
import DisRegister from './pages/disregister/DisregisterPage'
import Home from './pages/home/HomePage'
import Register from './pages/register/RegisterPage'
import './styles/global/animate.css'
import './styles/global/bootstrap.min.css'
import './styles/global/main.css'
import './styles/global/nivo-lightbox.css'
import './styles/global/responsive.css'

function App() {

  return (
    <>
      <DataProvider>
        <Router
          basename={import.meta.env.BASE_URL}
        >
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="disregister" element={<DisRegister />} />
            <Route path="payment-confirm" element={<PaymentConfirm />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  )
}

export default App
