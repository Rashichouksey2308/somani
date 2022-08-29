
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TermSheetMain from '../../src/components/TermSheetMain'
import { setPageName,setDynamicName ,setDynamicOrder} from '../../src/redux/userData/action'
const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('termsheet'))
    dispatch(setDynamicName(null))
  })
useEffect(() => {
  if(window){
    sessionStorage.setItem('loadedPage',"Leads")
    sessionStorage.setItem('loadedSubPage',`Termsheet`)
    sessionStorage.setItem('openList',1)
  }
  },[])
  return (
    <TermSheetMain/>
  )
}

export default Index

