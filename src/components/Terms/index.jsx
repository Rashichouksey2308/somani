import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'


const Index = ({submitData, darkMode, termsCheck, chanegTermsCheck}) => {
    const {creatingBuyer} = useSelector((state)=>state.buyer)
    const router = useRouter()
    return (
        <div className={`${darkMode?styles.mainDark:styles.main} `}>
            <div className={`${styles.term_container} align-items-start`}>
                <input className={`${styles.check_box} mt-2`} type="checkbox" checked={termsCheck} onChange={chanegTermsCheck} name="check1"/>
                
                <label className={`${styles.term_para} term_para`}>{`By clicking on sign-up, you agree to Simport's Terms and Conditions of Use. To learn more about how Simport collects uses, shares and protects your personal data, please see Simport's Privacy Policy.`}
                </label>
                {/* <p className={`${styles.term_para} term_para`}></p> */}
            </div>
            <div className={styles.btn_container}>
                <button className={`${styles.cancel_btn} cancel_btn`}onClick={()=> router.push('/leads')}>Cancel</button>
                <button className={`${styles.submit_btn} submit_btn`} disabled={creatingBuyer} onClick={()=>{
                    console.log("here")
                    submitData()
                }}>Submit</button>
            </div>
        </div>
    )
}
export default Index
