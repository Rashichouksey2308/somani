import * as types from './actionType'

const initialState = {
  gettingAllPorts: false,
  allPorts: null,
  gettingPorts: false,
  portsResponse: null,
  updatingPorts: false,
  updateportsResponse: false,
  creatingPorts: false,
  createdPorts: null
}

function PortsReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PORTS:
      return {
        ...state,
        gettingAllPorts: true
      }

    case types.GET_ALL_PORTS_SUCCESS:
      return {
        ...state,
        gettingAllPorts: false,
        allPorts: action.payload
      }

    case types.GET_ALL_PORTS_FAILED:
      return {
        ...state,
        gettingAllPorts: false,
        allPorts: null
      }

    case types.GET_PORTS:
      return {
        ...state,
        gettingPorts: true
      }

    case types.GET_PORTS_SUCCESS:
      return {
        ...state,
        gettingPorts: false,
        portsResponse: action.payload
      }

    case types.GET_PORTS_FAILED:
      return {
        ...state,
        gettingPorts: false
      }

    case types.UPDATE_PORTS:
      return {
        ...state,
        updatingPorts: true,
        updateportsResponse: null
      }
    case types.UPDATE_PORTS_SUCCESS:
      return {
        ...state,
        updatingPorts: false,
        updateportsResponse: action.payload
      }
    case types.UPDATE_PORTS_FAILED:
      return {
        ...state,
        updatingPorts: false,
        updateportsResponse: null
      }

    case types.CREATE_PORTS:
      return {
        ...state,
        creatingPorts: true,
        createdPorts: null
      }
    case types.CREATE_PORTS_SUCCESS:
      return {
        ...state,
        creatingPorts: false,
        createdPorts: action.payload
      }
    case types.CREATE_PORTS_FAILED:
      return {
        ...state,
        creatingPorts: false,
        createdPorts: null
      }

    default:
      return state
  }
}

export default PortsReducer