import React, { useState } from 'react';
import styles from '../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import Ports from '../../src/components/Ports';
import { useDispatch } from 'react-redux';
import { CreatePorts } from '../../src/redux/ports/action';
import { portValidtion } from '../../src/utils/helpers/review';

function Index() {
  const dispatch = useDispatch();

  const [portData, setPortData] = useState({
    Country: '',
    Port_Name: '',
    State: '',
    Container_Handling: '',
    Approved: '',
  });

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
    dispatch(CreatePorts(data))
  };

  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header
          className={`${styles.head_container}  d-flex justify-content-between align-items-center border-0 p-0`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/ports')} style={{ cursor: 'pointer' }}>
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
        <Ports handleSubmit={handleSubmit} portData={portData} savePortData={savePortData} />
      </Card>
    </div>
  );
}

export default Index;
