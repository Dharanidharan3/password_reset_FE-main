import { BrowserRouter,Route,Routes} from "react-router-dom"
import SignUp from "./Component/SignUp"
import Login from "./Component/Login"
import ForgetPassword from "./Component/ForgetPassword"
import ResetPassword from "./Component/ResetPassword"
import Dashboard from "./Component/Dashboard"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        
        <Route path="/forgotpassword" element={<ForgetPassword/>} ></Route>
        <Route path="/resetpassword/:id/:token" element={<ResetPassword/>} ></Route>
        <Route path="/dashboard" element={<Dashboard/>} ></Route>

        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
