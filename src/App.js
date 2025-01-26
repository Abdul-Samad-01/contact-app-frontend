import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/ContactApp/Home';
import SignupPage from './components/Authentication/SignupPage';
import LoginPage from './components/Authentication/LoginPage';
import  AuthProvider  from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={
                <Home />
            }
          />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
