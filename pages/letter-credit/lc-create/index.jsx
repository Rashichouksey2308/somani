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


  useEffect(() => {
    let id = sessionStorage.getItem('lcOrder')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const [lcData, setLcData] = useState()

  // console.log(lcData, "THIS IS LC USE STATE")

  useEffect(() => {
    setLcData({
    formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
    applicableRules: lcModuleData?.lcApplication?.applicableRules,
    dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
    placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
    lcIssuingBank: lcModuleData?.lcApplication?.lcIssuingBank,
    applicant: lcModuleData?.lcApplication?.applicant,
    beneficiary: lcModuleData?.lcApplication?.beneficiary,
    currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
    currecyCodeAndAmountUnit: lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
    tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
    creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
    creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
    atSight: lcModuleData?.lcApplication?.atSight,
    numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
    drawee: lcModuleData?.lcApplication?.drawee,
    deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
    partialShipment: lcModuleData?.lcApplication?.partialShipment,
    transhipments: lcModuleData?.lcApplication?.transhipments,
    shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
    portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
    portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
    latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
    DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
    presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod,
    confirmationInstructions: lcModuleData?.lcApplication?.confirmationInstructions,
    reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
    adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
    secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
    requestedConfirmationParty: lcModuleData?.lcApplication?.requestedConfirmationParty,
    charges: lcModuleData?.lcApplication?.charges,
    instructionToBank: lcModuleData?.lcApplication?.instructionToBank,
    senderToReceiverInformation: lcModuleData?.lcApplication?.senderToReceiverInformation,
    })
  }, [lcModuleData])

  console.log(lcData, "THIS IS LC DATA")
  

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
    dispatch(GetLcModule(`?lcModuleId=${lcModuleData?.order?.lc}`))
    sessionStorage.setItem('lcPreviewId', lcModuleData?.order?.lc)
    Router.push('/letter-table/letter-amend/id')
  }
  return (
    <>
      <LcApplication
        addDocArr={addDocArr}
        addCommentArr={addCommentArr}
        saveLcData={saveLcData}
        lcComments={lcComments}
        lcDocuments={lcDocuments}
        lcData={lcData}
      />
      <PreviewBar onSave={handleLcSave} leftButtonClick={changeRoute} />
    </>
  )
}

export default Index
