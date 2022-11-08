import React from 'react'

export default function ShipmentSelection (props) {
  const { defaultValue,
    ref,
    onChange,
    selectClass, labelClass, labelName, imageClass, imageName, imageSrc } = props

  return <div className='d-flex'>
    <select
      defaultValue={defaultValue}
      ref={ref}
      onChange={(e) => onChange(e)}
      className={selectClass}
    >
      <option selected>Select an option</option>
      {
        listOfOptions.map((element, index) =>
          <option value={element.value} index={index} >{element.name}</option>)
      }
    </select>

    <label className={labelClass}>{labelName}</label>
    <img
      className={imageClass}
      src={imageSrc}
      alt={imageName}
    />
  </div>
}

const listOfOptions = [
  { value: 'shipmentForm', name: '(44A) Shipment From' },
  { value: 'applicableRules', name: '(40E) Application Rules' },
  { value: 'placeOfExpiry', name: '(32D) Place Of Expiry' },
  { value: 'dateOfExpiry', name: '(32D) Date Of Expiry' },
  { value: 'formOfDocumentaryCredit', name: '(40A) Form of Documentary Credit' },
  { value: 'applicant', name: '(50) Applicant' },
  { value: 'beneficiary', name: '(59) Beneficiary' },
  { value: 'currecyCodeAndAmountValue', name: '(32B) Currency Code &amp; Amount' },
  { value: 'tolerancePercentage', name: '(39A) Tolerance (+/-) Percentage' },
  { value: 'creditAvailablewith', name: '(41A) Credit Available With' },
  { value: 'creditAvailableBy', name: '(41A) Credit Available By' },
  { value: 'draftAt', name: '(42C) DRAFT AT' },
  { value: 'drawee', name: '(42A) Drawee' },
  { value: 'deferredPayment', name: '(42P) Deferred Payment' },
  { value: 'partialShipment', name: '(43P) Partial Shipment' },
  { value: 'transhipments', name: '(43T) Transhipments' },
  { value: 'portOfLoading', name: '(44E) Port of Loading' },
  { value: 'portOfDischarge', name: '(44F) Port of Discharge' },
  { value: 'latestDateOfShipment', name: '(44C) Latest Date Of Shipment' },
  { value: 'DescriptionOfGoods', name: '(45A) Description Of The Goods' }
]
