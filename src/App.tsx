import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import RootLayout from './component/RootLayout.tsx';
import LoginForm from './component/LoginForm.tsx';
import SignUp from './component/SignUp.tsx';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<LoginForm />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;