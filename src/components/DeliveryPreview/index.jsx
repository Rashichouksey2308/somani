import React from 'react'
import styles from './index.module.scss'
function Index() {
  return (
    <div className={`${styles.root} card container-fluid`}>
        <div className={`${styles.head}`}>
            <p className={`${styles.heading}`}>INDO GERMAN INTERNATIONAL PVT. LTD.</p>
             <div className={`${styles.heading_addresses}`}>
                <p>7A, SAGAR APARTMENTS, 6-TILAK MARG, NEW DELHI-110001 </p>
                <p>TEL: +91 – 11 – 23782022, 23387413, 23382592, 23384968, FAX: +91 – 11 – 23782806 </p>
                <p>CIN NO-U74899DL1994PTC063676</p>
             </div>
             <div className={`${styles.type}`}>
                <p>DELIVERY ORDER </p>
                <p>(ORIGINAL) </p>
             </div>

        </div>
        <div className={`${styles.body}`}>
            <div className={`${styles.body_header} d-flex justify-content-between align-item-center`}>
                <div className={`${styles.date} `}>
                 <p>DO.NO:{" "}<span className={`${styles.bold}`}>RamaI001-000001/01</span></p>
                 <p>DATE:{" "}<span className={`${styles.bold}`}>01.07.2021</span></p>
                </div>
                <div className={`${styles.validity}`}>
                    <p>VALIDITY:{" "}<span className={`${styles.bold}`}>10 Days</span></p>
                </div>  
            </div>
            <div className={`${styles.content}`}>
                <p>To:</p>
                <p className={`${styles.bold} ${styles.width} w-50`}>M/S BOTHRA SHIPPING SERVICES PVT. LTD. 28-2-47,Ist Floor, Daspalla Centre, Suryabagh, Visakhapatnam 530020, (Andhra Pradesh)</p>
                
                <div>
                    CC: <span className={`${styles.bold} ${styles.width2} `} >Dr. Shivadeo Upadhyay, M/S Jayaswal Neco Industries Limited, Raipur, Chhatisgarh.</span>
                </div>
                <div>
                    CC: <span className={`${styles.bold} ${styles.width2} `} >Dr. Amin Controllersr, Yizag.</span>
                </div>
                <p>Kind Attn. {" "} <span className={`${styles.bold} w-50`}>Mr. N.A. Khan / Mr. Nabin Chand Boyed.</span></p>
                <div className={`${styles.letter_content}`}>
                    <p>Dear Sir,</p>
                    <p>We hereby authorize you to deliver the quantity to {" "} <span className={`${styles.bold}`}>MS Jayaswal Neco Industries Limited,</span> {" "} Vide {" "} <span className={`${styles.bold}`}>BL No. 1</span> {" "}  dated {" "} <span className={`${styles.bold}`}>18/03/2021</span>{" "} as per the detail given below:</p>
                    <div className={`${styles.material}`}>
                      <div className={`d-flex justify-content-start align-items-start`}><span className={styles.head}>l) Material :</span> {" "} <span className={`${styles.bold} `} >Lake Vermont Premium Hard Coking Coal (MV CRIMSON ARK) Bothra, S-4 & L-6 Yard, Port Area, Visakhapatnam Port Trust, Visakhapatnam.</span></div>
                      <div className={`d-flex justify-content-start align-items-start`}><span className={styles.head}>2) Quantity : </span> {" "} <span className={`${styles.bold} `} >6350.000 MTs. Vermont Premium Hard Coking Coal</span></div>
                      <div className={`d-flex justify-content-start align-items-start`}><span className={styles.head}>3) Balance Qty :</span>  {" "} <span className={`${styles.bold} `} >After delivery of material against this DO the balance Qty. will be as under :
                      <p>a) Vermont Premium PH C Coal NIL MTs</p>
                      </span></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.footer}`}>
                 <p>For{" "}<span className={`${styles.bold}`}>Indo German International Private Limited</span></p>
                 <div>
                    <p className={`${styles.bold}`}>Authorised Signatory</p>
                    <select>
                        <option>Vipin Rajput</option>
                    </select>
                 </div>
            </div>
        </div>
        <div className={`${styles.cc}`}>
            <p>CC : Indo German International Private Limited, VIZAG : Delivery order file</p>
            <p className={`${styles.bold} ${styles.extra_margin}`}>: Delivery order file</p>
        </div>
    </div>
  )
}

export default Index