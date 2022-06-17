import React from 'react'
import ReviewProfile from '../../src/components/ReviewProfile'
import CompanyProfile from '../../src/components/CompanyProfile'
import ApproveBar from '../../src/components/ApproveBar'
import OrderProfile from '../../src/components/OrderProfile'
import Router from "next/router";
import styles from './profile.module.scss'
import { useSelector } from 'react-redux'

const Index = () => {
    const {buyerList} = useSelector((state)=> state.buyer)
   
    return (
    <>
        <div className={`${styles.root_Container} card`}>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <img className={`${styles.arrow} img-fluid`} src="/static/keyboard_arrow_right-3.svg" alt='arrow'/>
                  {buyerList && buyerList.map((buyer, index)=>( <h1 key={index} className={styles.heading}>{buyer.companyName}</h1>))}
                </div>
                <ReviewProfile></ReviewProfile>
                <CompanyProfile></CompanyProfile>
                <OrderProfile></OrderProfile>
            </div>
            <div className={styles.approve_Container}  >
                <ApproveBar button={"Save"} button2={"Preview"}/>
            </div>
        </div>
    </>
    )
}
export default Index
