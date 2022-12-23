/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';

function Index(props) {
  const [excelData, setExcelData] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [value, setValue] = useState('');
  const [editField, setEditField] = useState(false);
  const [doc, setdoc] = useState({ attachDoc: '' });

  useEffect(() => {
    if (props.saveData == true && props.active == 'Product Specifications') {
      let temp = [];
      addressList.forEach((val) => {
        temp.push(val.value);
      });
      let data = {
        addressList: temp,
        excelData: excelFile || [],
      };
      props.sendData('Product Specifications', data);
    }
    if (props.submitData == true && props.active == 'Product Specifications') {
      let temp = [];
      addressList.forEach((val) => {
        temp.push(val.value);
      });
      let data = {
        addressList: temp,
        excelData: excelFile || [],
      };

      props.updateData('Product Specifications', data);
    }

    // setSupplierState({...supplierState,multiParty:props.multiPart})
  }, [props.saveData, props.submitData]);
  const onAddressRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)]);
  };
  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('Product')) {
        let savedData = JSON.parse(sessionStorage.getItem('Product'));
        let temp = [];
        savedData.list.forEach((val, index) => {
          temp.push({ value: val, action: false });
        });
        setExcelFile(savedData.excel);
        setAddressList(temp);
      } else {
        let temp = [];
        props?.data?.comments.forEach((val, index) => {
          temp.push({ value: val, action: false });
        });
        setExcelFile(props?.data?.specificationTable);
        setAddressList(temp);
      }
    }
  }, [props]);

  const handleEditAddressInput = (index) => {
    setAddressList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, action: !obj.action };
        }

        return obj;
      });

      return newState;
    });
  };
  const handleAddressInput = () => {
    setAddressList([...addressList, { value: value, action: false }]);
  };
  const handleInput = (val, index) => {
    setAddressList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, value: val };
        }

        return obj;
      });

      return newState;
    });
  };
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
   
    if( e.target.files[0]){
    let extention =  e.target.files[0].name.split('.')
    
    if(!["csv","xls","xlsx"].includes(extention[extention.length-1])){
      let  toastMessage = `Please add valid file `;
        toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
        });
    
      return
     }
    }
    
      
   
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        setExcelData(e.target.result);
      };
    } else {
    }
  };

  useEffect(() => {
    if (excelData !== null) {
      const workbook = XLSX.read(excelData, { type: 'buffer' });
      const workSheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);

      setExcelFile(data);
    }
  }, [excelData]);

  return (
    <>
      <div className={`${styles.container} vessel_card`}>
        <div className={`${styles.paymet} card-body`}>
          <div className={`d-flex justify-content-between align-items-between`}>
            <textarea
              rows="4"
              placeholder={``}
              className="input"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <img
              className={`${styles.add_btn} ml-4`}
              src="/static/add-btn.svg"
              alt="add button"
              onClick={() => {
                handleAddressInput();
                setValue('');
              }}
            ></img>
          </div>
          <div className={`${styles.button_container} d-flex justify-content-start  align-items-center `}>
            {doc.attachDoc == '' ? (
              <div className={styles.uploadBtnWrapper}>
                <input
                  type="file"
                  name="myfile"
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  
                  onChange={handleFile}
                />
                <button className={`${styles.button_upload2} btn`}>Upload Specifications</button>
              </div>
            ) : (
              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                <span>{doc.attachDoc}</span>
                <img
                  className={`${styles.close_image}  image_arrow`}
                  src="/static/close.svg"
                  onClick={() => setdoc({ attachDoc: '' })}
                  alt="Close"
                />{' '}
              </div>
            )}
            <div className={`${styles.file_text}`}>
              <span>
                ONLY .XLS FILES ARE ALLOWED <br /> &nbsp; &nbsp; &amp; MAX
                FILE SIZE UP TO 50 MB
              </span>
            </div>
            {excelFile?.length > 0 ? (
              <div
                className={`${styles.excel_close}
             d-flex align-items-center justify-content-center ml-auto`}
                onClick={() => {
                  setExcelFile(null);
                  setExcelData(null);
                }}
              >
                <img src="/static/close-b.svg" alt="Close" />
              </div>
            ) : null}
          </div>
          <div className={styles.tableWrapper}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table>
                  <tr>
                    {excelFile &&
                      excelFile.length > 0 &&
                      Object.keys(excelFile[0]).map((val, index) => <th key={index}>{val}</th>)}
                  </tr>
                  {excelFile &&
                    excelFile.length > 0 &&
                    excelFile.map((item, index) => (
                      <tr>
                        {Object.values(item).map((value, id) => (
                          <td key={id}>{value}</td>
                        ))}
                      </tr>
                    ))}
                </table>
              </div>
            </div>
          </div>

          <span>Comments</span>
          {addressList?.length > 0 &&
            addressList.map((val, index) => {
              return (
                <>
                  <div className={`d-flex justify-content-between align-items-center ${styles.comment}`}>
                    <textarea
                      required
                      rows="4"
                      type="text"
                      name="bankName"
                      value={val.value}
                      onChange={(e) => {
                        handleInput(e.target.value, index);
                      }}
                      className="input"
                      readOnly={!val.action}
                    />
                    <div className={`d-flex justify-content-evenly align-items-center`}>
                      {val.action ? (
                       <img
                       src="/static/save-3.svg"
                       className={`${styles.image} ml-4 mr-3`}
                       alt="save"
                       onClick={(e) => {
                         handleEditAddressInput(index);
                       }}
                     />
                      ) : (
                        <img
                        className={`${styles.image} ml-4 mr-3`}
                        src="/static/mode_edit.svg"
                        alt="edit button"
                        onClick={() => {
                          handleEditAddressInput(index);
                        }}
                     />
                       
                      )}
                      <img
                        src="/static/delete 2.svg"
                        className={`${styles.delete}`}
                        alt="delete"
                        onClick={() => {
                          onAddressRemove(index);
                        }}
                      ></img>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Index;
