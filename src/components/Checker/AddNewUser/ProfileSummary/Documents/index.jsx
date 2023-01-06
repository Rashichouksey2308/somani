import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import Table from '../../../../Table';
import Image from 'next/image';
import Tooltip from '../../../../Tooltip';

import { ViewDocument } from 'redux/ViewDoc/action';

function Index({ documents, orderId, documentsHistory }) {
    const dispatch = useDispatch();

    const [lastUpdatedDate, setLastUpdatedDate] = useState();
    const [lastUpdatedDateHistory, setLastUpdatedDateHistory] = useState();

    useEffect(()=>{
        if(documents?.length >= 0){
            let lastUpdatedDate = documents?.reduce((prev, current)=> new Date(prev.date) > new Date(current.date) ? prev : current)

            setLastUpdatedDate(lastUpdatedDate?.date?.slice(0, 10) || '--');
        } else {
            setLastUpdatedDate();
        }
    }, [documents]);

    useEffect(()=>{
        if(documents?.length >= 0){
            let lastUpdatedDateHistory = documentsHistory?.reduce((prev, current)=> new Date(prev.date) > new Date(current.date) ? prev : current)

            setLastUpdatedDateHistory(lastUpdatedDateHistory?.date?.slice(0, 10) || '--');
        } else {
            setLastUpdatedDateHistory();
        }
    }, [documentsHistory]);


    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "name",
            Cell: ({ row, value }) => {
                return documentsHistory.map((docHistory) => (
                    row?.original?._id === docHistory._id
                    &&
                    <>
                        <span className={`font-weight-bold text-uppercase ${docHistory?.name && docHistory?.name !== value && styles.highlighted_field}`}>
                            {value}
                        </span>
                        {docHistory?.name && docHistory?.name !== value && <Tooltip data={docHistory?.name || '--'} />}
                    </>
                ))
            }
        },
        {
            Header: "Format",
            accessor: "format",
            Cell: ({ row, value }) => {
                return documentsHistory.map((docHistory) => (
                    row?.original?._id === docHistory._id
                    &&
                    <>
                        <span className="font-weight-bold badge badge-primary px-3 py-2 text-uppercase">
                            {value.split('/')[1]}
                        </span>
                        {docHistory?.format && docHistory?.format !== value && <Tooltip data={docHistory?.format.split('/')[1] || '--'} />}
                    </>
                ))
            }
        },
        {
            Header: "Document Date",
            accessor: "date",
            Cell: ({ row, value }) => {
                return documentsHistory.map((docHistory) => (
                    row?.original?._id === docHistory._id
                    &&
                    <>
                        <span className={`font-weight-bold text-uppercase ${docHistory?.date && docHistory?.date !== value && styles.highlighted_field}`}>
                            {value?.slice(0, 10)}
                        </span>
                        {docHistory?.date && docHistory?.date !== value && <Tooltip data={docHistory?.date?.slice(0, 10) || '--'} />}
                    </>
                ))
            }
        },
        {
            Header: "Uploaded By",
            accessor: "uploadedBy.fName",
            Cell: ({ row, value }) => {
                return documentsHistory.map((docHistory) => (
                    row?.original?._id === docHistory._id
                    &&
                    <>
                        <span className={`font-weight-bold text-uppercase ${docHistory?.uploadedBy?.fName && docHistory?.uploadedBy?.fName !== value && styles.highlighted_field}`}>
                            {value}
                        </span>
                        {docHistory?.uploadedBy?.fName && docHistory?.uploadedBy?.fName !== value && <Tooltip data={docHistory?.uploadedBy?.fName || '--'} />}
                    </>

                ))
            }
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
                        // onClick={() =>
                        //     dispatch(
                        //         ViewDocument({
                        //             path: row?.original?.path,
                        //             order: orderId,
                        //         }),
                        //     )
                        // }
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
        <div className={`${styles.main} mt-4 border_color card`}>
            <div
                className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#upload"
                aria-expanded="true"
                aria-controls="upload"
            >
                <h3 className={styles.heading}>Documents</h3>
                <div className='d-flex align-items-baseline'>
                    { lastUpdatedDate && 
                        <p className='font-weight-bold label_heading mr-4 d-flex align-items-baseline'>
                            <p className='mr-2'>
                                Last Updated Date:
                            </p>
                            <div>
                                <p className={`${lastUpdatedDateHistory !== lastUpdatedDate && styles.highlighted_field}`}>
                                        {lastUpdatedDate}
                                </p>
                            </div>
                            {lastUpdatedDateHistory !== lastUpdatedDate && <Tooltip data={lastUpdatedDateHistory} />}
                        </p>
                    }
                    <span>+</span>
                </div>
            </div>
            <div id="upload" className="collapse mb-n4" aria-labelledby="upload" data-parent="#upload">
                <Table
                    columns={tableColumns}
                    data={documents}
                    tableHooks={tableHooks}
                />
            </div>
        </div>
    )
}

export default Index