import _get from 'lodash/get';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DeliveryOrder from '../../src/components/DeliveryOrder';
import LiftingDetails from '../../src/components/LiftingDetails';
import ReleaseOrder from '../../src/components/ReleaseOrder';
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action';
import { GetAllLifting, UpdateLiftingData } from '../../src/redux/Lifting/action';
import { GetDelivery, UpdateDelivery } from '../../src/redux/release&DeliveryOrder/action';
import { setDynamicName, setPageName, setPageTabName } from '../../src/redux/userData/action';
import styles from './payment.module.scss';
import { handleErrorToast } from '@/utils/helpers/global';
import constants from '@/utils/constants'

function Index() {
  const dispatch = useDispatch();

  const { allLiftingData } = useSelector((state) => state.Lifting);
  const { ReleaseOrderData } = useSelector((state) => state.Release);
  const [releaseDetail, setReleaseDetail] = useState([
    {
      orderNumber: 1,
      releaseOrderDate: '',
      netQuantityReleased: 0,
      unitOfMeasure: '',
      document: null,
    },
  ]);
  useEffect(() => {
    dispatch(setPageName('payment'));
    dispatch(setDynamicName(ReleaseOrderData?.data[0]?.company.companyName));
    dispatch(setPageTabName('release'));

    dispatch(
      getBreadcrumbValues({
        companyId: ReleaseOrderData?.data[0]?.order?.orderId,
        companyName: ReleaseOrderData?.data[0]?.company?.companyName,
      }),
    );
  }, [ReleaseOrderData]);

  const orderId = _get(ReleaseOrderData, 'data[0].order.orderId', '');
  const liftingDetailsId = _get(ReleaseOrderData, 'data[0].order.lifting', '');
  const deliveryOrderData = _get(ReleaseOrderData, 'data[0].deliveryDetail', [{}]);
  const releaseOrderData = _get(ReleaseOrderData, 'data[0].releaseDetail', [{}]);
  const doCancelledString = 'DO cancelled';

  const generateDoNumber = (index) => {
    const orderDONumber = index <  constants.numberTen ? `0${index + 1}` : index + 1;
    const string = `${orderId.slice(0,  constants.numberSeven)}-${orderId.slice( constants.numberSeven)}`;
    return `${string}/${orderDONumber}`;
  };
  useEffect(() => {
    const temp = [];
    if (_get(allLiftingData, 'data[0].liftingOrders', []).length > 0) {
      _get(allLiftingData, 'data[0].liftingOrders', []).map((val, index) => {
        temp.push({
          deliveryOrder: val.deliveryOrder,
          detail: [],
        });

        if (val.deliveryOrderDetail.length > 0) {
          val.deliveryOrderDetail.forEach((val2, index2) => {
            temp[index].detail.push({
              dateOfLifting: val2.dateOfLifting || null,
              liftingQuant: val2.liftingQuantity,
              modeOfTransportation: val2.modeOfTransport,
              eWayBill: val2.ewayBillNo,
              destination: val2.destination || '',
              rrlrNumber: val2.rrlrNumber || 0,
              LRorRRDoc: val2.LRDocument || val2.RRDocument || {},
              eWayBillDoc: val2.ewayBillDocument || {},
            });
          });
        }
      });
    }

    setLifting([...temp]);
  }, [allLiftingData]);

  useEffect(() => {
    getOrderData();
  }, [dispatch]);

  const getOrderData = () => {
    const id = sessionStorage.getItem('ROrderID');
    dispatch(GetDelivery(`?deliveryId=${id}`));
  };
  useEffect(() => {
    if (liftingDetailsId !== '') {
      dispatch(GetAllLifting(`?liftingId=${liftingDetailsId}`));
    }
  }, [ReleaseOrderData]);

  const [lifting, setLifting] = useState([]);

  const addNewLifting = (value) => {
    setLifting([
      ...lifting,
      {
        deliveryOrder: value,
        detail: [
          {
            dateOfLifting: '',
            liftingQuant: '',
            modeOfTransportation: '',
            eWayBill: '',
            LRorRRDoc: {},
            eWayBillDoc: {},
            destination: '',
            rrlrNumber: '',
          },
        ],
      },
    ]);
  };

  const addNewSubLifting = (index) => {
    const tempArr = lifting;
    tempArr.forEach((val, i) => {
      if (i === index) {
        val.detail.push({
          dateOfLifting: '',
          liftingQuant: '',
          modeOfTransportation: '',
          eWayBill: '',
          LRorRRDoc: {},
          eWayBillDoc: {},
          destination: '',
          rrlrNumber: '',
        });
      }
    });
    setLifting([...tempArr]);
  };
  const deleteNewRow = (index, index2) => {
    const tempArr = [...lifting];
    tempArr[index].detail.splice(index2, 1);
    setLifting([...tempArr]);
  };
  const handleChange = (name, value, index, index2) => {
    const tempArr = [...lifting];

    tempArr.forEach((val, i) => {
      if (i === index) {
        val.detail.forEach((val2, i2) => {
          {
            if (i2 === index2) {
              val2[name] = value;
            }
          }
        });
      }
    });
    setLifting([...tempArr]);
  };
  const valueValidation = (value) => {
    if (value === '' || value == null) {
      return true;
    }
    return false;
  };
  const liftingValidation = () => {
    let isOk = true;
    for (let i = 0; i <= lifting.length - 1; i++) {
      if (returnLiftingData(lifting[i].deliveryOrder).balaceQuantity < 0) {
        isOk = false;
        break;
      }
      for (let j = 0; j <= lifting[i].detail.length - 1; j++) {
        if (valueValidation(lifting[i].detail[j]?.dateOfLifting)) {
          handleErrorToast(
            `please provide Date Of lifting Of lifting Details   ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
        if (valueValidation(lifting[i].detail[j]?.liftingQuant)) {
          handleErrorToast(
            `please provide lifting Quantity Of lifting Details   ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
        if (valueValidation(lifting[i].detail[j]?.modeOfTransportation)) {
          handleErrorToast(
            `please provide mode Of Transportation Of lifting Details   ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
        if (valueValidation(lifting[i].detail[j]?.rrlrNumber)) {
          handleErrorToast(
            `please provide rr/lr Number  Of lifting Details   ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
        if (valueValidation(lifting[i].detail[j]?.destination)) {
          handleErrorToast(
            `please provide destination  Of lifting Details  ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
        if (valueValidation(lifting[i].detail[j]?.eWayBill)) {
          handleErrorToast(
            `please provide a eWay Bill  Of lifting Details  ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
        if (valueValidation(lifting[i].detail[j]?.LRorRRDoc.originalName)) {
          handleErrorToast(
            `please upload ${lifting[i].detail[j]?.modeOfTransportation}  document  Of Listing Details  ${
              j + 1
            } for delivery order no - ${lifting[i].deliveryOrder}`,
          );
          isOk = false;
          break;
        }
        if (lifting[i].detail[j]?.eWayBillDoc.originalName === '' || !lifting[i].detail[j]?.eWayBillDoc.originalName) {
          handleErrorToast(
            `please upload a eWay Bill  Of Listing Details  Of Listing Details   ${j + 1} for delivery order no - ${
              lifting[i].deliveryOrder
            }`,
          );
          isOk = false;
          break;
        }
      }
    }

    return isOk;
  };

  const handleLiftingSubmit = () => {
    if (liftingValidation()) {
      const tempArr = [];
      const temp2 = [];
      lifting.forEach((val, index) => {
        if (val.detail.modeOfTransportation === 'RR') {
          val.detail.map((val2, index2) => {
            temp2.push({
              dateOfLifting: val2.dateOfLifting,
              liftingQuantity: val2.liftingQuant,
              unitOfQuantity: val2.unitOfQuantity,
              modeOfTransport: val2.modeOfTransportation,
              ewayBillNo: val2.eWayBill,
              ewayBillDocument: val2.eWayBillDoc || {},
              RRDocument: val2.LRorRRDoc || {},
              destination: val2.destination,
              rrlrNumber: val2.rrlrNumber,
            });
          });
          tempArr.push({
            deliveryOrder: val.deliveryOrder,
            deliveryOrderDetail: temp2,
          });
        } else {
          val.detail.map((val2, index2) => {
            temp2.push({
              dateOfLifting: val2.dateOfLifting,
              liftingQuantity: val2.liftingQuant,
              unitOfQuantity: val2.unitOfQuantity,
              modeOfTransport: val2.modeOfTransportation,
              ewayBillNo: val2.eWayBill,
              ewayBillDocument: val2.eWayBillDoc || {},
              LRDocument: val2.LRorRRDoc || {},
              destination: val2.destination,
              rrlrNumber: val2.rrlrNumber,
            });
          });
          tempArr.push({
            deliveryOrder: val.deliveryOrder,
            deliveryOrderDetail: temp2,
          });
        }
      });

      const data = {
        liftingId: _get(ReleaseOrderData, 'data[0].order.lifting', ''),
        liftingOrders: tempArr,
      };

      dispatch(UpdateLiftingData(data));
    }
  };

  const [deliveryOrder, setDeliveryOrder] = useState([
    {
      orderNumber: '',
      unitOfMeasure: 'MT',
      isDelete: false,
      Quantity: '',
      deliveryOrderNo: '',
      deliveryOrderDate: '',
      status: '',
    },
  ]);

  useEffect(() => {
    const tempArr = [];
    if (deliveryOrderData.length > 0) {
      deliveryOrderData.forEach((val, index) => {
        tempArr.push({
          orderNumber: val.orderNumber || 1,
          unitOfMeasure: val.unitOfMeasure || 'MT',
          isDelete: false,
          Quantity: val.netQuantityReleased,
          deliveryOrderNo: val.deliveryOrderNumber,
          deliveryOrderDate: val.deliveryOrderDate,
          status: val.deliveryStatus,
        });
      });

      setDeliveryOrder(tempArr);
    } else {
      setDeliveryOrder([
        {
          orderNumber: '',
          unitOfMeasure: 'MT',
          isDelete: false,
          Quantity: '',
          deliveryOrderNo: '',
          deliveryOrderDate: '',
          status: '',
        },
      ]);
    }
    const tempArr2 = [];
    if (releaseOrderData.length > 0) {
      releaseOrderData.forEach((val, index) => {
        tempArr2.push({
          orderNumber: val.orderNumber || 1,
          releaseOrderDate: val.releaseOrderDate,
          netQuantityReleased: val.netQuantityReleased,
          unitOfMeasure: val.unitOfMeasure || 'MT',
          document: val.document,
        });
      });
      setReleaseDetail(tempArr2);
    } else {
      setReleaseDetail([
        {
          orderNumber: 1,
          releaseOrderDate: '',
          netQuantityReleased: 0,
          unitOfMeasure: '',
          document: null,
        },
      ]);
    }

    setLastMileDelivery(_get(ReleaseOrderData, 'data[0].lastMileDelivery', []));
  }, [ReleaseOrderData]);

  const [quantity, setQuantity] = useState(0);

  const addNewDelivery = (value) => {
    setDeliveryOrder([
      ...deliveryOrder,
      {
        orderNumber: '',
        unitOfMeasure: 'MT',
        isDelete: false,
        Quantity: '',
        deliveryOrderNo: '',
        deliveryOrderDate: '',
        status: '',
      },
    ]);
  };
  const deleteNewDelivery = (index) => {
    setDeliveryOrder([...deliveryOrder.slice(0, index), ...deliveryOrder.slice(index + 1)]);
  };
  const [filteredDOArray, setFilteredDOArray] = useState([]);
  const [DOlimit, setDoLimit] = useState(0);
  const [lastMileDelivery, setLastMileDelivery] = useState(false);

console.log(lastMileDelivery,'lastMileDelivery')

  const balanceQuantity = () => {
    const boe = _get(ReleaseOrderData, 'data[0].order.customClearance.billOfEntry.billOfEntry', 0);
    if (boe !== 0) {
      let boeTotalQuantity = boe?.reduce((accumulator, object) => {
        return accumulator + Number(object.boeDetails.invoiceQuantity);
      }, 0);

      deliveryOrder.forEach((item) => {
        if (item.status !== doCancelledString) {
          boeTotalQuantity = boeTotalQuantity - Number(item.Quantity);
        }
      });
      return boeTotalQuantity;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    let limit = DOlimit;
    filteredDOArray.forEach((item, index) => {
      limit = DOlimit - item.Quantity;
      setDoLimit(limit);
    });
  }, [filteredDOArray, deliveryOrder]);

  const onEdit = (index, value, type) => {
    const tempArr = deliveryOrder;
    tempArr.forEach((val, i) => {
      if (i === index) {
        let number = 0;
        for (let i = 0; i < releaseDetail.length; i++) {
          if (releaseDetail[i].orderNumber == val.orderNumber) {
            
            number = Number(releaseDetail[i].netQuantityReleased);
          }
          if (val.orderNumber === 'Not Available') {
            number = balanceQuantity();
          }
        }
        if (val.orderNumber !== 'Not Available' && Number(val.Quantity) > number) {
          handleErrorToast('Quantity Release Cannot Be Greater Than Net Quantity Released For Release Order');
          return;
        }
        if (val.orderNumber === 'Not Available' && 0 > number) {
          handleErrorToast('Quantity Release Cannot Be Greater Than balance Quantity');
          return;
        }
        if (type === 'Save') {
          val.deliveryOrderDate = new Date();
          if (val.status !== doCancelledString) {
            val.status = 'DO Issued';
          }
        }
        val.isDelete = value;
      }
    });
    setDeliveryOrder([...tempArr]);
  };
  const cancelDo = (index, value) => {
    const tempArr = deliveryOrder;
    tempArr.forEach((val, i) => {
      if (i === index) {
        val.status = doCancelledString;
      }
    });
    setDeliveryOrder([...tempArr]);
  };

  const returnLiftingData = (number) => {
    let datainNeed = {};
    const data = deliveryOrderData;
    data.forEach((item) => {
      if (item.deliveryOrderNumber === number) {
        datainNeed = item;
      }
    });
    const doQuantity = Number(datainNeed.netQuantityReleased);
    let balaceQuantity = doQuantity;
    lifting.forEach((item) => {
      if (item.deliveryOrder === number) {
        item.detail.forEach((item2) => {
          balaceQuantity = balaceQuantity - Number(item2.liftingQuant);
        });
        if (balaceQuantity < 0) {
          const toastMessage = 'Lifting quantity cannot be greater than balance quantity';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
        }
      }
    });
    return { doQuantity, balaceQuantity };
  };

  const deliverChange = (name, value, index) => {
    const tempArr = deliveryOrder;
    tempArr.forEach((val, i) => {
      if (i === index) {
        if (name === 'Quantity') {
          const temparr = [...deliveryOrder];
          const filteredArray = temparr.filter((item, index2) => {
            return item.orderNumber === deliveryOrder[index].orderNumber;
          });

          setFilteredDOArray(filteredArray);
        }
        if (name === 'Quantity') {
          if (value <= 0) {
            setDoLimit(quantity);
          } else {
            let tempLimit = quantity;
            filteredDOArray.forEach((item, index) => {
              tempLimit = tempLimit - Number(item.Quantity);
            });
            let totalDONumber = 0;
            const temparr = [...deliveryOrder];
            temparr.forEach((item, index2) => {
              if (item.orderNumber === val.orderNumber) {
                totalDONumber = totalDONumber + Number(item.Quantity);
              }
            });
            setDoLimit(tempLimit);
          }
        }

        if (name === 'orderNumber') {
          const temparr = releaseOrderData;

          const filteredArray = temparr.filter((item, index) => {
            return item.orderNumber === value;
          });

          setQuantity(filteredArray[0]?.netQuantityReleased);
          setDoLimit(filteredArray[0]?.netQuantityReleased);

          const tempString = generateDoNumber(index);
          if (value !== 'Not Available') {
            val.Quantity = filteredArray[0]?.netQuantityReleased;
          } else {
            tempArr[index].Quantity = 0;
          }

          val.deliveryOrderNo = tempString;
        }
        val[name] = value;
      }
    });

    setDeliveryOrder([...tempArr]);
  };

  const doValidation = () => {
    let isOk = true;
    let toastMessage = '';
    for (let i = 0; i <= deliveryOrder.length - 1; i++) {
      if (deliveryOrder[i]?.orderNumber === '' || deliveryOrder[i]?.orderNumber == null) {
        toastMessage = `please select an release order number for DO ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (deliveryOrder[i]?.Quantity === '' || deliveryOrder[i]?.Quantity == null) {
        toastMessage = `please provide quantity for delivery  order for DO  ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
    }

    if (balanceQuantity() < 0) {
      toastMessage = `total Quantity Released cannot be greater than invoice quantity `;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
      }
    }
    let customObj = false;
    for (let i = 0; i < releaseDetail.length; i++) {
      const orderId = releaseDetail[i].orderNumber;
      const orderQuantity = releaseDetail[i].netQuantityReleased;
      const filterForReleaseOrder = deliveryOrder.filter((item) => {
        return item.orderNumber == orderId;
      });
      const finalScore = filterForReleaseOrder.reduce((acc, curr) => {
        let maxQuantity;
        if (curr.status !== doCancelledString) {
          maxQuantity = Number(acc) + Number(curr.Quantity);
        }
        return maxQuantity;
      }, 0);
      if (finalScore > orderQuantity) {
        customObj = true;
      }
    }
    if (customObj) {
      toastMessage = `Quantity Release Cannot Be Greater Than Net Quantity Released For Release Order`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
      }
    }

    return isOk;
  };

  const onSaveDoHAndler = async () => {
    if (doValidation()) {
      const newarr = [];
      deliveryOrder.forEach((item) => {
        newarr.push({
          orderNumber: item.orderNumber,
          unitOfMeasure: item.unitOfMeasure,
          netQuantityReleased: item.Quantity,
          deliveryOrderNumber: item.deliveryOrderNo,
          deliveryOrderDate: item.deliveryOrderDate,
          deliveryStatus: item.status,
          authorisedSignatory: '',
        });
      });

      const payload = {
        deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
        deliveryDetail: newarr,
        lastMileDelivery: lastMileDelivery == 'true',
      };
      const task = 'save';
      await dispatch(UpdateDelivery({ payload, task }));
    }
  };
  const removeLiftinDoc = (type, index1, index2) => {
    const temp = [...lifting];

    temp.forEach((val, i) => {
      if (i === index1) {
        val.detail.forEach((val2, i2) => {
          if (i2 === index2) {
            if (type === 'lr') {
              val2.LRorRRDoc = {};
            }
            if (type === 'eway') {
              val2.eWayBillDoc = {};
            }
          }
        });
      }
    });

    setLifting([...temp]);
  };

  // for setting default breadcrumb tab value //
  useEffect(() => {
    dispatch(getBreadcrumbValues({ upperTabs: 'Release Order' }));
  }, []);
  const isDisabled = (orderNumber) => {
    let release = 0;
    let delivery = 0;
    releaseDetail.forEach((item, index) => {
      if (item.orderNumber === orderNumber) {
        release = item.netQuantityReleased;
      }
    });
    deliveryOrder.forEach((item, index) => {
      if (item.orderNumber === orderNumber) {
        if (item.status === doCancelledString) {
          return false;
        }
        delivery = delivery + Number(item.Quantity);
      }
    });
    if (delivery >= release) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div className={`${styles.dashboardTab}  w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.tab_header_inner} d-flex align-items-center`}>
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
              onClick={() => Router.push('/payment')}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={`${styles.title} heading`}>
              {_get(ReleaseOrderData, 'data[0].company.companyName', '')} -
              <span>{` ${orderId?.toUpperCase()?.slice(0,  constants.numberEight)}-${orderId?.slice( constants.numberEight)}`}</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li
              className={`${styles.navItem}  nav-item`}
              onClick={() => {
                dispatch(setPageTabName('release'));
                dispatch(getBreadcrumbValues({ upperTabs: 'Release Order' }));
              }}
            >
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#releaseOrder"
                role="tab"
                aria-controls="releaseOrder"
                aria-selected="true"
              >
                Release Order
              </a>
            </li>
            <li
              className={`${styles.navItem} nav-item`}
              onClick={() => {
                dispatch(setPageTabName('delivery'));
                dispatch(getBreadcrumbValues({ upperTabs: 'Delivery Order' }));
              }}
            >
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Delivery Order
              </a>
            </li>
            {_get(ReleaseOrderData, 'data[0].lastMileDelivery', false) ? (
              <>
                <li
                  className={`${styles.navItem} nav-item`}
                  onClick={() =>
                    dispatch(setPageTabName('lifting'), dispatch(getBreadcrumbValues({ upperTabs: 'Lifting Details' })))
                  }
                >
                  <a
                    className={`${styles.navLink} navLink nav-link `}
                    data-toggle="tab"
                    href="#liftingDetails"
                    role="tab"
                    aria-controls="liftingDetails"
                    aria-selected="false"
                  >
                    Lifting Details
                  </a>
                </li>
              </>
            ) : null}
          </ul>
        </div>

        <div className="p-0 container-fluid">
          <div className="row">
            <div className="col-md-12 p-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div className="tab-pane show active fade" id="releaseOrder" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <ReleaseOrder
                      ReleaseOrderData={ReleaseOrderData}
                      releaseDetail={releaseDetail}
                      setReleaseDetail={setReleaseDetail}
                    />
                  </div>
                </div>

                <div className="tab-pane fade" id="deliveryOrder" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <DeliveryOrder
                      balanceQuantity={balanceQuantity}
                      setLastMileDelivery={setLastMileDelivery}
                      lastMileDelivery={lastMileDelivery}
                      onSaveHAndler={onSaveDoHAndler}
                      quantity={quantity}
                      ReleaseOrder={ReleaseOrderData}
                      releaseOrderData={deliveryOrder}
                      addNewDelivery={addNewDelivery}
                      onEdit={onEdit}
                      deliverChange={deliverChange}
                      deleteNewDelivery={deleteNewDelivery}
                      cancelDo={cancelDo}
                      isDisabled={isDisabled}
                    />
                  </div>
                </div>

                <div className="tab-pane fade" id="liftingDetails" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <LiftingDetails
                      returnLiftingData={returnLiftingData}
                      data={ReleaseOrderData}
                      liftingData={lifting}
                      addNewLifting={addNewLifting}
                      addNewSubLifting={addNewSubLifting}
                      handleChange={handleChange}
                      handleLiftingSubmit={handleLiftingSubmit}
                      removeLiftinDoc={removeLiftinDoc}
                      ReleaseOrderData={ReleaseOrderData}
                      deleteNewRow={deleteNewRow}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
