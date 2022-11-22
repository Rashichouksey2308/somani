import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

function AddComponent({
  countryName,
  keyAddressData,
  handleCancel,
  handleChange,
  handleClick,
  showEditAddress,
  editData,
  index,
  setShowEditAddress,
  setShowAddress,
}) {
  return (
    <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
      <div
        className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
      >
        <h3 className={`${styles.heading}`}>Add New Address</h3>
      </div>
      <div className={`${styles.dashboard_form} card-body border_color`}>
        <div className="row">
          <div className={`${styles.form_group} col-md-3 col-sm-4`}>
            <div className="d-flex">
              <select
                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                name="addressType"
                required
                value={keyAddressData?.addressType}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="Branch Address">Branch Address</option>
                <option value="Office Address">Office Address</option>
              </select>
              <label className={`${styles.label_heading} label_heading`}>
                Address Type<strong className="text-danger">*</strong>
              </label>
              <div className={`${styles.image_arrow} image_arrow`}>
                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
          </div>
          {countryName === 'international' ? (
            <>
              <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                    name="countryOfOrigin"
                    required
                    value={keyAddressData?.country}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                  >
                    <option value="India">Agra</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Country <strong className="text-danger">*</strong>
                  </label>
                  <div className={`${styles.image_arrow} image_arrow`}>
                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  name="city"
                  required
                  style={{ paddingRight: '35px' }}
                  value={keyAddressData.city}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  City <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  name="zipCode"
                  required
                  style={{ paddingRight: '35px' }}
                  value={keyAddressData?.zipCode}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Zip Code <strong className="text-danger">*</strong>
                </label>
              </div>
            </>
          ) : (
            <>
              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  required
                  type="number"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  name="pinCode"
                  value={keyAddressData?.pinCode}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Pin Code
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <div className={`${styles.col_header} label_heading`}>State</div>
                <div className={styles.col_body}>Uttar Pradesh</div>
              </div>
              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                    name="city"
                    required
                    value={keyAddressData?.city}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                  >
                    <option value="India">Agra</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>City</label>
                  <div className={`${styles.image_arrow} image_arrow`}>
                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  required
                  type="text"
                  name="gstin"
                  value={keyAddressData?.gstin}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>GSTIN</label>
              </div>
            </>
          )}
          <div className={`${styles.form_group} col-lg-9`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="text"
              name="address"
              value={keyAddressData?.address}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>
              Address<strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-md-3 col-sm-6`}>
            <input
              type="text"
              id="textInput"
              required
              className={`${styles.input_field} border_color input form-control`}
              name="email"
              value={keyAddressData?.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`} id="textInput">
              Email {countryName === 'international' ? <strong className="text-danger">*</strong> : ''}
            </label>
          </div>
        </div>
      </div>
      {showEditAddress ? (
        <button
          className={`${styles.add_btn}`}
          // onClick={() => addData('address')}
          onClick={() => {
            handleClick(editData, index);
            setShowEditAddress(false);
            setShowAddress(true);
          }}
        >
          Edit
        </button>
      ) : (
        <button
          className={`${styles.add_btn}`}
          // onClick={() => addData('address')}
          onClick={() => {handleClick(); setShowEditAddress(false);
            setShowAddress(true);}}
        >
          Add
        </button>
      )}
      <button className={`${styles.cancel_btn}`} onClick={() => handleCancel()}>
        Cancel
      </button>
    </div>
  );
}

export default AddComponent;
