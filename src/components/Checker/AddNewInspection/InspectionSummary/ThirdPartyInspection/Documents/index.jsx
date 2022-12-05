import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../../Table';
import Link from 'next/link';
import Image from 'next/image';

function Index() {
    const tableColumns = useMemo(() => [
        {
            Header: "Document Name",
            accessor: "doc_name",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold text-uppercase">{value}</span>
        },
        {
            Header: "Format",
            accessor: "format",
            Cell: ({ cell: { value } }) => <span className="font-weight-bold badge badge-primary px-3 py-2 text-uppercase">{value}</span>
        },
        {
            Header: "Document Date",
            accessor: "document_date",
            // Cell: ({ value }) => value ? value : 'RM'
        },
        {
            Header: "Uploaded By",
            accessor: "uploaded_by"
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
                        <Link href={`/masters/order-history/`}>
                            <Image
                                height="30px"
                                width="30px"
                                src="/static/blue-eye.svg"
                                alt="Edit"
                            />
                        </Link>
                    </div>
                }
            }
        ])
    };

    const dummyData = [
        {
            'doc_name': 'Pdf',
            'format': 'pdf',
            'document_date': '28-02-2022',
            'uploaded_by': 'John Doe',
        },
        {
            'doc_name': 'Gst Certificate',
            'format': 'pdf',
            'document_date': '28-02-2022',
            'uploaded_by': 'John Doe',
        },
        {
            'doc_name': 'Board Resolution',
            'format': 'pdf',
            'document_date': '28-02-2022',
            'uploaded_by': 'John Doe',
        }
    ];
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
                    data={dummyData}
                    tableHooks={tableHooks}
                />
            </div>
        </div>
    )
}

export default Index