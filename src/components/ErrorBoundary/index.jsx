import React, { Component } from 'react'
import { withRouter } from 'next/router'
//import ContactDelershipModal from "../contactDealershipModal";
// import captureErrorForLogs from "../../utility/error-logger";
// import Error from '../../pages/404'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // componentDidCatch(error, errorInfo) {
  //     captureErrorForLogs({ error, errorInfo }, "client");
  // }


  render() {
    
    if (this.state.hasError) {
      return (
        <div style={{
          width:"100%",
          height:"100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column"
        }} >
          <h2>Something went wrong</h2>
           <div>
            <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
            <button
            style={{marginLeft:"1rem"}}
            type="button"
            onClick={() => {
              window.history.back()
              setTimeout(() =>{
                location.reload()
              },100)
            }}
          >
            Previous Page
          </button>
           </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
