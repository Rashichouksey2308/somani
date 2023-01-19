import { useEffect, useMemo, useState } from 'react';
import Table from '../../../../../Table';
import Toggle from '../../../../../../components/Toggle/index';
import Tooltip from '../../../../../Tooltip';
import styles from './index.module.scss';

function Index({ postDatedCheques, postDatedChequesHistory }) {

    const [modifiedPostChequesData, setModifiedPostChequesData] = useState([]);
  
    useEffect(() => {
      modifyPostDatedChequesData();
    }, [postDatedCheques, postDatedChequesHistory]);
  
    const modifyPostDatedChequesData = () => {
      let finalData = [];
      let curr;
      for (let i = 0; i < postDatedCheques?.length; i++) {
  
        curr = postDatedCheques[i];
  
        let history;
  
        history = postDatedChequesHistory && postDatedChequesHistory?.find((cheque) => cheque?._id === curr?._id);
  
        if (history) {
          curr = {
            ...curr,
            history
          }
        }
        finalData.push(curr)
      }
      setModifiedPostChequesData(finalData);
    };

    const tableColumns = useMemo(() => [
        {
            Header: 'S NO.',
            accessor: 'sNo',
        },
        {
            Header: '	BANK NAME.',
            accessor: 'bankName',
            Cell: ({ row, value }) => <>
                <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.bankName && row?.original?.history?.bankName !== value && styles.highlighted_field}`}>
                    {value || '--'}
                </span>
                {row?.original?._id === row?.original?.history?._id && row?.original?.history?.bankName && row?.original?.history?.bankName !== value && <Tooltip data={row?.original?.history?.bankName || '--'} />}
            </>
        },
        {
            Header: '	CHEQUE NO.',
            accessor: 'chequeNo',
            Cell: ({ row, value }) => <>
                <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.chequeNo && row?.original?.history?.chequeNo !== value && styles.highlighted_field}`}>
                    {value || '--'}
                </span>
                {row?.original?._id === row?.original?.history?._id && row?.original?.history?.chequeNo && row?.original?.history?.chequeNo !== value && <Tooltip data={row?.original?.history?.chequeNo || '--'} />}
            </>
        },
        {
            Header: 'CHEQUE DATE',
            accessor: 'chequeDate',
            Cell: ({ row, value }) => <>
                <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.chequeDate && row?.original?.history?.chequeDate !== value && styles.highlighted_field}`}>
                    {value?.slice(0,10) || '--'}
                </span>
                {row?.original?._id === row?.original?.history?._id && row?.original?.history?.chequeDate && row?.original?.history?.chequeDate !== value && <Tooltip data={row?.original?.history?.chequeDate?.slice(0, 10) || '--'} />}
            </>
        },
        {
            Header: 'AMOUNT',
            accessor: 'amount',
            Cell: ({ row, value }) => <>
                <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.amount && row?.original?.history?.amount !== value && styles.highlighted_field}`}>
                    {value || '--'}
                </span>
                {row?.original?._id === row?.original?.history?._id && row?.original?.history?.amount && row?.original?.history?.amount !== value && <Tooltip data={row?.original?.history?.amount || '--'} />}
            </>
        },
    ]);

    const onToggle = (state) => { };

    return (
        <Toggle onToggle={onToggle}>
            {({ on, onToggle }) => (
                <div onClick={onToggle} className={`${styles.main} vessel_card mx-4 mt-4 card border_color`}>
                    <div
                        className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                        data-toggle="collapse"
                        data-target="#deliveryTermsTbl"
                        aria-expanded="true"
                        aria-controls=" deliveryTermsTbl"
                    >
                        <h3 className={styles.heading}>Details of post-dated Cheque(s)- </h3>
                        <span>{on ? '+' : '-'}</span>
                    </div>

                    <div id="deliveryTermsTbl" className="collapse" aria-labelledby="deliveryTermsTbl">
                        <div className="generic-table">
                            <Table columns={tableColumns} data={modifiedPostChequesData || []} />
                        </div>
                    </div>
                </div>
            )}
        </Toggle>
    )
}

export default Index;