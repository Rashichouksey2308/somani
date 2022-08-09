/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'
import Filter from '../Filter'
import _get from 'lodash/get'
import SavePreviewBar from '../LetterIndermity/SavePreviewBar'

function Index({ TransitDetails }) {
  const [billsofLanding, setBillsofLanding] = useState([
    {
      blnumber: '',
      loadingPort: '',
    },
  ])
  const bolArray = _get(TransitDetails, `data[0].BL.billOfLanding`, [])

  const handleRoute = () => {
    Router.push('/loi-preview')
  }
  const [designation, setDesignation] = useState('')
  const SetDesignationHanlder = (e) => {
    if (e.target.value === 'Bhawana Jain') {
      setDesignation('Vice President (Finance & Accounts)')
    }
    if (e.target.value === 'Vipin Kumar') {
      setDesignation('Manager Accounts ')
    }
    if (e.target.value === 'Devesh Jain') {
      setDesignation('Director')
    }
    if (e.target.value === 'Fatima Yannoulis') {
      setDesignation('Chief Financial Officer')
    }
  }

  const BolDropDown = ({ e, element }) => {
    let selectedObj = bolArray
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
            <span>DATE:</span> 05 APRIL 2021
          </div>
        </div>
        <span>Dear Sir, </span>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Ship:</span>
          {'  '}
          <div className={`ml-3`}>MV CRIMSON ARK</div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Voyage:</span>
          {'  '}
          <div className={`ml-3`}>
            FROM ABBOT POINT, AUSTRALIA TO ANY PORT(S) IN INDIA
          </div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Cargo:</span>
          {'  '}
          <div className={`ml-3`}>
            36,750 MT LAKE VERMONT PREMIUM HARD COKING COAL
          </div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Bill(s) of Lading:</span>
          {'  '}
          <div
            className={`ml-3 d-flex justify-content-start align-items-center ${styles.salutationFeatures} `}
          >
            <select onChange={(e) => BolDropDown(e)}>
              {bolArray.map((element, index) => (
                <option key={index} value={index}>
                  BL-{index + 1}
                </option>
              ))}
            </select>
            Dated 18TH MARCH 2021, ISSUE AT ABBOT POINT
            <button className={styles.add_btn}>
              <span className={styles.add_sign}>+</span>Add
            </button>
          </div>
        </div>

        <div className={styles.body}>
          <p>
            The above cargo was shipped on the above ship by{' '}
            <span className={styles.bold}>
              LAKE VERMONT MARKETING PTY LTD, LEVEL 7, 12 CREEK STREET, BRISBANE{' '}
            </span>
            and consigned to <span className={styles.bold}>TO ORDER</span> for
            delivery at the port of{' '}
            <span className={styles.bold}>ANY PORT (S) IN INDIA </span> but the
            bill of lading has not arrived and we,{' '}
            <span className={styles.bold}>
              {' '}
              EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR,
              LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM,
              ANDHRA PRADESH – 530016, INDIA
            </span>{' '}
            , hereby request you to deliver the said cargo to{' '}
            <span className={styles.bold}>
              {' '}
              EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR,
              LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM,
              ANDHRA PRADESH – 530016, INDIA
            </span>{' '}
            or to such party as you believe to be or to represent{' '}
            <span className={styles.bold}>
              {' '}
              EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR,
              LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM,
              ANDHRA PRADESH – 530016, INDIA
            </span>{' '}
            or to be acting on behalf of{' '}
            <span className={styles.bold}>
              {' '}
              EMERGENT INDUSTRIAL SOLUTIONS LIMITED, 49-18-6/1, GROUND FLOOR,
              LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM,
              ANDHRA PRADESH – 530016, INDIA at VISAKHAPATNAM PORT (VSPL), INDIA
            </span>{' '}
            without production of the original bill of lading.
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
                his indemnity shall be governed by and construed in accordance
                with English law and each and every person liable under this
                indemnity shall at your request submit to the Jurisdiction of
                the High Court of Justice of England.{' '}
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.footerSalutations}>
          <p>Yours faithfully</p>
          <p>For and on behalf of </p>
          <p className={styles.bold}>EMERGENT INDUSTRIAL SOLUTIONS LIMITED</p>
          <p>The Requestor</p>
          <div className={`${styles.athorised}`}>
            <p>Authorised Signatory</p>

            <p>
              Name:{' '}
              <select
                onChange={(e) => SetDesignationHanlder(e)}
                className={`${styles.input_field} ${styles.customSelect} input mt-4 pl-3`}
              >
                <option value=""></option>
                <option value="Bhawana Jain">Bhawana Jain </option>
                <option value="Vipin Kumar">Vipin Kumar </option>
                <option value="Devesh Jain">Devesh Jain </option>
                <option value="Fatima Yannoulis">Fatima Yannoulis </option>
              </select>
              <img
                className={`${styles.arrow} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="Search"
              />
            </p>

            <div>
              Designation:{' '}
              <input className="mt-4 pl-3" value={designation}></input>
            </div>
          </div>
        </div>
      </div>

      <SavePreviewBar
        openbar={handleRoute}
        isDownload={false}
        rightBtn="Save &amp; Preview"
      />
    </div>
  )
}
export default Index
