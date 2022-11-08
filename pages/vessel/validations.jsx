import { toast } from 'react-toastify'

export const Validation = ({ list, containerExcel,
  containerListDocument,
  vesselCertificate }) => {
  let isOk = true;
  let toastMessage = '';

  for (let i = 0; i < list.length; i++) {
    if (list[i].shipmentType == '' || list[i].shipmentType == undefined) {
      toastMessage = `Please Select shipment Type of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].commodity == '' || list[i].commodity == undefined) {
      toastMessage = `Please add commodity of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].quantity == '' || list[i].quantity == undefined) {
      toastMessage = `Please add quantity of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].orderValue == '' || list[i].orderValue == undefined) {
      toastMessage = `Please add order Value of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.countryOfOrigin == '' || list[i].transitDetails.countryOfOrigin == undefined) {
      toastMessage = `Please select country Of Origin of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.portOfLoading == '' || list[i].transitDetails.portOfLoading == undefined) {
      toastMessage = `Please select port Of Loading of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.portOfDischarge == '' || list[i].transitDetails.portOfDischarge == undefined) {
      toastMessage = `Please select port Of Discharge of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.portOfDischarge == '' || list[i].transitDetails.portOfDischarge == undefined) {
      toastMessage = `Please select port Of Discharge of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.laycanFrom == '' || list[i].transitDetails.laycanFrom == undefined) {
      toastMessage = `Please add laycan From of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.laycanTo == '' || list[i].transitDetails.laycanTo == undefined) {
      toastMessage = `Please add laycan to of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.EDTatLoadPort == '' || list[i].transitDetails.EDTatLoadPort == undefined) {
      toastMessage = `Please add EDT at Load Port to of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].transitDetails.ETAatDischargePort == '' || list[i].transitDetails.ETAatDischargePort == undefined) {
      toastMessage = `Please add EDT at dischargePort to of Vessel Information ${i}  `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
        break;
      }
    }
    if (list[i].shipmentType == 'Bulk') {
      if (list[i].vesselInformation[0].name == '' || list[i].vesselInformation[0].name == undefined) {
        toastMessage = `Please add vessel name  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }

      if (list[i].vesselInformation[0].IMONumber == '' || list[i].vesselInformation[0].IMONumber == undefined) {
        toastMessage = `Please add IMO Number  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }

      if (list[i].vesselInformation[0].IMONumber.length !== 7) {
        toastMessage = `Please add valid IMO Number  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].vesselInformation[0].flag == '' || list[i].vesselInformation[0].flag == undefined) {
        toastMessage = `Please add IMO Number  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }

      if (
        list[i].vesselInformation[0].yearOfBuilt == '' ||
        list[i].vesselInformation[0].yearOfBuilt == undefined ||
        list[i].vesselInformation[0].yearOfBuilt == null ||
        list[i].vesselInformation[0].yearOfBuilt.length !== 4
      ) {
        toastMessage = `Please add a valid year Of Built  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        list[i]?.vesselInformation[0]?.shippingLineOrCharter == '' ||
        list[i]?.vesselInformation[0]?.shippingLineOrCharter == undefined
      ) {
        toastMessage = `Please add shipping Line Or Charter  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
    } else {
      if (
        list[i]?.shippingInformation?.shippingLineOrCharter == '' ||
        list[i]?.shippingInformation?.shippingLineOrCharter == undefined
      ) {
        toastMessage = `Please add shipping Line Or Charter  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        list[i]?.shippingInformation?.numberOfContainers == '' ||
        list[i]?.shippingInformation?.numberOfContainers == undefined
      ) {
        toastMessage = `Please add number Of Containers  of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }

      if (!containerExcel) {
        toastMessage = `please upload container Excel`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
        }
      }

      if (!containerListDocument) {
        toastMessage = `please upload container List Document`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
        }
      }
    }
  }

  if (!vesselCertificate) {
    toastMessage = `please upload vessel certificate`;
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      isOk = false;
    }
  }

  return isOk;
};