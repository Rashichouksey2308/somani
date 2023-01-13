import React, { useEffect } from 'react'
import LetterCredit from '../../src/components/LetterCredit'
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action'
import { useDispatch } from 'react-redux'
import constants from '@/utils/constants'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Agreement & LC Module')
      sessionStorage.setItem('loadedSubPage', `LC Module`)
      sessionStorage.setItem('openList', constants.numberTwo)
    }
    dispatch(setPageName('Lc'))
    dispatch(setDynamicName(null))
    dispatch(setDynamicOrder(null))
  }, [])
  return <LetterCredit />
}

export default Index
