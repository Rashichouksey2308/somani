import React, { useEffect, useState } from 'react';
import LcApplication from '../../../src/components/LcApplication';
import PreviewBar from '../../../src/components/PreviewBar';
import { handleErrorToast } from '../../../src/utils/helpers/global'
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModule, UpdateLcModule } from '../../../src/redux/lcModule/action';
import { removePrefixOrSuffix } from '../../../src/utils/helper';
import _get from 'lodash/get';
import { toast } from 'react-toastify';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../src/redux/userData/action';
import { getPorts } from '../../../src/redux/masters/action';

function Index() {
  const dispatch = useDispatch();
  const { lcModule } = useSelector((state) => state.lc);

  const lcModuleData = _get(lcModule, 'data[0]', {});

  const [excelFile, setExcelFile] = useState(null);
  useEffect(() => {
    const id = sessionStorage.getItem('lcOrder');
    dispatch(GetLcModule(`?lcModuleId=${id}`));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getPorts());
  }, []);
  const { getPortsMasterData } = useSelector((state) => state.MastersData);
  const [lcData, setLcData] = useState();

  useEffect(() => {
    dispatch(setPageName('Lc'));

    dispatch(setDynamicName(_get(lcModule, 'data[0].company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(_get(lcModule, 'data[0].order.orderId', 'Order Id')));
  }, [lcModuleData]);

  useEffect(() => {
    setLcData({
      formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicableRules,
      dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
      placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
      lcIssuingBank: lcModuleData?.lcApplication?.lcIssuingBank
        ? lcModuleData?.lcApplication?.lcIssuingBank
        : lcModuleData?.order?.termsheet?.transactionDetails?.lcOpeningBank,
      applicant: lcModuleData?.lcApplication?.applicant,
      beneficiary: lcModuleData?.lcApplication?.beneficiary
        ? lcModuleData?.lcApplication?.beneficiary
        : lcModuleData?.order?.supplierName,
      currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue ?? '',
      currecyCodeAndAmountUnit:
        lcModuleData?.lcApplication?.currecyCodeAndAmountUnit || lcModuleData?.order?.orderCurrency,
      tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage
        ? lcModuleData?.lcApplication?.tolerancePercentage
        : lcModuleData?.order?.tolerance,
      creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
      creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
      atSight: lcModuleData?.lcApplication?.atSight,
      numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
      drawee: lcModuleData?.lcApplication?.drawee,
      deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
      partialShipment: lcModuleData?.lcApplication?.partialShipment
        ? lcModuleData?.lcApplication?.partialShipment
        : lcModuleData?.order?.termsheet?.transactionDetails?.partShipmentAllowed,
      transhipments: lcModuleData?.lcApplication?.transhipments,
      shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading
        ? lcModuleData?.lcApplication?.portOfLoading
        : lcModuleData?.order?.termsheet?.transactionDetails?.loadPort,
      portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge
        ? lcModuleData?.lcApplication?.portOfDischarge.includes('India')
          ? lcModuleData?.lcApplication?.portOfDischarge
          : `${lcModuleData?.lcApplication?.portOfDischarge}, India`
        : lcModuleData?.order?.termsheet?.transactionDetails?.portOfDischarge.includes('India')
        ? lcModuleData?.order?.termsheet?.transactionDetails?.portOfDischarge
        : `${lcModuleData?.order?.termsheet?.transactionDetails?.portOfDischarge}, India`,
      latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment
        ? lcModuleData?.lcApplication?.latestDateOfShipment
        : lcModuleData?.order?.supplierCredential?.latestShipmentDate,
      DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
      presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod
        ? lcModuleData?.lcApplication?.presentaionPeriod
        : 'DOCUMENTS TO BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT DATE BUT WITHIN VALIDITY OF THE LC',
      confirmationInstructions: lcModuleData?.lcApplication?.confirmationInstructions
        ? lcModuleData?.lcApplication?.confirmationInstructions
        : 'May Add',
      reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
      adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
      secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
      requestedConfirmationParty: lcModuleData?.lcApplication?.requestedConfirmationParty,
      charges: lcModuleData?.lcApplication?.charges
        ? lcModuleData?.lcApplication?.charges
        : 'ALL THE CHARGES OUTSIDE LC ISSUING BANK ARE FOR THE BENEFICIARY’S ACCOUNT',
      instructionToBank: lcModuleData?.lcApplication?.instructionToBank
        ? lcModuleData?.lcApplication?.instructionToBank
        : 'THE DOCUMENTS ARE TO BE COURIERED TO ........... (LC ISSUING BANK ADDRESS)..............UPON RECEIPT AT OUR COUNTERS OF A STRICTLY COMPLYING PRESENTATION, WE UNDERTAKE TO COVER YOU WITHIN 5 BANKING DAYS AS PER YOUR INSTRUCTIONS',
      senderToReceiverInformation: lcModuleData?.lcApplication?.senderToReceiverInformation,
      documentaryCreditNumber: lcModuleData?.lcApplication?.documentaryCreditNumber,
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue,
      dateOfAmendment: lcModuleData?.lcApplication?.dateOfAmendment,
      numberOfAmendment: lcModuleData?.lcApplication?.numberOfAmendment,
    });
    setExcelFile(_get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []));
  }, [lcModuleData, lcModule]);

  const saveLcData = (name, value) => {
    const newInput = { ...lcData };
    newInput[name] = value;
    if (name === 'atSight' && value === 'AT SIGHT') {
      newInput.numberOfDays = '';
    }

    setLcData(newInput);
  };

  const [currentComment, setCurrentComment] = useState('');
  const [lcDocuments, setLcDocuments] = useState(lcModuleData?.documentRequired);
  const [lcComments, setLcComments] = useState(lcModuleData?.additionalConditions);
  const [lcCondition, setLcCondition] = useState(lcModuleData?.additionalConditions);
  const [currentComment2, setCurrentComment2] = useState('');
  const addComment = (val) => {
    setCurrentComment(val);
  };
  const addDocArr = () => {
    if (currentComment === '') {
      handleErrorToast('Comment cannot be empty')
    }
    setLcDocuments([...lcDocuments, { value: currentComment, action: false }]);
    setCurrentComment('');
  };
  const deleteLcDoc = (index) => {
    setLcDocuments([...lcDocuments.slice(0, index), ...lcDocuments.slice(index + 1)]);
  };
  const lcDocEdit = (val, index) => {
    setLcDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, value: val };
        }

        return obj;
      });

      return newState;
    });
  };

  const editLcDocComments = (val, index) => {
    setLcDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i === index) {
          return { ...obj, action: val };
        }

        return obj;
      });

      return newState;
    });
  };
  //condition
  const addConditionComment = (val) => {
    setCurrentComment2(val);
  };
  const addConditionArr = (index) => {
    if (currentComment2 === '') {
      handleErrorToast('Comment cannot be empty')
    }
    setLcComments([...lcComments, { value: currentComment2, action: false }]);

    setCurrentComment2('');
  };
  const deleteLcCondition = (index) => {
    setLcComments([...lcComments.slice(0, index), ...lcComments.slice(index + 1)]);
  };
  const lcConditionEdit = (val, index) => {
    setLcComments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i === index) {
          return { ...obj, value: val };
        }

        return obj;
      });

      return newState;
    });
  };
  const editLcComments = (val, index) => {
    setLcComments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i === index) {
          return { ...obj, action: val };
        }

        return obj;
      });

      return newState;
    });
  };

  useEffect(() => {
    const commentLcArr = [];
    lcModuleData?.additionalConditions?.forEach((element) => {
      commentLcArr.push({ value: element, action: false });
    });
    setLcComments(commentLcArr);

    const docLcArr = [];
    lcModuleData?.documentRequired?.forEach((element) => {
      docLcArr.push({ value: element, action: false });
    });
    setLcDocuments(docLcArr);
  }, [lcModuleData]);

  const checkValidation = () => {
    if (lcData?.formOfDocumentaryCredit == '' || lcData?.formOfDocumentaryCredit === undefined) {
      handleErrorToast('Please Select Form Of Documentary Credit')
    }
    if (lcData?.applicant === '' || lcData?.applicant === undefined) {
      handleErrorToast('Please Select Applicant');
    }
    if (lcData?.beneficiary === '' || lcData?.beneficiary === undefined) {
      handleErrorToast('Please add Beneficiary')
    }
    if (lcData?.currecyCodeAndAmountValue === '' || lcData?.currecyCodeAndAmountValue === undefined) {
      handleErrorToast('Please add Currency Code Amount')
    }
    if (lcData?.tolerancePercentage === '' || lcData?.tolerancePercentage === undefined) {
      handleErrorToast('Please add Tolerance Percentage')
    }
    if (lcData?.creditAvailablewith === '' || lcData?.creditAvailablewith === undefined) {
      handleErrorToast('Please select Credit Available With')
    }
    if (lcData?.creditAvailableBy === '' || lcData?.creditAvailableBy === undefined) {
      handleErrorToast('Please select Credit Available By')
    }
    if (lcData?.atSight === '' || lcData?.atSight === undefined) {
      handleErrorToast('Please select DRAFT AT')
    }

    if (lcData?.atSight === 'Usuance') {
      if (lcData?.numberOfDays === '' || lcData?.numberOfDays === undefined) {
        handleErrorToast('Please add number of Days')
      }
    }
    if (lcData?.partialShipment === '' || lcData?.partialShipment === undefined) {
      handleErrorToast('Please select  Partial Shipment')
    }
    if (lcData?.transhipments === '' || lcData?.transhipments === undefined) {
      handleErrorToast('Please add select  Transhipment')
    }
    if (lcData?.shipmentForm === '' || lcData?.shipmentForm === undefined) {
      handleErrorToast('Please add place of taking charge')
    }
    if (lcData?.portOfLoading === '' || lcData?.portOfLoading === undefined) {
      handleErrorToast('Please select  port Of Loading')
    }
    if (lcData?.portOfDischarge === '' || lcData?.portOfDischarge === undefined) {
      handleErrorToast('Please select  port Of Discharge')
    }
    if (lcData?.latestDateOfShipment === '' || lcData?.latestDateOfShipment === undefined) {
      handleErrorToast('Please select latest Date Of Shipment')
    }

    if (lcData?.DescriptionOfGoods === '' || lcData?.DescriptionOfGoods === undefined) {
      handleErrorToast('Please add Description Of Goods')
    }
    if (lcDocuments?.length <= 0) {
      handleErrorToast('Please add DOCUMENT REQUIRED')
    }
    if (lcComments?.length <= 0) {
      handleErrorToast('Please add ADDITIONAL CONDITIONS')
    }
    if (lcData?.presentaionPeriod === '' || lcData?.presentaionPeriod === undefined) {
      handleErrorToast('Please add presentaion Period')
    }
    if (lcData?.confirmationInstructions === '' || lcData?.confirmationInstructions === undefined) {
      handleErrorToast('Please add confirmation Instructions')
    }
    if (lcData?.charges === '' || lcData?.charges === undefined) {
      handleErrorToast('Please select charges')
    }
    if (lcData?.instructionToBank === '' || lcData?.instructionToBank === undefined) {
      handleErrorToast('Please add instruction To Bank')
    }
    return true;
  };
  const handleLcSave = async () => {
    if (checkValidation()) {
      const comment = [];
      if (lcComments.length > 0) {
        lcComments.forEach((val, index) => {
          comment.push(val.value);
        });
      }
      const doc = [];
      if (lcDocuments.length > 0) {
        lcDocuments.forEach((val, index) => {
          doc.push(val.value);
        });
      }
      const lcObj = { ...lcData };
      lcObj.currecyCodeAndAmountValue = removePrefixOrSuffix(lcData?.currecyCodeAndAmountValue).toString();
      lcObj.tolerancePercentage = removePrefixOrSuffix(lcData?.tolerancePercentage).toString();
      const obj = {
        lcApplication: { ...lcObj },
        additionalConditions: [...comment],
        documentRequired: [...doc],
        lcModuleId: lcModuleData._id,
      };

    }
  };

  const changeRoute = () => {
    if (checkValidation()) {
      const comment = [];
      if (lcComments.length > 0) {
        lcComments.forEach((val, index) => {
          comment.push(val.value);
        });
      }
      const doc = [];
      if (lcDocuments.length > 0) {
        lcDocuments.forEach((val, index) => {
          doc.push(val.value);
        });
      }
      const task = 'preview';
      const lcObj = { ...lcData };
      lcObj.currecyCodeAndAmountValue = removePrefixOrSuffix(lcData?.currecyCodeAndAmountValue);
      lcObj.tolerancePercentage = removePrefixOrSuffix(lcData?.tolerancePercentage);
      const obj = {
        lcApplication: { ...lcObj },
        additionalConditions: [...comment],
        documentRequired: [...doc],
        lcModuleId: lcModuleData._id,
      };
      dispatch(UpdateLcModule({ obj: obj, task: task }));
      dispatch(GetLcModule(`?lcModuleId=${lcModuleData?.order?.lc}`));
      sessionStorage.setItem('lcPreviewId', lcModuleData?.order?.lc);
    }
  };
  return (
    <>
      <LcApplication
        addDocArr={addDocArr}
        saveLcData={saveLcData}
        lcComments={lcComments}
        lcDocuments={lcDocuments}
        lcModuleData={lcModuleData}
        lcData={lcData}
        addComment={addComment}
        deleteLcDoc={deleteLcDoc}
        lcDocEdit={lcDocEdit}
        currentComment={currentComment}
        addConditionArr={addConditionArr}
        deleteLcCondition={deleteLcCondition}
        lcConditionEdit={lcConditionEdit}
        addConditionComment={addConditionComment}
        lcCondition={lcCondition}
        excelFile={excelFile}
        currentComment2={currentComment2}
        editLcComments={editLcComments}
        editLcDocComments={editLcDocComments}
        port={getPortsMasterData}
        name={_get(lcModule, 'data[0].company.companyName', '')}
      />
      <PreviewBar onSave={handleLcSave} leftButtonClick={changeRoute} />
    </>
  );
}

export default Index;
