import React from "react"

function Meme({imgUrl, topText, bottomText}) {
  return (
    <div className="meme">
      <img src={imgUrl} alt="" />
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
    </div>
  )
}

export default Meme