import React, { useEffect } from 'react'
import styles from '../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import UpdateCommodity from '../../src/components/UpdateCommodity'
import { GetCommodity } from '../../src/redux/commodity/action'
import { useDispatch, useSelector } from 'react-redux'
import _get from 'lodash/get'

function Index () {
  const dispatch = useDispatch()

  useEffect(() => {
    const id = sessionStorage.getItem('commodityId')
    dispatch(GetCommodity(`?commodityId=${id}`))
  }, [dispatch])

  const { Commodity } = useSelector((state) => state.commodity)

  return (
    <div className='container-fluid p-0 border-0'>
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/commodity')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src='/static/keyboard_arrow_right-3.svg'
                alt='ArrowRight'
              />
            </div>
            <h1 className={styles.heading}>{_get(Commodity, 'data[0].Commodity', '')}</h1>
          </div>
          <div className='d-flex align-items-center'>
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className='accordion_Text'>
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
          </div>
        </Card.Header>
        <UpdateCommodity />
      </Card>
    </div>
  )
}

export default Index
