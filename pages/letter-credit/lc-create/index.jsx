import React, { useState, useEffect } from 'react'
import LcApplication from '../../../src/components/LcApplication'
import PreviewBar from '../../../src/components/PreviewBar'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule, UpdateLcModule } from '../../../src/redux/lcModule/action'

function Index() {
  const dispatch = useDispatch()

  const { lcModule } = useSelector((state) => state.lc)

  const lcModuleData = lcModule?.data[0]

  console.log(lcModuleData, 'THIS IS LC')

  useEffect(() => {
    let id = sessionStorage.getItem('lcOrder')
    dispatch(GetLcModule(`?lc=${id}`))
  }, [dispatch])

  const [lcData, setLcData] = useState({
    formOfDocumentaryCredit: '',
    applicableRules: '',
    dateOfExpiry: '',
    placeOfExpiry: '',
    lcIssuingBank: '',
    applicant: '',
    beneficiary: '',
    currecyCodeAndAmountValue: '',
    currecyCodeAndAmountUnit: '',
    tolerancePercentage: '',
    creditAvailablewith: '',
    creditAvailableBy: '',
    atSight: '',
    numberOfDays: '',
    drawee: '',
    deferredPayment: '',
    partialShipment: '',
    transhipments: '',
    shipmentForm: '',
    portOfLoading: '',
    portOfDischarge: '',
    latestDateOfShipment: '',
    DescriptionOfGoods: '',
    presentaionPeriod: '',
    confirmationInstructions: '',
    reimbursingBank: '',
    adviceThroughBank: '',
    secondAdvisingBank: '',
    requestedConfirmationParty: '',
    charges: '',
    instructionToBank: '',
    senderToReceiverInformation: '',
  })

  // console.log(lcData, "THIS IS LC USE STATE")

  const saveLcData = (name, value) => {
    const newInput = { ...lcData }
    newInput[name] = value
    // console.log(newInput)
    setLcData(newInput)
  }

  const [lcComments, setLcComments] = useState(
    lcModuleData?.additionalConditions,
  )

  const [lcDocuments, setLcDocuments] = useState(lcModuleData?.documentRequired)

  const addCommentArr = (lcComment) => {
    let newArr = [...lcComments]
    newArr.push(lcComment)
    setLcComments(newArr)
  }

  const addDocArr = (docComment) => {
    let newArr = [...lcDocuments]
    newArr.push(docComment)
    setLcDocuments(newArr)
  }

  useEffect(() => {
    let commentLcArr = []
    lcModuleData?.additionalConditions?.forEach((element) => {
      commentLcArr.push(element)
    })
    setLcComments(commentLcArr)
    
    let docLcArr = []
    lcModuleData?.documentRequired?.forEach((element) => {
      docLcArr.push(element)
    })
    setLcDocuments(docLcArr)

  }, [lcModuleData])

  const handleLcSave = () => {
    let obj = {
      lcApplication: { ...lcData },
      additionalConditions: [...lcComments],
      documentRequired: [...lcDocuments],
      lcModuleId: lcModuleData._id,
    }
    dispatch(UpdateLcModule(obj))
  }

  const changeRoute = () => {
    Router.push('/letter-amend/id')
  }
  return (
    <>
      <LcApplication
        addDocArr={addDocArr}
        addCommentArr={addCommentArr}
        saveLcData={saveLcData}
        lcComments={lcComments}
        lcDocuments={lcDocuments}
      />
      <PreviewBar onSave={handleLcSave} leftButtonClick={changeRoute} />
    </>
  )
}

export default Index
