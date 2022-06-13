import React, {useState, useEffect} from 'react'
import ReviewProfile from '../../src/components/ReviewProfile'
import CompanyProfile from '../../src/components/CompanyProfile'
import ApproveBar from '../../src/components/ApproveBar'
import OrderProfile from '../../src/components/OrderProfile'
import Router from "next/router";
import styles from './profile.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateBuyer } from '../../src/redux/registerBuyer/action'

const index = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(UpdateBuyer())
    // }, [])

    const handleChange = (e) => {
        console.log(e.target.checked,'something changed')
      }
    
      // const reviewedProfile = [
      //   {
      //     typeOfBusiness: {
      //       apiResponse: true,
      //       manualApproval: false,
      //       originalValue: 'Manufacturer',
      //     },
      //   },
      //   {
      //     turnOver: {
      //       apiResponse: true,
      //       manualApproval: false,
      //       originalValue: 100,
      //     },
      //   },
      //   {
      //     transactionType: {
      //       apiResponse: false,
      //       manualApproval: false,
      //       originalValue: 'Domestic',
      //     },
      //   },
      //   {
      //     portOfDischarge: {
      //       apiResponse: false,
      //       manualApproval: false,
      //       originalValue: 'Mumbai',
      //     },
      //   },
      //   { orderValues: { apiResponse: true, manualApproval: false } },
      //   {
      //     countryOfOrigin: {
      //       apiResponse: false,
      //       manualApproval: false,
      //       originalValue: '',
      //     },
      //   },
      //   {
      //     commodity: {
      //       apiResponse: false,
      //       manualApproval: false,
      //       originalValue: 'iron',
      //     },
      //   },
      //   {
      //     ExpectedDateOfShipment: {
      //       apiResponse: true,
      //       manualApproval: false,
      //       originalValue: '2022-06-30T00:00:00.000Z',
      //     },
      //   },
      //   { remarks: '' },
      // ]
    

    const {buyerList} = useSelector((state)=> state.buyer)
    // console.log(buyerList?.companyName, "this is buyer list")

    const handleApprove = () => {
        
    }



    const [review, setReview] = useState({
        
    })

    
   
    return (
    <>
        <div className={`${styles.root_Container} card`}>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <img className={`${styles.arrow} img-fluid`} src="/static/keyboard_arrow_right-3.svg" alt='arrow'/>
                   <h1 className={styles.heading}>{buyerList?.companyName}</h1>
                </div>
                <ReviewProfile reviewedProfile={buyerList}  handleChange={handleChange} />
                <CompanyProfile />
                <OrderProfile />
            </div>
            <div className={styles.approve_Container}  >
                <ApproveBar button={"Save"} button2={"Preview"}/>
            </div>
        </div>
    </>
    )
}
export default index
