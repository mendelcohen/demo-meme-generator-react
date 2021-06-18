import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  
  function handleChange(e) {
    const {name, value} = e.target
    name === "email" ? setEmail(value) : setPassword(value) 
  }

  

  function handleSubmit(e) {
    e.preventDefault()
    console.log("new user")
    const params = {
      email: email,
      password: password
    }
    const options = {
      method: "POST",
      body: JSON.stringify( params ),
      headers: {"Content-Type": "application/json"}
    }
    fetch("http://localhost:3000/api/sessions", options)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      history.push('/MemeGenerator')
    });
    // setUsername("")
    // setPassword("")
  }

  // useEffect(() => {
  //   const token = 
  //   if (localStorage.getItem("token")) {
  //     fetch("http://localhost:3000/api/sessions", {
  //       headers: {"authenticate": localStorage.token}
  //     })
  //     .then(response => response.json())
  //     .then(user => {
  //       setUser(user)
  //     })
  //   }
  // }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      
      

      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input 
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        /> 
        <br />
        <input 
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        /> 
  
        <br />
        <button>Sign In</button>  
              
      </form>



      

    </div>
  );
};
  
export default SignIn ;