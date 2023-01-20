/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import InternalCompanies from './InternalCompanies';
import BankDetails from './BankDetails';
import AuthorisedSignatories from './AuthorisedSignatories';
import { useDispatch, useSelector } from 'react-redux';
import {
    GetInternalCompanies,
    UpdateInternalCompanies,
} from '../../../../../src/redux/internalCompanies/action';
import _get from 'lodash/get';
import { CreateInternalCompaniesMaster, getCountries } from 'redux/masters/action';
import { toast } from 'react-toastify';

function Index({ internalCompaniesMasterId }) {
    const dispatch = useDispatch();

    const [companyTypeRadio, setCompanyTypeRadio] = useState('domestic');
    const [keyAddData, setKeyAddData] = useState([]);
    const [bankDetails, setBankDetails] = useState([]);
    const [companyData, setCompanyData] = useState({
        Country: '',
        Company_Name: '',
        Short_Name: '',
        PAN: '',
        CIN_No: '',
    });
    const [authorisedSignatoryDetails, setAuthorisedSignatoryDetails] = useState([
        {
            name: '',
            designation: '',
            email: '',
        },
    ]);

    const { internalCompanyResponse } = useSelector((state) => state.internalCompanies);
    const internalCompanyData = _get(internalCompanyResponse, 'data[0]', {});
    const id = internalCompaniesMasterId;

    useEffect(() => {
        if (!id) return;
        dispatch(GetInternalCompanies(`?internalCompanyId=${id}`));
    }, [dispatch]);


    useEffect(() => {

        if (id) {
            setCompanyData({
                Country: internalCompanyData?.Country,
                Company_Name: internalCompanyData?.Company_Name,
                Short_Name: internalCompanyData?.Short_Name,
                PAN: internalCompanyData?.PAN,
                CIN_No: internalCompanyData?.CIN_No,
            });

            //getting addresses
            const addressArr = [];
            internalCompanyData?.keyAddresses?.forEach((element) => {
                addressArr.push(element);
            });
            setKeyAddData(addressArr);

            // getting authorised signatory

            const authorisedArr = [];
            internalCompanyData?.authorisedSignatoryDetails?.forEach((element) => {
                authorisedArr.push(element);
            });
            setAuthorisedSignatoryDetails(authorisedArr);

            // getting bank details

            const bankArr = [];
            internalCompanyData?.keyBanks?.forEach((element) => {
                bankArr.push(element);
            });
            setBankDetails(bankArr);
        }
    }, [companyData?.Country]);

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const { getCountriesMasterData } = useSelector((state) => state.MastersData);

    const saveCompanyData = (name, value) => {
        const newInput = { ...companyData };
        newInput[name] = value;
        setCompanyData(newInput);
    };

    const validate = () => {
        let toastMessage = '';
        if (companyTypeRadio === 'domestic') {
            if (companyData.Country == '' ||
                companyData.Country == undefined
            ) {
                toastMessage = 'PLEASE SELECT A COUNTRY';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (companyData.Company_Name == '' ||
                companyData.Company_Name == undefined
            ) {
                toastMessage = 'PLEASE ADD A COMPANY NAME';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (companyData.Short_Name == '' ||
                companyData.Short_Name == undefined
            ) {
                toastMessage = 'PLEASE ADD A SHORT NAME';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (companyData.PAN == '' ||
                companyData.PAN == undefined
            ) {
                toastMessage = 'PLEASE ADD A PAN NUMBER';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (companyData.CIN_No == '' ||
                companyData.CIN_No == undefined
            ) {
                toastMessage = 'PLEASE ADD A CIN NO';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (keyAddData.length == 0) {
                toastMessage = 'PLEASE ADD ADDRESS DETAILS';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (bankDetails.length == 0) {
                toastMessage = 'PLEASE ADD BANK DETAILS';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            return true;
        }
        if (companyTypeRadio === 'international') {
            if (companyData.Country == '' ||
                companyData.Country == undefined
            ) {
                toastMessage = 'PLEASE SELECT A COUNTRY';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (companyData.Company_Name == '' ||
                companyData.Company_Name == undefined
            ) {
                toastMessage = 'PLEASE ADD A COMPANY NAME';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (companyData.Short_Name == '' ||
                companyData.Short_Name == undefined
            ) {
                toastMessage = 'PLEASE ADD A SHORT NAME';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (keyAddData.length == 0) {
                toastMessage = 'PLEASE ADD ADDRESS DETAILS';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (bankDetails.length == 0) {
                toastMessage = 'PLEASE ADD BANK DETAILS';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            return true;
        }
    }

    const handleSubmit = () => {

        if (!validate()) return;

        const data = {
            Country: companyData.Country,
            Company_Name: companyData.Company_Name,
            Short_Name: companyData.Short_Name,
            PAN: companyData.PAN,
            CIN_No: companyData.CIN_No,
            keyAddresses: [...keyAddData],
            authorisedSignatoryDetails: [...authorisedSignatoryDetails],
            keyBanks: [...bankDetails],
        };
        const data2 = {
            Country: companyData.Country,
            Company_Name: companyData.Company_Name,
            Short_Name: companyData.Short_Name,
            PAN: companyData.PAN,
            CIN_No: companyData.CIN_No,
            keyAddresses: [...keyAddData],
            authorisedSignatoryDetails: [...authorisedSignatoryDetails],
            keyBanks: [...bankDetails],
            internalCompanyId: internalCompanyData._id,
        };
        if (id) {
            dispatch(UpdateInternalCompanies(data2));
        } else {
            dispatch(CreateInternalCompaniesMaster(data));
        }
    };

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <InternalCompanies
                    companyTypeRadio={companyTypeRadio}
                    setCompanyTypeRadio={setCompanyTypeRadio}
                    companyData={companyData}
                    saveCompanyData={saveCompanyData}
                    getCountriesMasterData={getCountriesMasterData}
                    keyAddData={keyAddData}
                    setKeyAddData={setKeyAddData}
                />
                <BankDetails
                    bankDetails={bankDetails}
                    setBankDetails={setBankDetails}
                    companyTypeRadio={companyTypeRadio}
                />
                <AuthorisedSignatories
                    authorisedSignatoryDetails={authorisedSignatoryDetails}
                    setAuthorisedSignatoryDetails={setAuthorisedSignatoryDetails}
                />
                <div className={`${styles.main} vessel_card mt-4 card border_color`}>
                    <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
                        {id ? <div className={`${styles.approve} ml-3`}>
                            <span onClick={() => handleSubmit()}>Update</span>
                        </div> : <div className={`${styles.approve} ml-3`}>
                            <span onClick={() => handleSubmit()}>Send for Approval</span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
