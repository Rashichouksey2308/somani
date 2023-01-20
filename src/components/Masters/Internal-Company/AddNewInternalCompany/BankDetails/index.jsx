import React, { useState } from 'react';
import styles from '../index.module.scss';
import BankComponent from './BankComponent';
import { internalCompanybankValidtion } from '@/utils/helpers/review';

const Index = ({
    bankDetails,
    setBankDetails,
    companyTypeRadio
}) => {
    const [bankData, setBankData] = useState({
        IFSC: '',
        Bank_Name: '',
        Branch_Address: '',
        Account_No: '',
        gstin: '',
        Swift_Code: '',
        AD_Code: '',
    });
    const [showBank, setShowBank] = useState(true);
    const [IndexBank, setIndexBank] = useState('0');
    const [showEditBank, setShowEditBank] = useState(false);

    const [editBank, setEditBank] = useState({
        IFSC: '',
        Bank_Name: '',
        Branch_Address: '',
        Account_No: '',
        gstin: '',
        Swift_Code: '',
        AD_Code: '',
    });

    const handleBankChange = (name, value) => {
        const newInput = { ...bankData };
        newInput[name] = value;

        setBankData(newInput);
    };

    const handleBankClick = () => {
        if (internalCompanybankValidtion(bankData, companyTypeRadio)) {
            bankDataArr(bankData);
            setBankData({
                IFSC: '',
                Bank_Name: '',
                Branch_Address: '',
                Account_No: '',
                gstin: '',
                Swift_Code: '',
                AD_Code: '',
            });
        }
    };

    const handleBankCancel = () => {
        setBankData({
            IFSC: '',
            Bank_Name: '',
            Branch_Address: '',
            Account_No: '',
            gstin: '',
            Swift_Code: '',
            AD_Code: '',
        });
    };

    const editBankArr = (index) => {
        setShowBank(false);
        setShowEditBank(true);
        setIndexBank(index);

        let tempArr = bankDetails;
        setEditBank({
            IFSC: tempArr[index].IFSC,
            Bank_Name: tempArr[index].Bank_Name,
            Branch_Address: tempArr[index].Branch_Address,
            Account_No: tempArr[index].Account_No,
            gstin: tempArr[index].gstin,
            email: tempArr[index].email,
            Swift_Code: tempArr[index].Swift_Code,
            AD_Code: tempArr[index].AD_Code,
        });
    };

    const changeBankData = (name, value) => {
        const newInput = { ...editBank };
        newInput[name] = value;

        setEditBank(newInput);
    };

    const handleBankEditCancel = () => {
        setEditBank({
            GSTIN: '',
            addressType: '',
            branch: '',
            city: '',
            state: '',
            fullAddress: '',
            email: '',
            pinCode: '',
        });
    };

    const bankDataArr = (bank) => {
        const newArr = [...bankDetails];
        newArr.push(bank);
        setBankDetails(newArr);
    };

    const updateBankDataArr = (newData, index) => {
        setBankDetails((prevState) => {
            const newState = prevState.map((obj, i) => {
                if (i === index) {
                    return newData;
                }

                return obj;
            });

            return newState;
        });
    };

    const deleteBank = (index) => {
        setBankDetails([...bankDetails.slice(0, index), ...bankDetails.slice(index + 1)]);
    };

    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#bankDetails"
                aria-expanded="true"
                aria-controls="bankDetails"
            >
                <h3 className={`${styles.heading} mb-0`}>Bank Details</h3>
                <span>+</span>
            </div>
            <div id="bankDetails" className="collapse" aria-labelledby="bankDetails">
                <div className={`${styles.dashboard_form} card-body`}>
                    {showBank ? (
                        <BankComponent
                            companyTypeRadio={companyTypeRadio}
                            bankData={bankData}
                            handleBankChange={handleBankChange}
                            handleBankClick={handleBankClick}
                            handleBankCancel={handleBankCancel}
                        />
                    ) : null}
                    {showEditBank ? (
                        <BankComponent
                            companyTypeRadio={companyTypeRadio}
                            index={IndexBank}
                            showEditBank={showEditBank}
                            setShowBank={setShowBank}
                            setShowEditBank={setShowEditBank}
                            bankData={editBank}
                            editBank={editBank}
                            handleBankChange={changeBankData}
                            handleBankClick={updateBankDataArr}
                            handleBankCancel={handleBankEditCancel}
                        />
                    ) : null}
                </div>
                {bankDetails &&
                    bankDetails?.length > 0 &&
                    bankDetails?.map((val, index) => (
                        <div key={index} className={`${styles.table_form} mb-4`}>
                            <div className={styles.table_container}>
                                <div className={styles.table_scroll_outer}>
                                    <div className={styles.table_scroll_inner}>
                                        {companyTypeRadio === 'domestic' ? (
                                            <table className={`${styles.table} mb-0 table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                    <tr>
                                                        <th>BANK NAME</th>
                                                        <th>ACCOUNT NO.</th>
                                                        <th>IFSC</th>
                                                        <th>AD CODE</th>
                                                        <th>BRANCH ADDRESS</th>
                                                        <th>ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{val.Bank_Name}</td>
                                                        <td>{val.Account_No}</td>
                                                        <td>{val.IFSC}</td>
                                                        <td>{val.AD_Code}</td>
                                                        <td>{val.Branch_Address}</td>
                                                        <td>
                                                            <div>
                                                                <img
                                                                    src="/static/mode_edit.svg"
                                                                    className={`${styles.edit_image} mr-3`}
                                                                    alt="edit"
                                                                    onClick={() => {
                                                                        editBankArr(index);
                                                                    }}
                                                                />

                                                                <img
                                                                    src="/static/delete 2.svg"
                                                                    className={`${styles.delete_image} border-0 p-0`}
                                                                    alt="delete"
                                                                    onClick={() => deleteBank(index)}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        ) : (
                                            <table className={`${styles.table} mb-0 table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                    <tr>
                                                        <th>BANK NAME</th>
                                                        <th>ACCOUNT NO.</th>

                                                        <th>SWIFT CODE</th>
                                                        <th>BRANCH ADDRESS</th>
                                                        <th>ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{val.Bank_Name}</td>
                                                        <td>{val.Account_No}</td>
                                                        <td>{val.Swift_Code}</td>

                                                        <td>{val.Branch_Address}</td>
                                                        <td>
                                                            <div>
                                                                <img
                                                                    src="/static/mode_edit.svg"
                                                                    className={`${styles.edit_image} mr-3`}
                                                                    alt="edit"
                                                                    onClick={() => {
                                                                        editBankArr(index);
                                                                    }}
                                                                />

                                                                <img
                                                                    src="/static/delete 2.svg"
                                                                    className={`${styles.delete_image} border-0 p-0`}
                                                                    alt="delete"
                                                                    onClick={() => deleteBank(index)}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Index