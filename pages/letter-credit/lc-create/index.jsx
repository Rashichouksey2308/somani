import React from 'react'
import LcApplication from '../../../src/components/LcApplication'
import PreviewBar from '../../../src/components/PreviewBar'
import Router from "next/router"

function Index() {
  const changeRoute=()=>{
  Router.push("/")
  }
  return (
    <>
   <LcApplication/>
   <PreviewBar leftButtonClick={changeRoute}/>
    
    </>
  )
}

export default Index