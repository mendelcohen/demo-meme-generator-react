import React, {useState, useEffect} from "react"
import Meme from "./components/Meme"
import { FaThumbsUp } from 'react-icons/fa';


function Memes() {
    const [ allMemes, setAllMemes ] = useState([])
    
    useEffect(() => {
      fetch("http://localhost:3000/api/memes")
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
          const options = {
            method: "PATCH",
            body: JSON.stringify( params ),
            headers: {"Content-Type": "application/json"}
          }
          fetch(`http://localhost:3000/api/memes/${meme.id}`, options)
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
                <p onClick={() => increment(meme)}><FaThumbsUp /><br/>{meme.likes}</p>
              </div>
            ))
          }
        </div>  
      </div>
  )
}

export default Memes