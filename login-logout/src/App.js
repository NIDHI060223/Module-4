import './App.css';
import Login from './Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Logout from './Logout.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
