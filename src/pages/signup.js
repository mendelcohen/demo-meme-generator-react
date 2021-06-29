import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
  
function SignUp() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation ] = useState("")
  const history = useHistory()

  function handleChange(e) {
    const {name, value} = e.target
    if (name === "firstName") {
      setFirstName(value)
     } else if (name === "lastName") {
       setLastName(value)
     } else if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    } else if (name === "passwordConfirmation") {
      setPasswordConfirmation(value)
    } 
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("new user")
    const params = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
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
          history.push('/sign-in')
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
        <h1>Sign Up</h1>
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        /> 
        <br />
        <input 
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        /> 
        <br />
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
         <input 
          type="text"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        /> 
        <br />
        <button>Create Account</button>  
              
      </form>



      

    </div>
  );
};
  
export default SignUp;