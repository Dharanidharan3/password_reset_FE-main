import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'

function ForgetPassword() {
  let [email,setEmail]=useState("")
    let navigate = useNavigate()
    let Forgot = async(e)=>{
      try {
        let res = await AxiosService.post("/user/forget",{email})
        if(res.status===200){
          toast.success("Email Sent")
          navigate('/')
          
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  return <>
  
 <div className='container'>
    <h1 style={{textAlign:"center"}}>Forget Password</h1>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <center><Button variant="primary" onClick={Forgot}>
        Submit
      </Button>
      </center>
    </Form>
  </div>
  </>
}

export default ForgetPassword