import React, { useEffect } from 'react'
import PlaceOrder from '../../src/components/PlaceOrder'
import { setPageName } from '../../src/redux/userData/action'
import { useDispatch } from 'react-redux'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('newOrder'))
  })
  return <PlaceOrder />
}

export default Index
