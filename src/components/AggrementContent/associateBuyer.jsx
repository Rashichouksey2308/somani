/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index() {
    const [list,setList]=useState([
    {name:"Dr. Amin",designation:"Director",email:"skapoor@email.com",phone:"9876543210",
     actions:"true"
  },
      {name:"Dr. Amin",designation:"Director",email:"skapoor@email.com",phone:"9876543210",
     actions:"false"}
  
  ])

  const onEdit=(index)=>{
    let tempArr=list;
    // tempArr[index].actions.edit="false"

       setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
        // 👇️ if id equals 2, update country property
        if (i == index) {
          return {...obj, actions: 'false'};
        }

        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });

  }
  const onEditRemove=(index)=>{
    let tempArr=list;
    // tempArr[index].actions.edit="false"

       setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
        // 👇️ if id equals 2, update country property
        if (i == index) {
          return {...obj, actions: 'true'};
        }

        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });

  }
  const addMoreRows=()=>{

   
  setList([...list,{
      name:"",designation:"",email:"",phone:"",
      actions:"false"
    }])

  }
  const handleRemove=(index)=>{
     setList([...list.slice(0,index), ...list.slice(index+1)])
}
  return (
    <>
      <div className={styles.container}>
        <Form>
          <div className="row border-bottom border-color ">
            <div className={`${styles.info} col-md-4 col-sm-6`}>
              <span>Name*</span>
              <p>Jaiswal Nico</p>
            </div>
              <div className={`col-md-4 col-sm-6`}>
              <span>PAN No.</span>
              <p>27AAATW4183C2ZG</p>
            </div>
              <div className={`col-md-4 col-sm-6`}>
              <span></span>
              <p></p>
            </div>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               Branch Name
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <select
                className={`${styles.input_field} input form-control`}
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
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name
              </Form.Label>
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
                  <td className={`d-flex justify-content-between`}>
                  <img onClick={()=>(onEdit(index))} src="./static/mode_edit.svg"  />
                   <img onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"></img>
                  </td>

                </tr>
                :<tr key={index}>
                  <td><select>
                    <option>{val.name}</option>
                    </select>
                 </td>
                  <td><input type="text" placeholder={val.designation}></input></td>
                  <td><input type="text" placeholder={val.email}></input></td>
                  <td><input type="text" placeholder={val.phone}></input></td>
                  <td className={`d-flex  justify-content-between`}>
                     <img  onClick={()=>(onEditRemove(index))}src="./static/mode_edit.sv"  />
                     <img  onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"></img>
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
        <div className={styles.displaytable}>
           <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <th>DOCUMENT NAME</th>
            <th>FORMAT</th>
            <th>DOCUMENT DATE</th>
           
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
                  <td className={`d-flex justify-content-between`}>
                  <img onClick={()=>(onEdit(index))} src="./static/mode_edit.svg"  />
                   <img onClick={()=>(handleRemove(index))} src="/static/upload.svg"></img>
                  </td>

                </tr>
                :<tr key={index}>
                  <td><select>
                    <option>{val.name}</option>
                    </select>
                 </td>
                  <td><input type="text" placeholder={val.designation}></input></td>
                  <td><input type="text" placeholder={val.email}></input></td>
                  <td><input type="text" placeholder={val.phone}></input></td>
                  <td className={`d-flex  justify-content-between`}>
                     <img  onClick={()=>(onEditRemove(index))}src="./static/mode_edit.sv"  />
                     <img  onClick={()=>(handleRemove(index))} src="/static/upload.svg"></img>
                  </td>

                </tr>}
                </>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default Index
