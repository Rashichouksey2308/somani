import React, { useState, useEffect } from 'react'
import LcApplication from '../../../src/components/LcApplication'
import PreviewBar from '../../../src/components/PreviewBar'
import Router, { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule, UpdateLcModule } from '../../../src/redux/lcModule/action'
import { removePrefixOrSuffix } from '../../../src/utils/helper'
import { settingSidebar } from 'redux/breadcrumb/action'
import _get from 'lodash/get'
import { toast } from 'react-toastify'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../../src/redux/userData/action'
function Index() {
  const dispatch = useDispatch()
  const router = useRouter()

  const { lcModule } = useSelector((state) => state.lc)

  const lcModuleData = _get(lcModule, 'data[0]', {})
console.log(_get(lcModule,"data[0].order.vessel"),"sasdasdasdasd",lcModule)
  const [excelFile, setExcelFile] = useState(null)
  useEffect(() => {
    let id = sessionStorage.getItem('lcOrder')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const [lcData, setLcData] = useState()
  useEffect(() => {
    dispatch(setPageName('Lc'))
    console.log(
      lcModule?.data?.order?.orderId,
      'lcModule?.data?.order?.orderId',
    )
    dispatch(
      setDynamicName(
        _get(lcModule, 'data[0].company.companyName', 'Company Name'),
      ),
    )
    dispatch(
      setDynamicOrder(_get(lcModule, 'data[0].order.orderId', 'Order Id')),
    )
  }, [lcModuleData])
  // console.log(lcData, "THIS IS LC USE STATE")
console.log(lcModuleData,"lcModuleData")
  useEffect(() => {
    setLcData({
      formOfDocumentaryCredit:
        lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicableRules,
      dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
      placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
      lcIssuingBank: lcModuleData?.lcApplication?.lcIssuingBank
        ? lcModuleData?.lcApplication?.lcIssuingBank
        : lcModuleData?.order?.termsheet?.transactionDetails?.lcOpeningBank,
      applicant: lcModuleData?.lcApplication?.applicant,
      beneficiary: lcModuleData?.lcApplication?.beneficiary
        ? lcModuleData?.lcApplication?.beneficiary
        : lcModuleData?.order?.supplierName,
      currecyCodeAndAmountValue:
        lcModuleData?.lcApplication?.currecyCodeAndAmountValue ?? '',
      currecyCodeAndAmountUnit:
        lcModuleData?.lcApplication?.currecyCodeAndAmountUnit ?? '',
      tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage
        ? lcModuleData?.lcApplication?.tolerancePercentage
        : lcModuleData?.order?.tolerance,
      creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
      creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
      atSight: lcModuleData?.lcApplication?.atSight,
      numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
      drawee: lcModuleData?.lcApplication?.drawee,
      deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
      partialShipment: lcModuleData?.lcApplication?.partialShipment
        ? lcModuleData?.lcApplication?.partialShipment
        : lcModuleData?.order?.termsheet?.transactionDetails
            ?.partShipmentAllowed,
      transhipments: lcModuleData?.lcApplication?.transhipments,
      shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading
        ? lcModuleData?.lcApplication?.portOfLoading
        : lcModuleData?.order?.termsheet?.transactionDetails?.loadPort,
      portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge
        ? lcModuleData?.lcApplication?.portOfDischarge
        : lcModuleData?.order?.termsheet?.transactionDetails?.portOfDischarge,
      latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment ?
      lcModuleData?.lcApplication?.latestDateOfShipment : 
      lcModuleData?.order?.supplierCredential?.latestShipmentDate,
      DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
      presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod
        ? lcModuleData?.lcApplication?.presentaionPeriod
        : 'DOCUMENTS TO BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT DATE BUT WITHIN VALIDITY OF THE LC',
      confirmationInstructions: lcModuleData?.lcApplication
        ?.confirmationInstructions
        ? lcModuleData?.lcApplication?.confirmationInstructions
        : 'May Add',
      reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
      adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
      secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
      requestedConfirmationParty:
        lcModuleData?.lcApplication?.requestedConfirmationParty,
      charges: lcModuleData?.lcApplication?.charges
        ? lcModuleData?.lcApplication?.charges
        : 'ALL THE CHARGES OUTSIDE LC ISSUING BANK ARE FOR THE BENEFICIARY’S ACCOUNT',
      instructionToBank: lcModuleData?.lcApplication?.instructionToBank
        ? lcModuleData?.lcApplication?.instructionToBank
        : 'THE DOCUMENTS ARE TO BE COURIERED TO ........... (LC ISSUING BANK ADDRESS)..............UPON RECEIPT AT OUR COUNTERS OF A STRICTLY COMPLYING PRESENTATION, WE UNDERTAKE TO COVER YOU WITHIN 5 BANKING DAYS AS PER YOUR INSTRUCTIONS',
      senderToReceiverInformation:
        lcModuleData?.lcApplication?.senderToReceiverInformation,
      documentaryCreditNumber:
        lcModuleData?.lcApplication?.documentaryCreditNumber,
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue,
      dateOfAmendment: lcModuleData?.lcApplication?.dateOfAmendment,
      numberOfAmendment: lcModuleData?.lcApplication?.numberOfAmendment,
    })
    setExcelFile(
      _get(
        lcModule,
        'data[0].order.generic.productSpecifications.specificationTable',
        [],
      ),
    )
  }, [lcModuleData, lcModule])

  console.log(lcData, 'THIS IS LC DATA')

  const saveLcData = (name, value) => {
    const newInput = { ...lcData }
    newInput[name] = value
    if(name== "atSight" && value== "AT SIGHT"){
      newInput.numberOfDays = ""
    }
    // console.log(newInput)
    setLcData(newInput)
  }

  const [currentComment, setCurrentComment] = useState('')
  const [lcDocuments, setLcDocuments] = useState(lcModuleData?.documentRequired)
  const [lcComments, setLcComments] = useState(
    lcModuleData?.additionalConditions,
  )
  const [lcCondition, setLcCondition] = useState(
    lcModuleData?.additionalConditions,
  )
  console.log(lcCondition, 'lcCondition1223')
  const [currentComment2, setCurrentComment2] = useState('')

  const addCommentArr = (lcComment) => {
    let newArr = [...lcComments]
    newArr.push(lcComment)
    setLcComments(newArr)
  }

  const addComment = (val) => {
    setCurrentComment(val)
  }
  const addDocArr = () => {
    if (currentComment == '') {
      let toastMessage = 'Comment cannot be empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return
      }
    }
    setLcDocuments([...lcDocuments, { value: currentComment, action: false }])
    setCurrentComment('')
  }
  const deleteLcDoc = (index) => {
    setLcDocuments([
      ...lcDocuments.slice(0, index),
      ...lcDocuments.slice(index + 1),
    ])
  }
  const lcDocEdit = (val, index) => {
    setLcDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, value: val }
        }

        return obj
      })

      return newState
    })
  }
  console.log(lcDocuments, 'lcDocumentslcDocuments')
  const editLcDocComments = (val, index) => {
    setLcDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, action: val }
        }

        return obj
      })

      return newState
    })
  }
  //condition
  const addConditionComment = (val) => {
    console.log(val, '888888')

    setCurrentComment2(val)
  }
  const addConditionArr = (index) => {
    // console.log("thsbhjsbdjh",lcCondition,currentComment2)
    if (currentComment2 == '') {
      let toastMessage = 'Comment cannot be empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return
      }
    }
    setLcComments([...lcComments, { value: currentComment2, action: false }])
    //   setLcComments(prevState => {
    //   const newState = prevState.map((obj ,i)=> {

    //     if (i == index) {
    //       return {...obj, value: currentComment2,action:false};
    //     }

    //     return obj;
    //   });

    //   return newState;
    // });
    setCurrentComment2('')
  }
  const deleteLcCondition = (index) => {
    setLcComments([
      ...lcComments.slice(0, index),
      ...lcComments.slice(index + 1),
    ])
  }
  const lcConditionEdit = (val, index) => {
    console.log(val, 'AAAAAAAA')
    setLcComments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, value: val }
        }

        return obj
      })

      return newState
    })
  }
  const editLcComments = (val, index) => {
    setLcComments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, action: val }
        }

        return obj
      })

      return newState
    })
  }
  console.log(lcComments, 'lcComments')
  useEffect(() => {
    let commentLcArr = []
    lcModuleData?.additionalConditions?.forEach((element) => {
      commentLcArr.push({ value: element, action: false })
    })
    setLcComments(commentLcArr)

    let docLcArr = []
    lcModuleData?.documentRequired?.forEach((element) => {
      docLcArr.push({ value: element, action: false })
    })
    setLcDocuments(docLcArr)
  }, [lcModuleData])

  const checkValidation = () => {
    console.log('valid', lcData.applicableRules)
    let toastMessage
    if (
      lcData.formOfDocumentaryCredit == '' ||
      lcData.formOfDocumentaryCredit == undefined
    ) {
      toastMessage = 'Please Select Form Of Documentary Credit'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    // if (lcData.applicableRules === '' || lcData.applicableRules == undefined) {
    //   toastMessage = 'Please add Applicable Rules'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //     return false
    //   }
    // }

    if (lcData.dateOfExpiry === '' || lcData.dateOfExpiry == undefined) {
      toastMessage = 'Please add  Date Of Expiry'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.placeOfExpiry === '' || lcData.placeOfExpiry == undefined) {
      toastMessage = 'Please add Place Of Expiry'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.applicant === '' || lcData.applicant == undefined) {
      toastMessage = 'Please Select Applicant'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.beneficiary === '' || lcData.beneficiary == undefined) {
      toastMessage = 'Please add Beneficiary'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.currecyCodeAndAmountValue === '' ||
      lcData.currecyCodeAndAmountValue == undefined
    ) {
      toastMessage = 'Please add Currency Code Amount'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.tolerancePercentage === '' ||
      lcData.tolerancePercentage == undefined
    ) {
      toastMessage = 'Please add Tolerance Percentage'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.creditAvailablewith === '' ||
      lcData.creditAvailablewith == undefined
    ) {
      toastMessage = 'Please select Credit Available With'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.creditAvailableBy === '' ||
      lcData.creditAvailableBy == undefined
    ) {
      toastMessage = 'Please select Credit Available By'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.atSight === '' || lcData.atSight == undefined) {
      toastMessage = 'Please select DRAFT AT'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
   if(lcData.atSight=="SPECIFY"){
     if (lcData.numberOfDays === '' || lcData.numberOfDays == undefined) {
      toastMessage = 'Please add number of Days'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
   }
    if (lcData.partialShipment === '' || lcData.partialShipment == undefined) {
      toastMessage = 'Please select  Partial Shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.transhipments === '' || lcData.transhipments == undefined) {
      toastMessage = 'Please select  Transhipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.shipmentForm === '' || lcData.shipmentForm == undefined) {
      toastMessage = 'Please select  shipment Form'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.portOfLoading === '' || lcData.portOfLoading == undefined) {
      toastMessage = 'Please select  port Of Loading'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcData.portOfDischarge === '' || lcData.portOfDischarge == undefined) {
      toastMessage = 'Please select  port Of Discharge'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.latestDateOfShipment === '' ||
      lcData.latestDateOfShipment == undefined
    ) {
      toastMessage = 'Please select latest Date Of Shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }

    if (
      lcData.DescriptionOfGoods === '' ||
      lcData.DescriptionOfGoods == undefined
    ) {
      toastMessage = 'Please add Description Of Goods'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcDocuments.length <= 0) {
      toastMessage = 'Please add DOCUMENT REQUIRED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (lcComments.length <= 0) {
      toastMessage = 'Please add ADDITIONAL CONDITIONS'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.presentaionPeriod === '' ||
      lcData.presentaionPeriod == undefined
    ) {
      toastMessage = 'Please add presentaion Period'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.confirmationInstructions === '' ||
      lcData.confirmationInstructions == undefined
    ) {
      toastMessage = 'Please add confirmation Instructions'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    // if (lcData.reimbursingBank === '' || lcData.reimbursingBank == undefined) {
    //   toastMessage = 'Please select  reimbursing Bank'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //     return false
    //   }
    // }
    if (
      lcData.adviceThroughBank === '' ||
      lcData.adviceThroughBank == undefined
    ) {
      toastMessage = 'Please select  advice Through Bank'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    // if (
    //   lcData.requestedConfirmationParty === '' ||
    //   lcData.requestedConfirmationParty == undefined
    // ) {
    //   toastMessage = 'Please select requested Confirmation Party'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //     return false
    //   }
    // }
    if (lcData.charges === '' || lcData.charges == undefined) {
      toastMessage = 'Please select charges'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      lcData.instructionToBank === '' ||
      lcData.instructionToBank == undefined
    ) {
      toastMessage = 'Please add instruction To Bank'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    return true
  }
  const handleLcSave = async() => {
    if (checkValidation()) {
      let comment = []
      if (lcComments.length > 0) {
        lcComments.forEach((val, index) => {
          comment.push(val.value)
        })
      }
      let doc = []
      if (lcDocuments.length > 0) {
        lcDocuments.forEach((val, index) => {
          doc.push(val.value)
        })
      }
      let lcObj = { ...lcData }
      lcObj.currecyCodeAndAmountValue = removePrefixOrSuffix(
        lcData?.currecyCodeAndAmountValue,
      )
      lcObj.tolerancePercentage = removePrefixOrSuffix(
        lcData?.tolerancePercentage,
      )
      let obj = {
        lcApplication: { ...lcObj },
        additionalConditions: [...comment],
        documentRequired: [...doc],
        lcModuleId: lcModuleData._id,
      }
      console.log(lcModule,"lcModule")
       let code = await dispatch(UpdateLcModule({ obj: obj }))
       if(code==200){
        sessionStorage.setItem('VesselCompany',_get(lcModule,"data[0].company._id",""))
        sessionStorage.setItem('VesselId',_get(lcModule,"data[0].order.vessel",""))
        dispatch(settingSidebar('Agreement & LC Module', 'Vessel Nomination', 'Vessel Nomination', '2'))
        router.push(`/vessel`)
       }
      
    }
  }

  const changeRoute = () => {
    if (checkValidation()) {
      let comment = []
      if (lcComments.length > 0) {
        lcComments.forEach((val, index) => {
          comment.push(val.value)
        })
      }
      let doc = []
      if (lcDocuments.length > 0) {
        lcDocuments.forEach((val, index) => {
          doc.push(val.value)
        })
      }
      let task = 'preview'
      let lcObj = { ...lcData }
      lcObj.currecyCodeAndAmountValue = removePrefixOrSuffix(
        lcData?.currecyCodeAndAmountValue,
      )
      lcObj.tolerancePercentage = removePrefixOrSuffix(
        lcData?.tolerancePercentage,
      )
      let obj = {
        lcApplication: { ...lcObj },
        additionalConditions: [...comment],
        documentRequired: [...doc],
        lcModuleId: lcModuleData._id,
      }
      dispatch(UpdateLcModule({ obj: obj, task: task }))
      dispatch(GetLcModule(`?lcModuleId=${lcModuleData?.order?.lc}`))
      sessionStorage.setItem('lcPreviewId', lcModuleData?.order?.lc)
      // Router.push('/letter-table/letter-amend/id')
    }
  }
  return (
    <>
      <LcApplication
        addDocArr={addDocArr}
        saveLcData={saveLcData}
        lcComments={lcComments}
        lcDocuments={lcDocuments}
        lcModuleData={lcModuleData}
        lcData={lcData}
        addComment={addComment}
        deleteLcDoc={deleteLcDoc}
        lcDocEdit={lcDocEdit}
        currentComment={currentComment}
        addConditionArr={addConditionArr}
        deleteLcCondition={deleteLcCondition}
        lcConditionEdit={lcConditionEdit}
        addConditionComment={addConditionComment}
        lcCondition={lcCondition}
        excelFile={excelFile}
        currentComment2={currentComment2}
        editLcComments={editLcComments}
        editLcDocComments={editLcDocComments}
        name={_get(lcModule,"data[0].company.companyName","")}
      />
      <PreviewBar onSave={handleLcSave} leftButtonClick={changeRoute} />
    </>
  )
}

export default Index
