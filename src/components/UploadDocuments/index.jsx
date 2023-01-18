/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import { Form } from 'react-bootstrap';
import styles from './index.module.scss';
import moment from 'moment';
import TermsheetPopUp from '../TermsheetPopUp';
import { toast } from 'react-toastify';
import Table from '../Table';
import Link from 'next/link';
import Image from 'next/image';

const Index = ({ allDocuments, setAllDocuments }) => {

    const loggedInUser = JSON.parse(localStorage.getItem("logged_in_user"));

    const [newDoc, setNewDoc] = useState({
        document: null,
        name: '',
    });

    const [open, setOpen] = useState(false);


    const close = () => {
        setOpen(false);
    };

    const DocDlt = (index) => {
        setAllDocuments([...allDocuments.slice(0, index), ...allDocuments.slice(index + 1)]);
    };


    const handleCloseDoc = () => {
        setNewDoc({
            document: [],
            order: orderid,
            name: '',
            module: module,
        });
    };

    const uploadDocument2 = (e) => {
        const newUploadDoc1 = { ...newDoc };
        newUploadDoc1.document = e.target.files[0];
        setNewDoc(newUploadDoc1);
    };

    const addDocumentHandler = (e) => {
        e.preventDefault();
        if (newDoc.document === null) {
            let toastMessage = 'please select A Document';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
        } else if (newDoc.name === '') {
            let toastMessage = 'please provide a valid document name';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
        } else {
            let _allDocuments = [...allDocuments];
            newDoc['date'] = moment(new Date()).format('DD.MM.yyyy HH:mm');
            _allDocuments.push(newDoc);
            setAllDocuments(_allDocuments);
            setNewDoc({ document: null, name: '' });
        }
    };

    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "name",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold text-uppercase">{value}</span>
        },
        {
            Header: "Format",
            accessor: "document.type",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold badge badge-primary px-3 py-2 text-uppercase">{value}</span>
        },
        {
            Header: "Document Date",
            accessor: "date",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold text-uppercase">{value}</span>
        },
        {
            Header: "Uploaded By",
            accessor: "uploaded_by",
            Cell: ({ cell: { value } }) => <span className='text-capitalize'>{loggedInUser?.fName + " " + loggedInUser?.lName}</span>
        }
    ]);

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Preview",
                Header: "Action",
                Cell: ({ row }) => {
                    return <div className={`${styles.edit_image} img-fluid badge badge-outline`} onClick={() => { DocDlt(row.id) }}>
                        <Image
                            height="22px"
                            width="22px"
                            src="/static/delete.svg"
                            alt="Delete"
                        />
                    </div>
                }
            }
        ])
    };

    return (
        <div className={`${styles.upload_main} vessel_card border_color card mt-4`}>
            <div
                className={`${styles.head_container} border_color d-flex  align-items-center justify-content-between`}
                data-toggle="collapse"
                data-target="#uploadOther"
                aria-expanded="true"
                aria-controls="uploadOther"
            >
                <h3 className={styles.heading}>Documents</h3>
                <span>+</span>
            </div>
            <div id="uploadOther" className="collapse show" aria-labelledby="uploadOther" data-parent="#uploadOther">
                <div className={`${styles.dashboard_form} vessel_card card-body`}>
                    <Form>
                        <div className="row align-items-center vessel_card pb-4">
                            <div className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}>
                                <div className="text-center w-100">
                                    <img
                                        className={`${styles.upload_image} img-fluid d-block mx-auto`}
                                        src="/static/browse.svg"
                                        alt="Browse"
                                    />
                                    {newDoc?.document?.name ? (

                                        <div className={`${styles.certificate} text1 d-inline-flex justify-content-between`}>
                                            <span>{newDoc?.document?.name}</span>
                                            <img
                                                className={`${styles.close_image} image_arrow mx-2`}
                                                src="/static/close.svg"
                                                onClick={(e) => handleCloseDoc()}
                                                alt="Close"
                                            />{' '}
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
                                <Form.Group className={`${styles.form_group}`}>
                                    <input
                                        id="otherDocName"
                                        onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
                                        value={newDoc.name}
                                        className={`${styles.value} input form-control`}
                                        type="text"
                                    />
                                    <Form.Label className={`${styles.label} label_heading`}>Please Specify Document Name<strong className="text-danger ml-1">*</strong></Form.Label>
                                </Form.Group>
                                <div onClick={(e) => addDocumentHandler(e)} className={styles.uploadBtnWrapper}>
                                    <button className={`${styles.upload_button} btn`}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div id="upload" className='mx-3'>
                    <Table
                        columns={tableColumns}
                        data={allDocuments}
                        tableHooks={tableHooks}
                    />
                </div>
            </div >
            {
                open ? (
                    <TermsheetPopUp
                        close={close}
                        open={open}
                        istermsheet
                    />
                ) : null}
        </div >
    );
};

export default Index;
