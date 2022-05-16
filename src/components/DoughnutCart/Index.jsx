import React from 'react'
import styles from './index.module.scss'
import {Card} from 'react-bootstrap'
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement,registerables} from 'chart.js'

Chart.register(ArcElement);


function Index() {
    let tempArr=[
        {name:"Sail",value:"21",color:"#9675CE"},
        {name:"Jindal Group",value:"23",color:"#4CAF50"},
        {name:"SR Steel",value:"23",color:"#EA3F3F"},
        {name:"Tradex India Corporation",value:"45",color:"#2884DE"},
        {name:"Metalco India",value:"34",color:"#FFCE00"},
              
    ]
    const data = {
    labels: ['Sail','Jindal Grou','SR Steel','Tradex India Corporation','Metalco India'],
    datasets: [
        {
            label: '',
            data: [25,24,25,25,3],
           
            backgroundColor: ['#4CAF50',
            '#EA3F3F',
            '#2884DE',
            '#FFCE00',
            ],
          
        }

    ]
}
const options = {
    plugins: {
        title: {
            display: false,
            text: 'Doughnut Chart',
            color:'blue',
           cutoutPercentage:80,
            font: {
                size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
                           }
        }
    }

}
  return (
    <Card className={styles.card}>
        <Card.Header className={styles.header}>Top 5 Customers </Card.Header>
        <hr className={styles.hr}/>
         <Card.Body className={styles.body}>
          <div className={styles.name}>
              {tempArr.map((val,index)=>{
                  return(
                      <div key={index} className={styles.name_wrapper}>
                      <div className={styles.round} style={{backgroundColor:`${val.color}`}}></div>
                      <span>{val.name}</span>
                     </div>
                  )
              })}
          </div>
          <div className={styles.chart}>
               <Doughnut data={data} options={options} />
               <div className={styles.total_value}><span>24.00 Cr</span></div>
          </div>
         </Card.Body>
       
   </Card>
  )
}

export default Index