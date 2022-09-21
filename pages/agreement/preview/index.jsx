import React,{useState,useEffect} from 'react'
import Contract from '../../../src/components/A2S_Sales_Contract'
import DownloadBar from '../../../src/components/DownloadBar'
import moment from 'moment'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
function index() {
    const [data, setData] = useState({
    seller: "",
    buyer: "",
    shortseller: "",
    shortbuyer: "",
    sellerSignature: "",
    buyerSignature: "",
    dateOfExecution: "",
    placeOfExecution: "",
    details: "",
    detailsOfEndBuyer: "",
    detailsOfComm: "",
    quan: "",
    unitPrice: "",
    totalOrderValue: "",
    lordPort: "",
    dischargePort: "",
    lastDate: "",
    terms: "",
    addComm: "",
    spec: "",
    unitOfGrade:"",
    unitOfQuantity:"",
    unitOfValue:"",
    curr:""

  })

  useEffect(() => {
    if (window) {
     
        
        const data = JSON.parse(sessionStorage.getItem("genericSelected"))
        console.log(data,"data22222")
        let exe;
        let dat = "";
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == "Sales Agreement") {
            exe = val.place
            if(val.dateOfExecution){
              dat=moment(val.dateOfExecution).format("DD-MM-YYYY")
            }
          }
        })
       
       console.log(dat,exe,"exedasa")

        setData({
          seller: data?.seller?.name,
          buyer: data?.buyer?.name,
          shortseller: data?.seller.shortName,
          shortbuyer:  `${data?.buyer?.name=="Indo German International Private Limited"?"IGPL":"EISL"}`,
          sellerSignature: "",
          buyerSignature: "",
          dateOfExecution: dat,
          placeOfExecution: exe,
          details: data?.supplier?.name,
          detailsOfEndBuyer: "",
          detailsOfComm: data?.order?.commodity,
          quan: data.order?.quantity,
          unitPrice: data.order?.perUnitPrice,
          totalOrderValue: data?.order?.orderValue,
          lordPort: data?.order?.termsheet?.transactionDetails?.loadPort,
          dischargePort: data?.order?.portOfDischarge,

          lastDate: data?.order?.shipmentDetail?.lastDateOfShipment,

          terms: `${data?.order?.termsheet?.transactionDetails?.partShipmentAllowed=="Yes"?"Full":"Partial"}`,
          addComm: data?.additionalComments?.comments,
          spec: data?.productSpecifications?.comments,
          unitOfGrade:data?.order?.unitOfGrade,
          unitOfQuantity:data?.order?.unitOfQuantity,
          unitOfValue:data?.order?.unitOfValue,
          curr:data?.order?.orderCurrency
        })
      
    }
  }, [])
  const exportPDF = () => {
   
    const doc = new jsPDF('p', 'pt', [800, 1200])
    doc.html(ReactDOMServer.renderToString(toPdf(data)), {
      callback: function (doc) {
        doc.save('sample.pdf')
      },
      // margin:margins,
      autoPaging: "text",


    },


    )
  }
  return (
<>
  <Contract preview={true}/>
  <DownloadBar
        downLoadButtonName={`Download`}
        handleReject={exportPDF}
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

const toPdf=(data)=>{
  return(
         <table width="800px" bgColor="#ffffff" style={{marginBottom:'20px'}} cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td style={{fontFamily:'Times New Roman, Times, serif', padding:'20px', fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
            <p align='center' style={{textDecoration:'underline'}}><strong><u>SALES CONTRACT</u></strong></p>
            <p align='center' style={{float:'left'}}>This Sales Contract("<span style={{fontWeight:'bold'}}>{data.shortseller + "/" + data.shortbuyer + "/" + "2022/001"}</span>") is made at the place and on the day as set out in <strong>Schedule I</strong> between the Seller and the Buyer.</p>
          </td>
        </tr>
        <tr>
          <td valign='top' style={{fontFamily:'Times New Roman, Times, serif', fontSize:'12px', lineHeight:'18px', color:'#000000', padding:'20px 20px 40px'}}>
            <table width="100%" cellPadding="10" style={{border:'1px solid #000000'}} cellSpacing="0" border="0">
              <tr>
                <td width="5%" style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>1</td>
                <td width="25%" style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Seller</td>
                <td width="70%" style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>
                  <>{data?.seller}</>
                </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>2</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Buyer</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>             
                  <>{data?.buyer}</>              
                </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>3</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Manufacturer/Supplier / Shipper</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>4</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>End User / End Buyer</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>5</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Commodity, Quantity, Specification and Unit Price</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>6</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Total Order Value  </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>7</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Discharge Port</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>8</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Loading Port</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>9</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Quality / Inspection </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>In case of issues in Quality, Neutral agency certification for Quality and Quantity will be considered as final and binding on Buyer &amp; Seller. Load port report for quality and quantity are final and binding between Seller and Buyer for all purpose. If any dispute arises relating but not limited to quantity, quality, the same is to be settled directly between Manufacturer/shipper and Buyer.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>10</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Duties and Taxes</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>All Taxes and duties, present or future, including variations thereto and other taxes shall be borne and paid by Buyer.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>11</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Shipment </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Details as per Schedule 1</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>12</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Payment Terms </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>
                  <ol type="A" style={{paddingLeft:'16px', float:'left', display:'block'}}>
                    <li style={{marginBottom:'10px'}}>All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and custom clearance shall be to Buyer's account and shall be solely the Buyer's responsibility.</li>
                    <li style={{marginBottom:'10px'}}>The Buyer shall pay for entire cargo within <em style={{fontStyle:'normal', textDecoration:'underline'}}>90 days</em> from the date of B/L or <em style={{fontStyle:'normal', textDecoration:'underline'}}>60 days</em> from the date of discharge of vessel at discharge port, whichever is earlier. The Buyer shall make full payment of the material to be lifted through TT remittance. The Seller shall release the part material to Buyer upon receipt of part payment for the part quantity of material to be lifted after obtaining delivery order or Written Release Order from the LC opening bank as per CMA. The delivery order instructions shall be issued for the part material, for which the payment has been made within one banking day. However, Seller will provide first delivery order in Advance as per buyer's request.</li>
                    <li style={{marginBottom:'10px'}}>The material shall be stored at Discharge Port for which the cost of such Rent, Claim, and penalty shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity Release Order from the Financing Bank shall be sent to the CMA Agent, within one banking day</li>
                    <li style={{marginBottom:'10px'}}>Documents to be provided to Buyer
                      <ol type="1" style={{paddingLeft:'0', marginTop:'16px'}}>
                        <li>The Seller's Commercial Invoice,</li>
                        <li>Full set of 3/3 originals of Bills of Lading,</li>
                        <li>Certificate of Quality,</li>
                        <li>Certificate of Weight,</li>
                        <li>Certificate of Origin.</li>
                        <li>Copy of Marine Insurance Certificate / Insurance Policy</li>
                      </ol>
                    </li>
                  </ol>
                  All the above documents are subject to receipt from shipper.
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign='top' style={{fontFamily:'Times New Roman, Times, serif', fontSize:'12px', lineHeight:'18px', color:'#000000', padding:'100px 20px 40px'}}>
            <table width="100%" cellPadding="10" style={{border:'1px solid #000000'}} cellSpacing="0" border="0">
              <tr>
                <td width="5%" style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>13</td>
                <td width="25%" style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Insurance </td>
                <td width="70%" style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>
                  <ol type="A" style={{paddingLeft:'16px'}}>
                    <li style={{marginBottom:'10px'}}>Marine Insurance: Seller will provide Marine Insurance as received from Shipper.</li>
                    <li style={{marginBottom:'10px'}}>Stock Insurance: The Buyer will arrange insurance for 110% of the cargo value at discharge port, valid at all times covering All Risk including Fire, Burglary and Act of God (AOG). The cargo shall be insured by the Buyer at its own cost for the full value of cargo. The Policy shall be endorsed in favour of the Seller or its nominated Bank. The Beneficiary of the Insurance Claim shall be the Seller or its nominated Bank as per Seller's instructions.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>14</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Shipping Terms </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>All demurrage/despatch for discharge port to be settled directly between Shipper, Vessel Owner agent and End User with no liability upon the Seller whatsoever</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>15</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Title / Risk </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Title to the Goods shall be deemed to have been transferred to the Buyer and the Goods shall be deemed to be sold and delivered to the Buyer only upon receipt by the Seller of the entire contract value. It is clarified that the Seller shall retain lien and the full legal ownership in the Goods, to secure the Buyer's obligation to pay the entire contract value, until receipt by the Seller of the entire contract value.  All risk of loss or damage shall pass to the Buyer as per Incoterms 2020.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>16</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Time is the essence</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Time is the Essence of the Contract. In the event of failure of the Buyer to fulfill its obligations as contained herein including making of the payment and taking of the delivery of the material within the time period specified in the Clause Payment Terms hereinabove, it shall constitute a material breach of the Agreement. </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>17</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Remedies Available to the Seller</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>
                  <ol type='A' style={{paddingLeft:'16px'}}>
                    <li style={{marginBottom:'10px'}}>In the event of the failure of the Buyer to make timely payment as agreed to in terms of the Clause Payment Terms hereinabove, the Buyer shall pay the overdue interest @ 18% p.a. to the Seller for each day of delay. However, the delay in making the payment shall in no event exceed 15 days beyond the due date of making the payment as specified hereinabove.</li>
                    <li style={{marginBottom:'10px'}}>However, in the eventuality of Buyer failing to pay for and/or take delivery as per Clause Payment Terms beyond 15 days of the due date, the Seller shall have the absolute right to dispose off the Material, on terms and conditions as may be deemed fit by the Seller, to any other party at full risk, responsibility and costs of Buyer, including financial costs, other expenses as well as liquidated damages. The Buyer further agrees to make good the losses, financial costs and expenses incurred by the Seller due to such disposal of the goods, within 3 working days of the receipt of the demand by the Buyer from the Seller.</li>
                    <li style={{marginBottom:'10px'}}>The Buyer shall forthwith on demand indemnify the Seller against all the direct losses, liabilities, claims or damages which Seller shall incur as a result of any breach by the Buyer (including but not limited to any claim, loss, liability or damage Seller may incur to a third party as shipper of the product).</li>
                    <li style={{marginBottom:'10px'}}>Failure of the Buyer to make payment in terms of clause hereinabove will entitle the Seller to seek appropriate remedies available to it under the laws of the jurisdiction where the goods are stored for recovery of the amounts and / or any other relief as thought fit by the Seller in its sole discretion.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>18</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Special Conditions </td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>
                  <ol type="1" style={{paddingLeft:'16px'}}>
                    <li style={{marginBottom:'10px'}}>It is expressly and unconditionally agreed and Buyer fully acknowledges that the title in the goods / material shall pass on to the Buyer only in respect of such specific quantity thereof as released from the storage facility by Collateral Manager in terms of the 'Tripartite Agreement' after receipt of the price and other payables in respect thereof and actual delivery of the goods having been made to the Buyer. The Seller shall continue to be the owner, holding absolute title in the goods/material not so released and delivered to the Buyer in any contingency including of Buyer even becoming insolvent but not limiting, and shall be entitled to deal with the goods/material as it may deem fit including disposing them of at the risk and cost of the Buyer. For the avoidance of doubt, the parties agree and acknowledge that the Goods shall not be in any manner whatsoever be construed to be in the constructive or actual possession of the Buyer until the Goods are released and delivered by the Seller in accordance with this Agreement. The Buyer specifically represents and agrees to not exercise any or all such possessory rights on the Goods until the Goods are released and delivered by the Seller in accordance with this Agreement.</li>
                    <li style={{marginBottom:'10px'}}>Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of the actual transaction(s) taking place between Manufacturer/shipper and the Seller under the Contract and/or any modified/amended agreement will be to the account of the Buyer only. The Seller shall in no way be responsible or liable for the same.</li>
                    <li style={{marginBottom:'16px', float:'left', width:'100%'}}>The BUYER unconditionally agrees to abide by a collateral management agreement by and among "<strong>Collateral Manager</strong>", "<strong>Financing Bank</strong>" and "<strong>Seller</strong> and undertakes not to take any delivery of Goods unless Collateral Manager releases such quantity of the Goods in accordance with the Bank's written release instructions under the Collateral Management Agreement. If Buyer, directly or indirectly, violates the undertaking in the preceding sentence, then Buyer shall indemnify Seller for any loss, liability or claim (including without limitation any expenses incurred) without any demur or protest. The Seller shall be under obligation to issue delivery order for the quantity for which the payment has been received within one banking day.</li>
                    <li style={{marginBottom:'10px'}}>Buyer acknowledges that:(i) pursuant to this Agreement Seller has entered into certain agreements similar to the Collateral Management Agreement to fulfil requirement of the relevant bank which has issued a letter of credit to facilitate purchase of the Goods by Seller; and (ii) the collateral manager appointed by the Bank shall keep the Goods in its custody at a facility leased by the Buyer at Storage facility at Discharge Port. For this purpose, Buyer unconditionally agrees that whenever collateral manager takes Buyer's permission to keep the Goods at the Storage facility which facility is under Buyer's control and management, then Buyer shall ensure the collateral manager has the unfettered and unrestricted access to the Storage Facility and shall have the sole custody over the Goods kept at the Storage facility. If there is any theft or loss of the Goods at the Storage facility, the Buyer shall fully indemnify Seller to such loss of the Goods without any demur or protest.</li>
                    <li style={{marginBottom:'10px'}}>Notwithstanding anything contained in this Agreement, for avoidance of any doubts, the Parties hereby clarify that unless Buyer fully pays Seller under this Agreement, the Seller shall have lien on unpaid quantity of the Goods which is delivered to Buyer pursuant to this Agreement or any other agreement. Buyer unconditionally represents and warrants that Buyer has not created and shall not create any encumbrance (whatsoever) in favour of any lender or any third party on the Goods under this Agreement or any other similar agreements unless Buyer fully pays for such Goods.</li>
                    <li style={{marginBottom:'10px'}}>Any payment to be made by the Buyer under this contract shall be made free and clear of and without deduction or withholding for or on account of any taxes. If at any time the Buyer is required to make any deduction or withholding in respect of taxes from any payment to be made under this contract, the Buyer shall pay such additional amounts as may be necessary to ensure that, after the making of such deduction or withholding, the Seller receives for such payment a net sum equal to the sum it would have received had no such deduction or withholding been made.</li>
                    <li style={{marginBottom:'10px'}}>It is clarified that the Goods shall be deemed to have been supplied to the Buyer when the goods are loaded on board the vessel and the Sales Consideration as mentioned hereinabove shall become due and payable from then onwards by the Buyer to the Seller.</li>
                    <li style={{marginBottom:'10px'}}>The contractual amount till the time it is not paid will be treated as an admitted, undisputed debt due and payable by the Buyer to the Seller.</li>
                    <li style={{marginBottom:'10px'}}>Within seven (7) days of receipt of the statement of accounts, as prepared by Seller, if Buyer does not provide any comment on the statement of accounts, then such statement of accounts shall deem to be accepted by Buyer and binding on it.</li>
                    <li>The End User and Manufacturer/shipper shall have direct recourse to each other for matters including but not limited to the following:</li>
                  </ol>
                  <p style={{marginBottom:'0'}}>a) For all quantity and quality claims/ issues pertaining to material supplied by Manufacturer/shipper,</p>
                  <p style={{marginBottom:'0'}}>b) Any express or implied warranty claim for the quality of material supplied by Manufacturer/shipper,</p>
                  <p style={{marginBottom:'0'}}>c) Loss of cargo,</p>
                  <p>d) Any demurrage charges at the load port and/or discharge port shall be settled directly between the Buyer and Manufacturer/shipper,</p>
                  All Claims direct or consequential shall be settled directly between End Buyer and Manufacturer/shipper.
                </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>19</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Mutual Collaboration</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Both the Buyer and the Seller recognize that circumstances may arise that could not have been foreseen at the time this Contract is being entered into. Both Parties agree that they will use their commercially reasonable effort to achieve a mutually acceptable solution to any problem that may arise due to any unforeseen circumstances in the spirit of mutual understanding and collaboration</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>20</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Termination</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>In the event the Buyer commits any breach of the terms of the agreement, then the Seller may, by giving thirty (30) days prior written notice to the Buyer, terminate this Agreement without liability and charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of the Goods already shipped by the Seller at the instance of the Buyer. Provided further, the Parties hereto agree that the Seller may immediately terminate this Agreement without providing any notice to the Buyer upon the Buyer, or the Buyer's shareholders commencing a voluntary proceeding under any applicable bankruptcy, insolvency, winding up or other similar law now or hereafter in effect (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the entry of an order for relief in an involuntary proceeding under any such law (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession by a resolution professional, Receiver, liquidator, assignee (or similar official) for any or a substantial part of its property; or the Buyer has involuntarily become the subject of proceedings (including filing of an application/ petition for corporate insolvency resolution) under the Insolvency &amp; Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the Buyer.<br/><br/>In the event that conditions of Force Majeure continue so that the Buyer's obligations remain suspended for a period or periods amounting in aggregate to sixty (60) days in any consecutive period of ninety (90) days, and at the end of said period or at anytime thereafter, then the Seller may give thirty (30) days prior written notice to the Buyer that the Seller intends to terminate this Agreement. At the expiration of the thirty (30) days, the Seller at its discretion may terminate this Agreement forthwith without any liability or charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of the Goods.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>21</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Notices</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Any notice given by one Party to the other shall be in the English language and sent by facsimile or by pre-paid air courier. Any notice sent by facsimile shall be deemed received on the day of transmission and any notice sent by courier shall be deemed duly received on the third (3rd) day following dispatch. Such notices shall be addressed at the addresses mentioned hereinabove.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>22</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Force Majeure</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>The Seller shall not be liable to the Buyer or to the Manufacturer/shipper for any damages due to delay, interruption or failure in performance of the obligations under the present Agreement (including but not limited to any loss, damage or delay) if such loss, damage, delay or failure is due to or results from Acts of God, War (whether declared or undeclared), blockades, revolution, insurrection, civil commotion, terrorism, riot, invasion, plague or other epidemic, fire, sabotage, quarantine restriction, explosion or embargo, including any change/modification in commercial laws, rules and regulations by government, acts of Government in creating any restrictions or control in imports, exports or foreign exchange, fire, flood, storm, earthquakes, accident in and to the Vessel or strikes, breakdown of loading or unloading facilities, or transporting, loading, unloading or delivering freight, embargoes and breakdown of railroads, serious damage to or breakdown of the transmission system connecting to the Buyer's warehouse or the like or any other cause which may be beyond the control of the Seller.<br/><br/>The force Majeure declared by the Manufacturer/shipper shall be applicable to the Seller.<br/><br/>No event described in this Clause shall constitute a Force Majeure event with respect to the Buyer's obligation to pay for any product loaded at loading place in transit to the Buyer or stored at the licensed warehouse.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>23</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Breach of Contract</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>
                  <ol type="1" style={{paddingLeft:'16px'}}>
                    <li style={{marginBottom:'10px'}}>In the event, the Buyer fails to fulfill its obligations as laid down hereunder, the Buyer shall be fully responsible and liable for all losses, damages, both direct and consequential incurred by the Seller.</li>
                    <li style={{marginBottom:'10px'}}>The Buyer indemnifies and shall continue to keep the Seller fully indemnified against all losses, damages, expenses, claims, proceedings, liabilities (including all liabilities of the Seller towards payment of LC charges, interest, default interest and other similar charges to its financing entity, and those arising under the Collateral Management Agreement and the Irrevocable Tripartite Agreement), demands including but not limited to those arising due to the failure of the Buyer to make the payment and/or take delivery of the Goods within the stipulated time period as specified in the Clause Payment Terms hereinabove as well as for executing the transaction as contemplated herein the agreement for and on behalf of the Buyer.</li>
                    <li style={{marginBottom:'10px'}}>If, due to the failure of the Buyer to fulfill its obligations as laid down hereunder in the Contract, any dispute or difference arises between the Seller and Manufacturer/Shipper, and due to which any Award/Judgment/decree/Order is passed or otherwise a settlement is reached, the Buyer shall be bound to accept the same and bear the liability, costs, expenses arising there from.</li>
                    <li style={{marginBottom:'10px'}}>In the event, any judicial/ legal proceedings are initiated against the Seller by Manufacturer/shipper, the Buyer shall be required to be present and associated at all stages of the proceedings and shall bear the entire expenses of arbitration/litigation and/or of the negotiated settlement. The Buyer shall have no authority or excuse to challenge the same on any ground including that the Buyer has not been consulted therein or that the negotiated settlement is not reasonable or otherwise.</li>
                    <li style={{marginBottom:'10px'}}>Remedies provided under this agreement shall be cumulative and in addition to other remedies provided by law.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>24</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Dispute Resolution &amp; Arbitration</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Both parties agree to use their best efforts to amicably resolve any claims controversies and disputes arising out of this contract, as well as to determine the final costs thereof. Any such claims, controversies and disputes which cannot be resolved through negotiations within a period of 60 days of the notification of such claims, disputes and controversies shall be referred to arbitration in accordance with the rules of Singapore International Arbitration Center (SIAC). One arbitrator to be nominated jointly by both the parties. The award rendered by the arbitrator shall be final and binding upon both the parties concerned and subject to no appeal. The costs and expenses of the prevailing party (including, without limitation, reasonable attorney's fee) will be paid by the losing party. The contract shall be subject to Laws of India. The seat of the arbitration will be Singapore and the proceedings shall be conducted in English language.<br/><br/>Notwithstanding the aforesaid, the parties agree and affirm that relief available under Section 9 of the Indian Arbitration Act, 1996 (as amended) shall be available to the parties, and the parties may initiate appropriate proceedings in India in order to avail such relief.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>25</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Modifications of the contract</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>No changes in respect of the contract covered by this agreement shall be valid unless the same is agreed to in writing by both parties herewith specifically stating the same to on amendment to this agreement. Contract is valid if approved by Fax and no mail confirmation will be sent.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>26</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>No Assignment</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Neither Party shall be entitled to assign, transfer or sub-contract its rights under this Agreement in whole or in part without first obtaining the other's consent in writing.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>27</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Severability</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>The Parties intend each provision of this Agreement to be severable and distinct from the others. If a provision of this Agreement is held to be illegal, invalid or unenforceable, in whole or in part, the Parties intend that the legality, validity and enforceability of the remainder of this Agreement shall not be affected.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>28</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Waiver</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Failure to enforce any condition herein contained shall not operate as a waiver of the condition itself or any subsequent breach thereof.</td>
              </tr>
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>29</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Representations and Warranties</td>
                <td style={{borderBottom:'1px solid #000000', textAlign:'justify'}}>Each party to this Agreement hereby represents and warrants that:
                  <ol type="1" style={{paddingLeft:'16px'}}>
                    <li style={{marginBottom:'10px'}}>it is a legal entity duly organized and validly existing under the laws of the jurisdiction of its incorporation and has all necessary corporate power, authority and capacity to execute this Agreement and undertake the transactions contemplated herein;</li>
                    <li style={{marginBottom:'10px'}}>the execution and delivery of this Agreement has been duly and validly authorized and constitutes valid and legally binding obligations enforceable in accordance with its terms;</li>
                    <li style={{marginBottom:'10px'}}>the execution, delivery and performance of this Agreement does not and shall not; (i) contravene any provisions of its charter documents; (ii) result in a default, breach or contravention of any conditions or provisions of any agreement to which it is a party or any obligation it is bond by; or (iii) violate any law, order, judgment, injunction, decree, award, rule or regulation applicable to it.</li>
                  </ol>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign='top' align='center' style={{fontFamily:'Times New Roman, Times, serif', fontSize:'12px', lineHeight:'1.5', color:'#000000', padding:'20px'}}><h3 style={{fontSize:'15px'}}>Schedule I</h3>
            <table width="100%" cellPadding="10" style={{border:'1px solid #000000'}} cellSpacing="0" border="0">
              <tr>
                <td width="42%" style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Date of Execution</td>
                <td width="58%" style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{moment(new Date()).format("DD-MM-YYYY")}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Place of Execution</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.placeOfExecution}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Details of Manufacturer / Supplier / Shipper</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.details}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Details of End Buyer</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.details}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Details of Commodity</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.detailsOfComm}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Quantity</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.quan} {data?.unitOfQuantity?.toUpperCase()}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Unit Price</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.curr} {data.unitPrice}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Total Order Value</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.totalOrderValue} {data.unitOfValue}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Load Port</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.lordPort}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Discharge Port</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.dischargePort}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Last Date of Shipment</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{moment(data.lastDate).format("DD-MM-YYYY")}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Shipment Term</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{data.terms}</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Additional Conditions</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>{
                  <>
                    <ol type="1" style={{paddingLeft:'16px'}}>
                      {data?.addComm?.length > 0 &&
                        data?.addComm?.map((val, index) => {
                          return (<li style={{marginBottom:'10px'}} key={index}>{val}</li>)
                        })
                      }
                    </ol>
                  </>
                }</td>
              </tr>              
              <tr>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>Specification</td>
                <td style={{borderBottom:'1px solid #000000', borderRight:'1px solid #000000'}}>
                  <>
                    <ol type="1" style={{paddingLeft:'16px'}}>
                      {data?.spec?.length > 0 &&
                        data?.spec?.map((val, index) => {
                          return (<li style={{marginBottom:'10px'}} key={index}>{val}</li>)
                        })
                      }
                    </ol>
                  </>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign='top' style={{fontFamily:'Times New Roman, Times, serif', fontSize:'12px', lineHeight:'1.5', color:'#000000', padding:'20px'}}><strong>SIGNATURE PAGE</strong></td>
        </tr>
        <tr>
          <td valign='top' style={{fontFamily:'Times New Roman, Times, serif', fontSize:'12px', lineHeight:'1.5', color:'#000000', padding:'20px'}}>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td width="50%">Seller</td>
                <td width="50%" style={{paddingLeft:'15px'}}>Buyer</td>
              </tr>
              <tr>
                <td colSpan={2} height={80}></td>
              </tr>
              <tr>
                <td style={{paddingRight:'15px'}}>
                  <textarea style={{width:'100%', outline:'none'}} rows={4}></textarea>
                </td>
                <td style={{paddingLeft:'15px'}}>
                  <textarea style={{width:'100%', outline:'none'}} rows={4}></textarea>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
  )
}