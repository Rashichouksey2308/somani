import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../SaveBar'
import DateCalender from '../../DateCalender'
import UploadOther from '../../UploadOther'
import _get from 'lodash/get'
import { UpdateCustomClearance } from '../../../redux/CustomClearance&Warehousing/action'
import { useDispatch } from 'react-redux'

export default function Index({ OrderId, customData }) {
  console.log(customData, 'customData')
  const dispatch = useDispatch()
  const [editInput, setEditInput] = useState(true)
  const [warehouseDetails, setWarehouseDetails] = useState({
    wareHouseDetails: {
      quantity: '',
      quantityUnit: '',
      dateOfStorage: null,
    },
    document: null,
  })

  const onChangeWarehouseDetails = (name, text) => {
    let newData = { ...warehouseDetails }
    newData.wareHouseDetails[name] = text
    setWarehouseDetails(newData)
  }
  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    onChangeWarehouseDetails(name, text)
  }

  const onSaveDocument = (e) => {
    let name = e.target.id
    let doc = e.target.files[0]
    let tempData = { ...warehouseDetails }
    tempData[name] = doc
    setWarehouseDetails(tempData)
  }

  const onSaveDischarge = () => {
    let warehouseDetailpayload = warehouseDetails.wareHouseDetails
    let fd = new FormData()
    fd.append('wareHouseDetails', JSON.stringify(warehouseDetailpayload))
    fd.append('customClearanceId', customData._id)
    fd.append('document', warehouseDetails.document)
    dispatch(UpdateCustomClearance(fd))
  }

  const handleDropdown = (e) => {
    if ((e.target.value = 'Others')) {
      setEditInput(!editInput)
    } else {
      setEditInput(editInput)
    }
  }

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Warehouse Details</h3>
              <span className="ml-3">+</span>
            </div>
            <div
              id="lcApplication"
              className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} mt-3 card-body`}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      Commodity<strong className="text-danger">*</strong>
                    </div>
                    <span className={styles.value}>
                      {_get(customData, 'order.commodity', '')}
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      CMA Name<strong className="text-danger">*</strong>
                    </div>
                    <span className={styles.value}>Abcz</span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      Storage Address
                    </div>
                    <span className={styles.value}>
                      New Dolphin Yard, Visakhapatnam Port
                    </span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mt-5`}
                  >
                    <input
                      id="quantity"
                      onChange={(e) =>
                        onChangeWarehouseDetails(e.target.id, e.target.value)
                      }
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      required
                      onKeyDown={(evt) =>
                        evt.key === 'e' && evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mt-5`}
                  >
                    <div className="d-flex">
                      <DateCalender
                        name="dateOfStorage"
                        saveDate={saveDate}
                        labelName="Date of Storage"
                      />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>

                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mt-5`}
                  >
                    <div className="d-flex justify-content-start mt-2">
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          id="document"
                          onChange={(e) => onSaveDocument(e)}
                          type="file"
                          name="myfile"
                        />
                        <button className={`${styles.upload_btn} btn`}>
                          Upload
                        </button>
                      </div>
                      <img
                        src="/static/delete 2.svg"
                        className={`${styles.delete_image} img-fluid ml-3 mr-3`}
                        alt="Bin"
                      />
                      <img
                        src="/static/mode_edit.svg"
                        className={`${styles.edit_image} img-fluid`}
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <UploadOther
              orderid={OrderId}
              module="CustomClearanceAndWarehousing"
              isDocumentName={true}
            />
          </div>
        </div>
        <SaveBar handleSave={onSaveDischarge} rightBtn="Submit" />
      </div>
    </>
  )
}
