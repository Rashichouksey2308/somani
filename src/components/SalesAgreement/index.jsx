import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import GrowInput from '../GrowInput'
import Buyer from '../AggrementContent/buyer'
import AssociateBuyer from '../AggrementContent/associateBuyer'
import CHA from '../AggrementContent/cha'
import CMA from '../AggrementContent/cma'
import Finance from '../AggrementContent/finance'
import Manufecture from '../AggrementContent/manufecture'
import ProductSpecification from '../AggrementContent/productSpecification'
import AddtionalComments from '../AggrementContent/addtionalComments'
import PlaceOfExecutition from '../AggrementContent/placeOfExecutition'

import Shipping from '../AggrementContent/shipping'
import Seller from '../AggrementContent/seller'

import Stevedore from '../AggrementContent/stevedore'
import Thirdparty from '../AggrementContent/thirdparty'
import { useDispatch, useSelector } from 'react-redux'
import { updateGenericData } from '../../redux/generic/actionsType'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { cssNumber } from 'jquery'
import API from '../../../src/utils/endpoints'
import Cookies from 'js-cookie'
import Axios from 'axios'
import _get from 'lodash/get'

function Index(props) {
  const dispatch = useDispatch()

  console.log(props.genericData, 'sales')
  const [active, setActive] = useState('Product Specifications')
  const [multiPart, setMultiPart] = useState(false)
  const [multiPartValue, setMultiPartValue] = useState('Manufacturer')
  const [saveData, setSaveData] = useState(false)
  const [submitData, setSubmitData] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [sameAsCHA, setSameAsCHA] = useState(true)
  const { companyData } = useSelector((state) => state.companyDetails)
  const { orderList } = useSelector((state) => state.buyer)
  console.log(companyData, 'companyData', orderList)
  useEffect(() => {
    if (window) {
      props.setDate(localStorage.getItem('timeGenericUpdated'))
    }
  })
  const changeActiveValue = (val, index) => {
    setActive(val)
    showContent()
    setSaveData(false)

    let tempArr = sideBar
    for (let i = 0; i < tempArr.length; i++) {
      if (i == index) {
        tempArr[i].state = 'current'
        tempArr[i].image = '/static/currnet.svg'
      } else {
        if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete') {
          tempArr[i].state = 'default'
          tempArr[i].image = '/static/Group 3256.svg'
        }
      }
    }
    console.log(tempArr, 'name')
    setSidebar(tempArr)
    setIsSideBarOpen(false)
    setSideStateToLocal(val)
  }
  const uploadDoc = async (e) => {
    console.log(e, 'response data')
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.customClearanceDoc}`,
        fd,
        {
          headers: headers,
        },
      )
      console.log(response.data.data, 'dischargeOfCargo2')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data
        // let toastMessage = 'DOCUMENT UPDATED'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      } else {
        // dispatch(getCustomClearanceFailed(response.data.data))
        // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      }
    } catch (error) {
      // dispatch(getCustomClearanceFailed())
      // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      // if (!toast.isActive(toastMessage.toUpperCase())) {
      //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      // }
    }
  }
  const addressValidation = (type, data, check = true) => {
    console.log(type, data, 'type,data')
    if (data.addressType === '' || data.addressType == undefined) {
      let toastMessage = 'Please add address Type'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (data.fullAddress === '' || data.fullAddress == undefined) {
      let toastMessage = 'Please add address'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (data.pinCode === '' || data.pinCode == undefined) {
      let toastMessage = 'Please add pin Code'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (data.country === '' || data.country == undefined) {
      let toastMessage = 'Please add Country'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (type == 'Branch') {
      if (check) {
        if (data.gstin === '' || data.gstin == undefined) {
          let toastMessage = 'Please add gstin'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          return false
        }
        if (data.state === '' || data.state == undefined) {
          let toastMessage = 'Please add state'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          return false
        }
      }
      if (data.city === '' || data.city == undefined) {
        let toastMessage = 'Please add city'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return false
      }
    }

    return true
  }
  const setSideStateToLocal = (val = null) => {
    sessionStorage.setItem('genericSide', JSON.stringify(sideBar))
    sessionStorage.setItem('setgenActive', val)
    console.log('ddasdasd')
  }
  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('genericSide')) {
        setSidebar(JSON.parse(sessionStorage.getItem('genericSide')))
        setActive(sessionStorage.getItem('setgenActive'))
      }
    }
  }, [])
  console.log(active, 'active')
  const showContent = (sellerData) => {
    if (active == 'Buyer') {
      return (
        <Buyer
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.buyer}
          order={props?.genericData}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
        />
      )
    }
    if (active == 'Associate Buyer') {
      return (
        <AssociateBuyer
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.associateBuyer}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
          order={props?.genericData}
          pan={_get(companyData, 'profile.companyDetail.pans[0]', '')}
          gstList={_get(orderList, 'company.gstList', [])}
          selectedGST={_get(orderList, 'company.GST', '')}
        />
      )
    }
    if (active == 'Seller') {
      return (
        <Seller
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.seller}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
        />
      )
    }
    if (active == 'CHA') {
      return (
        <CHA
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.CHA}
          addressValidation={addressValidation}
          uploadDoc={uploadDoc}
        />
      )
    }
    if (active == 'CMA') {
      return (
        <CMA
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.CMA}
          addressValidation={addressValidation}
          uploadDoc={uploadDoc}
        />
      )
    }
    if (active == 'Supplier') {
      return (
        <Manufecture
          saveData={saveData}
          sendData={sendData}
          multiPart={multiPart}
          submitData={submitData}
          updateData={updateData}
          active={active}
          multiPartValue={multiPartValue}
          data={props?.genericData?.supplier}
          order={props?.genericData?.order}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
        />
      )
    }
    if (active == 'Shipping Line') {
      return (
        <Shipping
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.shipping}
        />
      )
    }
    if (active == 'Financing Bank') {
      return (
        <Finance
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.financingBank}
        />
      )
    }
    if (active == 'Stevedore') {
      return (
        <Stevedore
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          data={
            sameAsCHA ? props?.genericData?.stevedore : props?.genericData?.CHA
          }
          uploadDoc={uploadDoc}
          active={active}
          addressValidation={addressValidation}
          sameAsCHA={sameAsCHA}
        />
      )
    }
    if (active == 'Delivery Terms') {
      return (
        <Thirdparty
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.deliveryTerms}
        />
      )
    }
    if (active == 'Product Specifications') {
      return (
        <ProductSpecification
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.productSpecifications}
        />
      )
    }
    if (active == 'Additional Comments') {
      return (
        <AddtionalComments
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.additionalComments}
        />
      )
    }
    if (active == 'Place of Execution') {
      return (
        <PlaceOfExecutition
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.placeOfExecution}
        />
      )
    }
  }
  const [sideBar, setSidebar] = useState([
    {
      name: 'Product Specifications',
      state: 'current',
      value: 'Product Specifications',
      image: '/static/currnet.svg',
    },
    {
      name: 'Supplier',
      state: 'default',
      value: 'Supplier',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Seller',
      state: 'default',
      value: 'Seller',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Buyer',
      state: 'default',
      value: 'Buyer',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Associate Buyer',
      state: 'default',
      value: 'Associate Buyer',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Financing Bank',
      state: 'default',
      value: 'Financing Bank',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Shipping Line',
      state: 'default',
      value: 'Shipping Line',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'CHA',
      state: 'default',
      value: 'CHA',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Stevedore',
      state: 'default',
      value: 'Stevedore',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'CMA',
      state: 'default',
      value: 'CMA',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Delivery Terms',
      state: 'default',
      value: 'Delivery Terms',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Place of Execution',
      state: 'default',
      value: 'Place of Execution',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Additional Comments',
      state: 'default',
      value: 'Additional Comments',
      image: '/static/Group 3256.svg',
    },
  ])
  const onLeftChange = () => {
    let tempArr = sideBar
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].state == 'current') {
        if (i != 0) {
          tempArr[i].state = 'default'
          tempArr[i].image = '/static/Group 3256.svg'
          let a = i - 1
          console.log(a, 'tempArr[a]234')
          tempArr[a].state = 'current'
          tempArr[a].image = '/static/currnet.svg'
          setActive(tempArr[a].name)
        }
      }
    }
    console.log('aasdaa', tempArr)
    setSidebar(tempArr)
    setSideStateToLocal(active)
  }
  const onRightChange = () => {
    let tempArr = sideBar
    console.log(tempArr, '987789')
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i], '987')
      if (tempArr[i].state == 'current') {
        if (i != tempArr.length) {
          tempArr[i].state = 'default'
          tempArr[i].image = '/static/Group 3256.svg'
          console.log(tempArr[i].state, 'tempArr[a]')
          let a = i + 1
          console.log(a, 'tempArr[a]234')
          tempArr[a].state = 'current'
          tempArr[a].image = '/static/currnet.svg'
          setActive(tempArr[a].name)
          break
        }
      }
    }
    console.log('aasdaa', tempArr)
    setSidebar(tempArr)
    setSideStateToLocal(active)
  }
  console.log(sideBar, 'sideBar')

  const onSave = () => {
    setSaveData(true)
  }
  const onSubmit = () => {
    setSubmitData(true)
  }
  const updateData = async (key, data) => {
    let toastMessage = ''
    let dataToSend = {}
    console.log('this13', data, key)
    if (key == 'Supplier') {
      dataToSend = {
        genericId: props.genericData?._id,
        supplier: {
          name: data.supplierState.name,
          shortName: data.supplierState.shortName,
          bankDetails: {
            bankName: data.supplierState.bankDetails.bankName,
            accountNo: data.supplierState.bankDetails.accountNo,
            swiftCode: data.supplierState.bankDetails.swiftCode,
            city: data.supplierState.bankDetails.city,
          },
          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          multiParty: data.supplierState.multiParty,
          multiPartyAddresses: data.supplierState.multiPartyAddresses,
        },
      }

      let dataToSend2 = {
        name: data.supplierState.name,
        shortName: data.supplierState.shortName,
        bankDetails: {
          bankName: data.supplierState.bankDetails.bankName,
          accountNo: data.supplierState.bankDetails.accountNo,
          swiftCode: data.supplierState.bankDetails.swiftCode,
          city: data.supplierState.bankDetails.city,
        },
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
        multiParty: data.supplierState.multiParty,
      }
      sessionStorage.setItem('Supplier', JSON.stringify(dataToSend2))

      if (
        dataToSend.supplier.name == '' ||
        dataToSend.supplier.name == undefined
      ) {
        toastMessage = `Please add supplier name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.supplier.shortName == '' ||
        dataToSend.supplier.shortName == undefined
      ) {
        toastMessage = `Please add short Name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.supplier.bankDetails.accountNo == '' ||
        dataToSend.supplier.bankDetails.accountNo == undefined
      ) {
        toastMessage = `Please add account number `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.supplier.bankDetails.bankName == '' ||
        dataToSend.supplier.bankDetails.bankName == undefined
      ) {
        toastMessage = `Please add bank name `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.supplier.bankDetails.swiftCode == '' ||
        dataToSend.supplier.bankDetails.swiftCode == undefined
      ) {
        toastMessage = `Please add swift code `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.supplier.addresses.length <= 0 ||
        dataToSend.supplier.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.supplier.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.supplier.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Seller') {
      dataToSend = {
        genericId: props.genericData?._id,
        seller: {
          name: 'Indo Intertrade Ag',
          shortName: data.sellerData.shortName,

          addresses: data.addresses,
          authorisedSignatoryDetails: data.list,
        },
      }
      console.log(dataToSend, 'dataToSend')
      let dataToSend2 = {
        name: 'Indo Intertrade Ag',
        shortName: data.sellerData.shortName,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Seller', JSON.stringify(dataToSend2))

      if (dataToSend.seller.name == '' || dataToSend.seller.name == undefined) {
        toastMessage = `Please add seller name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.seller.shortName == '' ||
        dataToSend.seller.shortName == undefined
      ) {
        toastMessage = `Please add short name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.seller.addresses.length <= 0 ||
        dataToSend.seller.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.seller.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.seller.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (dataToSend.seller.authorisedSignatoryDetails.length >= 0) {
        for (
          let i = 0;
          i < dataToSend.seller.authorisedSignatoryDetails.length;
          i++
        ) {
          if (
            dataToSend?.seller?.authorisedSignatoryDetails[i]?.document == 'new'
          ) {
            toastMessage = `Please add authorised Signatory Details document `
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
              setSubmitData(false)
              break
            }
          }
        }
      }
    }
    if (key == 'Buyer') {
      dataToSend = {
        genericId: props.genericData?._id,
        buyer: {
          name: data.buyerData.name,
          branch: data.buyerData.branchName,

          addresses: data.addresses,
          authorisedSignatoryDetails: data.list,
        },
      }
      let dataToSend2 = {
        name: data.buyerData.name,
        branchName: data.buyerData.branchName,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Buyer', JSON.stringify(dataToSend2))
      if (dataToSend.buyer.name == '' || dataToSend.buyer.name == undefined) {
        toastMessage = `Please add buyer name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.buyer.branch == '' ||
        dataToSend.buyer.branch == undefined
      ) {
        toastMessage = `Please add branch Name`
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.buyer.addresses.length <= 0 ||
        dataToSend.buyer.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.buyer.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.buyer.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Financing Bank') {
      console.log(data.financeData, 'finan')
      dataToSend = {
        genericId: props.genericData?._id,
        financingBank: {
          name: data.financeData.name,
          branch: data.financeData.branchName,
        },
      }
      let dataToSend2 = {
        name: data.financeData.name,
        branchName: data.financeData.branchName,
      }
      sessionStorage.setItem('Finance', JSON.stringify(dataToSend2))
      if (
        dataToSend.financingBank.name == '' ||
        dataToSend.financingBank.name == undefined
      ) {
        toastMessage = `Please add name `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.financingBank.branch == '' ||
        dataToSend.financingBank.branch == undefined
      ) {
        toastMessage = `Please add branch name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      console.log(dataToSend, 'dataToSend')
    }
    if (key == 'CMA') {
      console.log(data.cmaData, 'data.cmaData')
      dataToSend = {
        genericId: props.genericData?._id,
        CMA: {
          name: data.cmaData.name,
          shortName: data.cmaData.shortName,
          gstin: data.cmaData.gstin,
          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
        },
      }
      let dataToSend2 = {
        name: data.cmaData.name,
        shortName: data.cmaData.shortName,
        shortName: data.cmaData.gstin,
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Cma', JSON.stringify(dataToSend2))
      if (dataToSend.CMA.name == '' || dataToSend.CMA.name == undefined) {
        toastMessage = `Please add CMA name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.CMA.shortName == '' ||
        dataToSend.CMA.shortName == undefined
      ) {
        toastMessage = `Please add short name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (dataToSend.CMA.gstin == '' || dataToSend.CMA.gstin == undefined) {
        toastMessage = `Please add short name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend?.CMA?.addresses?.length <= 0 ||
        dataToSend?.CMA?.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend?.CMA?.authorisedSignatoryDetails?.length <= 0 ||
        dataToSend?.CMA?.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'CHA') {
      dataToSend = {
        genericId: props.genericData?._id,
        CHA: {
          name: data.chaState.name,
          shortName: data.chaState.shortName,
          gstin: data.chaState.gstin,

          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
        },
      }
      let dataToSend2 = {
        name: data.chaState.name,
        shortName: data.chaState.shortName,
        gstin: data.chaState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Cha', JSON.stringify(dataToSend2))
      if (dataToSend.CHA.name == '' || dataToSend.CHA.name == undefined) {
        toastMessage = `Please add CHA name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.CHA.shortName == '' ||
        dataToSend.CHA.shortName == undefined
      ) {
        toastMessage = `Please add short name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (dataToSend.CHA.gstin == '' || dataToSend.CHA.gstin == undefined) {
        toastMessage = `Please add gstin name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.CHA.addresses.length <= 0 ||
        dataToSend.CHA.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.CHA.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.CHA.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Stevedore') {
      dataToSend = {
        genericId: props.genericData?._id,
        stevedore: {
          name: data.seteveState.name,
          shortName: data.seteveState.shortName,
          gstin: data.seteveState.gstin,

          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
        },
      }
      let dataToSend2 = {
        name: data.seteveState.name,
        shortName: data.seteveState.shortName,
        gstin: data.seteveState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Stevedore', JSON.stringify(dataToSend2))
      console.log('Stevedore', dataToSend)
      if (
        dataToSend.stevedore.name == '' ||
        dataToSend.stevedore.name == undefined
      ) {
        toastMessage = `Please add stevedore name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.stevedore.shortName == '' ||
        dataToSend.stevedore.shortName == undefined
      ) {
        toastMessage = `Please add short name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.stevedore.gstin == '' ||
        dataToSend.stevedore.gstin == undefined
      ) {
        toastMessage = `Please add gstin `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.stevedore.addresses.length <= 0 ||
        dataToSend.stevedore.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.stevedore.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.stevedore.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Shipping Line') {
      console.log('this14')
      dataToSend = {
        genericId: props.genericData?._id,
        shipping: {
          name: data.shippingData.name,
          vesselName: data.shippingData.vesselName,
          gstin: data.shippingData.gstin,
        },
      }
      let dataToSend2 = {
        name: data.shippingData.name,
        vesselName: data.shippingData.vesselName,
        gstin: data.shippingData.gstin,
      }
      sessionStorage.setItem('Shipping', JSON.stringify(dataToSend2))
      if (
        dataToSend.shipping.name == '' ||
        dataToSend.shipping.name == undefined
      ) {
        toastMessage = `Please add shipping name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.shipping.vesselName == '' ||
        dataToSend.shipping.vesselName == undefined
      ) {
        toastMessage = `Please add vessel Name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend.shipping.gstin == '' ||
        dataToSend.shipping.gstin == undefined
      ) {
        toastMessage = `Please add gstin `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Delivery Terms') {
      console.log('this14', data)
      dataToSend = {
        genericId: props.genericData?._id,
        deliveryTerms: {
          deliveryTerm: data.deliveryData,
        },
      }
      let dataToSend2 = {
        deliveryTerms: data.deliveryData,
      }
     
      sessionStorage.setItem('Delivery', JSON.stringify(dataToSend2))
       if (dataToSend?.deliveryTerms?.deliveryTerm == "" || dataToSend?.deliveryTerms?.deliveryTerm == undefined) {
      toastMessage = `Please select delivery Terms  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return

      }
      }
      
    }
    if (key == 'Product Specifications') {
      console.log('this14')
      dataToSend = {
        genericId: props.genericData?._id,
        productSpecifications: {
          comments: data.addressList,
          specificationTable: data?.excelData,
        },
      }
      sessionStorage.setItem(
        'Product',
        JSON.stringify({ list: data.addressList, excel: data?.excelData }),
      )
      if (
        dataToSend.productSpecifications.comments.length <= 0 ||
        dataToSend.productSpecifications.comments == undefined
      ) {
        toastMessage = `Please add comments `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (
        dataToSend?.productSpecifications?.specificationTable?.length <= 0 ||
        dataToSend?.productSpecifications?.specificationTable == undefined
      ) {
        toastMessage = `Please add product specification `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Additional Comments') {
      let list = []
      data.addressList.forEach((val, index) => {
        list.push(val.value)
      })
      console.log('this14', list)
      dataToSend = {
        genericId: props.genericData?._id,
        additionalComments: {
          comments: list,
        },
      }
      sessionStorage.setItem('add', JSON.stringify(data.addressList))
      if (data.addressList.length <= 0 || data.addressList == undefined) {
        toastMessage = `Please add Comments `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Place of Execution') {
      console.log('this14', data.list)

      let list = []
      data.list.forEach((val, index) => {
        list.push({
          agreementName: val.name,
          place: val.execution,
          dateOfExecution: val.dateOfExecution,
        })
      })
      dataToSend = {
        genericId: props.genericData?._id,

        placeOfExecution: {
          execution: list,
        },
      }
      sessionStorage.setItem('exe', JSON.stringify(data.list))
      if (list.length <= 0 || list == undefined) {
        toastMessage = `Please add place of execution `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
    }
    if (key == 'Associate Buyer') {
      console.log('this14')

      console.log(data.associate, 'data.associate')
      dataToSend = {
        genericId: props.genericData?._id,

        associateBuyer: {
          branch: data?.associate?.branchName,
          shortName: data?.associate?.shortName,
          gstin: data?.associate?.gstin,
          addresses: data?.address,
          authorisedSignatoryDetails: data?.list,
        },
      }
      let dataToSend2 = {
        branchName: data.associate.branchName,
        shortName: data.associate.shortName,
        gstin: data.associate.gstin,
        addresses: data.address,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Associate', JSON.stringify(dataToSend2))
      console.log(dataToSend.associateBuyer.authorisedSignatoryDetails, 'okkk')
      if (
        dataToSend.associateBuyer.branch == '' ||
        dataToSend.associateBuyer.branch == undefined
      ) {
        toastMessage = `Please add branch name  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.associateBuyer.gstin == '' ||
        dataToSend.associateBuyer.gstin == undefined
      ) {
        toastMessage = `Please add gstin  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.associateBuyer.addresses.length <= 0 ||
        dataToSend.associateBuyer.addresses == undefined
      ) {
        toastMessage = `Please add address `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }

      if (
        dataToSend.associateBuyer.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.associateBuyer.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          setSubmitData(false)
          return
        }
      }
      if (dataToSend.associateBuyer.authorisedSignatoryDetails.length > 0) {
        let isDoc = true
        for (
          let i = 0;
          i < dataToSend.associateBuyer.authorisedSignatoryDetails.length;
          i++
        ) {
          if (
            dataToSend.associateBuyer.authorisedSignatoryDetails[i].addnew ==
            'true'
          ) {
            if (
              dataToSend.associateBuyer.authorisedSignatoryDetails[i]
                .document == 'new'
            ) {
              toastMessage = `Please add document `
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                })
                setSubmitData(false)
                isDoc = false
                break
              }
            }
          }
        }
        if (isDoc == false) {
          return
        }
      }
    }

    console.log('this15')
    let timestamp = await dispatch(updateGenericData(dataToSend))
    console.log(timestamp, 'timestamp')
    props.setDate(timestamp)
    localStorage.setItem('timeGenericUpdated', timestamp)
    let tempArr = sideBar
    sideBar.forEach((val, index) => {
      if (val.value == key) {
        tempArr[index].state = 'complete'
        tempArr[index].image = '/static/done.svg'
      }
      setSidebar(tempArr)
    })
    setSubmitData(false)
    setSideStateToLocal(key)
  }
  const sendData = (key, data) => {
    console.log(data, 'sendData')
    let dataToSend = {}
    if (key == 'Supplier') {
      dataToSend = {
        name: data.supplierState.name,
        shortName: data.supplierState.shortName,
        bankDetails: {
          bankName: data.supplierState.bankDetails.bankName,
          accountNo: data.supplierState.bankDetails.accountNo,
          swiftCode: data.supplierState.bankDetails.swiftCode,
          city: data.supplierState.bankDetails.city,
        },
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
        multiParty: data.supplierState.multiParty,
      }
      sessionStorage.setItem('Supplier', JSON.stringify(dataToSend))
    }
    if (key == 'Seller') {
      dataToSend = {
        name: 'Indo Intertrade Ag',
        shortName: data.sellerData.shortName,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Seller', JSON.stringify(dataToSend))
    }
    if (key == 'Buyer') {
      dataToSend = {
        name: data.buyerData.name,
        branchName: data.buyerData.branchName,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Buyer', JSON.stringify(dataToSend))
    }
    if (key == 'Delivery Terms') {
      let dataToSend = {
        deliveryTerms: data.deliveryData,
      }
      sessionStorage.setItem('Delivery', JSON.stringify(dataToSend))
      if (dataToSend?.delivery?.deliveryTerms == "" || dataToSend?.delivery?.deliveryTerms == undefined) {
        toastMessage = `Please select delivery Terms  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        setSubmitData(false)
        return
  
        }
        }
    }
    if (key == 'Associate Buyer') {
      dataToSend = {
        branchName: data.associate.branchName,
        shortName: data.associate.shortName,
        gstin: data.associate.gstin,
        addresses: data.address,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Associate', JSON.stringify(dataToSend))
    }
    if (key == 'Financing Bank') {
      dataToSend = {
        name: data.financeData.name,
        branchName: data.financeData.branchName,
      }
      sessionStorage.setItem('Finance', JSON.stringify(dataToSend))
    }
    if (key == 'CMA') {
      dataToSend = {
        name: data.cmaData.name,
        shortName: data.cmaData.shortName,
        shortName: data.cmaData.gstin,
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Cma', JSON.stringify(dataToSend))
    }

    if (key == 'CHA') {
      dataToSend = {
        name: data.chaState.name,
        shortName: data.chaState.shortName,
        gstin: data.chaState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Cha', JSON.stringify(dataToSend))
    }
    if (key == 'Stevedore') {
      dataToSend = {
        name: data.seteveState.name,
        shortName: data.seteveState.shortName,
        gstin: data.seteveState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      }
      sessionStorage.setItem('Stevedore', JSON.stringify(dataToSend))
    }

    if (key == 'Product Specifications') {
      sessionStorage.setItem(
        'Product',
        JSON.stringify({ list: data.addressList, excel: data?.excelData }),
      )
    }
    if (key == 'Place of Execution') {
      sessionStorage.setItem('exe', JSON.stringify(data.list))
    }

    if (key == 'Additional Comments') {
      let list = []
      data.addressList.forEach((val, index) => {
        list.push({ type: val })
      })

      sessionStorage.setItem('add', JSON.stringify(data.addressList))
    }
    if (key == 'Shipping Line') {
      console.log('this14')
      dataToSend = {
        name: data.shippingData.name,
        vesselName: data.shippingData.vesselName,
        gstin: data.shippingData.gstin,
      }
      sessionStorage.setItem('Shipping', JSON.stringify(dataToSend))
    }
    let tempArr = sideBar
    sideBar.forEach((val, index) => {
      if (val.value == key) {
        tempArr[index].state = 'pending'
        tempArr[index].image = '/static/pending2.svg'
      }
      setSidebar(tempArr)
    })

    let toastMessage = 'SAVEd'

    toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })

    setSaveData(false)
    setSideStateToLocal(key)
  }
  const onShowSideBar = () => {
    setIsSideBarOpen(true)
  }

  useEffect(() => {
    setMultiPart(props.genericData?.supplier?.multiParty)
  }, [props.genericData])
  return (
    <div className={`${styles.root}`}>
      <div
        className={`${styles.sidebar}  ${
          isSideBarOpen ? null : styles.collapseWidth
        } card card-body`}
      >
        {sideBar.map((row, index) => {
          return (
            <>
              <div
                key={index}
                className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}
              >
                <div
                  className={`${styles.content2} ${
                    row.state == 'current' ? styles.selected : null
                  }  d-flex justify-content-between align-items-center`}
                  onClick={(e) => {
                    changeActiveValue(row.name, index)
                  }}
                >
                  <img src={row.image}></img>
                  <span className="ml-3">{row.name}</span>
                </div>
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className={`${styles.image_reverse} img-fluid`}
                />
              </div>
            </>
          )
        })}
      </div>

      <div
        className={`${styles.content} ${
          isSideBarOpen ? null : styles.fullScreen
        } card p-0 card-body`}
      >
        <div
          className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#cashFlowStatement"
          aria-expanded="true"
          aria-controls="cashFlowStatement"
        >
          <h2 className="mb-0 d-flex">
            {!isSideBarOpen ? (
              <a
                href="#"
                className={`${styles.arrow} ${`rightArrow`}`}
                onClick={() => {
                  onShowSideBar()
                }}
              >
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className={`${styles.image_reverse} img-fluid mr-2  mb-1`}
                />
              </a>
            ) : null}
            {active == 'Additional Comments'
              ? 'Additional Comments for Reference'
              : active}
          </h2>
          <div
            className={`${styles.pageList}  d-flex justify-content-end align-items-center`}
          >
            {active == 'Supplier' ? (
              <div
                className={`${styles.multiPart} d-flex justify-content-center align-items-center`}
              >
                <span className={`mr-4`}>Multiple Parties Involved</span>
                <div className={`d-flex mr-4`}>
                  <div className={`form-check  mr-4`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={() => {
                        setMultiPart(true)
                      }}
                      checked={multiPart == true ? true : false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={multiPart == false ? true : false}
                      onChange={() => {
                        setMultiPart(false)
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      No
                    </label>
                  </div>
                </div>
                <Form.Group className={`${styles.form_group} `}>
                  <div className="d-flex">
                    <select
                      className={` ${
                        multiPart == true
                          ? styles.input_field
                          : styles.inputDisabled
                      }  ${styles.customSelect} input  form-control`}
                      name="countryOfOrigin"
                      onChange={(e) => {
                        setMultiPartValue(e.target.value)
                      }}
                      disabled={multiPart == true ? '' : 'disable'}
                      value={multiPartValue}
                    >
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Mines">Mines</option>
                      <option value="Shipper">Shipper</option>
                    </select>
                    <img
                      className={`${styles.arrow3} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
              </div>
            ) : null}
            {active == 'Stevedore' ? (
              <div
                className={`${styles.switchContainer} d-flex align-items-center`}
              >
                <span>Same as CHA</span>
                <span className={` ${styles.yes} text-color`}>Yes</span>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={sameAsCHA ? 'checked' : ''}
                    onChange={(e) => {
                      setSameAsCHA(!sameAsCHA)
                    }}
                  ></input>
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
                <span className={`${styles.no} text-color`}>No</span>
              </div>
            ) : null}
            <a
              href="#"
              className={`${styles.arrow} ${`leftArrow`}`}
              onClick={() => {
                onLeftChange()
              }}
            >
              {' '}
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid"
              />
            </a>
            <a
              href="#"
              className={`${styles.arrow} ${`rightArrow`}`}
              onClick={() => {
                onRightChange()
              }}
            >
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className={`${styles.image_reverse} img-fluid`}
              />
            </a>
          </div>
        </div>

        {showContent()}

        <div
          className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end bg-transparent`}
          data-toggle="collapse"
          data-target="#cashFlowStatement"
          aria-expanded="true"
          aria-controls="cashFlowStatement"
        >
          <div
            className={styles.reject}
            onClick={(e) => {
              onSave()
            }}
          >
            <span>Save</span>
          </div>
          <div
            className={styles.approve}
            onClick={(e) => {
              onSubmit()
            }}
          >
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
