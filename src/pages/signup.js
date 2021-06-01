import React, {useState} from 'react';
  
function SignUp() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [ allMemes, setAllMemes ] = useState([])
  
  function handleChange(e) {
    const {name, value} = e.target
    name === "firstName" ? setFirstName(value) : setLastName(value)
  }

  function handleSubmit(e) {
    console.log("new user")
    // const params = {
    //   topText: topText,
    //   bottomText: bottomText,
    //   imgUrl: randomImg,
    //   likes: 0
    // }
    // const options = {
    //   method: "POST",
    //   body: JSON.stringify( params ),
    //   headers: {"Content-Type": "application/json"}
    // }
    // fetch("http://localhost:3000/api/memes", options)
    //     .then( response => response.json())
    //     .then(response => {
    //       console.log(response)
    //       setAllMemes([...allMemes, response])
    //     })
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
      <h1>Sign Up</h1>

      <form className="meme-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        /> 
        <input 
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        /> 
        <input 
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        /> 
        <input 
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        /> 
          
        <button>Create Account</button>  
              
      </form>



      

    </div>
  );
};
  
export default SignUp;