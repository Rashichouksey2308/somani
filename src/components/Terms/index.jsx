import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'


const Index = ({submitData, darkMode, termsCheck, chanegTermsCheck}) => {
    const router = useRouter()
    return (
        <div className={`${darkMode?styles.mainDark:styles.main} `}>
            <div className={styles.term_container}>
                <input className={styles.check_box} type="checkbox" checked={termsCheck} onChange={chanegTermsCheck} name="check1"/>
                <p className={`${styles.term_para} term_para`}>{`By clicking on sign-up, you agree to Simport's Terms and Conditions of Use. To learn more about how Simport collects uses, shares and protects your personal data, please see Simport's Privacy Policy.`}</p>
            </div>
            <div className={styles.btn_container}>
                <button className={`${styles.cancel_btn} cancel_btn`}onClick={()=> router.push('/leads')}>Cancel</button>
                <button className={`${styles.submit_btn} submit_btn`} onClick={()=>submitData()}>Submit</button>
            </div>
        </div>
    )
}
export default Index
