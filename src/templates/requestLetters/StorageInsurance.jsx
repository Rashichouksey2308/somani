import _get from 'lodash/get';
import moment from 'moment';
import { convertValue } from 'utils/helper';

export default function StorageInsurance(insuranceData) {
  return (
    <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
      <tr>
        <td valign="top" align="left">
          <table
            width="100%"
            bgColor="#FFFFFF"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              borderRadius: '6px',
              boxShadow: '0 3px 6px #CAD0E2',
              marginBottom: '26px',
              border: '2px solid rgba(202, 214, 230, 0.3)',
            }}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <tr>
              <td valign="top" align="left">
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <td colSpan={2}>
                      <span
                        style={{
                          fontSize: '30px',
                          color: '#111111',
                          lineHeight: '37px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          padding: '49px 35px 44px',
                          textDecoration: 'underline',
                          display: 'block',
                        }}
                      >
                        Request for Insurance Quotation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="left">
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '0 35px 7px',
                          marginBottom: '0',
                          float: 'left',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '25px',
                            fontWeight: 'normal',
                          }}
                        >
                          Order ID:{' '}
                        </span>
                        {insuranceData?.order?.orderId}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="left">
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '0 35px 7px',
                          marginBottom: '0',
                          float: 'left',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '25px',
                            fontWeight: 'normal',
                          }}
                        >
                          Date:{' '}
                        </span>
                        {moment(new Date()).format('DD.MM.yyyy')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="left">
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '0 35px 57px',
                          marginBottom: '0',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '25px',
                            fontWeight: 'normal',
                          }}
                        >
                          Type of Insurance:{' '}
                        </span>
                        {insuranceData?.quotationRequest?.insuranceType}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="left">
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                          padding: '0 35px 49px',
                          marginBottom: '0',
                        }}
                      >
                        Dear Sir/Madam,
                        <br />
                        <br />
                        As discussed, please note the detail of Cargo as under:
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      width="25%"
                      align="left"
                      style={{
                        borderTop: '2px solid rgba(202, 214, 230, 0.3)',
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Vessel
                      </p>
                    </td>
                    <td
                      width="75%"
                      align="left"
                      style={{
                        borderTop: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 15px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        IMO Number
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].IMONumber', '')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Year of Built
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt', '')?.slice(
                          0,
                          4,
                        )}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Sum Insured
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        INR{' '}
                        {Number(convertValue(insuranceData?.quotationRequest?.sumInsured))?.toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                        })}{' '}
                        Crores (Including 110%)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Material
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.order?.commodity}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Origin
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.countryOfOrigin', '')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Quantity
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        BL Weight {insuranceData?.order?.quantity?.toLocaleString('en-IN')} MTs. (+/
                        {insuranceData?.order?.tolerance ?? 0}%)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Port of Loading
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfLoading', '')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Port of Discharge
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfDischarge', '')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Place of Storage
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.quotationRequest?.storageDetails?.placeOfStorage}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Storage Plot Address
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.quotationRequest?.storageDetails?.storagePlotAddress}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Period of Insurance
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.quotationRequest?.storageDetails?.periodOfInsurance}
                        {'  Days '}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Laycan
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {moment(insuranceData?.quotationRequest?.laycanFrom).format('DD MMM')} -{' '}
                        {moment(insuranceData?.quotationRequest?.laycanTo).format('DD MMM, YYYY')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        ETD
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {moment(insuranceData?.quotationRequest?.expectedTimeOfDispatch).format('DD MMMM , YYYY')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        ETA
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {moment(insuranceData?.quotationRequest?.expectedTimeOfArrival).format('DD MMMM , YYYY')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Insurance Coverage
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        All Risks Including ICC-A, War, SRCC, Theft, Loading, Unloading, Act of God etc.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Name of Insured
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.order?.generic?.buyer?.name} , <br></br>{' '}
                        {_get(insuranceData, 'order.generic.buyer.addresses[0].fullAddress', '')} <br></br>
                        {_get(insuranceData, 'order.generic.buyer.addresses[0].state', '')} <br></br>
                        {_get(insuranceData, 'order.generic.buyer.addresses[0].country', '')} <br></br>
                        {_get(insuranceData, 'order.generic.buyer.gstin', '')}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Loss Payee
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.quotationRequest?.lossPayee}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                        borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: 'rgba(17, 17, 17, 0.7)',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          padding: '16px 15px 16px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Additional Information
                      </p>
                    </td>
                    <td
                      align="left"
                      style={{
                        borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '16px 35px 16px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {insuranceData?.quotationRequest?.additionalInfo}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="left">
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                          padding: '43px 35px',
                          marginBottom: '0',
                        }}
                      >
                        Thanks &amp; Best Regards
                        <br />
                        <br />
                        Vipin Rajput
                        <br />
                        Manager Accounts
                        <br />
                        Indo German International Private Limited
                        <br />
                        8-B, Sagar, 6-Tilak Marg,
                        <br />
                        New Delhi-110001
                        <br />
                        Mobile No - 9312251303
                        <br />
                        Email ID - vipinrajput@gmail.com
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
