import React, {useState, useEffect} from "react"
import Meme from "./components/Meme"
import { FaThumbsUp } from 'react-icons/fa';


function Memes() {
    const [ allMemes, setAllMemes ] = useState([])
    
    useEffect(() => {
      const options = {
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}
      }
      fetch("/api/memes", options)
            .then(response => response.json())
            .then(response => {
              console.log(response)
              setAllMemes(response)
            })
    }, [])
    
    function increment(likedMeme) {
      allMemes.forEach(meme => {
        if (meme.id === likedMeme.id) {
          meme.likes++;
          const params = {
            likes: meme.likes
          }
          const token = localStorage.getItem("token")
          const options = {
            method: "PATCH",
            body: JSON.stringify( params ),
            headers: {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json", "Authorization": `Bearer ${token}`}
          }
          fetch(`/api/memes/${meme.id}`, options)
        }
      })
      setAllMemes([...allMemes])
    }
    
    return (
      <div>
        <div>
          <h2 className="">Memes</h2>
        </div>
        <div className="cards" >
          {
            allMemes.map(meme => (
              <div className="card" key={meme.id}>
                <Meme
                  id={meme.id}
                  imgUrl={meme.img_url} 
                  topText={meme.top_text} 
                  bottomText={meme.bottom_text}
                />
                <div className="like" onClick={() => increment(meme)}>
                  <FaThumbsUp className="like-icon"/><span>{meme.likes}</span>
                </div>
                {/* <p onClick={() => increment(meme)}><FaThumbsUp /><span>{meme.likes}</span></p> */}
              </div>
            ))
          }
        </div>  
      </div>
  )
}

export default Memes