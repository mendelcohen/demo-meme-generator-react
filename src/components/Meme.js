import React from "react"

function Meme({imgUrl, topText, bottomText, likes}) {

  return (
    <div className="meme">
      <img src={imgUrl} alt="" />
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
      <p>{likes}</p>
    </div>
  )
}

export default Meme