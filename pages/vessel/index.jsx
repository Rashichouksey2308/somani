import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Vessel from '../../src/components/Vessel'

import SaveBar from '../../src/components/SaveBar'
import DateCalender from '../../src/components/DateCalender'

export default function Home() {
  return (
    <>
      <Vessel />

      <div className="mt-5">
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
