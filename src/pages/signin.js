import React, {useState} from 'react';
  
function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  function handleChange(e) {
    const {name, value} = e.target
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    } 
  }

  function handleSubmit(e) {
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
    fetch("http://localhost:3000/api/users", options)
        .then( response => response.json())
        .then(response => {
          console.log(response)
          
        })
  }

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
        <button>Create Account</button>  
              
      </form>



      

    </div>
  );
};
  
export default SignIn ;