import React, { memo } from 'react'
import useAddImage from '../hooks/useAddImage'
import ImageList from './ImageList'

const Home = () => {
  const addImg = useAddImage()

  return (
    <>
      <span>
        Choose from galery
        <input
          type="file"
          onChange={addImg}
          style={{ position: 'absolute', top: 0, left: 0, opacity: 0 }}
        />
      </span>
      <button>Take a picture</button>
      <ImageList />
    </>
  )
}

export default memo(Home)
