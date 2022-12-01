/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import DateCalender from '../DateCalender';
import moment from 'moment';

function Index(props) {
  const [addressList, setAddressList] = useState([]);
  const [value, setValue] = useState('');
  const [isAssignment, setIsAssignment] = useState('');

  const changeEdit = (index) => {
    setAddressList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, isEdit: !obj.isEdit };
        }

        return obj;
      });

      return newState;
    });
  };
  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('add')) {
        let savedData = JSON.parse(sessionStorage.getItem('add'));
        let temp = [];

        setAddressList(savedData);
        savedData.forEach((val) => {
          if (val.name == 'Assignment Letter') {
            setIsAssignment('Assignment Letter');
          }
        });
      } else {
        let temp = [];
        props.data?.comments.forEach((val) => {
          temp.push({
            name: val.agreementName,
            comment: val.comment,
            dateOfExecution: val?.dateOfExecution,
            dateOfContract: val.dateOfContract || null,
            monthOfLoadingCargo: val.monthOfLoadingCargo || '',

            isEdit: false,
          });
          if (val.agreementName == 'Assignment Letter') {
            setIsAssignment('Assignment Letter');
          }
        });
        setAddressList(temp);
      }
    }
  }, [props.data]);

  useEffect(() => {
    if (props.saveData == true && props.active == 'Additional Comments') {
      let data = {
        addressList: addressList,
      };
      props.sendData('Additional Comments', data);
    }
    if (props.submitData == true && props.active == 'Additional Comments') {
      let data = {
        addressList: addressList,
      };

      props.updateData('Additional Comments', data);
    }

    // setSupplierState({...supplierState,multiParty:props.multiPart})
  }, [props.saveData, props.submitData]);
  const onAddressRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)]);
  };

  const addMoreRows = () => {
    setAddressList([
      ...addressList,
      {
        name: '',
        comment: '',
        dateOfExecution: null,
        dateOfContract: null,
        monthOfLoadingCargo: '',
        actions: 'true',
      },
    ]);
  };
  const handleRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)]);
  };

  const handleChangeInput = (name, value, index) => {
    setAddressList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, [name]: value };
        }

        return obj;
      });

      return newState;
    });
  };
  const onEditRemove = (index) => {
    setAddressList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: 'false' };
        }
        return obj;
      });

      return newState;
    });
  };
  const onEdit = (index) => {
    setAddressList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: 'true' };
        }
        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });
  };
  const getFiled = () => {
    let isPresent = false;
    addressList.forEach((val, index) => {
      if (val.name == 'Assignment Letter') {
        isPresent = true;
      }
    });

    if (isPresent) {
      return (
        <>
          <td></td>
          <td></td>
        </>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      <div className={`${styles.container} vessel_card`}>
        <div className={`${styles.tableContainer} border_color card p-0`}>
          <div id="customerDetail" className={`${styles.body} card-body row`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <th width="10%" className="border-0 generic_th">
                      Agreement Name
                    </th>
                    <th width="20%" className="border-0 generic_th">
                      Additional Comments
                    </th>
                    {/* <th width="15%" className="border-0 generic_th">
                      Date of Execution
                    </th> */}

                    <>
                      <th width="20%" className="border-0 generic_th">
                        Month of loading of Cargo
                        <strong className="text-danger">*</strong>
                       
                      </th>
                      <th width="15%" className="border-0 generic_th">
                        Date of Contract between Shipper and Buyer
                      </th>
                    </>

                    <th width="10%" className="border-0 generic_th">
                      Actions
                    </th>
                  </tr>
                  <tbody>
                    {addressList?.length > 0 &&
                      addressList?.map((val, index) => {
                        return (
                          <>
                            {val.actions !== 'true' ? (
                              <tr key={index}>
                                <td>{val?.name}</td>
                                <td>{val?.comment}</td>
                                {/* <td>{val?.dateOfExecution ? moment(val?.dateOfExecution).format('DD-MM-YYYY') : '' }</td> */}
                                <td>{val?.monthOfLoadingCargo}</td>

                                <td>{val?.dateOfContract ? moment(val?.dateOfContract).format('DD-MM-YYYY') : ''}</td>

                                <td className={`d-flex`}>
                                  <img
                                    className={`${styles.image} img-fluid mr-3`}
                                    onClick={() => onEdit(index)}
                                    src="/static/mode_edit.svg"
                                    alt="edit"
                                  />
                                  <img onClick={() => handleRemove(index)} src="/static/delete 2.svg"></img>
                                </td>
                              </tr>
                            ) : (
                              <tr key={index}>
                                <td>
                                  <select
                                    value={val.name}
                                    className={`${styles.customSelect} input`}
                                    name="name"
                                    onChange={(e) => {
                                      handleChangeInput(e.target.name, e.target.value, index),
                                      setIsAssignment(e.target.value);
                                    }}
                                  >
                                    <option value="">Select an option</option>
                                    <option value={'Sales Agreement'}>{'Sales Agreement'}</option>
                                    <option value={'Associateship Agreement'}>{'Associateship Agreement'}</option>
                                    <option value={'TPA (Seller)'}>{'TPA (Seller)'}</option>
                                    <option value={'Assignment Letter'}>{'Assignment Letter'}</option>
                                    <option value={'QPA'}>{'QPA'}</option>
                                    <option value={'TPA (CMA)'}>{'TPA (CMA)'}</option>
                                  </select>
                                  <img
                                    className={`${styles.arrow2} image_arrow img-fluid`}
                                    src="/static/inputDropDown.svg"
                                    alt="Search"
                                  />
                                </td>

                                <td>
                                  <input
                                    type="text"
                                    className="input"
                                    placeholder={val.comment}
                                    name="comment"
                                    value={val.comment}
                                    onChange={(e) => {
                                      handleChangeInput(e.target.name, e.target.value, index);
                                    }}
                                  />
                                </td>
                                {/* <td>
                                  <div className="d-flex align-items-center">
                                    <DateCalender
                                      name="dateOfExecution"
                                      saveDate={(val, name, index) => {
                                        handleChangeInput(name, val, index);
                                      }}
                                      defaultDate={
                                        val.dateOfExecution == null
                                          ? null
                                          : moment(val.dateOfExecution).toDate()
                                      }
                                      // small={true}
                                      index={index}
                                    />
                                    <img
                                      className={`${styles.calanderIcon} border-0 mt-0 p-0 form-control image_arrow`}
                                      src="/static/caldericon.svg"
                                      alt="Search"
                                    />
                                  </div>
                                </td> */}

                                {val.name === 'Assignment Letter' ? (
                                  <>
                                    <td>
                                      <div className="d-flex">
                                        <select
                                          className={`${styles.customSelect} input`}
                                          name="monthOfLoadingCargo"
                                          value={val.monthOfLoadingCargo}
                                          onChange={(e) => {
                                            handleChangeInput(e.target.name, e.target.value, index);
                                          }}
                                        >
                                          <option value="">Select an option</option>
                                          <option value="January">January</option>
                                          <option value={`February`}>{`February`}</option>
                                          <option value="March">March</option>
                                          <option value="April">April</option>
                                          <option value="May">May</option>
                                          <option value="June">June</option>
                                          <option value="July">July</option>
                                          <option value="August">August</option>
                                          <option value="September">September</option>
                                          <option value="October">October</option>
                                          <option value="November">November</option>
                                          <option value="December">December</option>
                                        </select>
                                        <img
                                          className={`${styles.arrow} image_arrow img-fluid`}
                                          src="/static/inputDropDown.svg"
                                          alt="Search"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <DateCalender
                                          name="dateOfContract"
                                          saveDate={(val, name, index) => {
                                            handleChangeInput(name, val, index);
                                          }}
                                          defaultDate={
                                            val.dateOfContract == null ? null : moment(val.dateOfContract).toDate()
                                          }
                                          // // small={true}
                                          index={index}
                                        />
                                        <img
                                          className={`${styles.calanderIcon} border-0 mt-0 p-0 image_arrow`}
                                          src="/static/caldericon.svg"
                                          alt="Search"
                                        />
                                      </div>
                                    </td>
                                  </>
                                ) : (
                                  <>
                                    <td></td>
                                    <td></td>
                                  </>
                                )}
                                <td className={`d-flex`}>
                                  <img
                                    className={`${styles.image} mr-3`}
                                    onClick={() => onEditRemove(index)}
                                    src="/static/save-3.svg"
                                    alt="save"
                                  />
                                  <img onClick={() => handleRemove(index)} src="/static/delete 2.svg"></img>
                                </td>
                              </tr>
                            )}
                          </>
                        );
                      })}
                  </tbody>
                </table>
                <div
                  className={`${styles.addMoreRows}`}
                  onClick={(e) => {
                    addMoreRows();
                  }}
                >
                  <span>+</span> Add more rows
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Index;
