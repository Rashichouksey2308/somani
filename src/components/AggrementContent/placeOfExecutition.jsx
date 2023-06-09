/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import DateCalender from '../DateCalender';
import moment from 'moment';

let cma = {
  authorisedSignatoryDetails: [],
};

function Index(props) {
  const [cmaState, setCmaState] = useState(cma);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('exe')) {
        let savedData = JSON.parse(sessionStorage.getItem('exe'));

        setList(savedData);
      } else {
        let temp = [];
        props.data?.execution.forEach((val) => {
          temp.push({
            name: val.agreementName,
            execution: val.place,
            dateOfExecution: val?.dateOfExecution,
            action: 'false',
          });
        });
        setList(temp);
      }
    }
  }, [props.data]);
  useEffect(() => {
    if (props.saveData == true && props.active == 'Place of Execution') {
      let data = {
        list: list,
      };
      props.sendData('Place of Execution', data);
    }
    if (props.submitData == true && props.active == 'Place of Execution') {
      let data = {
        list: list,
      };

      props.updateData('Place of Execution', data);
    }
  }, [props.saveData, props.submitData]);
    const onEdit = (index) => {
   
    let tempArr = list;
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: 'true' };
        }
        //  otherwise return object as is
        return obj;
      });

      return newState;
    });
  };
  const onEditRemove = (index) => {
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: 'false' };
        }

        return obj;
      });

      return newState;
    });
  };
  const addMoreRows = () => {
    setList([
      ...list,
      {
        name: '',
        execution: '',
        dateOfExecution: null,
        actions: 'true',
      },
    ]);
  };
  const handleRemove = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };
 

  const handleChangeInput = (name, value, index) => {
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, [name]: value };
        }
        return obj;
      });

      return newState;
    });
  };

  const placeExicutionOptions = []

  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <div className={`${styles.tableContainer} border_color card p-0`}>
          <div id="customerDetail" className={` ${styles.body} card-body row`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <th className="border-0 generic_th">Agreement Name</th>
                    <th className="border-0 generic_th">Place of Execution</th>
                    <th className="border-0 generic_th">Date of Execution</th>
                    <th className="border-0 generic_th">Actions</th>
                  </tr>
                  <tbody>
                    
                    {list?.length > 0 &&
                      list?.map((val, index) => {    
                        placeExicutionOptions.push(val.name)             
                        return (
                          <>
                            {val.actions !== 'true' ? (
                              <tr key={index}>
                                <td>{val.name}</td>
                                <td>{val.execution}</td>
                                <td>
                                  {val.dateOfExecution == null ? '' : moment(val.dateOfExecution).format('DD-MM-YYYY')}
                                </td>
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
                                      handleChangeInput(e.target.name, e.target.value, index);
                                    }}
                                  >
                                    <option value="">Select an option</option>
                                    <option value={'Sales Agreement'} disabled={placeExicutionOptions.includes('Sales Agreement') ?true :false}>{'Sales Agreement'}</option>
                                    <option value={'Associateship Agreement'} disabled={placeExicutionOptions.includes('Associateship Agreement') ? true :false}>{'Associateship Agreement'}</option>
                                    <option value={'TPA (Seller)'} disabled={placeExicutionOptions.includes('TPA (Seller)') ? true :false}>{'TPA (Seller)'}</option>
                                    <option value={'Assignment Letter'} disabled={placeExicutionOptions.includes('Assignment Letter') ? true :false}>{'Assignment Letter'}</option>
                                    <option value={'QPA'} disabled={placeExicutionOptions.includes('QPA') ? true :false}>{'QPA'}</option>
                                    <option value={'TPA (CMA)'} disabled={placeExicutionOptions.includes('TPA (CMA)') ? true :false}>{'TPA (CMA)'}</option>
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
                                    placeholder={val.execution}
                                    name="execution"
                                    value={val.execution}
                                    onChange={(e) => {
                                      handleChangeInput(e.target.name, e.target.value, index);
                                    }}
                                  />
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <DateCalender
                                      name="dateOfExecution"
                                      saveDate={(val, name, index) => {
                                        handleChangeInput(name, val, index);
                                      }}
                                      defaultDate={
                                        val.dateOfExecution == null ? null : moment(val.dateOfExecution).toDate()
                                      }
                                      // small={true}
                                      index={index}
                                    />
                                    <img
                                      className={`${styles.calanderIcon} border-0 mt-0 p-0 image_arrow`}
                                      src="/static/caldericon.svg"
                                      alt="Search"
                                    />
                                  </div>
                                </td>
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
      </div>
    </>
  );
}

export default Index;
