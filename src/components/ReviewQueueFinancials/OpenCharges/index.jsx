/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState } from 'react'
import styles from '../index.module.scss'

function Index({chargesData}) {

  const[chargesDatas,setChargesData]= useState()

  const handleRadioSelect=(e)=>{
  
    if(e==='open'){
      
      const filteredData =
      chargesData.financial?.openCharges?.filter(
        (data) => data.dateOfSatisfactionOfChargeInFull == null,
      )
      setChargesData(filteredData)
    
    }
    else if(e==='close'){
      const filteredData =
      chargesData?.financial?.openCharges?.filter(
        (data) => data.dateOfSatisfactionOfChargeInFull !== null,
      )
      setChargesData(filteredData)
    }
    else {
      setChargesData(chargesData?.financial?.openCharges)
    }
  }
  return (
    <>
      <div className={`${styles.card} card mb-6`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#openCharges"
          aria-expanded="true"
          aria-controls="openCharges"
        >
          <h2 className="mb-0">Charges</h2>
          <div className={`${styles.charges} form-group`}>
            <input type="radio" id="all" onClick={()=>{handleRadioSelect('all')}} name="charges" value="All" />
            <label htmlFor="all">All</label>
            <input type="radio" id="open" name="charges" value="Open" onClick={()=>{handleRadioSelect('open')}}/>
            <label htmlFor="open" >Open</label>
            <input type="radio" id="closed" name="charges" onClick={()=>{handleRadioSelect('close')}} value="Closed" />
            <label htmlFor="closed">Closed</label>
          </div>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="openCharges"
          className="collapse"
          aria-labelledby="openCharges"
          data-parent="#FinancialsAccordion"
        >
          <div
            className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}
          >
            <table
              className={`${styles.table} table`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th width="15%">CHARGE ID</th>
                  <th width="25%">CHARGE HOLDER</th>
                  <th className="text-center" width="12%">
                    AMOUNT
                  </th>
                  <th className="text-center" width="12%">
                    CREATION
                  </th>
                  <th className="text-center" width="12%">
                    SECURITY
                  </th>
                  <th className="text-center" width="12%">
                    MODIFICATION
                  </th>
                  <th className="text-center" width="12%">
                    SATISFACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {console.log(chargesDatas,"chargesDatas")}
               {chargesDatas && chargesDatas?.map((charges, index) => ( <tr key={index}>
                  <td>{charges.chargeId}</td>
                  <td>{charges.nameOfChargeHolder1}</td>
                  <td className="text-center">{charges.finalAmountSecured}</td>
                  <td className="text-center">{charges.dateOfCreationOfCharge}</td>
                  <td className="text-center">
                    <img
                      src="/static/eye.svg"
                      alt="Eye"
                      className="img-fluid"
                    />
                  </td>
                  <td className="text-center">{charges.chargeLastModifiedDate}</td>
                  <td className="text-center">{charges.dateOfSatisfactionOfChargeInFull}</td>
                </tr>))}
                {/* <tr>
                  <td>100310953</td>
                  <td>Divine Infracon Private Limited</td>
                  <td className="text-center">96.17</td>
                  <td className="text-center">08-12-2019</td>
                  <td className="text-center">
                    <img
                      src="/static/eye.svg"
                      alt="Eye"
                      className="img-fluid"
                    />
                  </td>
                  <td className="text-center">08-12-2019</td>
                  <td className="text-center">08-12-2019</td>
                </tr>
                <tr>
                  <td>100310953</td>
                  <td>Gujarat Jhm Hotels Limited</td>
                  <td className="text-center">96.17</td>
                  <td className="text-center">08-12-2019</td>
                  <td className="text-center">
                    <img
                      src="/static/eye.svg"
                      alt="Eye"
                      className="img-fluid"
                    />
                  </td>
                  <td className="text-center">08-12-2019</td>
                  <td className="text-center">08-12-2019</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
