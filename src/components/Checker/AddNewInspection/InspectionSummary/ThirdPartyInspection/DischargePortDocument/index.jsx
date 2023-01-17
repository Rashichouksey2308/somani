import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../../Table';
import Link from 'next/link';
import Image from 'next/image';
import { ViewDocument } from 'redux/ViewDoc/action';
import { useDispatch } from 'react-redux';

function Index({ dischargePortDocuments, orderId }) {
    const dispatch = useDispatch();
    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "name",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold text-capitalize">{value?.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}</span>
        },
        {
            Header: "Format",
            accessor: "format",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold badge badge-primary px-3 py-2 text-uppercase">{value}</span>
        },
        {
            Header: "Document Date",
            accessor: "date",
            Cell: ({ value }) => value?.slice(0, 10)
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => {
                let statusClass = '';
                if(value === 'On Hold') {
                    statusClass = 'text-black-50';
                }
                if(value === 'Rejected') {
                    statusClass = 'text-danger';
                }
                if(value === 'Pending') {
                    statusClass = 'text-primary';
                }
                if(value === 'Approved') {
                    statusClass = 'text-success';
                }
                return <span className={`${statusClass} text-capitalize`}>{value}</span>
            }
        },
        {
            Header: "Uploaded By",
            accessor: "uploadedBy",
            Cell: ({ cell: { value } }) => <span className='text-capitalize'>{value?.fName + " " + value?.lName}</span>
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


    return (
        <div className={`${styles.main} m-4 border_color card`}>
            <div
                className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#dischargePortDocuments"
                aria-expanded="true"
                aria-controls="dischargePortDocuments"
            >
                <h3 className={styles.heading}>Discharge Port Documents</h3>
                <span>+</span>
            </div>
            <div id="dischargePortDocuments" className="collapse mb-n4" aria-labelledby="dischargePortDocuments" data-parent="#dischargePortDocuments">
                <Table
                    columns={tableColumns}
                    data={dischargePortDocuments}
                    tableHooks={tableHooks}
                />
            </div>
        </div>
    )
}

export default Index