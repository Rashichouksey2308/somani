import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';

const onToggle = (state) => {};

function index() {
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#CompanyDetails"
              aria-expanded="true"
              aria-controls="keyAddress"
            >
              <h3 className={`${styles.heading} mb-0`}>Internal Companies</h3>
              <span className="ml-4">{on ? '+' : '-'}</span>
            </div>
            <div id="CompanyDetails" className="collapse" aria-labelledby="keyAddress">
              <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                <div className="d-flex justify-space-between">
                  <div className="row w-100">
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-3 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Country Type</div>
                        <div className="font-weight-light h5">Domestic</div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Country</div>
                        <div className="font-weight-light h5">India</div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Company Name</div>
                        <div className="font-weight-light h5">Abc Ltd</div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                        <div className="font-weight-light h5">abc</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-3 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>PAN</div>
                        <div className="font-weight-light h5">9XX-XX-XXXX</div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>CIN No</div>
                        <div className="font-weight-light h5">9XX-XX-XXXX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom"></div>

            <div id="CompanyDetails" className="collapse" aria-labelledby="keyAddress">
              <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                <div className={`${styles.inner_head_container}   bg-transparent`}>
                  <h3 className={`${styles.heading} mb-0`}>Key Addresses</h3>
                </div>
                <div className={`${styles.inner_head_containt}   bg-transparent`}>
                  <div className={`${styles.registered_address} col-md-6 col-sm-6 bg-transparent`}>
                    <div>
                      <h3>Registered Address</h3>
                      <div></div>
                    </div>
                    <div className="address">
                      <p>A-44, Sagar Apartments, Tilak Marg, Agra, Uttar Pradesh 110008</p>
                    </div>
                    <div className="account-info d-flex justify-content-between">
                      <h3>
                        Email:<span> abc@email.com</span>
                      </h3>
                      <h3>
                        GSTIN:<span>+91 9876543210</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default index;
