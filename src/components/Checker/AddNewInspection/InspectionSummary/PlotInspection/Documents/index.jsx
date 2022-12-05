import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../../Table';
import Link from 'next/link';
import Image from 'next/image';

function Index({ plotInspectionReport }) {
    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "originalName",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold text-uppercase">{value}</span>
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
            accessor: "uploadedBy"
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
                        <a href={row?.originall?.path} download={row?.original?.name}>
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
                data-target="#upload"
                aria-expanded="true"
                aria-controls="upload"
            >
                <h3 className={styles.heading}>Documents</h3>
                <span>+</span>
            </div>
            <div id="upload" className="collapse mb-n4" aria-labelledby="upload" data-parent="#upload">
                <Table
                    columns={tableColumns}
                    data={plotInspectionReport}
                    tableHooks={tableHooks}
                />
            </div>
        </div>
    )
}

export default Index