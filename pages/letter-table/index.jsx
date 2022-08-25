import React ,{useEffect} from 'react'
import LetterCredit from '../../src/components/LetterCredit'

const Index = () => {
useEffect(() => {
if(window){
    sessionStorage.setItem('loadedPage',"Agreement & Lc Module")
    sessionStorage.setItem('loadedSubPage',`LC Module`)
    sessionStorage.setItem('openList',2)
    }
},[])
  return (
    <LetterCredit/>
  )
}

export default Index
