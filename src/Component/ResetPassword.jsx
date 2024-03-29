import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import AxiosService from '../utils/ApiService'
import {toast} from 'react-toastify'

function ResetPassword() {
    let navigate = useNavigate()
    let {id, token} = useParams()
    let [password,setPassword] = useState("")
    
    let Reset = async(e)=>{
      try {
        let res = await AxiosService.post(`/user/resetpassword/${id}/${token}`,{
          password
        })
        if(res.status===200){
          toast.success("Password Changed Successfully")
          navigate('/')
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
        
   
    }
  return <>
  
  <div className='container'>
    <h1 style={{textAlign:"center"}}>Reset Password</h1>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <center>
      <Button variant="primary" onClick={Reset}>
        Submit
      </Button>
      </center>
    </Form>
  </div>
  </>
}

export default ResetPassword