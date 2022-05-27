import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = () => {
  return (
    <div className={`${styles.main} container-fluid`}>
      <div
        className={`${styles.head_container} d-flex justify-content-between pt-3`}
      >
        <h3 className={styles.heading}>Other Terms & Conditions</h3>
        <img className="p-3 img-fluid" alt="Add" src="/static/add.svg" />
      </div>

      <div className={styles.dashboard_form}>
        <Form>
          <div className="row">
            <div className={`${styles.terms_para}`}>
              Below charges are to be borne and paid by the Buyer on actual
              basis,wherever applicable.
              <span className={styles.igpl_para}>
                Indo German International Private Limites (Igpl){' '}
              </span>
              will provide proof of all expenses to the Buyer.
            </div>

            <div className={`${styles.form_group} mt-5 col-md-6`}>
              <h3 className={styles.other_heading}>
                CHA / Stevedoring Charges
              </h3>
              <div
                className={`${styles.checkbox_container} d-flex flex-column`}
              >
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle1"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle1">
                    Customs clearing charges / handling charges / CHA Fee
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle2"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle2">
                    Wharfage Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle3"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle3">
                    Pollution charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle4"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle4">
                    Royalty and Penalty Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle5"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle5">
                    Tarpaulin Coverage Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle6"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle6">
                    Wheighment & Weighment Survey Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle7"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle7">
                    Draught Survey Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle8"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle8">
                    Boating while Draught Survey Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle9"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle9">
                    HMC Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle10"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle10">
                    Security Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle11"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle11">
                    Plot Rental & Storage Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle12"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle12">
                    Bonding of Cargo Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle13"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle13">
                    Ex - Bond Documentation Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle14"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle14">
                    Transfer of Ownership Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle15"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle15">
                    Customs Bond Officer Overtime Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle16"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle16">
                    Grab Hire Charges ( if any )
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle17"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle17">
                    Crane Hire Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle18"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle18">
                    Handling Losses
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle19"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle19">
                    Insurance Charges ( While transferring the material to
                    customs bonded ware house )
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle20"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle20">
                    Water Sprinkling Charges
                  </label>
                </div>
                <div className="pt-4">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="vehicle21"
                    value="Bike"
                  />
                  <label className={styles.checkbox_label} for="vehicle21">
                    Others, if any
                  </label>
                </div>
              </div>
            </div>

            <div className={`${styles.form_group} mt-5 col-md-6`}>
              <div>
                <h3 className={styles.other_heading}>LC Opening Charges</h3>
                <div
                  className={`${styles.checkbox_container} d-flex flex-column`}
                >
                  <div>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      LC Opening Charges ( on LC value subject to minimum of USD
                      1500)
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle2"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle2">
                      LC Amendment Cost
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle3"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle3">
                      CMA Fees including supervision and survey
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle4"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle4">
                      Bank DO Issuance charges
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle5"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle5">
                      Remmittance Charges
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle6"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle6">
                      Usance Interest
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className={styles.other_heading}>Other Charges</h3>
                <div
                  className={`${styles.checkbox_container} d-flex flex-column`}
                >
                  <div>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      LC Opening Charges ( on LC value subject to minimum of USD
                      1500)
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle2"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle2">
                      Demurrage / Detention Charges of Vessel
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle3"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle3">
                      Transportation Charges
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      Wagon Haulage Charges (in case of Delivery through
                      railways)
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      3rd Party Inspection Charges
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      Hedging Charges
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      Any other cost incurred on behalf of Buyer
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className={styles.other_heading}>Duty & Taxes</h3>
                <div
                  className={`${styles.checkbox_container} d-flex flex-column`}
                >
                  <div>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      LC Opening Charges ( on LC value subject to minimum of USD
                      1500)
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle2"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle2">
                      LC Amendment Cost
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle3"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle3">
                      CMA Fees including supervision and survey
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className={styles.other_heading}>Insurance</h3>
                <div
                  className={`${styles.checkbox_container} d-flex flex-column`}
                >
                  <div>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle1"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle1">
                      LC Opening Charges ( on LC value subject to minimum of USD
                      1500)
                    </label>
                  </div>
                  <div className="pt-4">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id="vehicle2"
                      value="Bike"
                    />
                    <label className={styles.checkbox_label} for="vehicle2">
                      LC Amendment Cost
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.terms_para} pt-3`}>
              All necessary documents to be filed with Customs department for
              discharge of goods & Customs clearance can be filed by
              <span className={styles.igpl_para}>Igpl </span>
              or its nominated person. * GST charges extra wherever applicable
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default index
