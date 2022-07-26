import styles from './index.module.scss'
import UploadOther from '../../src/components/UploadOther'
import Vessel from '../../src/components/Vessel'
import UploadDocument from '../../src/components/UploadDocument'
import SaveBar from '../../src/components/SaveBar'

export default function Home() {
  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 className={`${styles.title} heading`}>
              <img
                src="/static/arrow-right.svg"
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              Vessel Details
            </h1>
            <div className="ml-auto">
              <div className={`${styles.lastModified} text `}>
                <span>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.backgroundMain} container-fluid background2`}>
        <div className={`${styles.vessel_card}`}>
          <Vessel vesselName="Vessel Information 1" isPartShipment={true} />

          {/* <div className='mt-4'>
        <Vessel vesselName='Vessel Information 2'
         isPartShipment={false}/>
       </div> */}
          <UploadDocument />
          <UploadOther />
        </div>
      </div>
      <SaveBar />
    </>
  )
}
