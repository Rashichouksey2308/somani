import React, { Component } from 'react'
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
        <div>
          <h2>Something went wrong</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
