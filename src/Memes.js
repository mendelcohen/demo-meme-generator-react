import React, {useState, useEffect} from "react"
import Meme from "./components/Meme"
// import MemeLike from "./components/MemeLike"
import { FaThumbsUp } from 'react-icons/fa';


function Memes() {
    // const [topText, setTopText] = useState("")
    // const [bottomText, setBottomText] = useState("")
    // const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    // const [allMemeImgs, setAllMemeImgs] = useState([])
    const [ allMemes, setAllMemes ] = useState([])

    // useEffect(() => {
    //   fetch("https://api.imgflip.com/get_memes")
    //         .then(response => response.json())
    //         .then(response => {
    //             const {memes} = response.data
    //             setAllMemeImgs(memes)
    //         })
    // }, [])

    // function handleChange(e) {
    //   const {name, value} = e.target
    //   name === "topText" ? setTopText(value) : setBottomText(value)
    // }
  
    // function handleSubmit(e) {
    //   e.preventDefault()
    //   const randNum = Math.floor(Math.random() * allMemeImgs.length)
    //   const randMemeImg = allMemeImgs[randNum].url
    //   setRandomImg(randMemeImg)
    // }
    
    useEffect(() => {
      fetch("http://localhost:3000/api/memes")
            .then(response => response.json())
            .then(response => {
              console.log(response)
              setAllMemes(response)
            })
    }, [])

    // function handleSave(e) {
    //   const params = {
    //     topText: topText,
    //     bottomText: bottomText,
    //     imgUrl: randomImg,
    //     likes: 0
    //   }
    //   const options = {
    //     method: "POST",
    //     body: JSON.stringify( params ),
    //     headers: {"Content-Type": "application/json"}
    //   }
    //   fetch("http://localhost:3000/api/memes", options)
    //       .then( response => response.json())
    //       .then(response => {
    //         console.log(response)
    //         setAllMemes([...allMemes, response])
    //       })
    // }
    
    function increment(meme) {
      // setLikes(prevLikes => prevLikes + 1)
      // console.log(likes)
      
    //   handleIncrement(id)
    // }
    // function handleIncrement(id) {
      allMemes.forEach(meme => {
        if (meme.id === meme.id) {
          meme.likes++;
          
          console.log(meme.likes)
        }
      
        const params = {
          likes: meme.likes
        }
        const options = {
          method: "PATCH",
          body: JSON.stringify( params ),
          headers: {"Content-Type": "application/json"}
        }
        fetch(`http://localhost:3000/api/memes/${meme.id}`, options)
        setAllMemes([...allMemes])
      })
    }

    

    return (
      <div>
          {/* <form className="meme-form" onSubmit={handleSubmit}>
              <input 
                  type="text"
                  name="topText"
                  placeholder="Top Text"
                  value={topText}
                  onChange={handleChange}
              /> 
              <input 
                  type="text"
                  name="bottomText"
                  placeholder="Bottom Text"
                  value={bottomText}
                  onChange={handleChange}
              /> 
          
              <button>Gen</button>  
              
          </form>
          <Meme 
            imgUrl={randomImg} 
            topText={topText} 
            bottomText={bottomText}
          />
    
          <div>
              <button className="meme-save" onClick={handleSave}>Save</button>
          </div> */}
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
                  // likes={meme.likes}
                />
                {/* <div className="meme"> */}
                  <p onClick={increment}><FaThumbsUp /><br/>{meme.likes}</p>
                {/* </div> */}
                {/* <MemeLike
                  id={meme.id}
                  handleIncrement={handleIncrement}
                  setAllMemes={setAllMemes}
                /> */}
               </div>
             ))
            }
          </div>
          
      </div>
  )
}

export default Memes