import React, {useState, useEffect} from "react"
import { FaThumbsUp } from 'react-icons/fa';

function MemeLike({id, setAllMemes}) {

  const [ votes, setVotes ] = useState() 

  useEffect(() => {
    fetch(`http://localhost:3000/api/memes/${id}`)
          .then(response => response.json())
          .then(response => {
            console.log(response)
            setVotes(response.likes)
          })
  }, [])

    function increment() {
      setVotes(prevVotes => prevVotes + 1)
      console.log(votes)
      const params = {
        likes: votes
      }
      const options = {
        method: "PATCH",
        body: JSON.stringify( params ),
        headers: {"Content-Type": "application/json"}
      }
      fetch(`http://localhost:3000/api/memes/${id}`, options)
          // .then( response => response.json())
          // .then(response => {
          //   console.log(response)
          //   setVotes(response.likes)
          // })
    }
    
        
  return (
    <div className="meme">
      <p onClick={increment}><FaThumbsUp /><br/>{votes}</p>
    </div>
  )
}

export default MemeLike