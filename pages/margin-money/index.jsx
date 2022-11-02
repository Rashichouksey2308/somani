import React, { useEffect } from 'react'
import MarginMain from '../../src/components/MarginMain'
import { useDispatch } from 'react-redux'
import { setDynamicName, setPageName } from '../../src/redux/userData/action'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('leads'))
    dispatch(setDynamicName('Margin Money'))
  })
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Leads')
      sessionStorage.setItem('loadedSubPage', `Margin Money`)
      sessionStorage.setItem('openList', 1)
    }
  }, [])
  return <MarginMain/>
}

export default Index
