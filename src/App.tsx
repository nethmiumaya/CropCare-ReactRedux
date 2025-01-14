import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RootLayout from './component/RootLayout';
import LoginForm from './component/LoginForm';
import SignUp from './component/SignUp';
import HomePage from './component/HomePage';
import AddVehicle from './component/vehicle/AddVehicle.tsx';
import UpdateVehicle from './component/vehicle/UpdateVehicle.tsx';
import ViewVehicle from './component/vehicle/VewVehicle.tsx';
import StaffPage from './component/StaffPage.tsx';

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
                        <Route path="staff" element={<StaffPage />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;