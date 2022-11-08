<<<<<<< Updated upstream
import React, { Component } from 'react';
import { withRouter } from 'next/router';


export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

 

  render() {
=======
import React, { Component } from 'react'
import { withRouter } from 'next/router'

export class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
>>>>>>> Stashed changes
    if (this.state.hasError) {
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
<<<<<<< Updated upstream
            flexDirection: 'column',
=======
            flexDirection: 'column'
>>>>>>> Stashed changes
          }}
        >
          <h2>Something went wrong</h2>
          <div>
<<<<<<< Updated upstream
            <button type="button" onClick={() => this.setState({ hasError: false })}>
=======
            <button type='button' onClick={() => this.setState({ hasError: false })}>
>>>>>>> Stashed changes
              Try again?
            </button>
            <button
              style={{ marginLeft: '1rem' }}
<<<<<<< Updated upstream
              type="button"
              onClick={() => {
                window.history.back();
                setTimeout(() => {
                  location.reload();
                }, 100);
=======
              type='button'
              onClick={() => {
                window.history.back()
                setTimeout(() => {
                  location.reload()
                }, 100)
>>>>>>> Stashed changes
              }}
            >
              Previous Page
            </button>
          </div>
        </div>
<<<<<<< Updated upstream
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
=======
      )
    }

    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
>>>>>>> Stashed changes
