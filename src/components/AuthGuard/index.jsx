import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { handlePageLoading } from '../../redux/authentication/actions'

const whitelistedRoutes = [
  '/',
  '/flipbook',
  '/user-profile',
  '/Dealer/RideOut/gallery',
  '/Dealer/dealerSummary',
  '/Dealer/Rideout/update',
  '/Dealer/Rideout/clone',
  '/RidesAndEvents/update_Scramble',
  '/RidesAndEvents/update_EscapedReunion',
  '/RidesAndEvents/update_OffRoad',
  '/RidesAndEvents/update_Tours',
  '/RidesAndEvents/update_Astral',
  '/RidesAndEvents/update_ReunionNepal',
  '/RiderMania/MainEventForm/update',
  '/Dealer/update',
  '/Dealer/gallery',
]

export default (ChildComponent) => {
  class AuthGuard extends PureComponent {
    componentWillMount() {}

    componentDidMount() {
      let { pathname } = this.props.location
      if (whitelistedRoutes.indexOf(pathname) >= 0) {
        let payload = {
          loading: false,
          permissions: { read: true, write: true },
        }
        this.props.handlePageLoading(payload)
      }
    }

    componentWillReceiveProps(nextProps) {
      if (
        nextProps.location.pathname !== this.props.location.pathname &&
        nextProps.userPermissions.length !== 0
      ) {
        this.checkRoute(nextProps)
      }
      if (
        nextProps.userPermissions !== this.props.userPermissions &&
        nextProps.userPermissions.length !== 0
      ) {
        this.checkRoute(nextProps)
      }
    }

    async checkRoute(data) {
      let { userPermissions, location } = data
      let payload = {
        loading: true,
        permissions: { read: false, write: false },
      }
      this.props.handlePageLoading(payload)

      if (whitelistedRoutes.indexOf(location.pathname) >= 0) {
        let payload = {
          loading: false,
          permissions: { read: true, write: true },
        }
        this.props.handlePageLoading(payload)
      } else {
        let routes = []
        await userPermissions.map((item) => {
          routes = [...routes, ...item.pages]
        })

        let [foundItem] = await routes.filter(
          (item) => item.route === location.pathname,
        )
        if (foundItem) {
          let payload = {
            loading: false,
            permissions: { read: foundItem.read, write: foundItem.write },
          }
          this.props.handlePageLoading(payload)
        } else {
          this.props.history.push('/')
        }
      }
    }

    toastError(message) {
      toast.error(message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 20,
      })
    }

    render() {
      let token = this.props.token || Cookies.get('token')
      switch (token) {
        case null:
          return <Redirect to="/login" />
        case undefined:
          return <Redirect to="/login" />
        default:
          return <ChildComponent {...this.props} state={this.state} />
      }
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      handlePageLoading: (payload) => {
        dispatch(handlePageLoading(payload))
      },
    }
  }

  function mapStateToProps(state) {
    return {
      token: state.Auth.token,
      userPermissions: state.Auth.userPermissions,
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthGuard)
}
