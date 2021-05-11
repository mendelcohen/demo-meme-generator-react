import React, {useState, useEffect} from "react"

function Meme({imgUrl, topText, bottomText, }) {

  const [ votes, setVotes ] = useState(0) 

  function increment() {
    setVotes(prevVotes => prevVotes + 1)
  }

  return (
    <div className="meme">
      <img src={imgUrl} alt="" />
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
      <button onClick={increment}>{votes}</button>
    </div>
  )
}

export default Meme