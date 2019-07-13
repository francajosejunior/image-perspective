import React, { useContext, useEffect, useCallback, useMemo, memo } from 'react'
import AppContext from '../context/AppContext'

const useAddImage = () => {
  const appContext = useContext(AppContext)
  const change = event => {
    const [file] = event.target.files
    if (!file) return

    const fileName = file?.name
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      appContext.setImgList(list => {
        return [
          ...list,
          {
            file: reader.result,
            name: fileName
          }
        ]
      })
    }

    reader.onerror = erro => {}
  }
  return change
}

export default useAddImage
