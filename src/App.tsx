import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RootLayout from './component/RootLayout';
import LoginForm from './pages/LoginForm.tsx';
import SignUp from './pages/SignUp.tsx';
import HomePage from './pages/HomePage.tsx';
import AddVehicle from './popup/vehicle/AddVehicle.tsx';
import UpdateVehicle from './popup/vehicle/UpdateVehicle.tsx';
import ViewVehicle from './popup/vehicle/ViewVehicle.tsx';
import Staff from './pages/Staff.tsx';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<LoginForm />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="home/*" element={<HomePage />} />
                        <Route path="add-vehicle" element={<AddVehicle />} />
                        <Route path="update-vehicle" element={<UpdateVehicle />} />
                        <Route path="view-vehicle" element={<ViewVehicle />} />
                        <Route path="staff" element={<Staff />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;