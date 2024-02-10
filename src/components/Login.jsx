import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { loginApi ,registerApi} from '../sever/allAPI';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import Swal from 'sweetalert2';


function Login({ register }) {
  const [userData, setUserData] = useState({
    username: "",
    city:"",
    email: "",
    password: "",
    
  });

  const navigate = useNavigate();

  console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username,city, email, password} = userData;

    if (!username ||!city|| !email || !password) {
      alert("Please Fill the Form Completely");
    } else {
      const result = await registerApi(userData);
      console.log(result);
      if (result.status === 200) {
        alert("Successfully Registered");
        setUserData({
          username: "",
          city:"",
          email: "",
          password: ""
          
        });
        navigate('/login');
      } else {
        alert(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    if (!email || !password) {
      alert('Please fill the form completely');
    } else {
      const res = await loginApi(userData);
      console.log(res);

      if (res.status === 200) {
        alert('success');
        sessionStorage.setItem('existingUser', JSON.stringify(res.data.existingUser));

        sessionStorage.setItem('token', res.data.token);

        setUserData({
          email: "",
          password: ""
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        Swal.fire({
          title: "Good job!",
          text: "login Successfull!",
          icon: "success"
        });
        navigate('/')
      }
    }
  };

  const loginForm = register ? true : false;

  return (
    <div className='d-flex justify-content-center align-items-center img-fluid' style={{ backgroundImage: 'url("https://getwallpapers.com/wallpaper/full/8/a/3/1441959-widescreen-nature-wallpapers-full-screen-2048x1365.jpg")', backgroundRepeat: 'no-repeat', height: '100vh', width: "100%", backgroundSize: "cover" }}>
      <div className='d-flex justify-content-center align-items-center flex-column divbg'>
      <div>
        <h1>{!loginForm ? <div className='pt-4' style={{paddingLeft:"100px",paddingRight:"100px"}}>Register Here</div> : <div className='d-flex w-100' style={{height:"100px"}}>
                <h4 className='bg-success text-light  w-100 d-flex justify-content-center align-items-center ps-5 pe-5' style={{height:"80px"}}>User Login</h4>
                <Link to='/admin-login' className='text-decoration-none text-light bg-dark w-100 d-flex justify-content-center align-items-center pe-5' style={{height:"80px",paddingLeft:"100px"}}><h4 className='d-flex justify-content-center align-items-center'>Admin Login</h4></Link>
              </div> }</h1>
      </div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <form className='d-flex justify-content-center align-items-center flex-column'>

            
            {!loginForm && <TextField className='w-100 mt-2' value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} id="outlined-basic" label="User Name" variant="outlined" />}
            {!loginForm && <TextField className='w-100 mt-2' value={userData.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} id="outlined-basic" label="City Name" variant="outlined" />}

            <TextField className='w-100 mt-2' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} id="outlined-basic" label="E-mail" variant="outlined" />

            <TextField className='w-100 mt-2' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} id="outlined-basic" label="Password" variant="outlined" />

            {!loginForm ? <button onClick={handleRegister} className='btn btn-success d-flex justify-content-center align-items-center w-100 p-2 mt-3 mb-2' type="button"><a href='/login' style={{ textDecoration: 'none', color: 'white' }}>Register</a></button> :

              <button onClick={handleLogin} className='btn mt-2 btn-success d-flex justify-content-center align-items-center w-100 p-2' type="button"><a href='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</a></button>}

          </form>

          {!loginForm ?
            <div className='mt-2'>
              <span>Already a User?</span>
              <a href='/login'>Login</a>
            </div> :
            <div className='mt-2 mb-4'>
              <span>New User?</span>
              <a href='/register'>Register</a>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Login;