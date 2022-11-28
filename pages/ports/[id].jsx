import React, { useState, useEffect } from 'react';
import styles from '../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import Ports from '../../src/components/Ports';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePorts, GetPorts, UpdatePorts } from '../../src/redux/ports/action';
import { portValidtion } from '../../src/utils/helpers/review';
import { getCountries, getState } from '../../src/redux/masters/action';
import _get from 'lodash/get';
import SaveBar from '../../src/components/SaveBar'

function Index() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCountries());
    dispatch(getState())
  }, [dispatch]);

  const { getCountriesMasterData } = useSelector((state) => state.MastersData);
  const { getStateMasterData } = useSelector((state) => state.MastersData);

  const { portsResponse } = useSelector((state) => state.ports);
  const portResponseData = _get(portsResponse, 'data[0]', {});

  let id = sessionStorage.getItem('portId');

  useEffect(() => {
    if (!id) return;
    dispatch(GetPorts(`?portId=${id}`));
  }, [dispatch]);

  const [portData, setPortData] = useState({
    Country: 'India',
    Port_Name: '',
    State: '',
    Container_Handling: '',
    Approved: '',
  });

  useEffect(() => {
    if(id){
      setPortData({
        Country: portResponseData?.Country,
        Port_Name: portResponseData?.Port_Name,
        State: portResponseData?.State,
        Container_Handling: portResponseData?.Container_Handling,
        Approved: portResponseData?.Approved,
      })
    }
    
  }, [portData?.Country])
  

  const savePortData = (name, value) => {
    let newInput = { ...portData };
    newInput[name] = value;
    setPortData(newInput);
  };

  const handleSubmit = () => {
    if(!portValidtion(portData)) return
    let data = {
      Country: portData.Country,
      Port_Name: portData.Port_Name,
      State: portData.State,
      Container_Handling: portData.Container_Handling,
      Approved: portData.Approved,
    };
    let data2 = {
      Country: portData.Country,
      Port_Name: portData.Port_Name,
      State: portData.State,
      Container_Handling: portData.Container_Handling,
      Approved: portData.Approved,
      portId: portResponseData._id
    }
    if(id){
      dispatch(UpdatePorts(data2))
    } 
    else {
    dispatch(CreatePorts(data))
    }
  };

  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header
          className={`${styles.head_container} d-flex justify-content-between align-items-center border-0 p-0`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => { sessionStorage.getItem('portId') && sessionStorage.removeItem('portId'); Router.push('/ports')}} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Ports</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
          </div>
        </Card.Header>
        <Ports handleSubmit={handleSubmit} portData={portData} savePortData={savePortData} country={getCountriesMasterData} />
      </Card>
      {/* <SaveBar rightBtn="Submit" /> */}
    </div>
  );
}

export default Index;
