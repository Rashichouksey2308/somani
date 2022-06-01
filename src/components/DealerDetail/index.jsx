import React, { useState, useEffect } from 'react'
import history from '../../history'

import { Row, Col, Card, CardBody } from 'reactstrap'
import CartTitle from '../CartTitle'
import { Tabs, Tab } from 'react-bootstrap'

import Information from '../Informatin'
import Branch from '../Branch'

import { fetchQueryParams } from '../../utils/comman'
import Loader from '../Loader'

import get from 'lodash/get'

const _ = { get }

function DetailPage(props) {
  let { elements } = props
  const [key, setKey] = useState('detail')

  useEffect(() => {
    let queryParams = props.query
    if (queryParams === '') {
      history.push(`/dealer/list`)
    } else {
      const params = fetchQueryParams(props.query)
      setKey(params.tab)
      if (params.tab === 'detail') {
        props.handleSingleDealerFetch(params.dealerId)
      } else {
        props.handleDealerBranchFetch(params.dealerId)
      }
    }
  }, [])

  const handleSelectTab = (tab) => {
    setKey(tab)
    const params = fetchQueryParams(props.query)
    history.push(`/dealer/detail?dealerId=${params.dealerId}&tab=${tab}`)
    props.handleDealerBranchFetch(params.dealerId)
  }

  const handleToCreateForm = () => {
    let queryParams = props.query
    if (queryParams !== '') {
      history.push(`/dealer/create-branch${queryParams}`)
    } else {
      history.push(`/dealer/list`)
    }
  }
  return (
    <React.Fragment>
      {props.dealerDataStatus !== false ? <Loader /> : null}
      {props.dealerBranchDataStatus !== false ? <Loader /> : null}
      <div className="hideSearch">
        <Row>
          <Col sm={12}>
            <CartTitle
              title={
                props.dealerData !== null
                  ? props.dealerData.dealerName.toUpperCase()
                  : 'Dealer Name'
              }
              Name={'Search'}
              customClass={'hidebtn'}
              innerTextClass={'hidetext'}
              iconClass={'hideexcel'}
            />
          </Col>
        </Row>
        <Card className="mb-3">
          <CardBody className="px-0 px-lg-1 py-0 py-lg-1">
            <Row className="custom-tab">
              <Col sm={12}>
                <Tabs
                  id="tab-id"
                  activeKey={key}
                  onSelect={(k) => handleSelectTab(k)}
                >
                  <Tab
                    eventKey="detail"
                    title={_.get(
                      elements,
                      'dealerDetailElements.tabDetailElement',
                      'Details',
                    )}
                  >
                    <Information
                      query={props.query}
                      dealerData={props.dealerData}
                      handleSingleDealerFetch={props.handleSingleDealerFetch}
                      elements={props.elements}
                    />
                  </Tab>
                  <Tab
                    eventKey="branch"
                    title={_.get(
                      elements,
                      'dealerDetailElements.tabBranchElement',
                      'Branch',
                    )}
                  >
                    <Branch
                      dealerBranchData={props.dealerBranchData}
                      handleToCreateForm={() => handleToCreateForm()}
                      elements={props.elements}
                    />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  )
}
export default DetailPage
