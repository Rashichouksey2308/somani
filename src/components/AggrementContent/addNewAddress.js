import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
export const addNewAddress = (
  setAddressType,
  setAddress,
  addressType,
  handleAddressInput,
  cancelAddress,
  newAddress,
  gettingPins,
  handleData,
  toShow,
  toView,
  pinCode,
  type,
  viewSet,
  isgst,
  gstArr,
  showGst = true,
) => {
  console.log(toShow, toView, 'toView');
  let addressTypeArr = ['Registered', 'Branch', 'Corporate'];

  return (
    <div className={`${styles.newAddressContainer} card border_color`}>
      <div className={`${styles.newAddressHead} border_color`}>
        <span>Add a new address</span>
      </div>
      <div className="card-body p-0">
        <div className={`${styles.newAddressContent} row`}>
          <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <select
                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                name="addressType"
                value={addressType}
                onChange={(e) => {
                  // setMultiAddressType(e.target.value)
                  setAddressType(e.target.value);
                  setAddress(e.target.name, e.target.value);
                }}
              >
                <option disabled>Select an option</option>
                {addressTypeArr.map((val, index) => {
                  if (type == 'noBranch' && val == 'Branch') {
                    return null;
                  } else {
                    return <option value={`${val}`}>{val} Office</option>;
                  }
                })}
              </select>
              <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                Address Type<strong className="text-danger">*</strong>
              </Form.Label>
              <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
            </div>
          </Form.Group>
          {addressType == 'Registered' || addressType == 'Corporate' ? (
            <>
              <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="fullAddress"
                  value={newAddress?.fullAddress}
                  onChange={(e) => {
                    setAddress(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Address<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
              <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="pinCode"
                  onKeyDown={(evt) => [';', '/', '-', '+'].includes(evt.key) && evt.preventDefault()}
                  value={newAddress?.pinCode}
                  onChange={(e) => {
                    if (pinCode) {
                      gettingPins(e.target.value);
                      viewSet();
                    }
                    setAddress(e.target.name, e.target.value);
                  }}
                />
                {pinCode && toShow.length > 0 && toView && (
                  <div className={styles.searchResults}>
                    <ul>
                      {toShow
                        ? toShow?.map((results, index) => (
                            <li
                              onClick={() => handleData('pinCode', results)}
                              id={results._id}
                              key={index}
                              value={results.Pincode}
                            >
                              {results.Pincode}{' '}
                            </li>
                          ))
                        : ''}
                    </ul>
                  </div>
                )}
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Pin Code<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
              </Form.Group>
              <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  value={newAddress?.country}
                  name="country"
                  onChange={(e) => {
                    setAddress(e.target.name, e.target.value);
                  }}
                  onKeyDown={(evt) =>
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(evt.key) && evt.preventDefault()
                  }
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Country<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
              </Form.Group>
            </>
          ) : (
            <>
              {showGst ? (
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      name="gstin"
                      value={newAddress.gstin}
                      onChange={(e) => {
                        setAddress(e.target.name, e.target.value);
                      }}
                    >
                      <option value="">Select an option</option>

                      {gstArr?.length > 0 && gstArr !== undefined > 0 ? (
                        gstArr
                          .filter((val) => {
                            if (val !== undefined) {
                              return val;
                            }
                          })
                          .map((val, index) => {
                            return <option value={`${val}`}>{val}</option>;
                          })
                      ) : (
                        <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                      )}
                    </select>
                    <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                      GSTIN {isgst ? <strong className="text-danger">*</strong> : null}
                    </Form.Label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
              ) : null}

              <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="pinCode"
                  value={newAddress?.pinCode}
                  // onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                  onChange={(e) => {
                    if (pinCode) {
                      gettingPins(e.target.value);
                      viewSet();
                    }
                    setAddress(e.target.name, e.target.value);
                  }}
                />
                {pinCode && toShow.length > 0 && toView && (
                  <div className={styles.searchResults}>
                    <ul>
                      {toShow
                        ? toShow?.map((results, index) => (
                            <li
                              onClick={() => handleData('pinCode', results)}
                              id={results._id}
                              key={index}
                              value={results.Pincode}
                            >
                              {results.Pincode}{' '}
                            </li>
                          ))
                        : ''}
                    </ul>
                  </div>
                )}
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Pin Code<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="country"
                  value={newAddress?.country}
                  onChange={(e) => {
                    setAddress(e.target.name, e.target.value);
                  }}
                  onKeyDown={(evt) =>
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(evt.key) && evt.preventDefault()
                  }
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Country<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="state"
                  value={newAddress?.state}
                  onChange={(e) => {
                    setAddress(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  State<strong className="text-danger"></strong>
                </Form.Label>
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="city"
                  value={newAddress?.city}
                  onChange={(e) => {
                    setAddress(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  City<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-12 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="fullAddress"
                  value={newAddress?.fullAddress}
                  onChange={(e) => {
                    setAddress(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Address<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
            </>
          )}
        </div>
        <div className="d-flex">
          <div
            className={`${styles.add} d-flex justify-content-center align-items-center`}
            onClick={() => {
              handleAddressInput();
            }}
          >
            <span>Add</span>
          </div>
          <div
            className={`${styles.cancel} d-flex justify-content-center align-items-center`}
            onClick={() => {
              cancelAddress();
            }}
          >
            <span>Cancel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
