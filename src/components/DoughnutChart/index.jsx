import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart } from 'chart.js'

/* An array of colors that will be used to color the doughnut chart. */
const bgColors = ['#9675CE', '#4CAF50', '#EA3F3F', '#2884DE', '#FFCE00']

/* Setting the options for the doughnut chart. */
const graphOptions = {
  elements: {
    arc: { borderWidth: 0 }
  },
  plugins: {
    title: {
      animation: {
        animateScale: true
      }
    },
    legend: { display: false }
  },
  responsive: false,
  cutout: 55
}

const listCompanies = (companies) => {
  return companies.map((company, index) => {
    return <div key={index} className={styles.name_wrapper}>
      <div>
        <div className={styles.round} style={{ backgroundColor: `${bgColors[index]}` }}/>
      </div>
      <span className={` heading`}>{company}</span>
    </div>
  })
}

const DoughnutChart = ({ customerSummary }) => {
  Chart.register(ArcElement)

  const [graphData, setData] = useState({
    labels: [],
    datasets: [
      { label: '', data: [], backgroundColor: bgColors }
    ]
  })

  const totalValue = customerSummary.map(val => val.total).reduce((a, b) => a + b, 0)
  const companyNames = customerSummary.map(val => val.company[0]?.companyName)
  const companyValue = customerSummary.map(val => (val.total / totalValue) * 100)

  useEffect(() => {
    if (customerSummary.length) {
      setData({
        labels: companyNames,
        datasets: [
          { label: '', data: companyValue, backgroundColor: bgColors }
        ]
      })
    }
  }, [customerSummary])

  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header}  border_color  heading_card`}>Top 5 Customers</Card.Header>
      <Card.Body className={`${styles.body} row no-gutters`}>
        <div className={`${styles.name} col-sm-7`}>
          {listCompanies(companyNames)}
        </div>
        <div className={`${styles.chart} col-sm-5`}>
          <Doughnut data={graphData} options={graphOptions}/>
          <div className={`${styles.total_value} `}/>
        </div>
      </Card.Body>
    </Card>
  )
}

export default DoughnutChart
