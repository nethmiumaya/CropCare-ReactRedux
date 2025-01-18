import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RootLayout from './component/RootLayout';
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<LoginForm />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="home/*" element={<HomePage />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;