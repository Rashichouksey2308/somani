import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart } from 'chart.js';

const tempArr = [
  { color: '#9675CE' },
  { color: '#4CAF50' },
  { color: '#EA3F3F' },
  { color: '#2884DE' },
  { color: '#FFCE00' },
];

const bgColors = ['#9675CE', '#4CAF50', '#EA3F3F', '#2884DE', '#FFCE00'];

function Index({ customerSummary }) {
  Chart.register(ArcElement);

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: bgColors,
      },
    ],
  });
  useEffect(() => {
    let tempData = [];
    let tempPoint = [];

    if (customerSummary?.length > 0) {
      customerSummary.forEach((val, index) => {
        tempData.push(val?.company[0]?.companyName);
        tempPoint.push(val.total);
      });
      setData({
        labels: tempData,
        datasets: [
          {
            label: '',
            data: tempPoint,
            backgroundColor: bgColors,
          },
        ],
      });
    }
  }, [customerSummary]);

  const options = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      title: {
        animation: {
          animateScale: true,
        },
      },
      legend: {
        display: false,
      },
    },
    responsive: false,
    cutout: 55,
  };

  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header}  border_color  heading_card`}>Top 5 Customers</Card.Header>
      <Card.Body className={`${styles.body} row no-gutters`}>
        <div className={`${styles.name} col-sm-7`}>
          {customerSummary?.length > 0 &&
            customerSummary?.map((val, index) => {
              return (
                <div key={index} className={styles.name_wrapper}>
                  <div>
                    <div className={styles.round} style={{ backgroundColor: `${tempArr[index].color}` }}></div>
                  </div>
                  <span className={` heading`}>{val?.company[0]?.companyName}</span>
                </div>
              );
            })}
        </div>
        <div className={`${styles.chart} col-sm-5`}>
          <Doughnut data={data} options={options} />
          <div className={`${styles.total_value} `}></div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Index;
