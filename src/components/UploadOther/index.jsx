/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import {
  AddingDocument, changeModuleDocument, DeleteDocument, GetDocuments,
} from '../../redux/creditQueueUpdate/action'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import TermSheetPopUp from '../TermsheetPopUp'
import { ShareDocument } from 'redux/shareDoc/action'
import { emailValidation } from '@/utils/helper'
import { handleErrorToast, returnDocFormat, dropDownOptionHandler, objectValidator } from '@/utils/helpers/global'
import {modulesDropDown} from '@/utils/jsons/dropdownOptions'

import {uploadDocumentValidations } from '@/utils/validations/uploadDocument'

const Index = ({ orderid, module, isDocumentName }) => {
  const dispatch = useDispatch()

  const { documentsFetched } = useSelector((state) => state.review)
  const [manualDocModule, setManualDocModule] = useState(true)
  const [newDoc, setNewDoc] = useState({
    document: null, order: orderid, name: '', module: module,
  })

  const [sharedDoc, setSharedDoc] = useState({
    company: '', order: '', path: '', data: {
      subject: 'this is subject', text: 'this is text', receiver: '',
    },
  })

  const [open, setOpen] = useState(false)

  const [moduleSelected, setModuleSelected] = useState(module)
  const [filteredDoc, setFilteredDoc] = useState([])
  const fetchData = async () => {
    await dispatch(GetDocuments(`?order=${orderid}`))
  }
  const changeModule = async (id, name, value) => {
    await dispatch(changeModuleDocument({
      orderDocumentId: id, name: name, module: value,
    }),)
  }

  useEffect(() => {
    if (documentsFetched) {
      const tempArray = JSON.parse(JSON.stringify(documentsFetched?.documents)).filter((doc) => {
        return doc.module === moduleSelected;
      })
      tempArray?.forEach((obj) => obj.moving = false);

      setFilteredDoc(tempArray);
    }
  }, [orderid, documentsFetched]);

  //   console.log({documentsFetched})
  //   /* Filtering the documentsFetched array and setting the filteredDoc array. */
  //   const filteredDocArray = documentsFetched?.documents
  //     .filter((doc) => doc.module === moduleSelected)
  //     .map(element => {
  //       return {
  //         ...element, moving: false
  //       }
  //     })
  //   setFilteredDoc(filteredDocArray)
  // }, [orderid, documentsFetched])

  /** It deletes the document at the index.*/
  const DocDlt = (index) => setFilteredDoc([...filteredDoc].splice(index, 1))

  const handleNewDocModule = ({ target: { value } }) => {

    console.log({name, value})

    if (value === 'others') return setManualDocModule(false)
    document.getElementById('otherDocName').value = ''
    setManualDocModule(true)
    return setNewDoc({ ...newDoc, name: value })
  }

  const handleCloseDoc = () => setNewDoc({
    document: [], order: orderid, name: '', module: module,
  })

  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...newDoc }
    newUploadDoc1.document = e.target.files[0]
    setNewDoc(newUploadDoc1)
  }

  const uploadDocumentHandler = async (e) => {
    e.preventDefault()

      console.log(await objectValidator({doc:newDoc, validation:uploadDocumentValidations }))


    // if (newDoc.document === null) {
    //   handleErrorToast('please select A Document')
    // } else if (newDoc.name === '') {
    //   handleErrorToast('please provide a valid document name')
    // } else {
    //   const fd = new FormData()
    //   fd.append('document', newDoc.document)
    //   fd.append('module', newDoc.module)
    //   fd.append('order', orderid)
    //   fd.append('name', newDoc.name)
    //   dispatch(AddingDocument(fd))
    //   setNewDoc({
    //     document: null, order: orderid, name: '', module: module,
    //   })
    // }
  }

  const filterDocBySearch = (val) => {
    if (!val.length >= 3) return
    const tempArray = documentsFetched?.documents?.filter((doc) => {
      if (doc.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        return doc
      }
    })
    setFilteredDoc(tempArray)
  }
  const handleDocModuleChange = (index) => {
    let tempArray = [...filteredDoc]
    tempArray[index].moving = true
    setFilteredDoc(tempArray)
  }

  const handleShareDoc = async () => {
    if (emailValidation(sharedDoc.data.receiver)) {
      let tempArr = { ...sharedDoc }
      tempArr.company = documentsFetched.company
      tempArr.order = orderid
      let data = await dispatch(ShareDocument(tempArr))
      if (data?.code == 200) {
        setOpen(false)
      }
    } else {
      handleErrorToast('please provide a valid email')
    }
  }

  return (<div className={`${styles.upload_main} vessel_card border_color card`}>
    <div
      className={`${styles.head_container} border_color d-flex  align-items-center justify-content-between`}
      data-toggle="collapse"
      data-target="#uploadOther"
      aria-expanded="true"
      aria-controls="uploadOther"
    >
      {!isDocumentName ? (<h3 className={styles.heading}>Upload Other Documents</h3>) : (
        <h3 className={styles.heading}>Document</h3>)}
      <span>+</span>
    </div>
    <div id="uploadOther" className="collapse show" aria-labelledby="uploadOther" data-parent="#uploadOther">
      <div className={`${styles.dashboard_form} vessel_card card-body`}>
        <Form>
          <div className="row align-items-center vessel_card pb-4">
            <div className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}>
              <div className="text-center w-100">
                <img
                  className={`${styles.upload_image} img-fluid d-block mx-auto`}
                  src="/static/browse.svg"
                  alt="Browse"
                />
                {newDoc?.document?.name ? (
                  <div className={`${styles.certificate} text1 d-inline-flex justify-content-between`}>
                    <span>{newDoc?.document?.name}</span>
                    <img
                      className={`${styles.close_image} image_arrow mx-2`}
                      src="/static/close.svg"
                      onClick={(e) => handleCloseDoc()}
                      alt="Close"
                    />{' '}
                  </div>) : (<p className={styles.drop_para}>
                  Drop Files here or
                  <br/>
                  <div className={styles.uploadBtnWrapper}>
                    <input
                      onChange={(e) => uploadDocument2(e)}
                      type="file"
                      name="myfile"
                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                    />

                    <a href="#">Browse</a>
                  </div>
                </p>)}
              </div>
            </div>
            <div className="col-md-4 offset-md-1 col-sm-6">
              <Form.Group className={`${styles.form_group}`}>
                <div className="d-flex">
                  <select
                    value={manualDocModule ? newDoc.name : 'others'}
                    className={`${styles.value} ${styles.customSelect} input form-control`}
                    id="name"
                    onChange={(e) => handleNewDocModule(e)}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {dropDownOptionHandler(module)?.map((item) => (<option value={item}>
                      {item}
                    </option>))}
                    <option value="others">Other</option>
                  </select>
                  <Form.Label className={`${styles.label} label_heading`}>Document Type</Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>
              <Form.Group className={`${styles.form_group}`}>
                <input
                  id="otherDocName"
                  onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
                  className={`${styles.value} input form-control`}
                  type="text"
                  disabled={manualDocModule}
                />
                <Form.Label className={`${styles.label} label_heading`}>Please Specify Document Name</Form.Label>
              </Form.Group>
              <div onClick={(e) => uploadDocumentHandler(e)} className={styles.uploadBtnWrapper}>
                <button className={`${styles.upload_button} btn`}>Upload</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className={styles.table_container}>
        <div
          className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-between align-items-center`}
        >
          <div className="d-flex align-items-center">
            <select
              value={moduleSelected}
              onChange={(e) => setModuleSelected(e.target.value)}
              className={`${styles.dropDown} ${styles.customSelect} input form-control`}
            >
              <option selected disabled>
                Select an option
              </option>
              {modulesDropDown.map((item) => (<option value={item.value}>
                {item.name}
              </option>))}
            </select>
            <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="Search"/>
          </div>
          <div className={`d-flex align-items-center ${styles.searchBarContainer} `}>
            <img className={` ${styles.searchImage} img-fluid`} src="/static/search.svg" alt="Search"></img>
            <input
              className={`${styles.searchBar} statusBox border_color input form-control`}
              placeholder="Search"
              onChange={(e) => {
                filterDocBySearch(e.target.value)
              }}
            ></input>
          </div>
        </div>
        <div className={styles.table_scroll_outer}>
          <div className={styles.table_scroll_inner}>
            <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
              <thead>
              <tr>
                <th>
                  DOCUMENT NAME{' '}
                  <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon"/>
                </th>
                <th>
                  FORMAT{' '}
                  <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon"/>
                </th>
                <th>
                  DOCUMENT DATE{' '}
                  <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon"/>
                </th>
                <th>
                  UPLOADED BY{' '}
                  <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon"/>
                </th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
              </thead>
              <tbody>
              <tr></tr>
              {documentsFetched && filteredDoc?.map((document, index) => {
                if (document.deleted) {
                  return null
                } else {
                  return (<tr key={index} className="uploadRowTable">
                    <td className={`${styles.doc_name}`}>{document.name}</td>
                    <td>
                      {returnDocFormat(document?.originalName)}
                    </td>
                    <td className={styles.doc_row}>{moment(document.date).format('DD-MM-YYYY, h:mm A')}</td>
                    <td className={styles.doc_row}>
                      {document.uploadedBy?.fName} {document.uploadedBy?.lName}
                    </td>
                    <td>
                      <span className={`${styles.status} ${styles.approved}`}></span>
                      {document?.verification?.status}
                    </td>
                    <td colSpan="2">
                      <img
                        onClick={(e) => {
                          DocDlt(index)
                          dispatch(DeleteDocument({
                            orderDocumentId: documentsFetched._id, name: document.name,
                          }),)
                        }}
                        src="/static/delete.svg"
                        className={`${styles.delete_image} mr-3`}
                        alt="Bin"
                      />
                      <img
                        src="/static/upload.svg"
                        className={`${styles.delete_image} p-0 border-0 bg-transparent mr-3`}
                        alt="Share"
                        onClick={() => {
                          setOpen(true)
                          setSharedDoc({
                            ...sharedDoc, path: document.path,
                          })
                        }}
                      />
                      {!document.moving ? (<img
                        src="/static/drive_file.svg"
                        className={`${styles.edit_image} mr-3`}
                        alt="Share"
                        onClick={() => {
                          handleDocModuleChange(index)
                        }}
                      />) : (<div className="d-inline-block" style={{ marginRight: '25px' }}>
                        <div className="d-flex align-items-center">
                          <select
                            value={moduleSelected}
                            onChange={async (e) => {
                              DocDlt(index)
                              await changeModule(documentsFetched._id, document.name, e.target.value)
                              await fetchData()
                            }}
                            className={`${styles.dropDown} ${styles.customSelect} shadow-none input form-control`}
                            style={{
                              width: '150px', paddingRight: '30px',
                            }}
                          >
                            {modulesDropDown.map((item) => (<option
                              disabled={moduleSelected === item.value}
                              value={item.value}
                            >
                              {item.name}
                            </option>))}
                          </select>
                          <img
                            className={`${styles.arrow2} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>)}
                    </td>
                  </tr>)
                }
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {!open ? (<TermSheetPopUp
      close={() => setOpen(false)}
      open={open}
      istermsheet
      shareEmail={handleShareDoc}
      setEmail={(e) => setSharedDoc({
        ...sharedDoc, data: { ...sharedDoc.data, receiver: e },
      })}
    />) : null}
  </div>)
}

export default Index
