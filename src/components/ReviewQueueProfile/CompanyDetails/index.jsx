/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from '../profile.module.scss';
import { useDispatch } from 'react-redux';
import { UpdateCompanyDetails } from '../../../redux/companyDetail/action';
import { checkNan, CovertvaluefromtoCR } from '../../../utils/helper';
import _get from 'lodash/get';
import { handleErrorToast } from '@/utils/helpers/global';

function Index({ order, companyDetail }) {
  const [updateCompany, setUpdateCompany] = useState({
    referalName: '',
    referedBy: '',
    sourceChanel: '',
  });
  useEffect(() => {
    let newCompanyData = {};
    newCompanyData = {
      referalName: order?.referalName ?? '',
      referedBy: order?.referedBy ?? '',
      sourceChanel: order?.sourceChanel ?? '',
    };
    setUpdateCompany(newCompanyData);
  }, [order]);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const Key = e.target.id;
    const value = e.target.value;

    setUpdateCompany((prev) => ({ ...prev, [Key]: value }));
  };

  const saveHandler = () => {
    if (updateCompany.sourceChanel === '') handleErrorToast('please select a source channel');
    else {
      const payload = {
        ...updateCompany,
        _id: companyDetail?.company,
      };

      dispatch(UpdateCompanyDetails(payload));
    }
  };

  return (
    <>
      <div className={`${styles.card} vessel_card border_color border-bottom card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#companyDetails"
          aria-expanded="true"
          aria-controls="companyDetails"
        >
          <h2 className="mb-0">Company Details</h2>
          <span>+</span>
        </div>
        <div id="companyDetails" aria-labelledby="companyDetails" data-parent="#profileAccordion">
          <div className={`${styles.cardBody} card-body border_color`}>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Company Name</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.companyName}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>CIN</div>
                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.CIN}</div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Company PAN</div>
                <div className={`${styles.value} accordion_Text`}>
                  {_get(companyDetail, 'profile.companyDetail.pans[0]', '')}{' '}
                  {_get(companyDetail, 'profile.companyDetail.pans[0]', '') !== '' && (
                    <img src="/static/approved.svg" alt="Approved" className={`${styles.approved} mt-n1`} />
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>IEC Number</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.IEC}{' '}
                  {companyDetail?.profile?.companyDetail?.IEC?.length == 10 && (
                    <img src="/static/approved.svg" alt="approved" className={`${styles.approved} mb-1`} />
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Type of Business</div>
                <div className={`${styles.value} ${styles.multilinetext} accordion_Text`}>
                  {_get(companyDetail, 'profile.companyDetail.typeOfBusiness', [])?.join(', ')}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Date of Incorporation</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.dateOfIncorporation}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Listing Status</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.listingStatus}
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className={`${styles.label} label_heading`}>Constitution</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.Constitution}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Active Compliant</div>
                <div
                  className={`${`${styles.value} accordion_Text`} ${
                    companyDetail?.profile?.companyDetail.activeCompliance?.toLowerCase()?.trim()?.replace(' ','') == 'activecompliant'
                      ? styles.success
                      : styles.warning
                  }`}
                >
                  {!companyDetail?.profile?.companyDetail?.activeCompliance
                    ? ''
                    : companyDetail?.profile?.companyDetail?.activeCompliance?.toLowerCase()?.trim()?.replace(' ','') == 'activecompliant'
                    ? 'Yes'
                    : 'No'}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Contact Number</div>
                <div className={`${styles.value} accordion_Text`}>
                  +91 {companyDetail?.profile?.companyDetail?.contactNumber}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Email Domain</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.emailDomain}{' '}
                  {companyDetail?.profile?.companyDetail?.emailDomain && (
                    <img src="/static/approved.svg" alt="approved" className={`${styles.approved}`} />
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Number of Shareholders</div>
                <div className={`${styles.value} accordion_Text`}>
                  {Array.isArray(companyDetail?.profile?.shareholdingPattern) &&
                  companyDetail?.profile?.shareholdingPattern.length > 0
                    ? companyDetail?.profile?.shareholdingPattern.length
                    :  companyDetail?.profile?.companyDetail?.numberOfShareholders}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Shell/ Hawala Score</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.compliance?.other?.hawalaScore ? 'Yes' : 'No'}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Paid-Up Capital (Cr)</div>
                <div className={`${styles.value} accordion_Text`}>
                  {checkNan(CovertvaluefromtoCR(companyDetail?.profile?.companyDetail?.paidUpCapital),"no")}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Last Balance Sheet</div>
                <div
                  className={`${`${styles.value} accordion_Text`} ${
                    companyDetail?.profile?.companyDetail?.lastBalanceSheet ? styles.success : styles.warning
                  }`}
                >
                  {companyDetail?.profile?.companyDetail?.lastBalanceSheet}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Employee Count</div>
                <div className={`${styles.value} accordion_Text`}>
                  { companyDetail?.financial?.other?.employeeCount
                    ? companyDetail?.financial?.other?.employeeCount
                    : companyDetail?.profile?.companyDetail?.employeeCount}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Existing Limit (Cr)</div>
                <div className={`${styles.value} accordion_Text`}>
                  {checkNan(CovertvaluefromtoCR(order?.creditLimit?.totalLimit))}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Utilized Limit (Cr)</div>
                <div className={`${styles.value} accordion_Text`}>
                  {checkNan(CovertvaluefromtoCR(order?.creditLimit?.utilizedLimit))}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className={`${styles.label} label_heading`}>Registered Address</div>
                <div className={`${styles.value} accordion_Text`}>
                  {companyDetail?.profile?.companyDetail?.registeredAddress}
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}>
                <div className="d-flex">
                  <select
                    id="sourceChanel"
                    onChange={onChangeHandler}
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="Sourcing"
                    value={updateCompany?.sourceChanel}
                  >
                    <option value="" defaultChecked disabled>
                      Select
                    </option>
                    <option value="Sales Assocaite">Sales Associate</option>
                    <option value="Website">Website</option>
                    <option value="Customs Associate"> Customs Associate</option>
                    <option value="Internal Associate"> Internal Associate</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Sourcing Channel
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </div>
              <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}>
                <div className="d-flex">
                  <select
                    disabled
                    id="referedBy"
                    onChange={onChangeHandler}
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="Sourcing"
                    value={updateCompany?.referedBy}
                  >
                  
                      <>
                        <option value="">Select</option>
                        <option value="Website">Website</option>
                      </>
                   
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Referred By
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </div>
              <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}>
                <div className="d-flex">
                  <select
                    disabled
                    id="referalName"
                    onChange={onChangeHandler}
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="Sourcing"
                    value={updateCompany?.referalName}
                  >
                    <option value="" defaultChecked disabled>
                      Select
                    </option>
                    <option value="Bhutani Traders">Bhutani Traders</option>
                    <option value="userName1">{'userName1'}</option>
                    <option value="userName2">userName2</option>
                    <option value="USerName3">{'USerName3'}</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Referral Name
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </div>
              <div className={`${styles.form_group} col-lg-3 align-self-center col-md-6 col-sm-6`}>
                <button onClick={saveHandler} className={`${styles.saveBtn} `}>
                  Save
                </button>
              </div>

              {/* <div className='mt-3 ml-3'>
                            <CommonSave onSave={saveHandler} />
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
