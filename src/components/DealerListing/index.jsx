<<<<<<< Updated upstream
import React, { Component } from 'react';
import { Card, CardBody, Col, Collapse, Form, FormGroup, Input, Row } from 'reactstrap';
import history from '../../history';
import InputText from '../InputText';
import CustomButton from '../CustomButton';
import CartTitle from '../CartTitle';
import Loader from '../Loader';
import MaterialTable from 'material-table';

import '../../assets/scss/components/MeterialTable/index.scss';
import get from 'lodash/get';

const _ = { get };

export default class DealerListing extends Component {
  constructor(props) {
    super(props);
=======
import React, { Component } from 'react'
import { Card, CardBody, Col, Collapse, Form, FormGroup, Input, Row } from 'reactstrap'
import history from '../../history'
import InputText from '../InputText'
import CustomButton from '../CustomButton'
import CartTitle from '../CartTitle'
import Loader from '../Loader'
import MaterialTable from 'material-table'

import '../../assets/scss/components/MeterialTable/index.scss'
import get from 'lodash/get'

const _ = { get }

export default class DealerListing extends Component {
  constructor (props) {
    super(props)
>>>>>>> Stashed changes
    this.state = {
      toggleActive: false,
      country: '',
      countryCode: '',
      count: 100,
      stateCode: '',
      state: '',
      page: 0,
      city: '',
      dealerId: '',
      dealerEmail: '',
      dealerPhone: '',
<<<<<<< Updated upstream
      pageSize: 10,
    };
  }

  componentDidMount() {
    const state = this.state;
=======
      pageSize: 10
    }
  }

  componentDidMount () {
    const state = this.state
>>>>>>> Stashed changes
    const data = {
      page: state.page,
      country: state.countryCode,
      state: state.state,
      city: state.city,
      emailId: state.dealerId,
      phone: state.dealerEmail,
      dealerId: state.dealerPhone,
<<<<<<< Updated upstream
      limit: state.count,
    };
    this.props.handleFetchDealer(data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dealers.length !== this.props.dealers.length) {
      const state = this.state;

      state.page = Math.ceil(this.props.dealers.length / this.state.count);
      this.setState({ ...state });
=======
      limit: state.count
    }
    this.props.handleFetchDealer(data)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.dealers.length !== this.props.dealers.length) {
      const state = this.state

      state.page = Math.ceil(this.props.dealers.length / this.state.count)
      this.setState({ ...state })
>>>>>>> Stashed changes
    }
  }

  handleOnChangePageSize = (count) => {
<<<<<<< Updated upstream
    const state = this.state;
    state.pageSize = count;
    this.setState({ ...state });
  };

  handleToggle = (e) => {
    const state = this.state;
    state.toggleActive = !state.toggleActive;
    this.setState({ ...state });
  };

  handleOnPageChange = (e, page) => {
    const totalPages = this.props.dealers.length / this.state.pageSize;
=======
    const state = this.state
    state.pageSize = count
    this.setState({ ...state })
  };

  handleToggle = (e) => {
    const state = this.state
    state.toggleActive = !state.toggleActive
    this.setState({ ...state })
  };

  handleOnPageChange = (e, page) => {
    const totalPages = this.props.dealers.length / this.state.pageSize
>>>>>>> Stashed changes
    const fetchNextData =
      e >= totalPages - 2 &&
      this.props.dealers.length !== 0 &&
      this.props.dealerStatus === false &&
<<<<<<< Updated upstream
      this.props.dealers.length < this.props.dealerCount;

    if (fetchNextData === true) {
      const state = this.state;
=======
      this.props.dealers.length < this.props.dealerCount

    if (fetchNextData === true) {
      const state = this.state
>>>>>>> Stashed changes
      const data = {
        page: state.page,
        country: state.countryCode,
        state: state.state,
        city: state.city,
        emailId: state.dealerId,
        phone: state.dealerEmail,
        dealerId: state.dealerPhone,
<<<<<<< Updated upstream
        limit: state.count,
      };
      this.props.handleFetchDealer(data);
=======
        limit: state.count
      }
      this.props.handleFetchDealer(data)
>>>>>>> Stashed changes
    }
  };

  handleFilterChange = (e) => {
<<<<<<< Updated upstream
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ ...state });
  };

  handleCountryChange = (e) => {
    const state = this.state;
    const parsedValue = JSON.parse(e.target.value);
    if (e.target.value !== 'Select Country') {
      state.countryCode = parsedValue.locality.country;
      state.country = parsedValue.country;
      state.state = '';
      state.city = '';
    }
    this.setState({ ...state });
    this.props.handleFetchState(state.countryCode);
  };

  handleStateChange = (e) => {
    const state = this.state;
    const parsedValue = JSON.parse(e.target.value);
    if (e.target.value !== 'Select Country') {
      state.state = parsedValue;
      state.city = '';
    }
    this.setState({ ...state });
    const data = {
      countryCode: state.countryCode,
      state: state.state,
    };
    this.props.handleFetchCity(data);
  };

  handleCityChange = (e) => {
    const state = this.state;
    const parsedValue = JSON.parse(e.target.value);
    if (e.target.value !== 'Select Country') {
      state.city = parsedValue.cityName;
    }
    this.setState({ ...state });
  };

  handleRowData = (rowData) => {
    history.push(`/dealer/detail?dealerId=${rowData._id}&tab=detail`);
    this.props.handleSelectedRowData(rowData);
  };

  handleSubmitFilter = (e) => {
    e.preventDefault();

    const state = this.state;
=======
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState({ ...state })
  };

  handleCountryChange = (e) => {
    const state = this.state
    const parsedValue = JSON.parse(e.target.value)
    if (e.target.value !== 'Select Country') {
      state.countryCode = parsedValue.locality.country
      state.country = parsedValue.country
      state.state = ''
      state.city = ''
    }
    this.setState({ ...state })
    this.props.handleFetchState(state.countryCode)
  };

  handleStateChange = (e) => {
    const state = this.state
    const parsedValue = JSON.parse(e.target.value)
    if (e.target.value !== 'Select Country') {
      state.state = parsedValue
      state.city = ''
    }
    this.setState({ ...state })
    const data = {
      countryCode: state.countryCode,
      state: state.state
    }
    this.props.handleFetchCity(data)
  };

  handleCityChange = (e) => {
    const state = this.state
    const parsedValue = JSON.parse(e.target.value)
    if (e.target.value !== 'Select Country') {
      state.city = parsedValue.cityName
    }
    this.setState({ ...state })
  };

  handleRowData = (rowData) => {
    history.push(`/dealer/detail?dealerId=${rowData._id}&tab=detail`)
    this.props.handleSelectedRowData(rowData)
  };

  handleSubmitFilter = (e) => {
    e.preventDefault()

    const state = this.state
>>>>>>> Stashed changes

    const data = {
      page: 0,
      country: state.countryCode,
      state: state.state,
      city: state.city,
      emailId: state.dealerEmail.toLowerCase().trim(),
      phone: state.dealerPhone.trim(),
      dealerId: state.dealerId.trim(),
<<<<<<< Updated upstream
      limit: state.count,
    };
=======
      limit: state.count
    }
>>>>>>> Stashed changes

    if (
      state.countryCode !== '' ||
      state.state !== '' ||
      state.city !== '' ||
      state.dealerEmail !== '' ||
      state.dealerPhone !== '' ||
      state.dealerId !== ''
    ) {
<<<<<<< Updated upstream
      this.props.handleFetchDealer(data);
      this.props.handleClearPreviousReducersForDealer();
=======
      this.props.handleFetchDealer(data)
      this.props.handleClearPreviousReducersForDealer()
>>>>>>> Stashed changes
    }
  };

  handleClearFilter = () => {
<<<<<<< Updated upstream
    const state = this.state;
    state.page = 0;
    state.country = '';
    state.countryCode = '';
    state.state = '';
    state.city = '';
    state.dealerEmail = '';
    state.dealerPhone = '';
    state.dealerId = '';
    state.count = 100;
    this.setState({ ...state });
=======
    const state = this.state
    state.page = 0
    state.country = ''
    state.countryCode = ''
    state.state = ''
    state.city = ''
    state.dealerEmail = ''
    state.dealerPhone = ''
    state.dealerId = ''
    state.count = 100
    this.setState({ ...state })
>>>>>>> Stashed changes
    const data = {
      page: 0,
      country: '',
      state: '',
      city: '',
      emailId: '',
      phone: '',
      dealerId: '',
<<<<<<< Updated upstream
      limit: 100,
    };
    this.props.handleFetchDealer(data);
    this.props.handleClearPreviousReducersForDealer();
  };

  render() {
    const { elements } = this.props;
    return (
      <div className="hideSearch">
=======
      limit: 100
    }
    this.props.handleFetchDealer(data)
    this.props.handleClearPreviousReducersForDealer()
  };

  render () {
    const { elements } = this.props
    return (
      <div className='hideSearch'>
>>>>>>> Stashed changes
        {this.props.dealerStatus !== false ? <Loader /> : null}

        <Form onSubmit={this.handleSubmitFilter}>
          <Row>
            <Col sm={12}>
              <CartTitle
                title={_.get(elements, 'dealersListingFilterElements.headingElement', 'Dealers')}
                Name={_.get(elements, 'dealersListingFilterElements.filterButtonElement', 'Filter')}
                iconClass={'hideexcel'}
                handleToggle={() => this.handleToggle()}
                textTitle={_.get(elements, 'dealersListingFilterElements.totalCountElement', 'Total Count - ')}
                preRegisteredUserCount={this.props.dealerCount}
              />
            </Col>
            <Col sm={12}>
              <Collapse isOpen={this.state.toggleActive}>
<<<<<<< Updated upstream
                <Card className="mb-3">
                  <CardBody>
                    <Row>
                      <Col xl={4} lg={4} md={6} sm={6}>
                        <FormGroup className=" confirmRiderSelect select_options">
                          <Input
                            type="select"
                            name="City"
                            className="w-100 customeSelectBtn"
=======
                <Card className='mb-3'>
                  <CardBody>
                    <Row>
                      <Col xl={4} lg={4} md={6} sm={6}>
                        <FormGroup className=' confirmRiderSelect select_options'>
                          <Input
                            type='select'
                            name='City'
                            className='w-100 customeSelectBtn'
>>>>>>> Stashed changes
                            onChange={this.handleCountryChange}
                            value={this.state.country}
                          >
                            <option>{this.state.country !== '' ? this.state.country : 'Select Country'}</option>
                            {this.props.countries
                              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                              .map((item, index) => (
                                <option key={index} value={JSON.stringify(item)}>
                                  {item.country}
                                </option>
                              ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6}>
<<<<<<< Updated upstream
                        <FormGroup className=" confirmRiderSelect select_options">
                          <Input
                            type="select"
                            name="branchType"
                            className="w-100 customeSelectBtn"
=======
                        <FormGroup className=' confirmRiderSelect select_options'>
                          <Input
                            type='select'
                            name='branchType'
                            className='w-100 customeSelectBtn'
>>>>>>> Stashed changes
                            onChange={this.handleStateChange}
                            value={this.state.state}
                          >
                            <option>{this.state.state !== '' ? this.state.state : 'Select State'}</option>
                            {this.props.states
                              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                              .map((item, index) => (
                                <option key={index} value={JSON.stringify(item)}>
                                  {item}
                                </option>
                              ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6}>
<<<<<<< Updated upstream
                        <FormGroup className=" confirmRiderSelect select_options">
                          <Input
                            type="select"
                            name="branchType"
                            className="w-100 customeSelectBtn"
=======
                        <FormGroup className=' confirmRiderSelect select_options'>
                          <Input
                            type='select'
                            name='branchType'
                            className='w-100 customeSelectBtn'
>>>>>>> Stashed changes
                            onChange={this.handleCityChange}
                            value={this.state.city}
                          >
                            <option>{this.state.city !== '' ? this.state.city : 'Select City'}</option>
                            {this.props.cities
                              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                              .map((item, index) => (
                                <option key={index} value={JSON.stringify(item)}>
                                  {item.cityName}
                                </option>
                              ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={4} lg={4} md={6} sm={6}>
                        <InputText
                          labelName={_.get(elements, 'dealersListingFilterElements.dealerIdLabel', 'Dealer Id')}
                          inputType={'text'}
                          inputName={'dealerId'}
                          InputClass={'inputText'}
                          customValue={this.state.dealerId}
                          inputPlaceholder={_.get(
                            elements,
                            'dealersListingFilterElements.dealerIdPlaceholder',
<<<<<<< Updated upstream
                            'Dealer Id',
=======
                            'Dealer Id'
>>>>>>> Stashed changes
                          )}
                          customOnChange={(e) => this.handleFilterChange(e)}
                        />
                      </Col>
                      <Col xl={4} lg={4} md={6} sm={6}>
                        <InputText
                          labelName={_.get(elements, 'dealersListingFilterElements.emailLabel', 'Email')}
                          inputType={'email'}
                          inputName={'dealerEmail'}
                          InputClass={'inputText'}
                          customValue={this.state.dealerEmail}
                          inputPlaceholder={_.get(elements, 'dealersListingFilterElements.emailPlaceholder', 'Email')}
                          customOnChange={(e) => this.handleFilterChange(e)}
                        />
                      </Col>
<<<<<<< Updated upstream
                      <Col xl={4} lg={4} md={6} sm={6} className="mb-3 mb-lg-0">
=======
                      <Col xl={4} lg={4} md={6} sm={6} className='mb-3 mb-lg-0'>
>>>>>>> Stashed changes
                        <InputText
                          labelName={_.get(elements, 'dealersListingFilterElements.mobileLabel', 'Phone')}
                          inputType={'number'}
                          inputName={'dealerPhone'}
                          customValue={this.state.dealerPhone}
                          InputClass={'inputText'}
                          inputPlaceholder={_.get(elements, 'dealersListingFilterElements.mobilePlaceholder', 'Phone')}
                          customOnChange={(e) => this.handleFilterChange(e)}
                        />
                      </Col>
                    </Row>
<<<<<<< Updated upstream
                    <div className="d-flex justify-content-center justify-content-lg-end position-relative ">
=======
                    <div className='d-flex justify-content-center justify-content-lg-end position-relative '>
>>>>>>> Stashed changes
                      <CustomButton
                        customType={'submit'}
                        name={_.get(elements, 'dealersListingFilterElements.searchButtonElement', 'Search')}
                        customClass={'btn-outline-dark bg-none btnthemeColor'}
                        customDisable={
                          !(
                            this.state.countryCode !== '' ||
                            this.state.state !== '' ||
                            this.state.city !== '' ||
                            this.state.dealerEmail !== '' ||
                            this.state.dealerPhone !== '' ||
                            this.state.dealerId !== ''
                          )
                        }
                      />
                      <CustomButton
                        customType={'button'}
                        name={_.get(elements, 'dealersListingFilterElements.clearFilterButtonElement', 'Clear Filter')}
                        customClass={'btn-outline-dark bg-none ml-2 btnthemeColor'}
                        customClick={this.handleClearFilter}
                        customDisable={
                          !(
                            this.state.countryCode !== '' ||
                            this.state.state !== '' ||
                            this.state.city !== '' ||
                            this.state.dealerEmail !== '' ||
                            this.state.dealerPhone !== '' ||
                            this.state.dealerId !== ''
                          )
                        }
                      />
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </Form>

        <Row>
<<<<<<< Updated upstream
          <Col sm="12">
            <div className="custom-m-table">
              <MaterialTable
                title=""
                columns={[
                  {
                    title: _.get(elements, 'dealerListTableElement.dealerIdElement', 'Dealer Id'),
                    field: 'dealerId',
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.nameElement', 'Name'),
                    field: 'dealerName',
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.emailElement', 'Email'),
                    field: 'emailId',
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.phoneElement', 'Phone'),
                    field: 'phone',
=======
          <Col sm='12'>
            <div className='custom-m-table'>
              <MaterialTable
                title=''
                columns={[
                  {
                    title: _.get(elements, 'dealerListTableElement.dealerIdElement', 'Dealer Id'),
                    field: 'dealerId'
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.nameElement', 'Name'),
                    field: 'dealerName'
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.emailElement', 'Email'),
                    field: 'emailId'
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.phoneElement', 'Phone'),
                    field: 'phone'
>>>>>>> Stashed changes
                  },
                  {
                    title: _.get(
                      elements,
                      'dealerListTableElement.clubCoordinatorNameElement',
<<<<<<< Updated upstream
                      "Club Coordinator's Name",
                    ),
                    field: 'storeManagerName',
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.countryElement', 'Country'),
                    field: 'country',
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.stateElement', 'State'),
                    field: 'state',
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.cityElement', 'City'),
                    field: 'city',
                  },
=======
                      "Club Coordinator's Name"
                    ),
                    field: 'storeManagerName'
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.countryElement', 'Country'),
                    field: 'country'
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.stateElement', 'State'),
                    field: 'state'
                  },
                  {
                    title: _.get(elements, 'dealerListTableElement.cityElement', 'City'),
                    field: 'city'
                  }
>>>>>>> Stashed changes
                ]}
                data={this.props.dealers}
                options={{
                  actionsColumnIndex: -1,
                  search: false,
                  paging: true,
                  sorting: false,
                  pageSize: this.state.pageSize,
                  paginationType: 'stepped',
                  initialPage: 1,
<<<<<<< Updated upstream
                  showFirstLastPageButtons: false,
=======
                  showFirstLastPageButtons: false
>>>>>>> Stashed changes
                }}
                actions={[
                  {
                    icon: 'assignment_ind',
                    tooltip: 'Detail Page',
<<<<<<< Updated upstream
                    onClick: (event, rowData) => this.handleRowData(rowData),
                  },
=======
                    onClick: (event, rowData) => this.handleRowData(rowData)
                  }
>>>>>>> Stashed changes
                ]}
                onChangeRowsPerPage={(e) => this.handleOnChangePageSize(e)}
                onChangePage={(e, page) => this.handleOnPageChange(e, page)}
                localization={{
                  body: {
                    emptyDataSourceMessage: (
                      <h6>
                        {_.get(elements, 'dealerListTableElement.noRecordsFoundElement', 'No records to display')}
                      </h6>
<<<<<<< Updated upstream
                    ),
                  },
                  header: {
                    actions: _.get(elements, 'dealerListTableElement.actionsElement', 'Actions'),
                  },
=======
                    )
                  },
                  header: {
                    actions: _.get(elements, 'dealerListTableElement.actionsElement', 'Actions')
                  }
>>>>>>> Stashed changes
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
<<<<<<< Updated upstream
    );
=======
    )
>>>>>>> Stashed changes
  }
}
