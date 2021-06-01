import React, {useState, useEffect} from "react"
import { FaThumbsUp } from 'react-icons/fa';

function MemeLike({id, setAllMemes, handleIncrement}) {

  const [ likes, setLikes ] = useState() 

  useEffect(() => {
    fetch(`http://localhost:3000/api/memes/${id}`)
          .then(response => response.json())
          .then(response => {
            console.log(response.likes)
            setLikes(response.likes)
            console.log(likes)
          })
  }, [id])

    function increment() {
      setLikes(prevLikes => prevLikes + 1)
      console.log(likes)
      const params = {
        likes: likes
      }
      const options = {
        method: "PATCH",
        body: JSON.stringify( params ),
        headers: {"Content-Type": "application/json"}
      }
      fetch(`http://localhost:3000/api/memes/${id}`, options)
      //     .then( response => response.json())
      //     .then(response => {
      //       console.log(response)   
      //       setLikes(response.likes)
      //     })
        handleIncrement(id)
    }
    
        
  return (
    <div className="meme">
      <p onClick={increment}><FaThumbsUp /><br/></p>
    </div>
  )
}

export default MemeLike