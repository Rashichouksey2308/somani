import styles from './index.module.scss';
import { Col, Form } from 'react-bootstrap';
export const signatoryList = (
  list,
  setRemovedOption,
  handleChangeInput,
  removedOption,
  options,
  handleChangeInput2,
  onEditRemove,
  handleRemove,
  addMoreRows,
  type,
) => {
  return (
    <div className={`${styles.tableContainer} border_color card p-0`}>
      <div
        className={`${styles.sub_card}  card-header d-flex align-items-center justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#customerDetail"
        aria-expanded="true"
        aria-controls="customerDetail"
      >
        <div className={styles.header}>
          <h2 className={`mb-0`}>Authorised Signatory Details</h2>
          <span className=" d-flex align-items-center justify-content-between">+</span>
        </div>
      </div>
      <div
        id="customerDetail"
        className={`collapse ${styles.body}  show value_card card-body row`}
        aria-labelledby="customerDetail"
      >
        <div className={styles.table_scroll_outer}>
          <div className={styles.table_scroll_inner}>
            <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
              <tr className="table_row">
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>EMAIL</th>
                <th>PHONE NO.</th>
                <th>ACTION</th>
              </tr>
              <tbody>
                {list.length > 0 &&
                  list.map((val, index) => {
                    return (
                      <>
                        {val.actions == 'true' ? (
                          <tr key={index} className="table_row">
                            <td>{val.name}</td>
                            <td>{val.designation}</td>
                            <td>{val.email}</td>
                            <td>{val.phoneNo}</td>
                            <td className={`d-flex`}>
                              <img
                                className={`${styles.image} mr-3`}
                                onClick={() => onEdit(index)}
                                src="/static/mode_edit.svg"
                                alt="edit"
                              />
                              <img onClick={() => handleRemove(index, val)} src="/static/delete 2.svg" alt="delete" />
                            </td>
                          </tr>
                        ) : (
                          <tr key={index} className="table_row">
                            <td>
                              {type == 'input' ? (
                                <>
                                  <input
                                    type="text"
                                    className="input"
                                    name="name"
                                    value={val.name}
                                    onChange={(e) => {
                                      handleChangeInput2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                </>
                              ) : (
                                <>
                                  {val.addnew == 'false' ? (
                                    <>
                                      <select
                                        value={val.name}
                                        className={`${styles.customSelect} input`}
                                        onChange={(e) => {
                                          setRemovedOption(e.target.value);
                                          handleChangeInput(e.target.name, e.target.value, index);
                                        }}
                                      >
                                        <option>Select an option</option>
                                        {removedOption != null ? (
                                          <option value={removedOption}>{removedOption}</option>
                                        ) : null}
                                        {options.map((val, i) => {
                                          return <option value={val}>{val}</option>;
                                        })}
                                      </select>
                                      <img
                                        className={`${styles.arrow2} image_arrow img-fluid`}
                                        src="/static/inputDropDown.svg"
                                        alt="Search"
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {val.name == 'Vipin Kumar' ||
                                      val.name == 'Bhawana Jain' ||
                                      val.name == 'Devesh Jain' ||
                                      val.name == 'Fatima Yannoulis' ? (
                                        <>
                                          <select
                                            value={val.name}
                                            className={`${styles.customSelect} input`}
                                            onChange={(e) => {
                                              handleChangeInput(e.target.name, e.target.value, index);
                                            }}
                                          >
                                            <option>Select an option</option>
                                            <option value={'Vipin Kumar'}>Vipin Kumar</option>
                                            <option value={'Bhawana Jain'}>Bhawana Jain</option>
                                            <option value={'Devesh Jain'}>Devesh Jain</option>
                                            <option value={'Fatima Yannoulis'}>Fatima Yannoulis</option>

                                            {/* {options.map((val,i)=>{
                                return(<option value={val}>{val}</option>)
                              })} */}
                                          </select>
                                          <img
                                            className={`${styles.arrow2} image_arrow img-fluid`}
                                            src="/static/inputDropDown.svg"
                                            alt="Search"
                                          />
                                        </>
                                      ) : (
                                        <>
                                          <input
                                            type="text"
                                            className="input"
                                            placeholder={'Add new'}
                                            name="name"
                                            value={val.name}
                                            onChange={(e) => {
                                              handleChangeInput2(e.target.name, e.target.value, index);
                                            }}
                                          />
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </td>
                            <td>
                              <input
                                type="text"
                                className="input"
                                value={val.designation}
                                name="designation"
                                // readOnly={val.addnew!="true"?true:false}
                                onChange={(e) => {
                                  handleChangeInput2(e.target.name, e.target.value, index);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={val.email}
                                name="email"
                                className="input"
                                onChange={(e) => {
                                  handleChangeInput2(e.target.name, e.target.value, index);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                value={val.phoneNo}
                                className="input"
                                name="phoneNo"
                                type="number"
                                onWheel={(event) => event.currentTarget.blur()}
                                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                                onChange={(e) => {
                                  handleChangeInput2(e.target.name, e.target.value, index);
                                }}
                              />
                            </td>
                            <td className={`d-flex`}>
                              <div
                                className={`${styles.addressEdit} d-flex justify-content-center  align-items-start`}
                                onClick={() => {
                                  onEditRemove(index, val);
                                }}
                              >
                                <img className={`${styles.image} mr-3`} src="/static/save-3.svg" alt="save" />
                              </div>
                              <div
                                className={`${styles.addressEdit} d-flex justify-content-center align-items align-items-center`}
                                onClick={() => {
                                  handleRemove(index, val);
                                }}
                              >
                                <img src="/static/delete 2.svg" />
                              </div>
                              {/* <img  onClick={()=>(onEditRemove(index))}src="/static/save-3.svg"  />
                            <img  onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"></img> */}
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
  );
};
