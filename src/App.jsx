import './assets/css/bootstrap.min.css'
import './assets/css/nivo-lightbox.css'
import './assets/css/animate.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import Home from './pages/home/HomePage'
import Register from './pages/register/RegisterPage'
import PaymentConfirm from './pages/confirm/ConfirmPage'
import DisRegister from './pages/disregister/DisregisterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext'

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
