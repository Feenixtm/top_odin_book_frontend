import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      console.log({ username: username, password: password });

      const response = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
      });

      if (!response.ok) {
        throw new Error("HTTP Error! Status: ", response.status);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      throw new Error("Login attempt failed! Error: ", error);
    }
  }

  async function handleGuestLogin(e) {
    e.preventDefault();
    console.log("Performing Guest login...");

    try {
      const response = await fetch("http://localhost/5050/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ username: "guestUser", password: "guestPassword" })
      });

      if (!response.ok) {
        throw new Error("HTTP Error! Status: ", response.status);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      throw new Error("Login attempt failed! Error: ", error);
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center bg-blue-200'>
      <form className='px-8 pt-12 pb-8 w-full max-w-[20rem] border flex flex-col gap-4'>
          <h1 className='text-center text-[2rem] font-semibold'>Login</h1>
          
          <div className='flex flex-col'> 
            {/* <label htmlFor="">Username</label> */}
            <input 
              className='border px-2 py-1' 
              type="text" 
              placeholder='Username' 
              required
              value={ username }
              onChange={ (e) => setUsername(e.target.value) }  
            />
          </div>

          <div className='flex flex-col'>
            {/* <label htmlFor="">Password</label> */}
            <input 
              type="password" 
              className='border px-2 py-1' 
              placeholder='Password' 
              required
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }  
            />
          </div>

          <button className='login-btn mt-1' onClick={ (e) => handleLogin(e) }>Login</button>
          <p className=''>Don't want to make an account? Try out the site as a <button onClick={ (e) => handleGuestLogin(e) }>Guest</button></p>

          <p className='text-center'>Don't have an account yet? <br/><button to="/sign-up">Sign up Here</button></p>
      </form>
    </div>
  )
}

export default Login