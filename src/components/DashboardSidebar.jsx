import React from 'react'
import './sidebar.css'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

function DashboardSidebar() {
  return (
    <>
      
        <Sidebar style={{height:'100vh',backgroundColor:'white'}} className='shadow'>
            
        <Menu className='mt-5'
         menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}>
    {/* <SubMenu label="Charts">
      <MenuItem component={<Link to="/admin-dashboard"/>}> Dashboard </MenuItem>
    </SubMenu> */}
    <MenuItem component={<Link to="/"/>}>Dashboard</MenuItem>
    <MenuItem component={<Link to="/register"/>}>Register</MenuItem>
    <MenuItem component={<Link to="/login"/>}>Login</MenuItem>
    <MenuItem>Settings</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
        </Sidebar>
    </>
  )
}

export default DashboardSidebar