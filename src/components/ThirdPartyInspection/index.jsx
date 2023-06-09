/* eslint-disable @next/next/no-img-element */
import _get from 'lodash/get';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UpdateInspection } from 'redux/Inspections/action';
import { ViewDocument,previewDocument } from 'redux/ViewDoc/action';
import { GetAllInspection } from '../../redux/Inspections/action';
import DateCalender from '../DateCalender';
import SaveBar from '../SaveBar';
import UploadOther from '../UploadOther/index';
import styles from './index.module.scss';

export default function Index({ addButton, setComponentId, componentId, ports }) {
  const dispatch = useDispatch();

  useEffect(() => { 
    let id = sessionStorage.getItem('inspectionId');
    dispatch(GetAllInspection(`?inspectionId=${id}`));
  }, []);

  const { allInspection } = useSelector((state) => state.Inspection);

  const [inspectionData, setInspectionData2] = useState({});

  useEffect(() => {
    setInspectionData2(_get(allInspection, 'data[0]', {}));
  }, [allInspection]);

  const [excelFile, setExcelFile] = useState([]);

  let orderid = _get(inspectionData, 'order._id', '');

  let d = new Date();

  const [editInput, setEditInput] = useState(true);
  const [bothField, setBothField] = useState(false);
  const [haveDoc, sethaveDoc] = useState(false);
  const [haveDischargeDoc, setHaveDischargeDoc] = useState(false);
  const [documentAction, setDocumentAction] = useState('');
  const [documentAction1, setDocumentAction1] = useState('');
  const [documentAction2, setDocumentAction2] = useState('');
  const [isFieldInFocus, setIsFieldInFocus] = useState(false);

  const handlePortType = (name, value) => {
    let newInput = { ...inspectionDetails };
    newInput[name] = value;

    setInspectionData(newInput);
  };

  useEffect(() => {
    if (inspectionData) {
      setExcelFile(_get(inspectionData, 'order.generic.productSpecifications.specificationTable', []));
    }
  }, [inspectionData]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inspectionDetails, setInspectionData] = useState({
    quantity: '',
    loadPortInspection: false,
    dischargePortInspection: false,
    loadPortInspectionDetails: {
      numberOfContainer: '',
      inspectionPort: '',
      inspectedBy: '',
      startDate: '',
      specialMention: '',
    },
    dischargePortInspectionDetails: {
      numberOfContainer: '',
      inspectionPort: '',
      inspectedBy: '',
      startDate: '',
      specialMention: '',
    },
    certificateOfOriginStatus: inspectionData?.thirdPartyInspection?.certificateOfOriginStatus,
    certificateOfQualityStatus: inspectionData?.thirdPartyInspection?.certificateOfQualityStatus,
    certificateOfWeightStatus: inspectionData?.thirdPartyInspection?.certificateOfWeightStatus,

    dischargeCertificateOfOriginStatus: inspectionData?.thirdPartyInspection?.dischargeCertificateOfOriginStatus,
    dischargeCertificateOfQualityStatus: inspectionData?.thirdPartyInspection?.dischargeCertificateOfQualityStatus,
    dischargeCertificateOfWeightStatus: inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeightStatus,
  });

  useEffect(() => {
    let typeOfPort = inspectionData?.order?.termsheet?.transactionDetails?.typeOfPort;

    setInspectionData({
      quantity: inspectionData?.order?.quantity,
      dischargePortInspection: inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.inspectedBy
        ? inspectionData?.thirdPartyInspection?.dischargePortInspection
        : typeOfPort === 'Both'
        ? true
        : typeOfPort === 'Discharge Port'
        ? true
        : false,
      loadPortInspection: inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.inspectedBy
        ? inspectionData?.thirdPartyInspection?.loadPortInspection
        : typeOfPort === 'Both'
        ? true
        : typeOfPort === 'Load Port'
        ? true
        : false,

      loadPortInspectionDetails: {
        numberOfContainer: inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.numberOfContainer
          ? inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.numberOfContainer
          : _get(inspectionData, 'order.vessel.vessels[0].shippingInformation.numberOfContainers', ''),
        inspectionPort: inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.inspectionPort
          ? inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.inspectionPort
          : _get(inspectionData, 'order.lc.lcApplication.portOfLoading', ''),
        inspectedBy: inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.inspectedBy,
        startDate: inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.startDate,
        specialMention: inspectionData?.thirdPartyInspection?.loadPortInspectionDetails?.specialMention,
      },
      dischargePortInspectionDetails: {
        numberOfContainer: inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.numberOfContainer
          ? inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.numberOfContainer
          : _get(inspectionData, 'order.vessel.vessels[0].shippingInformation.numberOfContainers', ''),
        inspectionPort: inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.inspectionPort
          ?
           inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.inspectionPort?.includes('India') 
           ? inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.inspectionPort 
           : `${inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.inspectionPort}, India`
          
        
          
          
          
          :  _get(inspectionData, 'order.lc.lcApplication.portOfDischarge', '')?.includes('India') 
           ?  _get(inspectionData, 'order.lc.lcApplication.portOfDischarge', '') 
           : `${ _get(inspectionData, 'order.lc.lcApplication.portOfDischarge', '')}, India` 
          
         ,
        inspectedBy: inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.inspectedBy,
        startDate: inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.startDate,
        specialMention: inspectionData?.thirdPartyInspection?.dischargePortInspectionDetails?.specialMention,
      },
      certificateOfOriginStatus: inspectionData?.thirdPartyInspection?.certificateOfOriginStatus,
      certificateOfQualityStatus: inspectionData?.thirdPartyInspection?.certificateOfQualityStatus,
      certificateOfWeightStatus: inspectionData?.thirdPartyInspection?.certificateOfWeightStatus,

      dischargeCertificateOfOriginStatus: inspectionData?.thirdPartyInspection?.dischargeCertificateOfOriginStatus,
      dischargeCertificateOfQualityStatus: inspectionData?.thirdPartyInspection?.dischargeCertificateOfQualityStatus,
      dischargeCertificateOfWeightStatus: inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeightStatus,
    });
  }, [inspectionData, allInspection]);

  const [documents, setDocuments] = useState({
    certificateOfQuality: null,
    certificateOfWeight: null,
    certificateOfOrigin: null,
  });

  const [dischargeDocuments, setDischargeDocuments] = useState({
    dischargeCertificateOfQuality: null,
    dischargeCertificateOfWeight: null,
    dischargeCertificateOfOrigin: null,
  });

  useEffect(() => {
    if (inspectionData) {
      setDocuments({
        certificateOfQuality: inspectionData?.thirdPartyInspection?.certificateOfQuality?.name ? inspectionData?.thirdPartyInspection?.certificateOfQuality: null,
        certificateOfWeight:inspectionData?.thirdPartyInspection?.certificateOfWeight?.name ? inspectionData?.thirdPartyInspection?.certificateOfWeight: null,
        certificateOfOrigin: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.name ? inspectionData?.thirdPartyInspection?.certificateOfOrigin: null,
      });
      setDischargeDocuments({
        dischargeCertificateOfQuality: inspectionData?.thirdPartyInspection?.dischargeCertificateOfQuality?.name ? inspectionData?.thirdPartyInspection?.dischargeCertificateOfQuality: null,
        dischargeCertificateOfWeight: inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeight?.name ? inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeight: null,
        dischargeCertificateOfOrigin: inspectionData?.thirdPartyInspection?.dischargeCertificateOfOrigin?.name ? inspectionData?.thirdPartyInspection?.dischargeCertificateOfOrigin: null,
      });
    }
  }, [inspectionData]);

  useEffect(() => {
    if (
      documents.certificateOfQuality !== null ||
      documents.certificateOfWeight !== null ||
      documents.certificateOfOrigin !== null
    ) {
      sethaveDoc(true);
    } else {
      sethaveDoc(false);
    }
  }, [documents.certificateOfQuality, documents.certificateOfWeight, documents.certificateOfOrigin]);

  useEffect(() => {
    if (
      dischargeDocuments.dischargeCertificateOfQuality !== null ||
      dischargeDocuments.dischargeCertificateOfWeight !== null ||
      dischargeDocuments.dischargeCertificateOfOrigin !== null
    ) {
      setHaveDischargeDoc(true);
    } else {
      setHaveDischargeDoc(false);
    }
  }, [
    dischargeDocuments.dischargeCertificateOfQuality,
    dischargeDocuments.dischargeCertificateOfWeight,
    dischargeDocuments.dischargeCertificateOfOrigin,
  ]);

  const uploadDocument1 = (e) => {
    const newUploadDoc = { ...documents };
    newUploadDoc.certificateOfQuality = e.target.files[0];

    setDocuments(newUploadDoc);
  };

  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...documents };
    newUploadDoc1.certificateOfWeight = e.target.files[0];

    setDocuments(newUploadDoc1);
  };

  const uploadDocument3 = (e) => {
    const newUploadDoc1 = { ...documents };
    newUploadDoc1.certificateOfOrigin = e.target.files[0];

    setDocuments(newUploadDoc1);
  };

  const uploadDischargeDocument1 = (e) => {
    const newUploadDoc = { ...dischargeDocuments };
    newUploadDoc.dischargeCertificateOfQuality = e.target.files[0];

    setDischargeDocuments(newUploadDoc);
  };

  const uploadDischargeDocument2 = (e) => {
    const newUploadDoc1 = { ...dischargeDocuments };
    newUploadDoc1.dischargeCertificateOfWeight = e.target.files[0];

    setDischargeDocuments(newUploadDoc1);
  };

  let k;
  const uploadDischargeDocument3 = (e) => {
    const newUploadDoc1 = { ...dischargeDocuments };

    k = e.target.files;
    newUploadDoc1.dischargeCertificateOfOrigin = e.target.files[0];

    setDischargeDocuments(newUploadDoc1);
  };

  const handleCloseW = () => {
    setDocuments({ ...documents, certificateOfWeight: null });
  };
  const handleCloseQ = () => {
    setDocuments({ ...documents, certificateOfQuality: null });
  };
  const handleCloseO = () => {
    setDocuments({ ...documents, certificateOfOrigin: null });
  };

  const handleCloseW2 = () => {
    setDischargeDocuments({
      ...dischargeDocuments,
      dischargeCertificateOfWeight: null,
    });
  };
  const handleCloseQ2 = () => {
    setDischargeDocuments({
      ...dischargeDocuments,
      dischargeCertificateOfQuality: null,
    });
  };
  const handleCloseO2 = () => {
    setDischargeDocuments({
      ...dischargeDocuments,
      dischargeCertificateOfOrigin: null,
    });
  };

  const saveInspectionDetails = (name, value) => {
    const newInput = { ...inspectionDetails };
    const namesplit = name.split('.');
    namesplit.length > 1 ? (newInput[namesplit[0]][namesplit[1]] = value) : (newInput[name] = value);
    setInspectionData(newInput);
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d?.toISOString();
    saveInspectionDetails(name, text);
  };

  const saveDischargeInspectionDetails = (name, value) => {
    const newInput = { ...inspectionDetails };
    const namesplit = name.split('.');
    namesplit.length > 1 ? (newInput[namesplit[0]][namesplit[1]] = value) : (newInput[name] = value);
    setInspectionData(newInput);
  };

  const [dateStartFrom, setDateStartFrom] = useState({
    inspectionDateAtLoad: '',
    inspectionDateAtDischarge: '',
  });

  const setStartDate = (val, name) => {
    let new_date = moment(new Date(val).toISOString()).add(1, 'days').format('DD-MM-YYYY');
    if (name == 'loadPortInspectionDetails.startDate') {
      setDateStartFrom({ ...dateStartFrom, inspectionDateAtLoad: new_date });
    } else {
      setDateStartFrom({
        ...dateStartFrom,
        inspectionDateAtDischarge: new_date,
      });
    }
  };

  const validation = () => {
    let toastMessage = '';
    if (
      _get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') == null ||
      _get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') == ''
    ) {
      toastMessage = 'PLEASE SELECT SHIPMENT TYPE FROM A PREVIOUS MODULE';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') == 'Liner') {
      if (inspectionDetails.loadPortInspection == true && inspectionDetails.dischargePortInspection == false) {
        let fd = new FormData();

        fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

        fd.append('inspectionId', inspectionData?._id);

        fd.append('certificateOfOrigin', documents.certificateOfOrigin);
        fd.append('certificateOfQuality', documents.certificateOfQuality);
        fd.append('certificateOfWeight', documents.certificateOfWeight);

        let task = 'save';

        dispatch(UpdateInspection({ fd, task }));
      } else if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == false) {
        if (inspectionDetails?.dischargePortInspectionDetails?.numberOfContainer === '') {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
        } else if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == true) {
           if ( haveDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN LOAD PORT ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return;
        }
        if (haveDischargeDoc == false ) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN  DISCHARGE PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return;
        }
        }

        let fd = new FormData();
        fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

        fd.append('inspectionId', inspectionData?._id);
        fd.append('certificateOfOrigin', documents.certificateOfOrigin);
        fd.append('certificateOfQuality', documents.certificateOfQuality);
        fd.append('certificateOfWeight', documents.certificateOfWeight);
        fd.append('dischargeCertificateOfOrigin', dischargeDocuments.dischargeCertificateOfOrigin);
        fd.append('dischargeCertificateOfQuality', dischargeDocuments.dischargeCertificateOfQuality);
        fd.append('dischargeCertificateOfWeight', dischargeDocuments.dischargeCertificateOfWeight);

        let task = 'save';

        dispatch(UpdateInspection({ fd, task }));
      } else {
        let fd = new FormData();
        fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

        fd.append('inspectionId', inspectionData?._id);
        fd.append('certificateOfOrigin', documents.certificateOfOrigin);
        fd.append('certificateOfQuality', documents.certificateOfQuality);
        fd.append('certificateOfWeight', documents.certificateOfWeight);

        let task = 'save';

        dispatch(UpdateInspection({ fd, task }));
      }
    } else {
      let fd = new FormData();
      fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

      fd.append('inspectionId', inspectionData?._id);
      fd.append('certificateOfOrigin', documents.certificateOfOrigin);
      fd.append('certificateOfQuality', documents.certificateOfQuality);
      fd.append('certificateOfWeight', documents.certificateOfWeight);

      let task = 'save';

      dispatch(UpdateInspection({ fd, task }));
    }
    if (_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') == 'Bulk') {
      if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == true) {
        if ( haveDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN LOAD PORT ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return ;
        }
        if (haveDischargeDoc == false ) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN  DISCHARGE PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return ;
        }
      }
      if (inspectionDetails.loadPortInspection == true && inspectionDetails.dischargePortInspection == false) {
        let fd = new FormData();
        fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

        fd.append('inspectionId', inspectionData?._id);
        fd.append('certificateOfOrigin', documents.certificateOfOrigin);
        fd.append('certificateOfQuality', documents.certificateOfQuality);
        fd.append('certificateOfWeight', documents.certificateOfWeight);

        let task = 'save';

        dispatch(UpdateInspection({ fd, task }));
      } else if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == false) {
        let fd = new FormData();
        fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

        fd.append('inspectionId', inspectionData?._id);

        fd.append('dischargeCertificateOfOrigin', dischargeDocuments.dischargeCertificateOfOrigin);
        fd.append('dischargeCertificateOfQuality', dischargeDocuments.dischargeCertificateOfQuality);
        fd.append('dischargeCertificateOfWeight', dischargeDocuments.dischargeCertificateOfWeight);

        let task = 'save';

        dispatch(UpdateInspection({ fd, task }));
      } else {
        let fd = new FormData();
        fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

        fd.append('inspectionId', inspectionData?._id);
        fd.append('certificateOfOrigin', documents.certificateOfOrigin);
        fd.append('certificateOfQuality', documents.certificateOfQuality);
        fd.append('certificateOfWeight', documents.certificateOfWeight);

        let task = 'save';

        dispatch(UpdateInspection({ fd, task }));
      }
    }
  };

  const handleSubmit = () => {
    if (!validation()) return;
    if (_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') == 'Liner') {
      if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == true) {
        var noError = false;
        if ( haveDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN LOAD PORT ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (haveDischargeDoc == false ) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN  DISCHARGE PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.numberOfContainer === '' ||
          inspectionDetails?.loadPortInspectionDetails?.numberOfContainer === undefined
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.startDate === '' ||
          inspectionDetails?.loadPortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.numberOfContainer === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.numberOfContainer === undefined
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.startDate === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (noError == false) {
          let fd = new FormData();
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

          fd.append('inspectionId', inspectionData?._id);
          fd.append('certificateOfOrigin', documents.certificateOfOrigin);
          fd.append('certificateOfQuality', documents.certificateOfQuality);
          fd.append('certificateOfWeight', documents.certificateOfWeight);
          fd.append('dischargeCertificateOfOrigin', dischargeDocuments.dischargeCertificateOfOrigin);
          fd.append('dischargeCertificateOfQuality', dischargeDocuments.dischargeCertificateOfQuality);
          fd.append('dischargeCertificateOfWeight', dischargeDocuments.dischargeCertificateOfWeight);
          let task = 'submit';

          dispatch(UpdateInspection({ fd, task }));
        }
      }

      if (inspectionDetails.loadPortInspection == true && inspectionDetails.dischargePortInspection == false) {
        var noError2 = false;
        if (haveDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT ARE MANDATORY IN LOAD PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.numberOfContainer === '' ||
          inspectionDetails?.loadPortInspectionDetails?.numberOfContainer === undefined
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.startDate === '' ||
          inspectionDetails?.loadPortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }

        if (noError2 == false) {
          let fd = new FormData();
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

          fd.append('inspectionId', inspectionData?._id);
          fd.append('certificateOfOrigin', documents.certificateOfOrigin);
          fd.append('certificateOfQuality', documents.certificateOfQuality);
          fd.append('certificateOfWeight', documents.certificateOfWeight);

          let task = 'submit';

          dispatch(UpdateInspection({ fd, task }));
        }
      }

      if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == false) {
        var noError3 = false;
        if (
          inspectionDetails?.dischargePortInspectionDetails?.numberOfContainer === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.numberOfContainer === undefined
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.startDate === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (haveDischargeDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT ARE MANDATORY IN DISCHARGE PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (noError3 == false) {
          let fd = new FormData();
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

          fd.append('inspectionId', inspectionData?._id);

          fd.append('dischargeCertificateOfOrigin', dischargeDocuments.dischargeCertificateOfOrigin);
          fd.append('dischargeCertificateOfQuality', dischargeDocuments.dischargeCertificateOfQuality);
          fd.append('dischargeCertificateOfWeight', dischargeDocuments.dischargeCertificateOfWeight);

          let task = 'submit';

          dispatch(UpdateInspection({ fd, task }));
        }
      }
      if (inspectionDetails.dischargePortInspection == false && inspectionDetails.loadPortInspection == false) {
        let toastMessage = 'PLEASE SELECT LOAD PORT OR DISCHARGE PORT';
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage });
        }
        return;
      }
    }

    if (_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') == 'Bulk') {
      if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == true) {
        var noError = false;
        if ( haveDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN LOAD PORT ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (haveDischargeDoc == false ) {
          let toastMessage = 'ANY ONE DOCUMENT IS REQUIRED IN  DISCHARGE PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }

        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.startDate === '' ||
          inspectionDetails?.loadPortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }

        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.startDate === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError = true);
        }
        if (noError == false) {
          let fd = new FormData();
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

          fd.append('inspectionId', inspectionData?._id);
          fd.append('certificateOfOrigin', documents.certificateOfOrigin);
          fd.append('certificateOfQuality', documents.certificateOfQuality);
          fd.append('certificateOfWeight', documents.certificateOfWeight);
          fd.append('dischargeCertificateOfOrigin', dischargeDocuments.dischargeCertificateOfOrigin);
          fd.append('dischargeCertificateOfQuality', dischargeDocuments.dischargeCertificateOfQuality);
          fd.append('dischargeCertificateOfWeight', dischargeDocuments.dischargeCertificateOfWeight);
          let task = 'submit';

          dispatch(UpdateInspection({ fd, task }));
        }
      }

      if (inspectionDetails.loadPortInspection == true && inspectionDetails.dischargePortInspection == false) {
        var noError2 = false;
        if (haveDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT IS  MANDATORY IN LOAD PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }

        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.startDate === '' ||
          inspectionDetails?.loadPortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }
        if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError2 = true);
        }

        if (noError2 == false) {
          let fd = new FormData();
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

          fd.append('inspectionId', inspectionData?._id);
          fd.append('certificateOfOrigin', documents.certificateOfOrigin);
          fd.append('certificateOfQuality', documents.certificateOfQuality);
          fd.append('certificateOfWeight', documents.certificateOfWeight);

          let task = 'submit';

          dispatch(UpdateInspection({ fd, task }));
        }
      }

      if (inspectionDetails.dischargePortInspection == true && inspectionDetails.loadPortInspection == false) {
        var noError3 = false;

        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === undefined
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.startDate === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.startDate === undefined
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === '' ||
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort === undefined
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (haveDischargeDoc == false) {
          let toastMessage = 'ANY ONE DOCUMENT MANDATORY IN DISCHARGE PORT';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return (noError3 = true);
        }
        if (noError3 == false) {
          let fd = new FormData();
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails));

          fd.append('inspectionId', inspectionData?._id);

          fd.append('dischargeCertificateOfOrigin', dischargeDocuments.dischargeCertificateOfOrigin);
          fd.append('dischargeCertificateOfQuality', dischargeDocuments.dischargeCertificateOfQuality);
          fd.append('dischargeCertificateOfWeight', dischargeDocuments.dischargeCertificateOfWeight);

          let task = 'submit';

          dispatch(UpdateInspection({ fd, task }));
        }
      }
      if (inspectionDetails.dischargePortInspection == false && inspectionDetails.loadPortInspection == false) {
        let toastMessage = 'PLEASE SELECT LOAD PORT OR DISCHARGE PORT';
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage });
        }
      }
    }
    setComponentId(componentId + 1);
  };

  const [toDischargeShow, setToDischargeShow] = useState([]);
  const [toDischargeView, setToDischargeView] = useState(false);

  const [toLoadShow, setToLoadShow] = useState([]);
  const [toLoadView, setToLoadView] = useState(false);

  const filterPort = (value, type) => {
    if (value == '') {
      if (type == 'load') {
        setToLoadShow([]);
        setToLoadView(false);
        return;
      } else {
        setToDischargeShow([]);
        setToDischargeView(false);
        return;
      }
    }
    let filterData = [];
    if (type == 'load') {
      filterData = ports.filter((o) => {
        if (o.Approved.toLowerCase() == 'yes' && o.Country.toLowerCase() !== 'india') {
          return o.Port_Name.toLowerCase().includes(value.toLowerCase());
        }
      });
    } else {
      filterData = ports.filter((o) => {
        if (o.Approved?.toLowerCase() == 'yes' && o.Country.toLowerCase() == 'india') {
          return o.Port_Name.toLowerCase().includes(value.toLowerCase());
        }
      });
    }

    if (type == 'load') {
      setToLoadShow(filterData);
      setToLoadView(true);
    } else {
      setToDischargeShow(filterData);
      setToDischargeView(true);
    }
  };
  const handleData = (name, value, type) => {
    if (type == 'load') {
      saveInspectionDetails(name, `${value?.Port_Name}, ${value?.Country}`);
    } else {
      saveDischargeInspectionDetails(name, `${value?.Port_Name}, ${value?.Country}`);
    }

    setToLoadView(false);
    setToDischargeView(false);
  };
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid p-0 `}>
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} border_color align-items-center card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Inspection Type</h3>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mr-5">
                  <label className={`${styles.dropDown_label} text`}>Shipment Type:</label>
                  <div className={`${styles.dropDown} input`} value="Bulk">
                    {_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '')}
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <label className={`${styles.dropDown_label} text`}>Part Shipment Allowed:</label>
                  <div className={`${styles.dropDown} input`}>
                    {_get(inspectionData, 'order.termsheet.transactionDetails.partShipmentAllowed', '')}
                  </div>

                  <button className={styles.add_btn}>
                    <span className={styles.add_sign}>+</span>Add
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.radio_form} card-body`}>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Load Port"
                    value="Load"
                    name="loadPortInspection"
                    type={type}
                    onChange={(e) => {
                      handlePortType(e.target.name, e.target.checked);
                    }}
                    checked={inspectionDetails.loadPortInspection}
                    id={`inline-${type}-1`}
                  />

                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Discharge Port"
                    name="dischargePortInspection"
                    value="Discharge"
                    onChange={(e) => {
                      handlePortType(e.target.name, e.target.checked);
                    }}
                    checked={inspectionDetails.dischargePortInspection}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
            <hr className="m-0 border_color" />
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>{inspectionData?.order?.commodity}</span>
                </div>
                {_get(
                  inspectionData,
                  'order.termsheet.transactionDetails.partShipmentAllowed',
                  '',
                )?.toLocaleLowerCase() === 'yes' ? (
                  <div className={`${styles.form_group} mt-1 col-lg-3 m-0 col-md-6 col-sm-6`}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      name="quantity"
                      onWheel={(event) => event.currentTarget.blur()}
                      onFocus={(e) => {
                        setIsFieldInFocus(true), (e.target.type = 'number');
                      }}
                      onBlur={(e) => {
                        setIsFieldInFocus(false), (e.target.type = 'text');
                      }}
                      onChange={(e) => saveInspectionDetails(e.target.name, Number(e.target.value))}
                      value={
                        isFieldInFocus
                          ? inspectionDetails.quantity
                          : Number(inspectionDetails.quantity)?.toLocaleString('en-IN') +
                            ` ${_get(inspectionData, 'order.unitOfQuantity', '')}`
                      }
                      // value={Number(inspectionDetails.quantity)?.toLocaleString('en-IN', {
                      //   maximumFractionDigits: 2,
                      // })}

                      type="text"
                      onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                ) : (
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      Quantity <strong className="text-danger ml-n1">*</strong>
                    </div>
                    <span className={styles.value}>
                      {Number(inspectionDetails.quantity)?.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                      })}{' '}
                      {_get(inspectionData, 'order.unitOfQuantity', '')}
                    </span>
                  </div>
                )}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Country of Origin <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>{inspectionData?.order?.countryOfOrigin}</span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Vessel Name
                    {!inspectionDetails.loadPortInspection ? <strong className="text-danger">*</strong> : ''}
                  </div>
                  <span className={styles.value}>
                    {_get(inspectionData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {inspectionDetails.loadPortInspection ? (
            <>
              <div className={`${styles.main} vessel_card card border_color`}>
                <div
                  className={`${styles.head_container} border_color card-header align-items-center head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Inspection Details</h3>
                  <button
                    onClick={handleShow}
                    className={`${styles.product_btn} d-flex align-items-center`}
                    type="button"
                  >
                    {' '}
                    Product Specification
                    <img className="img-fluid ml-2" src="/static/blue-eye.svg" alt="blue-eye" />
                  </button>
                </div>
                <div className={`${styles.dashboard_form} vessel_card card-body`}>
                  <h5 className={styles.sub_heading}>Inspection at Load Port</h5>

                  <div className="row">
                    {_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') === 'Liner' ? (
                      <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          name="loadPortInspectionDetails.numberOfContainer"
                          value={inspectionDetails?.loadPortInspectionDetails?.numberOfContainer}
                          onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                          type="number"
                          onWheel={(event) => event.currentTarget.blur()}
                          onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          No of Containers
                          <strong className="text-danger">*</strong>
                        </label>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="loadPortInspectionDetails.inspectionPort"
                          value={inspectionDetails?.loadPortInspectionDetails?.inspectionPort}
                          onChange={(e) => {
                            filterPort(e.target.value, 'load');
                            saveInspectionDetails(e.target.name, e.target.value);
                          }}
                        />
                        {toLoadShow.length > 0 && toLoadView && (
                          <div className={styles.searchResults}>
                            <ul>
                              {toLoadShow
                                ? toLoadShow
                                    ?.filter((val, index) => {
                                      if (val.Country.toLowerCase() !== 'india') {
                                        return val;
                                      }
                                    })
                                    .map((results, index) => (
                                      <li
                                        onClick={() =>
                                          handleData('loadPortInspectionDetails.inspectionPort', results, 'load')
                                        }
                                        id={results._id}
                                        key={index}
                                        value={results}
                                      >
                                        {results?.Port_Name}, {results?.Country}
                                      </li>
                                    ))
                                : ''}
                            </ul>
                          </div>
                        )}
                        <label className={`${styles.label_heading} label_heading`}>
                          Inspection Port
                          <strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.search_image} img-fluid`}
                          src="/static/search-grey.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        name="loadPortInspectionDetails.inspectedBy"
                        value={inspectionDetails?.loadPortInspectionDetails?.inspectedBy}
                        onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                        type="text"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Inspected By<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <div className="d-flex">
                        <DateCalender
                          saveDate={saveDate}
                          name="loadPortInspectionDetails.startDate"
                          defaultDate={inspectionDetails?.loadPortInspectionDetails?.startDate}
                          labelName="Inspection Date"
                          startFrom={dateStartFrom.inspectionDateAtLoad}
                          dateFormat={`dd-MM-yyyy`}
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0 border_color" />
                <div className={`${styles.dashboard_form} mb-3 card-body`}>
                  <h5 className={`${styles.sub_heading}`}>Special Mention</h5>
                  <Row>
                    <Col lg={12}>
                      <div className="mt-4">
                        <textarea
                          name="loadPortInspectionDetails.specialMention"
                          value={inspectionDetails?.loadPortInspectionDetails?.specialMention}
                          onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                          rows={3}
                          required
                          className={`${styles.comment_field} ${styles.input_field} input form-control`}
                        />
                        <label className={`${styles.comment_heading} ${styles.label_heading} label_heading`}>
                          Special Mention
                        </label>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          ) : null}
          {inspectionDetails.dischargePortInspection
            ? Discharge(
                inspectionData,
                inspectionDetails,
                saveInspectionDetails,
                saveDate,
                setStartDate,
                setDateStartFrom,
                handleShow,
                toDischargeShow,
                toDischargeView,
                handleData,
                filterPort,
              )
            : ''}
          {inspectionDetails.loadPortInspection && (
            <div className={`${styles.main} vessel_card card border_color`}>
              <div
                className={`${styles.head_container} border-0 align-items-center head_container d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#upload"
                aria-expanded="true"
                aria-controls="upload"
              >
                <h3 className={styles.heading}>Load Port Document</h3>
                <span>+</span>
              </div>
              <div id="upload" className="collapse" aria-labelledby="upload" data-parent="#upload">
                <div className={`${styles.table_form}`}>
                  <div className={styles.table_container}>
                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                          <thead>
                            <tr>
                              <th width="25%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="10%">
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">ACTION</th>
                              <th width="20%"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Certificate of Origin
                                <strong className="text-danger ml-1">*</strong>
                                {inspectionData?.thirdPartyInspection?.certificateOfOrigin ||
                                documents.certificateOfOrigin ? (
                                  <span
                                    onClick={() => {
                                      if (
                                        inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path == undefined
                                      ) {
                                        let reader = new FileReader();
                                        reader.readAsArrayBuffer(documents.certificateOfOrigin);

                                        reader.onload = function () {
                                          var file = new Blob([reader.result], { type: 'application/pdf' });
                                          var fileURL = URL.createObjectURL(file);
                                          window.open(fileURL);
                                        };
                                      } else {
                                        dispatch(
                                          previewDocument({
                                            path: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path,
                                            order: inspectionData?.order?._id,
                                            company: inspectionData?.company?._id,
                                          }),
                                        );
                                      }
                                    }}
                                  >
                                    View
                                  </span>
                                ) : (
                                  ''
                                )}
                              </td>
                              <td>
                                <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                              </td>
                              <td className={styles.doc_row}>
                                {inspectionData?.thirdPartyInspection?.certificateOfOrigin
                                  ? moment(inspectionData?.thirdPartyInspection?.certificateOfOrigin?.date).format(
                                      'DD-MM-YYYY, h:mm A',
                                    )
                                  : documents?.certificateOfOrigin != null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>
                              <td>
                                <Form.Group className={styles.form_group}>
                                  <div className="d-flex align-items-center position-relative">
                                    <select
                                      className={`${
                                        inspectionDetails?.certificateOfOriginStatus === 'On Hold'
                                          ? styles.hold_option
                                          : inspectionDetails?.certificateOfOriginStatus === 'Rejected'
                                          ? styles.rejected_option
                                          : inspectionDetails?.certificateOfOriginStatus === 'Approved'
                                          ? styles.approved_option
                                          : styles.value
                                      } ${styles.customSelect} input form-control`}
                                      id="docType"
                                      value={inspectionDetails?.certificateOfOriginStatus}
                                      name="certificateOfOriginStatus"
                                      onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                                    >
                                      <option selected>Please Specify</option>
                                      <option className={`${styles.hold_option}`} value="On Hold">
                                        On Hold
                                      </option>
                                      <option className={`${styles.rejected_option}`} value="Rejected">
                                        Rejected
                                      </option>
                                      <option className={`${styles.approved_option}`} value="Approved">
                                        Approved
                                      </option>
                                    </select>
                                    <img
                                      className={`${styles.arrow} image_arrow img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                </Form.Group>
                              </td>
                              <td>
                                {documents && documents?.certificateOfOrigin == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument3(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>
                                      {documents?.certificateOfOrigin?.name !== "certificateOfOrigin"?
                                       documents?.certificateOfOrigin?.name
                                      :documents?.certificateOfOrigin?.originalName
                                      }
                                    </span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseO()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Certificate of Quality
                                <strong className="text-danger ml-1">*</strong>
                                {inspectionData?.thirdPartyInspection?.certificateOfQuality ||
                                documents?.certificateOfQuality ? (
                                  <span
                                    onClick={() => {
                                      if (
                                        inspectionData?.thirdPartyInspection?.certificateOfQuality?.path == undefined
                                      ) {
                                        let reader = new FileReader();
                                        reader.readAsArrayBuffer(documents.certificateOfQuality);

                                        reader.onload = function () {
                                          var file = new Blob([reader.result], { type: 'application/pdf' });
                                          var fileURL = URL.createObjectURL(file);
                                          window.open(fileURL);
                                        };
                                      } else {
                                        dispatch(
                                          previewDocument({
                                            path: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path,
                                            order: inspectionData?.order?._id,
                                            company: inspectionData?.company?._id,
                                          }),
                                        );
                                      }
                                    }}
                                  >
                                    View
                                  </span>
                                ) : (
                                  ''
                                )}
                              </td>
                              <td>
                                <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                              </td>
                              <td className={styles.doc_row}>
                                {inspectionData?.thirdPartyInspection?.certificateOfQuality
                                  ? moment(inspectionData?.thirdPartyInspection?.certificateOfQuality?.date).format(
                                      'DD-MM-YYYY, h:mm A',
                                    )
                                  : documents?.certificateOfQuality != null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>
                              <td>
                                <Form.Group className={styles.form_group}>
                                  <div className="d-flex align-items-center position-relative">
                                    <select
                                      className={`${
                                        inspectionDetails?.certificateOfQualityStatus === 'On Hold'
                                          ? styles.hold_option
                                          : inspectionDetails?.certificateOfQualityStatus === 'Rejected'
                                          ? styles.rejected_option
                                          : inspectionDetails?.certificateOfQualityStatus === 'Approved'
                                          ? styles.approved_option
                                          : styles.value
                                      } ${styles.customSelect} input form-control`}
                                      id="docType"
                                      value={inspectionDetails?.certificateOfQualityStatus}
                                      name="certificateOfQualityStatus"
                                      onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                                    >
                                      <option selected>Please Specify</option>
                                      <option className={`${styles.hold_option}`} value="On Hold">
                                        On Hold
                                      </option>
                                      <option className={`${styles.rejected_option}`} value="Rejected">
                                        Rejected
                                      </option>
                                      <option className={`${styles.approved_option}`} value="Approved">
                                        Approved
                                      </option>
                                    </select>
                                    <img
                                      className={`${styles.arrow} image_arrow img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                </Form.Group>
                              </td>
                              <td>
                                {documents && documents?.certificateOfQuality == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument1(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>
                                       {documents?.certificateOfQuality?.name !== "certificateOfQuality"?
                                      documents?.certificateOfQuality?.name
                                      :documents?.certificateOfQuality?.originalName
                                      }
                                     
                                    </span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseQ()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Certificate of Weight
                                <strong className="text-danger ml-1">*</strong>
                                {inspectionData?.thirdPartyInspection?.certificateOfWeight ||
                                documents.certificateOfWeight ? (
                                  <span
                                    onClick={() => {
                                      if (
                                        inspectionData?.thirdPartyInspection?.certificateOfWeight?.path == undefined
                                      ) {
                                        let reader = new FileReader();
                                        reader.readAsArrayBuffer(documents.certificateOfWeight);

                                        reader.onload = function () {
                                          var file = new Blob([reader.result], { type: 'application/pdf' });
                                          var fileURL = URL.createObjectURL(file);
                                          window.open(fileURL);
                                        };
                                      } else {
                                        dispatch(
                                          previewDocument({
                                            path: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path,
                                            order: inspectionData?.order?._id,
                                            company: inspectionData?.company?._id,
                                          }),
                                        );
                                      }
                                    }}
                                  >
                                    View
                                  </span>
                                ) : (
                                  ''
                                )}
                              </td>
                              <td>
                                <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                              </td>

                              <td className={styles.doc_row}>
                                {inspectionData?.thirdPartyInspection?.certificateOfWeight
                                  ? moment(inspectionData?.thirdPartyInspection?.certificateOfWeight?.date).format(
                                      'DD-MM-YYYY, h:mm A',
                                    )
                                  : documents?.certificateOfWeight != null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>
                              <td>
                                <Form.Group className={styles.form_group}>
                                  <div className="d-flex align-items-center position-relative">
                                    <select
                                      className={`${
                                        inspectionDetails?.certificateOfWeightStatus === 'On Hold'
                                          ? styles.hold_option
                                          : inspectionDetails?.certificateOfWeightStatus === 'Rejected'
                                          ? styles.rejected_option
                                          : inspectionDetails?.certificateOfWeightStatus === 'Approved'
                                          ? styles.approved_option
                                          : styles.value
                                      } ${styles.customSelect} input form-control`}
                                      id="docType"
                                      value={inspectionDetails?.certificateOfWeightStatus}
                                      name="certificateOfWeightStatus"
                                      onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                                    >
                                      <option selected>Please Specify</option>
                                      <option className={`${styles.hold_option}`} value="On Hold">
                                        On Hold
                                      </option>
                                      <option className={`${styles.rejected_option}`} value="Rejected">
                                        Rejected
                                      </option>
                                      <option className={`${styles.approved_option}`} value="Approved">
                                        Approved
                                      </option>
                                    </select>
                                    <img
                                      className={`${styles.arrow} image_arrow img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                </Form.Group>
                              </td>
                              <td>
                                {documents && documents?.certificateOfWeight == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument2(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>
                                        {documents?.certificateOfWeight?.name !== "certificateOfWeight"?
                                      documents?.certificateOfWeight?.name
                                      :documents?.certificateOfWeight?.originalName
                                      } 
                                      
                                     
                                     
                                    </span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseW()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className={`${styles.any_document} ${styles.dashboard_form}  mb-2`}>
                      <strong className="text-danger">*</strong>
                      Any one document is mandatory
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {inspectionDetails.dischargePortInspection && (
            <div className={`${styles.main} vessel_card card border_color`}>
              <div
                className={`${styles.head_container} border-0 align-items-center head_container d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#uploaddischarge"
                aria-expanded="true"
                aria-controls="uploaddischarge"
              >
                <h3 className={styles.heading}>Discharge Port Document</h3>
                <span>+</span>
              </div>
              <div
                id="uploaddischarge"
                className="collapse"
                aria-labelledby="uploaddischarge"
                data-parent="#uploaddischarge"
              >
                <div className={`${styles.table_form}`}>
                  <div className={styles.table_container}>
                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                          <thead>
                            <tr>
                              <th width="25%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="10%">
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">ACTION</th>
                              <th width="20%"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Certificate of Origin
                                <strong className="text-danger ml-1">*</strong>
                                {inspectionData?.thirdPartyInspection?.dischargeCertificateOfOrigin ||
                                dischargeDocuments.dischargeCertificateOfOrigin ? (
                                  <span
                                    onClick={() => {
                                      if (
                                        inspectionData?.thirdPartyInspection?.dischargeCertificateOfOrigin?.path ==
                                        undefined
                                      ) {
                                        let reader = new FileReader();
                                        reader.readAsArrayBuffer(dischargeDocuments.dischargeCertificateOfOrigin);

                                        reader.onload = function () {
                                          var file = new Blob([reader.result], { type: 'application/pdf' });
                                          var fileURL = URL.createObjectURL(file);
                                          window.open(fileURL);
                                        };
                                      } else {
                                        dispatch(
                                          previewDocument({
                                            path: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path,
                                            order: inspectionData?.order?._id,
                                            company: inspectionData?.company?._id,
                                          }),
                                        );
                                      }
                                    }}
                                  >
                                    View
                                  </span>
                                ) : (
                                  ''
                                )}
                              </td>
                              <td>
                                <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                              </td>
                              <td className={styles.doc_row}>
                                {inspectionData?.thirdPartyInspection?.dischargeCertificateOfOrigin
                                  ? moment(
                                      inspectionData?.thirdPartyInspection?.dischargeCertificateOfOrigin?.date,
                                    ).format('DD-MM-YYYY, h:mm A')
                                  : dischargeDocuments?.dischargeCertificateOfOrigin != null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>
                              <td>
                                <Form.Group className={styles.form_group}>
                                  <div className="d-flex align-items-center position-relative">
                                    <select
                                      className={`${
                                        inspectionDetails?.dischargeCertificateOfOriginStatus === 'On Hold'
                                          ? styles.hold_option
                                          : inspectionDetails?.dischargeCertificateOfOriginStatus === 'Rejected'
                                          ? styles.rejected_option
                                          : inspectionDetails?.dischargeCertificateOfOriginStatus === 'Approved'
                                          ? styles.approved_option
                                          : styles.value
                                      } ${styles.customSelect} input form-control`}
                                      id="docType"
                                      value={inspectionDetails?.dischargeCertificateOfOriginStatus}
                                      name="dischargeCertificateOfOriginStatus"
                                      onChange={(e) => saveDischargeInspectionDetails(e.target.name, e.target.value)}
                                    >
                                      <option selected>Please Specify</option>
                                      <option className={`${styles.hold_option}`} value="On Hold">
                                        On Hold
                                      </option>
                                      <option className={`${styles.rejected_option}`} value="Rejected">
                                        Rejected
                                      </option>
                                      <option className={`${styles.approved_option}`} value="Approved">
                                        Approved
                                      </option>
                                    </select>
                                    <img
                                      className={`${styles.arrow} image_arrow img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                </Form.Group>
                              </td>
                              <td>
                                {dischargeDocuments && dischargeDocuments?.dischargeCertificateOfOrigin == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDischargeDocument3(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>
                                        {dischargeDocuments?.dischargeCertificateOfOrigin?.name !== "dischargeCertificateOfOrigin"?
                                        dischargeDocuments?.dischargeCertificateOfOrigin?.name
                                        :dischargeDocuments?.dischargeCertificateOfOrigin?.originalName
                                        }

                                    </span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseO2()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Certificate of Quality
                                <strong className="text-danger ml-1">*</strong>
                                {inspectionData?.thirdPartyInspection?.dischargeCertificateOfQuality ||
                                dischargeDocuments.dischargeCertificateOfQuality ? (
                                  <span
                                    onClick={() => {
                                      if (
                                        inspectionData?.thirdPartyInspection?.dischargeCertificateOfQuality?.path ==
                                        undefined
                                      ) {
                                        let reader = new FileReader();
                                        reader.readAsArrayBuffer(dischargeDocuments.dischargeCertificateOfQuality);

                                        reader.onload = function () {
                                          var file = new Blob([reader.result], { type: 'application/pdf' });
                                          var fileURL = URL.createObjectURL(file);
                                          window.open(fileURL);
                                        };
                                      } else {
                                        dispatch(
                                          previewDocument({
                                            path: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path,
                                            order: inspectionData?.order?._id,
                                            company: inspectionData?.company?._id,
                                          }),
                                        );
                                      }
                                    }}
                                  >
                                    View
                                  </span>
                                ) : (
                                  ''
                                )}
                              </td>
                              <td>
                                <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                              </td>
                              <td className={styles.doc_row}>
                                {inspectionData?.thirdPartyInspection?.dischargeCertificateOfQuality
                                  ? moment(
                                      inspectionData?.thirdPartyInspection?.dischargeCertificateOfQuality?.date,
                                    ).format('DD-MM-YYYY, h:mm A')
                                  : dischargeDocuments?.dischargeCertificateOfQuality != null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>
                              <td>
                                <Form.Group className={styles.form_group}>
                                  <div className="d-flex align-items-center position-relative">
                                    <select
                                      className={`${
                                        inspectionDetails?.dischargeCertificateOfQualityStatus === 'On Hold'
                                          ? styles.hold_option
                                          : inspectionDetails?.dischargeCertificateOfQualityStatus === 'Rejected'
                                          ? styles.rejected_option
                                          : inspectionDetails?.dischargeCertificateOfQualityStatus === 'Approved'
                                          ? styles.approved_option
                                          : styles.value
                                      } ${styles.customSelect} input form-control`}
                                      id="docType"
                                      value={inspectionDetails?.dischargeCertificateOfQualityStatus}
                                      name="dischargeCertificateOfQualityStatus"
                                      onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                                    >
                                      <option selected>Please Specify</option>
                                      <option className={`${styles.hold_option}`} value="On Hold">
                                        On Hold
                                      </option>
                                      <option className={`${styles.rejected_option}`} value="Rejected">
                                        Rejected
                                      </option>
                                      <option className={`${styles.approved_option}`} value="Approved">
                                        Approved
                                      </option>
                                    </select>
                                    <img
                                      className={`${styles.arrow} image_arrow img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                </Form.Group>
                              </td>
                              <td>
                                {dischargeDocuments && dischargeDocuments?.dischargeCertificateOfQuality == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDischargeDocument1(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>
                                       {dischargeDocuments?.dischargeCertificateOfQuality?.name !== "dischargeCertificateOfQuality"?
                                        dischargeDocuments?.dischargeCertificateOfQuality?.name
                                        :dischargeDocuments?.dischargeCertificateOfQuality?.originalName
                                        }

                                    </span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseQ2()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Certificate of Weight
                                <strong className="text-danger ml-1">*</strong>
                                {inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeight ||
                                dischargeDocuments.dischargeCertificateOfWeight ? (
                                  <span
                                    onClick={() => {
                                      if (
                                        inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeight?.path ==
                                        undefined
                                      ) {
                                        let reader = new FileReader();
                                        reader.readAsArrayBuffer(dischargeDocuments.dischargeCertificateOfWeight);

                                        reader.onload = function () {
                                          var file = new Blob([reader.result], { type: 'application/pdf' });
                                          var fileURL = URL.createObjectURL(file);
                                          window.open(fileURL);
                                        };
                                      } else {
                                        dispatch(
                                          previewDocument({
                                            path: inspectionData?.thirdPartyInspection?.certificateOfOrigin?.path,
                                            order: inspectionData?.order?._id,
                                            company: inspectionData?.company?._id,
                                          }),
                                        );
                                      }
                                    }}
                                  >
                                    View
                                  </span>
                                ) : (
                                  ''
                                )}
                              </td>
                              <td>
                                <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                              </td>

                              <td className={styles.doc_row}>
                                {inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeight
                                  ? moment(
                                      inspectionData?.thirdPartyInspection?.dischargeCertificateOfWeight?.date,
                                    ).format('DD-MM-YYYY, h:mm A')
                                  : dischargeDocuments?.dischargeCertificateOfWeight != null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>
                              <td>
                                <Form.Group className={styles.form_group}>
                                  <div className="d-flex align-items-center position-relative">
                                    <select
                                      className={`${
                                        inspectionDetails?.dischargeCertificateOfWeightStatus === 'On Hold'
                                          ? styles.hold_option
                                          : inspectionDetails?.dischargeCertificateOfWeightStatus === 'Rejected'
                                          ? styles.rejected_option
                                          : inspectionDetails?.dischargeCertificateOfWeightStatus === 'Approved'
                                          ? styles.approved_option
                                          : styles.value
                                      } ${styles.customSelect} input form-control`}
                                      id="docType"
                                      value={inspectionDetails?.dischargeCertificateOfWeightStatus}
                                      name="dischargeCertificateOfWeightStatus"
                                      onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                                    >
                                      <option selected>Please Specify</option>
                                      <option className={`${styles.hold_option}`} value="On Hold">
                                        On Hold
                                      </option>
                                      <option className={`${styles.rejected_option}`} value="Rejected">
                                        Rejected
                                      </option>
                                      <option className={`${styles.approved_option}`} value="Approved">
                                        Approved
                                      </option>
                                    </select>
                                    <img
                                      className={`${styles.arrow} image_arrow img-fluid`}
                                      src="/static/inputDropDown.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                </Form.Group>
                              </td>
                              <td>
                                {dischargeDocuments && dischargeDocuments?.dischargeCertificateOfWeight == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDischargeDocument2(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>
                                       {dischargeDocuments?.dischargeCertificateOfWeight?.name !== "dischargeCertificateOfWeight"?
                                        dischargeDocuments?.dischargeCertificateOfWeight?.name
                                        :dischargeDocuments?.dischargeCertificateOfWeight?.originalName
                                        }
                                      
                                    </span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseW2()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className={`${styles.any_document} ${styles.dashboard_form}  mb-2`}>
                      <strong className="text-danger">*</strong>
                      Any one document is mandatory
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="0">
            <UploadOther
              orderid={orderid}
              module={[
                '3rd Party Inspection',
                'Plot Inspection',
                'Bill of Lading',
                'Letter of Indemnity',
                'BL Surrender',
                'Forward Hedging',
                'CIMS',
                'IGM',
                'Intercompany Invoicing',
              ]}
            />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${styles.tpi_popup} tpi_popup`}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header p-0 bg-transparent border-0 d-flex justify-content-between">
          <h3>Product Specification</h3>
          <img src="/static/close.svg" style={{cursor:'pointer'}} alt="close" onClick={handleClose} className="img-fluid" />
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className={styles.table_container}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table-bordered table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr className="table_row">
                      {excelFile &&
                        excelFile.length > 0 &&
                        Object.keys(excelFile[0]).map((val, index) => <th key={index}>{val}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {excelFile &&
                      excelFile.length > 0 &&
                      excelFile.map((item, index) => (
                        <tr key={index}>
                          {Object.values(item).map((value, id) => (
                            <td key={id}>{value}</td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
           <div >
            <b>Comments</b>
            <br/>
            <ul>
          {_get(allInspection, 'data[0].order.generic.productSpecifications.comments', []).map((val,index)=>{
            return <>
            <li><span>{val}<br></br></span></li>
            </>
          })}
          </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const Discharge = (
  inspectionData,
  inspectionDetails,
  saveInspectionDetails,
  saveDate,
  setDateStartFrom,
  setStartDate,
  handleShow,
  toDischargeShow,
  toDischargeView,
  handleData,
  filterPort,
) => {
  return (
    <div className={`${styles.main} vessel_card card border_color`}>
      <div
        className={`${styles.head_container} border_color card-header align-items-center head_container justify-content-between d-flex bg-transparent`}
      >
        <h3 className={`${styles.heading}`}>Inspection Details</h3>
        <button onClick={handleShow} className={`${styles.product_btn} d-flex align-items-center`} type="button">
          {' '}
          Product Specification
          <img className="img-fluid ml-2" src="/static/blue-eye.svg" alt="blue-eye" />
        </button>
      </div>
      <div className={`${styles.dashboard_form} card-body`}>
        <h5 className={styles.sub_heading}>Inspection at Discharge Port</h5>

        <div className="row">
          {_get(inspectionData, 'order.vessel.vessels[0].shipmentType', '') === 'Liner' ? (
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                className={`${styles.input_field} input form-control`}
                required
                name="dischargePortInspectionDetails.numberOfContainer"
                value={inspectionDetails?.dischargePortInspectionDetails?.numberOfContainer}
                onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                type="number"
                onWheel={(event) => event.currentTarget.blur()}
                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
              />
              <label className={`${styles.label_heading} label_heading`}>
                No of Containers<strong className="text-danger">*</strong>
              </label>
            </div>
          ) : (
            ''
          )}

          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <input
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="dischargePortInspectionDetails.inspectionPort"
               
                value={inspectionDetails?.dischargePortInspectionDetails?.inspectionPort}
                onChange={(e) => {
                  filterPort(e.target.value, 'discharge');
                  saveInspectionDetails(e.target.name, e.target.value);
                }}
              />
              {toDischargeShow.length > 0 && toDischargeView && (
                <div className={styles.searchResults}>
                  <ul>
                    {toDischargeShow
                      ? toDischargeShow
                          ?.filter((val, index) => {
                            if (val.Country.toLowerCase() == 'india') {
                              return val;
                            }
                          })
                          .map((results, index) => (
                            <li
                              onClick={() =>
                                handleData('dischargePortInspectionDetails.inspectionPort', results, 'discharge')
                              }
                              id={results._id}
                              key={index}
                              value={results}
                            >
                              {results?.Port_Name}, {results?.Country}
                            </li>
                          ))
                      : ''}
                  </ul>
                </div>
              )}
              <label className={`${styles.label_heading} label_heading`}>
                Inspection Port
                <strong className="text-danger">*</strong>
              </label>
              <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
            </div>
          </div>
          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <input
              className={`${styles.input_field} input form-control`}
              required
              type="text"
              name="dischargePortInspectionDetails.inspectedBy"
              value={inspectionDetails?.dischargePortInspectionDetails?.inspectedBy}
              onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>
              Inspected By<strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <DateCalender
                name="dischargePortInspectionDetails.startDate"
                defaultDate={inspectionDetails?.dischargePortInspectionDetails?.startDate}
                saveDate={saveDate}
                setDateStartFrom={setStartDate}
                labelName="Inspection Date"
                dateFormat={`dd-MM-yyyy`}
              />
              <img
                className={`${styles.calanderIcon} image_arrow img-fluid`}
                src="/static/caldericon.svg"
                alt="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0 border_color" />
      <div className={`${styles.dashboard_form} card-body`}>
        <h5 className={`${styles.sub_heading} mt-3`}>Special Mention</h5>
        <Row>
          <Col lg={12}>
            <div className="mt-4">
              <textarea
                rows={3}
                name="dischargePortInspectionDetails.specialMention"
                value={inspectionDetails?.dischargePortInspectionDetails?.specialMention}
                onChange={(e) => saveInspectionDetails(e.target.name, e.target.value)}
                required
                className={`${styles.comment_field} ${styles.input_field} input form-control`}
              />
              <label className={`${styles.comment_heading} ${styles.label_heading} label_heading`}>
                Special Mention
              </label>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
