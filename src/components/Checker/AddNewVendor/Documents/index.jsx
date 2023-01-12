import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Table from '../../../Table';
import Link from 'next/link';
import Image from 'next/image';
import Tooltip from '../../../Tooltip';

function Index({ documents, documentsHistory }) {

    const [lastUpdatedDate, setLastUpdatedDate] = useState();
    const [lastUpdatedDateHistory, setLastUpdatedDateHistory] = useState();

    useEffect(() => {
        if (documents?.length >= 0) {
            let lastUpdatedDate = documents?.reduce((prev, current) => new Date(prev.date) > new Date(current.date) ? prev : current)

            setLastUpdatedDate(lastUpdatedDate?.date?.slice(0, 10) || '--');
        } else {
            setLastUpdatedDate();
        }
    }, [documents]);

    useEffect(() => {
        if (documents?.length >= 0) {
            let lastUpdatedDateHistory = documentsHistory?.reduce((prev, current) => new Date(prev.date) > new Date(current.date) ? prev : current)

            setLastUpdatedDateHistory(lastUpdatedDateHistory?.date?.slice(0, 10) || '--');
        } else {
            setLastUpdatedDateHistory();
        }
    }, [documentsHistory]);

    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "name",
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
            Header: "Uploaded By",
            accessor: "uploadedBy.fName",
            Cell: ({ row }) => <span>{row?.original?.uploadedBy.fName + ' ' + row?.original?.uploadedBy.lName}</span>
        },
    ]);

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Preview",
                Header: "Action",
                Cell: ({ row }) => {
                    return <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
                        <Image
                            height="30px"
                            width="30px"
                            src="/static/blue-eye.svg"
                            alt="Edit"
                        />
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
                    {lastUpdatedDate &&
                        <p className='font-weight-bold label_heading mr-4 d-flex align-items-baseline'>
                            <p className='mr-2'>
                                Last Updated Date:
                            </p>
                            <div>
                                <p className={`${lastUpdatedDateHistory && lastUpdatedDateHistory !== lastUpdatedDate && styles.highlighted_field}`}>
                                    {lastUpdatedDate}
                                </p>
                            </div>
                            {lastUpdatedDateHistory && lastUpdatedDateHistory !== lastUpdatedDate && <Tooltip data={lastUpdatedDateHistory} />}
                        </p>
                    }
                    <span>+</span>
                </div>
            </div>
            <div id="upload" className="collapse mb-n4" aria-labelledby="upload" data-parent="#upload">
                <Table
                    columns={tableColumns}
                    data={documents || []}
                    tableHooks={tableHooks}
                />
            </div>
        </div>
    )
}

export default Index