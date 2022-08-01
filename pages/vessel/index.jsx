import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Vessels from '../../src/components/Vessel'

import _get from "lodash/get";
import VesselSaveBar from '../../src/components/VesselSaveBar'
import DateCalender from '../../src/components/DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { GetVessel, UpdateVessel, UploadDocVessel } from '../../src/redux/vessel/action'
//Api
import * as types from './actionType'
import API from '../../utils/endpoints'

export default function Home() {
  const dispatch = useDispatch()
  const { Vessel } = useSelector(state => state.vessel)
  console.log(Vessel, 'vessels1')

  let id1 = sessionStorage.getItem('VesselCompany')
  const orderID = sessionStorage.getItem('orderID')
  let id = sessionStorage.getItem('VesselId')
  useEffect(() => {
    let id = sessionStorage.getItem('VesselId')
    dispatch(GetVessel(`?vesselId=${id}`))
  }, [dispatch])

  const [list, setList] = useState()
  const [containerExcel, setContainerExcel] = useState({})
  const [vesselCertificate, setVesselCertificate] = useState({})
  const [containerListDocument, setContainerListDocument] = useState({})




  useEffect(() => {
    if (_get(
      Vessel,
      "data[0].vessels",
      []
    ).length < 1) {
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
  }, [dispatch, Vessel])

  const onAddVessel = () => {
    setList([
      ...list,
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
  }


  const OnAddvesselInformation = () => {
    const newArr = [...list]
    newArr[0].vesselInformation.push({
      name: '',
      IMONumber: '',
      flag: '',
      yearOfBuilt: '',
    })
    console.log(newArr.vesselInformation, 'vesselsnew')
    setList(newArr)
  }

  console.log(list, 'vessels123')
  //const [shipmentType, setShipmentType] = useState('Bulk')

  const [startDate, setStartDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())


  const shipmentTypeChangeHandler = (e, index) => {
    if (e.target.value === 'Liner') {
      setList(prevState => prevState.slice(0, 1)
      )
    }
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
  console.log(list, 'Vessels')

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
    console.log(name, value, 'Vessels')
    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        console.log(i, index, 'Vessels')
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
    console.log(startDate, name, 'Event1')
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
    const value = e.target.value
    console.log(name, value, 'arrayvessel')
    let array = { ...list[index].vesselInformation[0], [name]: value }
    console.log(array, 'arrayvessel')
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

  const onVesselInfoChangeHandlerForLiner = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    let tempArr = list[0].vesselInformation
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    console.log(tempArr, 'tempArr')
  }
  console.log(list, 'arrayvessel')

  const uploadDocHandler = (e) => {
    let uploadDocType = e.target.id
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.post(`${API.corebaseUrl}${API.getVessel}`, e.target.files[0], {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          if (uploadDocType === 'containerExcel') {
            setContainerExcel(response.data.data)
          }
          if (uploadDocType === 'vesselCertificate') {
            setVesselCertificate(response.data.data)
          }
          if (uploadDocType === 'containerListDocument') {
            setContainerListDocument(response.data.data)
          }
        } else {
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      let toastMessage = 'COULD NOT UPLOAD Vessel Data AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
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

  const onSaveHandler = () => {
    const payload = {
      vesselId: id,
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

    console.log(payload, 'vessels123456')
    dispatch(UpdateVessel(payload))
  }

  return (
    <>
      <Vessels
        id1={id1}
        orderID={orderID}
        list={list}
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
      />
      <div className="mt-5">
        <VesselSaveBar handleSave={onSaveHandler} rightBtn="Submit" />
      </div>
    </>
  )
}
