import React, {useState, useEffect} from "react"

function MemeGenerator() {
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])
    const [ allMemes, setAllMemes ] = useState()

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
      console.log("index")
      fetch("http://localhost:3000/api/memes")
            .then(response => response.json())
            .then(response => {
              console.log(response)
              const memes = response.map(meme => 
                Object.entries(meme)
              )
              setAllMemes(memes)
            })
      
    }, [])


    function handleSave(e) {
      console.log("saved")
      // const value = e.target
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
      console.log("saved")
      fetch("http://localhost:3000/api/memes", options)
          .then( response => response.json())
          .then( () => {
            console.log("saved")
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
        
          <div className="meme">
              <img src={randomImg} alt="" />
              <h2 className="top">{topText}</h2>
              <h2 className="bottom">{bottomText}</h2>
          </div>
          <div>
              <button className="meme-save" onClick={handleSave}>Save</button>
          </div>
          <div>
            <h2 className="">Memes</h2>
          </div>
          <div>
            {
             allMemes.map(meme => <div className="meme"><h2 className="top">{meme[1][1]}</h2> <img src={meme[2][1]} alt=""/> <h2 className="bottom">{meme[3][1]}</h2></div>)
            }
          </div>
          
      </div>
  )
}
// allMemes.map(meme => <div><h2>top text: {meme[1][1]}</h2> <img src={meme[2][1]}/> <h2>bottom text: {meme[3][1]}</h2></div>)
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