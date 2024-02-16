import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import AxiosService from '../utils/ApiService'
import {toast} from 'react-toastify'

function SignUp() {
    let navigate = useNavigate()
    let [Name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let createUser = async()=>{
      try {
        let res = await AxiosService.post(`/user/create`,{Name,email,password})
        if(res.status===202){
          toast.success(res.data.message)
          navigate('/')
        }
      } catch (error) {
        toast.error(error.response.data.message)
        
      }
    }
  return <>

<div className='container'>
    <h1 style={{textAlign:"center"}}>Sign Up!</h1>
  <Form>
  <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <center>
      <Button variant="primary" onClick={()=>createUser()}>
        Submit
      </Button>
      </center>
    </Form>
  </div>
   
    </>
  
}

export default SignUp