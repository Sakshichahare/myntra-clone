
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

import { loginUser } from "../services/authService"
import { useAuth } from "../context/AuthContext"


function Login() {

const [username,setUsername] = useState("")

const [password, setPassword] = useState("")

const [error, setError] = useState("")

const navigate = useNavigate();

const {login} = useAuth()
console.log(useAuth());


async function handleSubmit(e) {

  e.preventDefault();

  try {

    setError("");

    const loginData = {
      username,
      password
    };

    console.log(username);
    console.log(password);

    const data = await loginUser(
      loginData
    );

    
    console.log(data);

    login(data)

    toast.success("Login Successful")

    navigate("/profile");
    
  } catch (error) {

    toast.error( 
       error.response?.data?.message ||

       "Login Failed"
    )
    
    console.log(error);

    setError("Invalid Credentials");
  }
  
}

  return (
   <div>

     <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={ (e) => setUsername(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Password"
        value={password}
        onChange={ (e) => setPassword(e.target.value)}
        />

        <button type="submit"> 
          Login
        </button>

      </form>

      {error&&<h2>{error}</h2>}

   </div>
  )
}

export default Login