/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
// import { GetLcModule } from 'redux/lcModule/action'
// import Filter from '../Filter'
import _get from 'lodash/get'
import SavePreviewBar from '../LetterIndermity/SavePreviewBar'
import {
  UpdateTransitDetails,
  GetTransitDetails,
} from '../../redux/TransitDetails/action'
import { toast } from 'react-toastify'
import moment from 'moment'
// import { on } from 'nodemon'

function Index({ TransitDetails }) {
  console.log(
    '🚀 ~ file: index.jsx ~ line 19 ~ Index ~ TransitDetails',
    TransitDetails,
  )
  const dispatch = useDispatch()
  let transId = _get(TransitDetails, `data[0]`, '')
  const [billsofLanding, setBillsofLanding] = useState([
    {
      blnumber: 'BL-1',
      loadingPort: _get(
        TransitDetails,
        'data[0].order.portOfDischarge',
        '',
      ).toUpperCase(),
      date: moment(
        _get(TransitDetails, 'data[0].BL.billOfLanding', [new Date()])[0]
          .blDate,
      ).format('DD MMMM YYYY'),
    },
  ])
  console.log(bolArray, 'bolArray')
  const [loi, setLOI] = useState({
    loiIssueDate: new Date(),
    blSurrenderDate: null,
    billOfLanding: billsofLanding,
    document: null,
    authorizedSignatory: {
      name: '',
      designation: '',
    },
  })
  const changeDesignation = (value) => {
    let temp = { ...loi }
    temp.authorizedSignatory.designation = value
    setLOI({ ...loi })
  }
  useEffect(() => {
    if (_get(TransitDetails, 'data[0].LOI.billOfLanding', []).length > 0) {
      setBillsofLanding(_get(TransitDetails, 'data[0].LOI.billOfLanding', []))
    }
  }, [TransitDetails])

  const onAddClick = () => {
    setBillsofLanding([
      ...billsofLanding,
      {
        blnumber: 'BL-1',
        loadingPort: _get(
          TransitDetails,
          'data[0].order.portOfDischarge',
          '',
        ).toUpperCase(),
        date: moment(
          _get(TransitDetails, 'data[0].BL.billOfLanding', [new Date()])[0]
            .blDate,
        ).format('DD MMMM YYYY'),
      },
    ])
  }
  console.log(billsofLanding, 'billsofLanding')
  useEffect(() => {
    let existingData = _get(TransitDetails, `data[0].LOI`, {})
    if (existingData?.authorizedSignatory) {
      setLOI({
        loiIssueDate: new Date(),
        blSurrenderDate: null,
        billOfLanding: billsofLanding,
        document: null,
        authorizedSignatory: {
          name: existingData.authorizedSignatory.name,
          designation: existingData.authorizedSignatory.designation,
        },
      })
    }
  }, [TransitDetails])
  const [bolArray, setBolArray] = useState([])
  console.log(billsofLanding, 'bolArray')
  useEffect(() => {
    if (_get(TransitDetails, `data[0].BL.billOfLanding`, []).length > 0) {
      setBolArray(_get(TransitDetails, `data[0].BL.billOfLanding`, []))
    }
  }, [TransitDetails])

  console.log(loi, 'LOI')

  const SetAuthorisedSignatoryHanlder = (e) => {
    console.log(e.target.value.toLowerCase(), 'w')
    if (e.target.value == '') {
      setLOI({ ...loi, authorizedSignatory: { name: '', designation: '' } })
    } else {
      if (e.target.value.toLowerCase() === 'bhawana jain') {
        console.log(e.target.value.toLowerCase(), 'Bhawana Jain')

        setLOI({
          ...loi,
          authorizedSignatory: {
            name: 'Bhawana Jain',
            designation: 'Vice President Finance & Accounts',
          },
        })
      }
      if (e.target.value.toLowerCase() === 'vipin kumar') {
        console.log('Vipin Kumar')
        setLOI({
          ...loi,
          authorizedSignatory: {
            name: 'Vipin Kumar',
            designation: 'Manager Accounts',
          },
        })
      }
      if (e.target.value.toLowerCase() === 'devesh jain') {
        console.log('Devesh Jain')
        setLOI((prevState) => {
          return {
            ...prevState,
            authorizedSignatory: {
              name: 'Devesh Jain',
              designation: 'Director',
            },
          }
        })
      }
      if (e.target.value.toLowerCase() === 'fatima yannoulis') {
        console.log('Fatima Yannoulis')
        setLOI((prevState) => {
          return {
            ...prevState,
            authorizedSignatory: {
              name: 'Fatima Yannoulis',
              designation: 'Chief Financial Officer',
            },
          }
        })
      }
    }

    // let tempArray = { ...loi }
    // if (e.target.value === 'Bhawana Jain') {
    //   tempArray.authorizedSignatory = { name: 'Bhawana Jain', designation: 'Vice President Finance & Accounts' }
    // }
    // if (e.target.value === 'Vipin Kumar') {
    //   tempArray.authorizedSignatory = { name: 'Vipin Kumar', designation: 'Manager Accounts ' }
    // }
    // if (e.target.value === 'Devesh Jain') {
    //   tempArray.authorizedSignatory = { name: 'Devesh Jain', designation: 'Director' }
    // }
    // if (e.target.value === 'Fatima Yannoulis') {
    //   tempArray.authorizedSignatory = { name: 'Fatima Yannoulis', designation: 'Chief Financial Officer' }
    // }
    // else {
    //   tempArray.authorizedSignatory = { name: '', designation: '' }
    // }
    // console.log(e.target.value, tempArray.authorizedSignatory, "billsofLanding")
    // setLOI(tempArray)
  }

  const BolDropDown = (e, index) => {
    console.log(e.target.value, 'onclclc')
    let temp = [...billsofLanding]

    let text = e.target.value
    let thenum = text.match(/\d+/)[0]

    if (Number(thenum) <= 0) {
      thenum = 0
    } else {
      thenum = Number(Number(thenum) - 1)
    }
    console.log(thenum, 'indexindex')
    temp[index].blnumber = e.target.value

    temp[index].date = moment(
      _get(TransitDetails, 'data[0].BL.billOfLanding', [new Date()])[thenum]
        .blDate,
    ).format('DD MMMM YYYY')
    temp[index].loadingPort = _get(
      TransitDetails,
      'data[0].order.portOfDischarge',
      '',
    ).toUpperCase()
    setBillsofLanding([...temp])
  }

  console.log(billsofLanding, 'asasasasas')
  const OnAddHandler = () => {
    let tempArray = billsofLanding
    tempArray.push({
      blnumber: '',
      loadingPort: '',
      date: '',
    })
    setBillsofLanding(tempArray)
  }
  const onDeleteClick = (index) => {
    setBillsofLanding([
      ...billsofLanding.slice(0, index),
      ...billsofLanding.slice(index + 1),
    ])
  }
  console.log(loi, 'billsofLanding')

  const saveData = () => {
    if (loi.authorizedSignatory.name === '') {
      let toastMessage = 'PLEase select authorized signatory'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }

    sessionStorage.setItem('transitPId', transId._id)
    // const billOfLanding = [...bolList]
    const LOI = { ...loi }
    LOI.billOfLanding = billsofLanding
    console.log(LOI, 'LOI111')
    let fd = new FormData()
    fd.append('loi', JSON.stringify(LOI))
    fd.append('transitId', transId._id)
    let task = 'submit'
    dispatch(UpdateTransitDetails({ fd, task }))
    //console.log(fd, bol, 'filteredVessel')

    Router.push('/loi-preview')
  }

  return (
    <div className={`${styles.root} card container-fluid  border-0`}>
      <div className={`${styles.content_container}`}>
        <div className={`${styles.heading} `}>
          <p>EMERGENT INDUSTRIAL SOLUTIONS LIMITED</p>
          <p>CIN : L80902DL1983PLC209722</p>
        </div>
        <div className={`${styles.aboutLetter}`}>
          <p>
            STANDARD FORM LETTER OF INDEMNITY TO BE GIVEN IN RETURN FOR
            DELIVERING CARGO WITHOUT PRODUCTION OF THE ORIGINAL BILL(S) OF
            LADING.
            <hr />
          </p>
        </div>
        <div
          className={`${styles.addressAndDAte} d-flex justify-content-between align-content-center`}
        >
          <div className={`d-flex`}>
            <span>To:</span>
            {'  '}
            <div className={`ml-3 ${styles.noadd}`}>
              {' '}
              INDO INTERNATIONAL TRADING FZCO JAFZA VIEW-18, LOB-180504, JEBEL
              ALI, DUBAI, U.A.E
            </div>
          </div>
          <div>
            <span>DATE:</span>{' '}
            {moment(
              loi.loiIssueDate.toJSON().slice(0, 10).replace(/-/g, '/'),
            ).format('DD/MM/YYYY')}
          </div>
        </div>
        <div className={`${styles.salutations}`}>
          <div>Dear Sir, </div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Ship:</span>
          {'  '}
          <div className={`ml-3`}>
            {_get(
              TransitDetails,
              'data[0].BL.billOfLanding[0].vesselName',
              '',
            ).toUpperCase()}
          </div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Voyage:</span>
          {'  '}
          <div className={`ml-3`}>
            FROM{' '}
            {_get(
              TransitDetails,
              'data[0].order.portOfDischarge',
              '',
            ).toUpperCase()}{' '}
            TO ANY PORT(S) IN INDIA
          </div>
        </div>
        <div className={`d-flex  ${styles.salutations}`}>
          <span>Cargo:</span>
          {'  '}
          <div className={`ml-3`}>
            {_get(TransitDetails, 'data[0].order.quantity', '')?.toLocaleString(
              'en-IN',
            )}{' '}
            {_get(
              TransitDetails,
              'data[0].order.unitOfQuantity',
              '',
            ).toUpperCase()}{' '}
            {_get(TransitDetails, 'data[0].order.commodity', '').toUpperCase()}
          </div>
        </div>
        <div className={`d-flex flex-wrap ${styles.salutations}`}>
          <span>Bill(s) of Lading:</span>
          {'  '}
          <div>
            {billsofLanding.map((bills, index1) => (
              <>
                {console.log(bills, 'bills')}
                <div
                  key={index1}
                  className={`ml-3 word-wrap d-flex justify-content-start align-items-center ${styles.salutationFeatures} `}
                >
                  <select
                    onChange={(e) => BolDropDown(e, index1)}
                    className="input"
                    value={billsofLanding[index1].blnumber}
                  >
                    {bolArray.map((element, index2) => (
                      <option key={index2} value={`BL-${index2 + 1}`}>
                        BL-{index2 + 1}
                      </option>
                    ))}
                  </select>
                  Dated {billsofLanding[index1].date}, ISSUE AT{' '}
                  {_get(
                    TransitDetails,
                    'data[0].order.portOfDischarge',
                    '',
                  ).toUpperCase()}{' '}
                  {index1}
                  {index1 == 0 ? (
                    <button
                      onClick={() => onAddClick()}
                      className={styles.add_btn}
                    >
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                  ) : null}
                  {index1 > 0 ? (
                    <button
                      onClick={() => onDeleteClick(index1)}
                      className={styles.add_btn}
                    >
                      <span className={styles.add_sign}>-</span>Delete
                    </button>
                  ) : null}
                </div>
              </>
            ))}
          </div>
        </div>

        <div className={styles.body}>
          <p>
            The above cargo was shipped on the above ship by{' '} <span className={styles.bold}>
            LAKE VERMONT MARKETING pTy LTD, LEVEL 7' 12 CREBK STREET, BRISBANE 4000 QUEBSLAND, AUSTRALIA{' '}</span>and consigned to <span className={styles.bold}>TO ORDER</span> for delivery at the port of{' '}<span className={styles.bold}>ANY PORT (S) lN INDIA </span> but the Bills of Lading has not arrived and we,{' '}EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM, ANDHRA PRADESH - 30016, INDIA{' '}, hereby request you to deliver the said cargo to{' '}EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, SAKHAPATNAM, ANDHRA PRADESH - 530016, INDIA{' '} or to such party as you believe to be or to represent{' '} EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM, ANDHRA PRADESH - 530016, INDIA {' '} or to be acting on behalf of{' '} EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM, ANDHRA PRADESH - 530016, INDIA at <span className={styles.bold}>VISAKHAPATNAM PORT (VSPL), INDIA</span>{' '} without production of the original Bill(s) of Lading.
          </p>

          <div className={`${styles.list}`}>
            <p>
              In consideration of your accepting our request and/or complying
              with, or taking any steps to comply with, or attempting to comply
              with our above request, we hereby agree as follows :{' '}
            </p>
            <ol>
              <li>
                To indemnify you, your servants, agents and any third party
                affiliated or associated with Torvald Klaveness and to hold all
                of you harmless in respect of any liability, loss, damage or
                expense of whatsoever nature which you may sustain by reason of
                delivering the cargo in accordance with our request.{' '}
              </li>
              <li>
                In the event of any proceedings being commenced against you or
                any other person or third party mentioned under No. 1 above in
                connection with the delivery of the cargo as aforesaid, to
                provide you or them on demand with sufficient funds to defend
                the same.{' '}
              </li>
              <li>
                If, in connection with the delivery of the cargo as aforesaid,
                the ship, or any other ship or property in the same or
                affiliated/associated ownership, management or control, should
                be arrested or detained or should the arrest or detention
                thereof be threatened, or should there be any interference in
                the use or trading of the vessel (whether by virtue of a caveat
                being entered on the ship’s registry or otherwise howsoever), to
                provide on demand such bail or other security as may be required
                to prevent such arrest or detention or to secure the release of
                such ship or property or to remove such interference and to
                indemnify you in respect of any liability, loss, damage or
                expense caused by such arrest or detention or threatened arrest
                or detention or such interference, whether or not such arrest or
                detention or threatened arrest or detention or such interference
                may be justified.{' '}
              </li>
              <li>
                If the place at which we have asked you to make delivery is a
                bulk liquid or gas terminal or facility, or another ship,
                lighter or barge, then delivery to such terminal, facility,
                ship, lighter or barge shall be deemed to be delivery to the
                party to whom we have requested you to make such deliver{' '}
              </li>
              <li>
                As soon as all original bills of lading for the above cargo
                shall have come into our possession, to deliver the same to you,
                or otherwise to cause all original bills of lading to be
                delivered to you, whereupon our liability hereunder shall cease.{' '}
              </li>
              <li>
                The liability of each and every person under this indemnity
                shall be joint and several and shall not be conditional upon
                your proceeding first against any person, whether or not such
                person is party to or liable under this indemnity{' '}
              </li>
              <li>
                This indemnity shall be governed by and construed in accordance
                with English law and each and every person liable under this
                indemnity shall at your request submit to the Jurisdiction of
                the High Court of Justice of England.{' '}
              </li>
            </ol>
          </div>
        </div>
        <div className={`${styles.footerSalutations} ${styles.salutations}`}>
          <div style={{ fontWeight: 'normal' }}>Yours faithfully</div>
          <div style={{ fontWeight: 'normal' }}>For and on behalf of </div>
          <div className={styles.bold}>
            EMERGENT INDUSTRIAL SOLUTIONS LIMITED
          </div>
          <div style={{ fontWeight: 'normal' }}>The Requestor</div>
          <div className={`${styles.athorised}`}>
            <div style={{ fontWeight: 'bold' }}>Authorised Signatory</div>

            <div>
              Name:{' '}
              <select
                value={loi.authorizedSignatory.name}
                onChange={(e) => SetAuthorisedSignatoryHanlder(e)}
                className={`${styles.input_field} ${styles.customSelect} input mt-4 pl-3`}
              >
                <option disabled selected>
                  Select an option
                </option>
                <option value="Bhawana Jain">Bhawana Jain </option>
                <option value="Vipin Kumar">Vipin Kumar </option>
                <option value="Devesh Jain">Devesh Jain </option>
                <option value="Fatima Yannoulis">Fatima Yannoulis </option>
              </select>
              <img
                className={`${styles.arrow} image_arrow img-fluid`}
                src="/static/inputDropDown.svg"
                alt="Search"
              />
            </div>

            <div>
              Designation:{' '}
              <input
                className="mt-4 pl-3 input"
                value={loi.authorizedSignatory.designation}
                onChange={(e) => {
                  changeDesignation(e.target.value)
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <SavePreviewBar
        // openbar={saveData}
        isDownload={false}
        rightBtn="Save &amp; Preview"
        rightBtnClick={saveData}
      />
    </div>
  )
}
export default Index
