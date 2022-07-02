import React , {useEffect} from 'react'
import styles from './index.module.scss'
import TermDetails from '../TermDetails'
import AdditionalComment from '../AdditionalComment'
import OtherTerms from '../OtherTerms'
import UploadOther from  '../UploadOther'
import ApproveBar from '../ApproveBar'
import { useDispatch, useSelector } from 'react-redux'
import { getTermsheet } from 'redux/buyerProfile/action'

const Index = () => {
    const dispatch = useDispatch()
    const { termsheet } = useSelector((state) => state.order)

      console.log(termsheet?.data,"termsheet")
    return (
    

  <>
  <div className={`${styles.card} container-fluid tabHeader`}>
      <div className={styles.head_header}>
          <img className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg" alt="arrow"/>
          <h1 className={`${styles.heading} heading`}>Termsheet</h1>       
      </div>
      {termsheet && termsheet?.data?.map((sheet,index)=>( 
      <div key={index} className='pb-4'>
          <div  className={`${styles.card_body} card-body container-fluid`}>  
              <div  className="row">
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                  <h3 className={`${styles.label} label_heading`}>Customer ID</h3>
                      <p className={`${styles.value} accordion_Text`}>{sheet.company.customerId}</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Buyers Name</h3>
                      <p className={`${styles.value} accordion_Text`}>{sheet.company.companyName}</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Created On</h3>
                      <p className={`${styles.value} accordion_Text`}>{(sheet.company.createdAt).slice(0, 10)}</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Last Modified</h3>
                      <p className={`${styles.value} accordion_Text`}>{(sheet.company.updatedAt).slice(0, 10)}</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Approved Date</h3>
                      <p className={`${styles.value} accordion_Text`}></p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Status</h3>
                      <p className={`${styles.value} accordion_Text`}><span className={`${styles.status}`}></span>{sheet.status}</p>
                  </div>
              </div>
          </div>
          <TermDetails   />
          <AdditionalComment  />
          <OtherTerms data={sheet.otherTermsAndConditions}  />
          <UploadOther  />
      </div>))}
  </div>
  <ApproveBar button={"Save"} button2={"Preview"}/>
  </>

  )
}

export default Index
