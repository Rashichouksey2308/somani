import React, { useMemo, useState, useEffect } from 'react';
import styles from './index.module.scss';
import Table from '../../../../../Table';
import Link from 'next/link';
import Image from 'next/image';
import { ViewDocument } from 'redux/ViewDoc/action';
import { useDispatch } from 'react-redux';
import { GetDocuments } from 'redux/creditQueueUpdate/action';

function Index({ otherdocuments, orderId }) {
    const dispatch = useDispatch();
    const [moduleSelected, setModuleSelected] = useState('Loading-Transit-Unloading');
    const [filteredDoc, setFilteredDoc] = useState([]);
    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "name",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold text-capitalize">{value.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}</span>
        },
        {
            Header: "Format",
            accessor: "format",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold badge badge-primary px-3 py-2 text-uppercase">{value}</span>
        },
        {
            Header: "Document Date",
            accessor: "date",
            Cell: ({ value }) => value.slice(0, 10)
        },
        {
            Header: "Uploaded By",
            accessor: "uploadedBy",
            Cell: ({ cell: { value } }) => <span className='text-capitalize'>{value}</span>
        }
    ]);

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Preview",
                Header: "Action",
                Cell: ({ row }) => {
                    return <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
                        <a className="cursor-pointer"
                            onClick={() =>
                                dispatch(
                                    ViewDocument({
                                        path: row?.original?.path,
                                        order: orderId,
                                    }),
                                )
                            }
                        >
                            <Image
                                height="30px"
                                width="30px"
                                src="/static/blue-eye.svg"
                                alt="Edit"
                            />
                        </a>
                    </div>
                }
            }
        ])
    };

    const filterDocBySearch = (val) => {
        if (!val.length >= 3) return;
        const tempArray = filteredDoc?.filter((doc) => {
            if (doc.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                return doc;
            }
        });
        setFilteredDoc(tempArray);
    };

    useEffect(() => {
        const tempArray = otherdocuments?.filter((doc) => {
            return doc.module == moduleSelected;
        });
        setFilteredDoc(tempArray);
        dispatch(GetDocuments(`?order=${orderId}`));
    }, [dispatch, orderId, moduleSelected]);

    useEffect(() => {
        const tempArray = otherdocuments
            ?.slice()
            .filter((doc) => {
                return doc.module === moduleSelected && !doc.deleted;
            })
            .map((obj) => ({ ...obj, moving: false }));

        setFilteredDoc(tempArray);
    }, [orderId, otherdocuments]);


    return (
        <div className={`${styles.main} m-4 border_color card`}>
            <div
                className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#upload"
                aria-expanded="true"
                aria-controls="upload"
            >
                <h3 className={styles.heading}>Other Documents</h3>
                <span>+</span>
            </div>
            <div id="upload" className="collapse mb-n4" aria-labelledby="upload" data-parent="#upload">
                <div className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-between align-items-center`}>
                    <div className="d-flex align-items-center">
                        <select
                            value={moduleSelected}
                            onChange={(e) => setModuleSelected(e.target.value)}
                            className={`${styles.dropDown} ${styles.customSelect} input form-control`}
                        >
                            <option selected disabled>
                                Select an option
                            </option>
                            <option value="LeadOnboarding&OrderApproval">Lead Onboarding &amp; Order Approval</option>
                            <option value="Agreements&Insurance&LC&Opening">Agreements, Insurance &amp; LC Opening</option>
                            <option value="Loading-Transit-Unloading">Loading-Transit-Unloading</option>
                            <option value="customClearanceAndWarehousing">Custom Clearance And Warehousing</option>
                            <option value="PaymentsInvoicing&Delivery">Payments Invoicing & Delivery</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className={`d-flex align-items-center ${styles.searchBarContainer} `}>
                        <img className={` ${styles.searchImage} img-fluid`} src="/static/search.svg" alt="Search"></img>
                        <input
                            className={`${styles.searchBar} statusBox border_color input form-control`}
                            placeholder="Search"
                            onChange={(e) => {
                                filterDocBySearch(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <Table
                    columns={tableColumns}
                    data={filteredDoc?.filter((doc) => !doc.deleted)}
                    tableHooks={tableHooks}
                />
            </div>
        </div>
    )
}

export default Index