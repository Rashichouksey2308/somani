import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { CovertvaluefromtoCR } from '../../utils/helper'

function Index() {
  const { buyerList } = useSelector((state) => state.buyer)
  // console.log(buyerList, "this is buyer list")
  return (
    <div className={`${styles.wrapper} card border_color`}>
      <div
        className={`${styles.sub_card} sub_card card-header p-0 d-flex align-items-center justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#customerDetail"
        aria-expanded="true"
        aria-controls="customerDetail"
      >
        <div className={styles.header}>
          <h2 className={`mb-0`}>Company Profile</h2>
          <span className=" d-flex align-items-center justify-content-between">
            +
          </span>
        </div>
      </div>
      <div
        id="customerDetail"
        className={`collapse ${styles.body} card-body row`}
        aria-labelledby="customerDetail"
        //   data-parent="#profileAccordion"
      >
        {fields('Company Name', buyerList?.companyName ?? '')}
        {fields('Company PAN', buyerList?.company?.companyPan ?? '')}
        {fields('Type Of Business', buyerList?.company?.typeOfBusiness ?? '')}
        {fields(
          'Transaction Type',
          buyerList?.transactionType?.originalValue ?? '',
        )}
        {/* {fields(
          'Turn-Over (in Cr)',
          CovertvaluefromtoCR(buyerList?.company?.turnOver ?? ''),
        )} */}
         {fields(
          'Turn-Over (in Cr)',
          CovertvaluefromtoCR(buyerList?.turnOver?.originalValue)?.toLocaleString(),
          false,
          buyerList?.order?.unitOfValue == 'Crores'
            ? 'Cr'
            : buyerList?.order?.unitOfValue == 'Million'
            ? 'Mn'
            : buyerList?.order?.unitOfValue,
        )}
        {fields('Email ID', buyerList?.company?.email ?? '')}

        {fields(
          'Phone Number',
          buyerList?.company?.mobile?.primary?.number ?? '',
          `+${buyerList?.company?.mobile?.primary?.callingCode ?? ''}`,
        )}
        {fields(
          'Whatsapp Number',
          buyerList?.company?.mobile?.whatsapp?.number ?? '',
          `+${buyerList?.company?.mobile?.whatsapp?.callingCode ?? ''}`,
        )}
        {fields(
          'Communication Mode',
          buyerList?.company?.communicationMode?.toString() ?? '',
        )}
      </div>
    </div>
  )
}

export default Index
const fields = (head, value, countryCode,value3="") => {
  return (
    <>
      <div
        className={`${styles.filed_container} col-sm-6 col-12 col-md-3 col-lg-2`}
      >
        <span className={`${styles.top} label`}>{head}</span>
        <div>
          <span className={`${styles.value} value `}>
            {countryCode ? countryCode : ''} {value} {value3}
          </span>
        </div>
      </div>
    </>
  )
}
