/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index() {
  return (
    <>
      <div className={styles.container}>
        <Form className={`${styles.form}`}>
          <div className="row border-color ">
       <Form.Group className={`${styles.form_group} d-flex  col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Name<strong className="text-danger">*</strong>
              </Form.Label>
                <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="countryOfOrigin"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                >
                  <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Russia">Russia</option>
                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  GSTIN<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </Form.Group>
          </div>
        </Form>
 <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div className={`d-flex justify-content-between align-items-center ${styles.multiAddContainer}`}>
          <div
            className={`${styles.registeredAddress} d-flex justify-content-between border-color w-40`}
          >
            <div className={`${styles.registeredAddressHeading} w-100`}>
              <span>Registered Address</span>
              <div>
                Plot No-49-48-6/1, Lalitha Nagar, Ground Floor, Sakshi Office
                Road, Akkayyapalem, Visakhapatnam, Andhra Pradesh, 530016 India
              </div>
            </div>

          </div>
          <div
            className={`${styles.registeredAddress} d-flex justify-content-between border-color w-40`}
          >
            <div className={`${styles.registeredAddressHeading} w-100`}>
              <span>Branch Address</span>
              <div >
                Plot No-49-48-6/1, Lalitha Nagar, Ground Floor, Sakshi Office
                Road, Akkayyapalem, Visakhapatnam, Andhra Pradesh, 530016 India
              </div>
            </div>

          </div>
          </div>
        </div>
        <div className={`${styles.tableContainer} border-color card p-0`}>
          <div
            className={`${styles.sub_card}  card-header d-flex align-items-center justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#customerDetail"
            aria-expanded="true"
            aria-controls="customerDetail"
          >
            <div className={styles.header}>
              <h2 className={`mb-0`}>Authorised Signatory Details</h2>
              <span className=" d-flex align-items-center justify-content-between">

                +
              </span>
            </div>
          </div>
          <div
            id="customerDetail"
            className={`collapse ${styles.body}  value_card card-body row`}
            aria-labelledby="customerDetail"
        
          >
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <th>NAME</th>
                    <th>DESIGNATION</th>
                    <th>EMAIL</th>
                    <th>PHONE NO.</th>
                    <th>ACTION</th>
                  </tr>
                  <tbody>
                    {list.length>0 && list.map((val,index)=>{
                      return(
                        <>
                        {val.actions=="true"?
                        <tr key={index}>
                          <td>{val.name}</td>
                          <td>{val.designation}</td>
                          <td>{val.email}</td>
                          <td>{val.phone}</td>
                          <td className={`d-flex`}>
                            <img className={`${styles.image} img-fluid mr-3`} onClick={()=>(onEdit(index))} src="/static/mode_edit.svg" alt="edit"/>
                            <img onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"/>
                          </td>

                        </tr>
                        :<tr key={index}>
                          <td>
                            <select>
                              <option className={`${styles.customSelect}`}>{val.name}</option>
                            </select>
                            <img
                              className={`${styles.arrow2} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </td>
                          <td><input type="text" placeholder={val.designation}></input></td>
                          <td><input type="text" placeholder={val.email}></input></td>
                          <td><input type="text" placeholder={val.phone}></input></td>
                          <td className={`d-flex`}>
                            <img className={`${styles.image} img-fluid mr-3`} onClick={()=>(handleRemove(index))} src="/static/mode_edit.svg" alt="edit"/>
                            <img onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"/>
                          </td>

                        </tr>}
                        </>
                      )
                    })}
                  </tbody>
                </table>
                <div className={`${styles.addMoreRows}`} onClick={(e)=>{
                  addMoreRows()
                  }}>
                  <span>+</span>  Add more rows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
