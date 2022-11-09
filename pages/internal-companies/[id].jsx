import React, {useState} from 'react'
import styles from '../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import InternalCompanies from '../../src/components/InternalCompanies'

function Index () {

  const [companyData, setCompanyData] = useState({
    Country: '',
    Company_Name: '',
    Short_Name: '',
    PAN: '',
    CIN_No: '',
  })

  const [keyAddData, setKeyAddData] = useState([]);

  const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData];
    newArr.push(keyAddressData);
    setKeyAddData(newArr);
  };

  const [authorisedSignatoryDetails, setAuthorisedSignatoryDetails] = useState([
    {
        name: '',
        designation: '',
        email: '',
        phoneNo: ''
    }
  ]) 

  const [bankDetails, setBankDetails] = useState([
    {
        IFSC: '',
        Bank_Name: '',
        Branch_Address: '',
        Account_No: '',
        gstin: '',
        Swift_Code: '',
        AD_Code: ''
    }
])



  return (
    <div className='container-fluid p-0 border-0'>
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/internal-companies')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src='/static/keyboard_arrow_right-3.svg'
                alt='ArrowRight'
              />
            </div>
            <h1 className={styles.heading}>Internal Companies</h1>
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
        <InternalCompanies keyAddDataArr={keyAddDataArr} keyAddData={keyAddData} />
      </Card>
    </div>
  )
}

export default Index
