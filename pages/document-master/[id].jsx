import React, {useState, useEffect} from 'react'
import styles from '../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import DocumentMaster from '../../src/components/DocumentMaster'
import {useDispatch, useSelector} from 'react-redux'
import { handleErrorToast } from '../../src/utils/helpers/global';
import { CreateDocument, GetDocument, UpdateDocument } from '../../src/redux/documentMaster/action';
import _get from 'lodash/get'

function Index () {

  const dispatch = useDispatch()

  let Id = sessionStorage.getItem('documentMasterId')

  const {documentResponse} = useSelector((state)=>state.document)

  const documentData = _get(documentResponse, 'data[0]', {})

  const [documentField, setDocumentField] = useState(
    {
      Document_Name: '',
      Sub_Module: '',
      Module: '',
    }
  );

  const saveDocumentData = (name, value) => {
    let newInput = {...documentField}
    newInput[name] = value
    setDocumentField(newInput)
  }

  useEffect(() => {
    if(Id){
      dispatch(GetDocument(`?documentMasterId=${Id}`));
    }
  }, [dispatch])

  useEffect(() => {
    setDocumentField({
      Document_Name: documentData?.Document_Name,
      Module: documentData?.Module
    })
  }, [documentField.Sub_Module])
  
  

  const validation = () => {
    if(documentField.Document_Name === undefined || documentField.Document_Name === ''){
      handleErrorToast('Document name is mandatory')
      return false
    }else if(documentField.Module === undefined || documentField.Module === ''){
      handleErrorToast('Please select module')
      return false
    }
    return true
  }

  const handleSubmit = () => {
    if(!validation()) return
    const data = {
      Module: documentField?.Module,
      Document_Name: documentField?.Document_Name
    }
    const data2 = {
      Module: documentField?.Module,
      Document_Name: documentField?.Document_Name,
      documentMasterId: documentData._id
    }
    if(Id){
      dispatch(UpdateDocument(data2))
    }else{
    dispatch(CreateDocument(data))
    }
  }

  return (
    <div className='container-fluid p-0 border-0'>
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => {sessionStorage.getItem('documentMasterId') && sessionStorage.removeItem('documentMasterId'); Router.push('/document-master')}} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src='/static/keyboard_arrow_right-3.svg'
                alt='ArrowRight'
              />
            </div>
            <h1 className={styles.heading}>Document Master</h1>
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
        <DocumentMaster documentField={documentField} saveDocumentData={saveDocumentData} handleSubmit={handleSubmit} />
      </Card>
    </div>
  )
}

export default Index
