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
  console.log(list,"list")
  return (
    <>
      <div className={styles.container}>
        <Form>
          <div className="row  ">

            <Form.Group className={`${styles.form_group} d-flex  col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               Supplier Name<strong className="text-danger">*</strong>
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

          </div>
        </Form>
        <div className={`${styles.bankContainer}`}>
          <span className={`mb-3`}>Bank Details</span>
          <div className={`${styles.bankInputContainer} row`}>
              <Col md={4} sm={12}>
                <div className={`${styles.form_group} d-flex`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="existingSuppliers"

                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Bank Name
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                </div>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Account No.<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Swift Code<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    City<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
          </div>
       
        </div>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
           <div className={`d-flex justify-content-between p-0 `}>
            <div
            className={`${styles.registeredAddress} w-100 d-flex justify-content-between border-color`}
          >
            <div className={`${styles.registeredAddressHeading}`}>
              <span>Supplier Address</span>
              <div>
                10 Boulevard De Grenelle Cs 63205 - 75015
              </div>
            </div>
            <div className={"d-flex"}>
            <div
              className={`${styles.addressEdit} mt-3 d-flex justify-content-center align-items align-items-center`}
            >
              <img src="./static/mode_edit.svg" />
            </div>
            <div
              className={`${styles.addressEdit} mt-3 ml-2 d-flex justify-content-center align-items align-items-center`}
            >
              <img src="./static/mode_edit.svg" />
            </div>
            </div>
          </div>

           </div>
        </div>
         <div
        className={`${styles.sub_card} sub_card card-header d-flex align-items-center justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#customerDetail"
        aria-expanded="true"
        aria-controls="customerDetail"
      >
        <div className={styles.header}>
          <h2 className={`mb-0`}>Customer Details</h2>
          <span className=" d-flex align-items-center justify-content-between">

            +
          </span>
        </div>
      </div>
      <div
        id="customerDetail"
        className={`collapse ${styles.body} value_card card-body row`}
        aria-labelledby="customerDetail"
     
      >
        <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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
                  <td className={`d-flex`}>
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
    </>
  )
}

export default Index
