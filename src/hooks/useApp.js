import { useState } from 'react'

export default () => {
  const [imgList, setImgList] = useState([
    {
      name: 'teste'
    }
  ])
  return { imgList, setImgList }
}
