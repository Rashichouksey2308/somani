/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import { AddingDocument, changeModuleDocument, DeleteDocument, GetDocuments } from 'redux/creditQueueUpdate/action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import TermsheetPopUp from '../TermsheetPopUp';
import { ShareDocument } from 'redux/shareDoc/action';
import { emailValidation } from 'utils/helper';
import { dropDownOptionHandler, handleErrorToast, objectValidator, returnDocFormat } from '@/utils/helpers/global';
import { getDocuments } from '../../redux/masters/action';
import { modulesDropDown } from '@/utils/jsons/dropdownOptions.json';

const Index = ({ orderId, uploadDocument1, module, documentName, lcDoc, setLcDoc, isOpen, isSupplier }) => {
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState(true);
  const [open, setOpen] = useState(false);
  const openbar = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  let d = new Date();

  const { documentsFetched } = useSelector((state) => state.review);

  const [filteredDoc, setFilteredDoc] = useState([]);

  const [moduleSelected, setModuleSelected] = useState(module);
 const { getDocumentsMasterData } = useSelector((state) => state.MastersData);
  const [sharedDoc, setSharedDoc] = useState({
    company: '',
    order: '',
    path: '',
    data: {
      subject: 'this is subject',
      text: 'this is text',
      receiver: '',
    },
  });
 useEffect(() => {
    
    dispatch(getDocuments());
  }, []);
  const fetchData = async () => {
    sessionStorage.setItem('DocRefetchId', orderId);

    dispatch(GetDocuments(`?order=${orderId}`));
  };
  useEffect(() => {
    if (documentsFetched) {
      if (isSearch) {
        const tempArray = documentsFetched?.documents?.filter((doc) => {
          if (doc.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return doc;
          }
        });

        setFilteredDoc(tempArray);
        return;
      }
      const tempArray = JSON.parse(JSON.stringify(documentsFetched?.documents)).filter((doc) => {
        return doc.module == moduleSelected;
      });
      tempArray?.forEach((obj) => (obj.moving = false));

      setFilteredDoc(tempArray);
    }
  }, [dispatch, orderId, documentsFetched]);
  // useEffect(() => {
  //   const tempArray = documentsFetched?.documents
  //     ?.slice()
  //     .filter((doc) => {
  //       return doc.module === moduleSelected;
  //     })
  //     .map((obj) => ({ ...obj, moving: false }));

  //   setFilteredDoc(tempArray);
  // }, [orderId, documentsFetched]);
  useEffect(() => {
    fetchData();
  }, [orderId, moduleSelected]);

  const DocDlt = (index) => {
    let tempArray = filteredDoc;
    tempArray.pop(index);
    setFilteredDoc(tempArray);
  };

  const [manualDocModule, setManualDocModule] = useState(true);

  const [newDoc, setNewDoc] = useState({
    document: null,
    order: orderId,
    name: '',
    module: module ? module : 'Agreements&Insurance&LC&Opening',
  });

  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...newDoc };
    newUploadDoc1.document = e.target.files[0];
    setNewDoc(newUploadDoc1);
  };
  const [openDropdown, setDropdown] = useState(false);

  const uploadDocumentHandler = async (e) => {
    e.preventDefault();
    if (newDoc.document === null) {
      handleErrorToast('please select A Document')
    } else if (newDoc.name === '') {
      handleErrorToast('please provide a valid document name')
    } else {
      const fd = new FormData();

      fd.append('document', newDoc.document);
      fd.append('module', module);
      fd.append('order', orderId);
      fd.append('name', newDoc.name);

      let code = await   dispatch(AddingDocument(fd));
      if(code==200){
        setNewDoc({
                document: null,
                order: orderId,
                name: '',
                module: module ? module : 'Agreements&Insurance&LC&Opening',
              });
       await  dispatch(GetDocuments(`?order=${orderId}`));
      }
      
    }
  };

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false);
    } else {
      setEditInput(true);
      setNewDoc({ ...newDoc, [e.target.id]: e.target.value });
    }
  };

  const handleNewDocModule = (e) => {
    if (e.target.value === 'others') {
      setManualDocModule(false);
    } else {
      document.getElementById('otherDocName').value = '';
      setManualDocModule(true);
      setNewDoc({ ...newDoc, name: e.target.value });
    }
  };

  const handleCloseDoc = () => {
    setNewDoc({
      document: [],
      order: orderId,
      name: '',
      module: module,
    });
  };
  const [isSearch, setIsSearch] = useState(false);

  const [searchTerm, setSearchTerms] = useState('');

  const filterDocBySearch = (val) => {
    if (!val.length >= 3) return;
    const tempArray = documentsFetched?.documents?.filter((doc) => {
      if (doc.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        return doc;
      }
    });
    setIsSearch(true);
    setFilteredDoc(tempArray);
  };

  const handleDocModuleChange = (index) => {
    let tempArray = [...filteredDoc];
    tempArray[index].moving = true;
    setFilteredDoc(tempArray);
  };

  const handleShareDoc = async (doc) => {
    if (emailValidation(sharedDoc.data.receiver)) {
      let tempArr = { ...sharedDoc };
      tempArr.company = documentsFetched.company;
      tempArr.order = orderId;
      let data = await dispatch(ShareDocument(tempArr));
      if (data?.code == 200) {
        close();
      }
    } else {
      let toastMessage = 'please provide a valid email';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  };

  return (
    <div className={`${styles.upload_main} vessel_card border_color upload_main`}>
      <div
        className={`${styles.head_container} border_color align-items-center d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#uploadOther"
        aria-expanded="true"
        aria-controls="uploadOther"
      >
        <h3 className={`${styles.heading} mb-0`}>Document</h3>
        <span>+</span>
      </div>
      <div
        id="uploadOther"
        className={!isOpen ? 'collapse' : ''}
        aria-labelledby="uploadOther"
        data-parent="#uploadOther"
      >
        <div className={styles.table_container}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr>
                    <th>
                      DOCUMENT NAME{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th>
                      FORMAT{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th>
                      DOCUMENT DATE{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th width="30%">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td className={styles.doc_name}>
                      {documentName} <strong className="text-danger ml-0">*</strong>{' '}
                    </td>

                    <td>
                      { lcDoc?.lcDraftDoc?.documentName ? returnDocFormat(lcDoc?.lcDraftDoc?.documentName ) : lcDoc?.lcDraftDoc?.name ? returnDocFormat(lcDoc?.lcDraftDoc?.name ) : null}
                    </td>
                    <td className={styles.doc_row}>
                      {lcDoc && lcDoc?.lcDraftDoc?.lastModifiedDate ? moment(d).format('DD-MM-YYYY,HH:mm A') : lcDoc?.lcDraftDoc?.documentDate ? moment(lcDoc?.lcDraftDoc?.documentDate).format('DD-MM-YYYY,HH:mm A') : ''}
                    </td>
                    <td colSpan={2}>
                      {lcDoc && lcDoc.lcDraftDoc === null ||lcDoc.lcDraftDoc.name === null ? (
                        <>
                          <div className={styles.uploadBtnWrapper}>
                            <input
                              type="file"
                              name="myfile"
                              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                              onChange={(e) => uploadDocument1(e)}
                            />
                            <button className={`${styles.button_upload} btn`}>Upload</button>
                          </div>
                        </>
                      ) : (
                        <div
                          className={`${styles.certificate} text1 d-flex align-items-center justify-content-between`}
                        >
                          <span>{lcDoc?.lcDraftDoc?.name ?? lcDoc?.lcDraftDoc?.documentName}</span>
                          <img
                            onClick={(e) =>
                              setLcDoc({
                                lcDraftDoc: null,
                              })
                            }
                            className={`${styles.close_image} image_arrow mx-2`}
                            src="/static/close.svg"
                            alt="Close"
                          />{' '}
                        </div>
                      )}
                    </td>
                  </tr>
                  {isSupplier ? (
                    <tr className="table_row">
                      <td className={styles.doc_name}>
                        Third Party Certificate <strong className="text-danger ml-0">*</strong>
                      </td>

                      <td>
                        <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                      </td>
                      <td className={styles.doc_row}></td>
                      <td colSpan={2}>
                        <div className={styles.uploadBtnWrapper}>
                          <input
                            type="file"
                            name="myfile"
                            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                            onChange={(e) => uploadDocument1(e)}
                          />
                          <button className={`${styles.button_upload} btn`}>Upload</button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    ' '
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboard_form} card-body rounded-0`}>
          <Form>
            <div className="row align-items-center pb-4">
              <div className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}>
                <div className="text-center w-100">
                  <img
                    className={`${styles.upload_image} img-fluid d-block mx-auto`}
                    src="/static/browse.svg"
                    alt="Browse"
                    onChange={(e) => uploadDocument2(e)}
                  />
                  {newDoc?.document?.name ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={`${styles.certificate} text1 d-inline-flex justify-content-between`}>
                        <span>{newDoc?.document?.name}</span>
                        <img
                          className={`${styles.close_image} image_arrow mx-2`}
                          src="/static/close.svg"
                          onClick={(e) => handleCloseDoc()}
                          alt="Close"
                        />{' '}
                      </div>
                    </div>
                  ) : (
                    <p className={styles.drop_para}>
                      Drop Files here or
                      <br />
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          onChange={(e) => uploadDocument2(e)}
                          type="file"
                          name="myfile"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                        />

                        <a href="#">Browse</a>
                      </div>
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-4 offset-md-1 col-sm-6">
                <Form.Group className={styles.form_group}>
                  <div className="d-flex">
                    <select
                      className={`${styles.value} ${styles.customSelect} input form-control`}
                      value={manualDocModule ? newDoc.name : 'others'}
                      id="name"
                      onChange={(e) => handleNewDocModule(e)}
                    >
                      {' '}
                      <option value="" disabled>
                        Select an option
                      </option>
                      {getDocumentsMasterData
                          ?.filter((val, index) => {
                          
                            if (module.includes(val.Sub_Module)) {
                              return val;
                            }
                          })
                          ?.map((val, index) => {
                            return <option value={`${val.Document_Name}`}>{val.Document_Name}</option>;
                          })}
                      <option value="others">Others</option>
                    </select>
                    <Form.Label className={`${styles.label} label_heading`}>Document Type</Form.Label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
               
                <Form.Group className={`${styles.form_group}`}>
                  <input
                    id="otherDocName"
                    onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
                    className={`${styles.value} input form-control`}
                    type="text"
                    disabled={manualDocModule}
                  />
                  <Form.Label className={`${styles.label} label_heading`}>Please Specify Document Name</Form.Label>
                </Form.Group>
                <div onClick={(e) => uploadDocumentHandler(e)} className={styles.uploadBtnWrapper}>
                  <button className={`${styles.upload_button} btn`}>Upload</button>
                </div>
              </div>
            </div>
          </Form>
        </div>

        <div className={styles.table_container}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <div
                className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex align-items-center">
                  <select
                   value={moduleSelected}
                   onChange={(e) => {
                    setSearchTerms('');
                    setIsSearch(false);
                    setModuleSelected(e.target.value);
                  }}
                    className={`${styles.dropDown} ${styles.customSelect} statusBox input form-control`}
                  >
                    <option selected disabled>
                      Select an option
                    </option>
                    {modulesDropDown.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
                  </select>
                  <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
                </div>
                <div className={`d-flex align-items-center ${styles.searchBarContainer} `}>
                  <img className={` ${styles.searchImage} img-fluid`} src="/static/search.svg" alt="Search"></img>
                  <input
                    className={`${styles.searchBar} statusBox border_color input form-control`}
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchTerms(e.target.value);
                      filterDocBySearch(e.target.value);
                    }}
                    value={searchTerm}
                  ></input>
                </div>
              </div>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr>
                    <th>
                      DOCUMENT NAME{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th>
                      FORMAT{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th>
                      DOCUMENT DATE{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th>
                      UPLOADED BY{' '}
                      <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                    </th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {documentsFetched &&
                    filteredDoc?.map((document, index) => {
                      if (document.deleted) {
                        return null;
                      } else {
                        return (
                          <tr key={index} className="uploadRowTable">
                            <td className={`${styles.doc_name}`}>{document.name}</td>
                            <td>
                             {returnDocFormat(document.originalName)}
                            </td>
                            <td className={styles.doc_row}>{moment(document.date).format('DD-MM-YYYY, h:mm A')}</td>
                            <td className={styles.doc_row}>
                              {document.uploadedBy?.fName} {document.uploadedBy?.lName}
                            </td>
                            <td>
                              <span className={`${styles.status} ${styles.approved}`}></span>
                              {document?.verification?.status}
                            </td>
                            <td colSpan="2">
                              <img
                                onClick={async (e) => {
                                  DocDlt(index);
                                 await   dispatch(
                                    DeleteDocument({
                                      orderDocumentId: documentsFetched._id,
                                      name: document.name,
                                    }),
                                  );
                                await  dispatch(GetDocuments(`?order=${orderId}`));
                                }}
                                src="/static/delete.svg"
                                className={`${styles.delete_image} mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className={`${styles.upload} mr-3`}
                                alt="Share"
                                onClick={() => {
                                  openbar();
                                  setSharedDoc({
                                    ...sharedDoc,
                                    path: document.path,
                                  });
                                }}
                              />
                              {!document.moving ? (
                                <img
                                  src="/static/drive_file.svg"
                                  className={`${styles.edit_image} mr-3`}
                                  alt="Share"
                                  onClick={() => {
                                    handleDocModuleChange(index);
                                  }}
                                />
                              ) : (
                                <div className="d-inline-block" style={{ marginRight: '25px' }}>
                                  <div className="d-flex align-items-center">
                                    <select
                                      value={moduleSelected}
                                      onChange={async (e) => {
                                       await  dispatch(
                                          changeModuleDocument({
                                            orderDocumentId: documentsFetched._id,
                                            name: document.name,
                                            module: e.target.value,
                                          }),
                                        );
                                        await fetchData();
                                        DocDlt(index);
                                      }}
                                      className={`${styles.dropDown} ${styles.customSelect} shadow-none input form-control`}
                                      style={{
                                        width: '150px',
                                        paddingRight: '30px',
                                      }}
                                    >
                                     {modulesDropDown.map((item) => (
                                        <option disabled={moduleSelected === item.value} value={item.value}>
                                          {item.name}
                                        </option>
                                      ))}
                                    </select>
                                    <img
                                      className={`${styles.arrow2} img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="Search"
                                    />
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <TermsheetPopUp
          close={close}
          open={open}
          istermsheet
          shareEmail={handleShareDoc}
          setEmail={(e) =>
            setSharedDoc({
              ...sharedDoc,
              data: { ...sharedDoc.data, receiver: e },
            })
          }
        />
      ) : null}
    </div>
  );
};

export default Index;
