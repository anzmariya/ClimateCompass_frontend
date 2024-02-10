import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../sever/allAPI';
import Swal from 'sweetalert2';


function AdminLogin() {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
        const handleAdminLogin = async (e) => {
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
    
  return (
    <div className='d-flex justify-content-center align-items-center img-fluid' style={{ backgroundImage: 'url("https://getwallpapers.com/wallpaper/full/8/a/3/1441959-widescreen-nature-wallpapers-full-screen-2048x1365.jpg")', backgroundRepeat: 'no-repeat', height: '100vh', width: "100%", backgroundSize: "cover" }}>
      <div className='d-flex justify-content-center align-items-center flex-column divbg'>

      <div>
      <div className='d-flex w-100' style={{height:"100px"}}>
                
                <Link to="/login" className='text-decoration-none text-light bg-dark w-100 d-flex justify-content-center align-items-center ps-5 pe-5' style={{height:"80px"}}><h4 className='d-flex justify-content-center align-items-center'>User Login</h4></Link>
                <h4 className='bg-success text-light  w-100 d-flex justify-content-center align-items-center ps-5 pe-5' style={{height:"80px"}}>Admin Login</h4>
              </div>
                
      </div>
      
        <form className='d-flex jusify-content-center align-items-center flex-column'>
          

          <TextField className='w-100 mt-4' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} id="outlined-basic" label="E-mail" variant="outlined" />

          <TextField className='w-100 mt-3' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} id="outlined-basic" label="Password" variant="outlined"/>
          
          <button className='btn btn-success d-flex justify-content-center align-items-center w-100 p-2 mt-3 mb-5' type="button" onClick={handleAdminLogin}>Login</button>

        </form>

        
      </div>        
    </div>
  )
}

export default AdminLogin