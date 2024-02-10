import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Header1 from './components/Header1';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div>
     
      {/* to set path */}
      
      
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login register/>}></Route>
          <Route path='/register' element={<Login/>}></Route>
          <Route path='/admin-login' element={<AdminLogin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
