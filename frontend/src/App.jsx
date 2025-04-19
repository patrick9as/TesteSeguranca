import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;