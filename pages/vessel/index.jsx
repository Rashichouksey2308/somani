/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Vessels from '../../src/components/Vessel'

import _get from "lodash/get";
import VesselSaveBar from '../../src/components/VesselSaveBar'

import { useDispatch, useSelector } from 'react-redux'
import { GetVessel, UpdateVessel, UploadDocVessel } from '../../src/redux/vessel/action'
//Api
import * as types from '../../src/redux/vessel/actionType'
import API from '../../src/utils/endpoints'
import Cookies from 'js-cookie';
import Axios from 'axios';
import { toast } from 'react-toastify'

export default function Home() {
  const dispatch = useDispatch()
  const { Vessel1 } = useSelector(state => state.vessel)
  // console.log(Vessel1, 'vessels1')

  let id1 = sessionStorage.getItem('VesselCompany')
  const orderID = sessionStorage.getItem('orderID')
  let id = sessionStorage.getItem('VesselId')
  useEffect(() => {
    fetchInitialData()



  }, [])
  const fetchInitialData = async () => {
    let id = sessionStorage.getItem('VesselId')
    const data = await dispatch(GetVessel(`?vesselId=${id}`))
    setData(data)
    serVesselDataToAdd(data)
  }

  const [list, setList] = useState([])
  const [containerExcel, setContainerExcel] = useState(null)
  const [vesselCertificate, setVesselCertificate] = useState({})
  const [containerListDocument, setContainerListDocument] = useState({})
  const [partShipmentAllowed, setPartShipmentAllowed] = useState(partShipment)
  const [companyName, setCompanyName] = useState("")
  const [vesselUpdatedAt, setVesselUpdatedAt] = useState("")
  const [partShipment, setPartshipment] = useState()
  const [VesselToAdd, serVesselDataToAdd] = useState()
  const [shipmentTypeBulk, setShipmentTypeBulk] = useState('Bulk')


  console.log(VesselToAdd, "THIS IS VESSEL TO")
  const setData = (Vessel) => {
    console.log(Vessel, "THIS IS VESSEL")
    setVesselUpdatedAt(_get(
      Vessel,
      "data[0].updatedAt",
      false
    ))
    setPartshipment(_get(
      Vessel,
      "data[0].partShipmentAllowed",
      false
    ))

    setCompanyName(_get(Vessel, "data[0].company.companyName", ''))
    if (_get(
      Vessel,
      "data[0].vessels",
      []
    ).length < 1) {
      setShipmentTypeBulk(false)
      setList([
        {
          shipmentType: 'Bulk',
          commodity: _get(
            Vessel,
            "data[0].order.commodity",
            ""
          ),
          quantity: _get(
            Vessel,
            "data[0].order.quantity",
            ""
          ),
          orderValue: _get(
            Vessel,
            "data[0].order.orderValue",
            ""
          ), transitDetails: {
            countryOfOrigin: _get(
              Vessel,
              "data[0].order.countryOfOrigin",
              ""
            ),
            portOfLoading: "",
            portOfDischarge: _get(
              Vessel,
              "data[0].order.portOfDischarge",
              ""
            ),
            laycanFrom: "",
            laycanTo: "",
            EDTatLoadPort: "",
            ETAatDischargePort: ""
          },

          vesselInformation: [{
            name: '',
            IMONumber: '',
            flag: '',
            yearOfBuilt: '',
            shippingLineOrCharter: '',
          }]
        },
      ])
    } else setList(_get(
      Vessel,
      "data[0].vessels",
      []
    ))
    // serVesselDataToAdd(Vessel)
  }

  const onAddVessel = () => {
    console.log(VesselToAdd, "THIS IS VESSEL TO ADD")
    setList([
      ...list,
      {
        shipmentType: 'Bulk',
        commodity: _get(
          VesselToAdd,
          "data[0].order.commodity",
          ""
        ),
        quantity: _get(
          VesselToAdd,
          "data[0].order.quantity",
          ""
        ),
        orderValue: _get(
          VesselToAdd,
          "data[0].order.orderValue",
          ""
        ), transitDetails: {
          countryOfOrigin: _get(
            VesselToAdd,
            "data[0].order.countryOfOrigin",
            ""
          ),
          portOfLoading: "",
          portOfDischarge: _get(
            VesselToAdd,
            "data[0].order.portOfDischarge",
            ""
          ),
          laycanFrom: "",
          laycanTo: "",
          EDTatLoadPort: "",
          ETAatDischargePort: ""
        },

        vesselInformation: [{
          name: '',
          IMONumber: '',
          flag: '',
          yearOfBuilt: '',
          shippingLineOrCharter: '',
        }]
      },
    ])
  }


  const OnAddvesselInformation = () => {
    const newArr = [...list]
    newArr[0].vesselInformation.push({
      name: '',
      IMONumber: '',
      flag: '',
      yearOfBuilt: '',
    })
    // console.log(newArr.vesselInformation, 'vesselsnew')
    setList(newArr)
  }



  const [startDate, setStartDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())


  const shipmentTypeChangeHandler = (e, index) => {
    if (e.target.value === 'Liner') {
      setList(prevState => prevState.slice(0, 1)
      )
    }
    setShipmentTypeBulk(e.target.value)
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, shipmentType: e.target.value };
        }
        return obj;
      });
      return newState;
    })
  }
  // console.log(list, 'Vessels')

  const OnVesselBasicFieldsChangeHandler = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, [name]: value };
        }
        return obj;
      });
      return newState;
    })
  }
  const OnVesselTransitFieldsChangeHandler = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    // console.log(name, value, 'Vessels')
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        // console.log(i, index, 'Vessels')
        if (i == index) {
          return {
            ...obj,
            transitDetails: {
              ...obj.transitDetails,
              [name]: value
            }
          }
        }
        return obj;
      });
      return newState;
    })
  }

  const saveDate = (startDate, name, index) => {
    // console.log(startDate, name, 'Event1')
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            transitDetails: {
              ...obj.transitDetails,
              [name]: startDate
            }
          }
        }
        return obj;
      });
      return newState;
    })
  }
  const onVesselInfoChangeHandlerForBulk = (e, index) => {
    const name = e.target.id
    let value = e.target.value
    if (name === 'yearOfBuilt' && value.length === 4) {
      value = new Date(e.target.value)
      // console.log(value, 'fghfhf')
    }
    // console.log(name, value, 'arrayvesselbulk')
    if (name.trim() === 'yearOfBuilt' && !value.length === 4) {
      let toastMessage = 'provide a valid year'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return
      }
    }
    let array = { ...list[index].vesselInformation[0], [name]: value }
    // console.log(array, 'arrayvessel')
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            vesselInformation: [array]
          }
        }
        return obj;
      });
      return newState;
    })
  }
  // console.log(list, 'vessel liner state')

  const onVesselInfoChangeHandlerForLiner = (e, index) => {
    const name = e.target.id
    let value = e.target.value
    if (name === 'yearOfBuilt' && value.length === 4) {
      value = new Date(e.target.value)


    }


    let tempArr = [...list]
    tempArr[0].vesselInformation.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    setList(tempArr)

  }



  const uploadDocHandler = (e) => {
    let uploadDocType = e.target.id
    // // console.log(uploadDocType, 'containerExcel')

    let fd = new FormData()
    fd.append('document', e.target.files[0])

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.post(`${API.corebaseUrl}${API.uploadDocVessel}`, fd, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          if (uploadDocType === ' containerExcel') {
            setContainerExcel(response.data.data)
          }
          if (uploadDocType === 'Vessel Certificate') {
            setVesselCertificate(response.data.data)
          }
          if (uploadDocType === 'Container List') {
            setContainerListDocument(response.data.data)
          }
        } else {
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      let toastMessage = 'COULD NOT UPLOAD Vessel Data AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }


  const shippingInfoChangeHandler = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            shippingInformation: {
              ...obj.shippingInformation,
              [name]: value
            }
          }
        }
        return obj;
      });
      return newState;
    })
  }
  const validation = () => {
    let isOk = true
    let toastMessage = ""

    for (let i = 0; i <= list.length; i++) {
      console.log(list[i].shipmentType,'gdksfujhfgjkdgfkjhhhhmh')
      if (list[i].shipmentType == "" || list[i].shipmentType == undefined) {
        toastMessage = `Please Select shipment Type of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;

        }

      }
      if (list[i].commodity == "" || list[i].commodity == undefined) {
        toastMessage = `Please add commodity of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].quantity == "" || list[i].quantity == undefined) {
        toastMessage = `Please add quantity of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].orderValue == "" || list[i].orderValue == undefined) {
        toastMessage = `Please add order Value of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.countryOfOrigin == "" || list[i].transitDetails.countryOfOrigin == undefined) {
        toastMessage = `Please select country Of Origin of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.portOfLoading == "" || list[i].transitDetails.portOfLoading == undefined) {
        toastMessage = `Please select port Of Loading of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.portOfDischarge == "" || list[i].transitDetails.portOfDischarge == undefined) {
        toastMessage = `Please select port Of Discharge of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.portOfDischarge == "" || list[i].transitDetails.portOfDischarge == undefined) {
        toastMessage = `Please select port Of Discharge of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.laycanFrom == "" || list[i].transitDetails.laycanFrom == undefined) {
        toastMessage = `Please add laycan From of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.laycanTo == "" || list[i].transitDetails.laycanTo == undefined) {
        toastMessage = `Please add laycan to of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.EDTatLoadPort == "" || list[i].transitDetails.EDTatLoadPort == undefined) {
        toastMessage = `Please add EDT at Load Port to of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].transitDetails.ETAatDischargePort == "" || list[i].transitDetails.ETAatDischargePort == undefined) {
        toastMessage = `Please add EDT at dischargePort to of Vessel Information ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break;
        }

      }
      if (list[i].shipmentType == "Bulk") {
        if (list[i].vesselInformation[0].name == "" || list[i].vesselInformation[0].name == undefined) {
          toastMessage = `Please add vessel name  of Vessel Information ${i}  `
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
            isOk = false
            break;
          }

        }

        if (list[i].vesselInformation[0].IMONumber == "" || list[i].vesselInformation[0].IMONumber == undefined) {
          toastMessage = `Please add IMO Number  of Vessel Information ${i}  `
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
            isOk = false
            break;
          }

        }

        if (list[i].vesselInformation[0].flag == "" || list[i].vesselInformation[0].flag == undefined) {
          toastMessage = `Please add IMO Number  of Vessel Information ${i}  `
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
            isOk = false
            break;
          }

        }

        if (list[i].vesselInformation[0].yearOfBuilt == "" || list[i].vesselInformation[0].yearOfBuilt == undefined || list[i].vesselInformation[0].yearOfBuilt == null) {
          toastMessage = `Please add yea Of Built  of Vessel Information ${i}  `
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
            isOk = false
            break;
          }

        }

      } else {
        if (list[i].shippingInformation.shippingLineOrCharter == "" || list[i].shippingInformation.shippingLineOrCharter == undefined) {
          toastMessage = `Please add shipping Line Or Charter  of Vessel Information ${i}  `
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
            isOk = false
            break;
          }

        }
        if (list[i].shippingInformation.numberOfContainers == "" || list[i].shippingInformation.numberOfContainers == undefined) {
          toastMessage = `Please add number Of Containers  of Vessel Information ${i}  `
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
            isOk = false
            break;
          }

        }
      }


    }

    return isOk
  }

  const onSaveHandler = async () => {

    console.log(list,'gdksfujhfgjkdgfkjhhhhmh')
    if (validation()) {


      const payload = {
        vesselId: id,
        partShipmentAllowed: partShipmentAllowed,
        vessels: [...list]
      }
      if (containerListDocument) {
        payload.containerListDocument = containerListDocument
      }
      if (vesselCertificate) {
        payload.vesselCertificate = vesselCertificate
      }
      if (containerExcel) {
        payload.containerExcel = containerExcel
      }
      // console.log(payload, 'vessels123456')
      // console.log("check 3")
      await dispatch(UpdateVessel(payload))
      fetchInitialData()
    }
  }
  // // console.log(Vessel, "Vessel")
  // console.log(containerExcel, ' containerExcel')


  const onDeleteVessel = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)])
  }
  const OnAddvesselInformationDelete = (index) => {
    let tempArr = [...list]
    tempArr[0].vesselInformation.splice(index, 1);
    // console.log(tempArr, "tempArr")
    setList(tempArr)
  }
  // console.log(vesselUpdatedAt, 'vesselUpdatedAt')


  return (
    <>
      <Vessels
        vesselUpdatedAt={vesselUpdatedAt}
        containerExcel={containerExcel}
        vesselCertificate={vesselCertificate}
        setVesselCertificate={setVesselCertificate}
        setContainerListDocument={setContainerListDocument}
        containerListDocument={containerListDocument}
        partShipmentAllowed={partShipmentAllowed}
        setPartShipmentAllowed={setPartShipmentAllowed}
        id1={id1}
        orderID={orderID}
        list={list}
        companyName={companyName}
        onAddVessel={onAddVessel}
        OnAddvesselInformation={OnAddvesselInformation}
        startDate={startDate}
        setStartDate={setStartDate}
        lastDate={lastDate}
        setlastDate={setlastDate}
        shipmentTypeChangeHandler={shipmentTypeChangeHandler}
        OnVesselBasicFieldsChangeHandler={OnVesselBasicFieldsChangeHandler}
        OnVesselTransitFieldsChangeHandler={OnVesselTransitFieldsChangeHandler}
        saveDate={saveDate}
        onVesselInfoChangeHandlerForBulk={onVesselInfoChangeHandlerForBulk}
        onVesselInfoChangeHandlerForLiner={onVesselInfoChangeHandlerForLiner}
        uploadDocHandler={uploadDocHandler}
        shippingInfoChangeHandler={shippingInfoChangeHandler}
        onDeleteVessel={onDeleteVessel}
        OnAddvesselInformationDelete={OnAddvesselInformationDelete}
        shipmentTypeBulk={shipmentTypeBulk}
      />
      <div className="mt-5">
        <VesselSaveBar handleSave={onSaveHandler} rightBtn="Submit" rightBtnClick={onSaveHandler} />
      </div>
    </>
  )
}
