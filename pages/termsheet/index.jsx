import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TermSheetMain from '../../src/components/TermSheetMain'
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('termsheet'))
    dispatch(setDynamicName(null))
    dispatch(setDynamicOrder(null))
  })
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Leads')
      sessionStorage.setItem('loadedSubPage', `Termsheet`)
      sessionStorage.setItem('openList', 1)
    }
  }, [])
  return <TermSheetMain />
}

export default Index
