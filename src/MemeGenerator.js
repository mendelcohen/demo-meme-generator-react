import React, {useState, useEffect} from "react"
import Meme from "./components/Meme"
import { useHistory } from 'react-router-dom';

function MemeGenerator(props) {
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("https://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])
    const history = useHistory()

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
      let randNum = Math.floor(Math.random() * allMemeImgs.length)
      allMemeImgs.map(() => {
        if (allMemeImgs[randNum].id === "112126428" || 
            allMemeImgs[randNum].id === "110163934" ||
            allMemeImgs[randNum].id === "183518946" ||
            allMemeImgs[randNum].id === "21604248" || 
            allMemeImgs[randNum].id === "71428573" ||
            allMemeImgs[randNum].id === "17699"
           ) {
          return randNum += 1 
        }
        return randNum
      })
      const randMemeImg = allMemeImgs[randNum].url
      setRandomImg(randMemeImg)
    }

    function handleSave(e) {
      const params = {
        topText: topText,
        bottomText: bottomText,
        imgUrl: randomImg,
        likes: 0
      }
      const token = localStorage.getItem("token")
      const options = {
        method: "POST",
        body: JSON.stringify( params ),
        headers: {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json", "Authorization": `Bearer ${token}`}
      }
      fetch("/api/memes", options)
          .then( response => response.json())
          .then(response => {
            console.log(response)
            history.push('/Memes')
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
            {props.loggedIn ? (
              <button className="meme-save" onClick={handleSave}>Save</button>
             ) : (
              <button className="meme-save" disabled>Sign in to save</button>
             )
            } 
          </div>
          
          {/* <div className="cards">
            {
              allMemeImgs.map(img => (
                <div className="card">
                  <h4>{img.id}</h4>
                  {<img 
              src={img.url} 
              alt="Problem?"
          />}
                </div>
              ))
            }
          </div> */}

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