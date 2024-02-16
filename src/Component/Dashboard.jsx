import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    let navigate = useNavigate()
    let userData = JSON.parse(sessionStorage.getItem('user'))
    function logout(){
      sessionStorage.clear()
      navigate("/")
        }
  return <>
  <div className='d-flex justify-content-center align-items-center fs-3 flex-column gap-4' style={{ height: "100vh" }}>
            <div ><b>Logged in Successfully</b></div>
            <h3>{`Welcome ${userData.Name}!!!`}</h3>
            <Button onClick={logout}>Logout</Button>
        </div>
  </>
}

export default Dashboard