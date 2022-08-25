import React ,{ useEffect, useState }from 'react'
import MarginMain from '../../src/components/MarginMain'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'
const Index = () => {
    const dispatch = useDispatch()
   useEffect(() => {
    dispatch(setPageName('leads'))
    dispatch(setDynamicName("Margin Money"))
  })
  useEffect(() => {
  if(window){
    sessionStorage.setItem('loadedPage',"Leads")
    sessionStorage.setItem('loadedSubPage',`Margin Money`)
    sessionStorage.setItem('openList',1)
  }
  },[])
  return (
    <MarginMain/>
  )
}

export default Index
