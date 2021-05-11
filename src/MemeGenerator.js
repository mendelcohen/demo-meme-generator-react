import React, {useState, useEffect} from "react"
import Meme from "./Meme"

function MemeGenerator() {
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])
    const [ allMemes, setAllMemes ] = useState([])
    // const [ votes, setVotes ] = useState([])

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                setAllMemeImgs(memes)
            })
    }, [])

    function handleChange(e) {
      const {name, value} = e.target
      name === "topText" ? setTopText(value) : setBottomText(value)
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      const randNum = Math.floor(Math.random() * allMemeImgs.length)
      const randMemeImg = allMemeImgs[randNum].url
      setRandomImg(randMemeImg)
    }
    
    useEffect(() => {
      fetch("http://localhost:3000/api/memes")
            .then(response => response.json())
            .then(response => {
              console.log(response)
              setAllMemes(response)
            })
    }, [])

    // function increment() {
    //   setVotes(prevVotes => prevVotes + 1)
    // }


    function handleSave(e) {
      const params = {
        topText: topText,
        bottomText: bottomText,
        imgUrl: randomImg
      }
      const options = {
        method: "POST",
        body: JSON.stringify( params ),
        headers: {"Content-Type": "application/json"}
      }
      fetch("http://localhost:3000/api/memes", options)
          .then( response => response.json())
          .then(response => {
            console.log(response)
            allMemes.push(response)
          })
    }

    return (
      <div>
          <form className="meme-form" onSubmit={handleSubmit}>
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
          </div>
          <div>
            <h2 className="">Memes</h2>
          </div>
          <div className="cards" >
            {
             allMemes.map(meme => (
               <div className="card" key={meme.id}>
                <Meme 
                  imgUrl={meme.img_url} 
                  topText={meme.top_text} 
                  bottomText={meme.bottom_text}
                  // votes={votes.length}
                />
               
               </div>
             ))
            }
          </div>
          
      </div>
  )
}

// class MemeGenerator extends Component {
//     constructor() {
//         super()
//         this.state = {
//             topText: "",
//             bottomText: "",
//             randomImg: "http://i.imgflip.com/1bij.jpg",
//             allMemeImgs: []
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
    
//     componentDidMount() {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(response => response.json())
//             .then(response => {
//                 const {memes} = response.data
//                 this.setState({ allMemeImgs: memes })
//             })
//     }
    
//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({ [name]: value })
//     }
    
//     handleSubmit(event) {
//         event.preventDefault()
//         const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
//         const randMemeImg = this.state.allMemeImgs[randNum].url
//         this.setState({ randomImg: randMemeImg })
//     }
    
//     render() {
//         return (
//             <div>
//                 <form className="meme-form" onSubmit={this.handleSubmit}>
//                     <input 
//                         type="text"
//                         name="topText"
//                         placeholder="Top Text"
//                         value={this.state.topText}
//                         onChange={this.handleChange}
//                     /> 
//                     <input 
//                         type="text"
//                         name="bottomText"
//                         placeholder="Bottom Text"
//                         value={this.state.bottomText}
//                         onChange={this.handleChange}
//                     /> 
                
//                     <button>Gen</button>
//                 </form>
//                 <div className="meme">
//                     <img src={this.state.randomImg} alt="" />
//                     <h2 className="top">{this.state.topText}</h2>
//                     <h2 className="bottom">{this.state.bottomText}</h2>
//                 </div>
//             </div>
//         )
//     }
// }

export default MemeGenerator