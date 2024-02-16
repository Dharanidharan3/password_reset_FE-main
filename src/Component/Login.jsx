import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import AxiosService from '../utils/ApiService'

function Login() {
    
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()

    let handleLogin = async()=>{
        try {
            let res = await AxiosService.post(`/user/login`,{
                email,
                password
            })
            if(res.status===200){
                toast.success(res.data.message)
                sessionStorage.setItem('user',JSON.stringify(res.data.user))
                navigate('/dashboard')
            }
        } 
        catch (error) {
            toast.error(error.response.data.message)
        }
    }
  return <>
  
 <div className='container'>
    <h1 style={{textAlign:"center"}}>Login Here!</h1>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <center><Button variant="primary" onClick={handleLogin}>
        Submit
      </Button>
      <div className='pointer' onClick={()=>navigate('/forgotpassword')}>Forgot Password</div>
      <br/>
      <div className='pointer' onClick={()=>navigate('/signup')}>New User? Signup</div>
      </center>
    </Form>
  </div>
    </>
  
}

export default Login