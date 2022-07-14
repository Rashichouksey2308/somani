import React ,{ useEffect, useState }from 'react'
import MarginMain from '../../src/components/MarginMain'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'
const index = () => {
    const dispatch = useDispatch()
   useEffect(() => {
    dispatch(setPageName('leads'))
    dispatch(setDynamicName("Margin Money"))
  })
  return (
    <MarginMain/>
  )
}

export default index
