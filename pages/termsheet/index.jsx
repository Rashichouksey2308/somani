
// import TermSheet from '../../src/components/TermSheet'
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function Home() {
//   return (
//     <TermSheet />
//   )
// }

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TermSheetMain from '../../src/components/TermSheetMain'
import { setPageName } from '../../src/redux/userData/action'
const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('termsheet'))
  })
  return (
    <TermSheetMain/>
  )
}

export default Index

