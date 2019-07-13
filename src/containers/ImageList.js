import React from 'react'
import AppContext from '../context/AppContext'

const ImageList = () => {
  const appContext = React.useContext(AppContext)
  return (
    <div>
      {appContext.imgList.map((img, index) => (
        <p key={index}>{img.name}</p>
      ))}
    </div>
  )
}

export default ImageList
