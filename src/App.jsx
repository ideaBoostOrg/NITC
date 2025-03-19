/* eslint-disable react/react-in-jsx-scope */
import './assets/css/bootstrap.min.css';
// import './assets/css/line-icons.css'
import './assets/css/animate.css';
import './assets/css/main.css';
import './assets/css/nivo-lightbox.css';
import './assets/css/responsive.css';
import PaymentConfirm from './pages/confirm/ConfirmPage';
import DisRegister from './pages/disregister';
import Home from './pages/home';
import Register from './pages/register';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DataProvider } from './context/DataContext';

function App() {
	return (
		<DataProvider>
			<Router basename={import.meta.env.BASE_URL}>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="disregister" element={<DisRegister />} />
					<Route path="payment-confirm" element={<PaymentConfirm />} />
					{/* <Route path="pa" element={<PaymentConfirmed />} />
            <Route path="pr" element={<PaymentFailed />} />
            <Route path="loading" element={<Loading />} /> */}
				</Routes>
			</Router>
		</DataProvider>
	);
}

export default App;
