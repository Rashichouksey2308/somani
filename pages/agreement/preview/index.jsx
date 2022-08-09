import React from 'react'
import Contract from '../../../src/components/A2S_Sales_Contract'
import DownloadBar from '../../../src/components/DownloadBar'
function index() {
  return (
<>
<Contract preview={true}/>
  <DownloadBar
        downLoadButtonName={`Download`}
        // isPrevious={true}
        // handleUpdate={handleUpdate}
        // leftButtonName={`Save`}
        // rightButtonName={`Preview`}
        // handleApprove={routeChange}
      />
</>
  )
}

export default index