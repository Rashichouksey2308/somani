import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,
  Form,
} from 'reactstrap'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import UploadFile from '../UploadFile'
import Config from '../../utils/config'
import history from '../../history'
import CustomButton from '../CustomButton'
import CartTitle from '../CartTitle'
import InputText from '../InputText'
import Loader from '../Loader'

import { fetchQueryParams } from '../../utils/comman'

import get from 'lodash/get'

const _ = { get }

const initialState = {
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  altPhone: '',
  businessHours: '',
  city: '',
  city_id: '',
  country: '',
  countryCode: '',
  country_id: '',
  branchPrincipalName: '',
  branchName: '',
  emailId: '',
  googlePlaceId: '',
  landmark: '',
  longitude: 0,
  latitude: 0,
  phone: '',
  pincode: '',
  state: '',
  stateCode: '',
  state_id: '',
  storeManagerName: '',
  websiteUrl: '',
  weeklyOff: '',
  locality: null,
  dealerName: '',
  dealerPrincipalName: '',
  dealerId: '',
  dealerWebsiteUrl: '',
  tab: '',
  id: '',
  branchId: '',
  facebookUrl: '',
  branchCode: '',
  instagramUrl: '',
  image: {
    preview: null,
    Image: null,
  },
  description: '',
}

function branchCreation(props) {
  let { elements } = props

  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (props.page === 'create-branch') {
      setInitialState()
      let queryParams = props.query
      if (queryParams === '') {
        history.push(`/dealer/list`)
      } else {
        const params = fetchQueryParams(props.query)
        let id = params.dealerId

        if (props.dealerData !== null) {
          handleAutoFillDealerData()
          state.tab = params.tab
          state.id = params.dealerId
          setState({ ...state })
        } else {
          props.handleSingleDealerFetch(id)
        }
      }
    } else {
      let queryParams = props.query
      if (queryParams === '') {
        history.push(`/branch/list`)
      } else {
        const params = fetchQueryParams(props.query)
        let id = params.branchId
        if (props.branchData !== null) {
          handleUpdateForm()
        } else {
          props.handleFetchSingleBranch(id)
          handleUpdateForm()
        }
      }
    }
  }, [props.dealerData, props.branchData])

  const setInitialState = () => {
    state.addressLine1 = ''
    state.addressLine2 = ''
    state.addressLine3 = ''
    state.altPhone = ''
    state.businessHours = ''
    state.city = ''
    state.city_id = ''
    state.country = ''
    state.countryCode = ''
    state.country_id = ''
    state.branchPrincipalName = ''
    state.branchName = ''
    state.emailId = ''
    state.googlePlaceId = ''
    state.landmark = ''
    state.longitude = 0
    state.latitude = 0
    state.phone = ''
    state.pincode = ''
    state.state = ''
    state.stateCode = ''
    state.state_id = ''
    state.storeManagerName = ''
    state.websiteUrl = ''
    state.weeklyOff = ''
    state.locality = null
    state.dealerName = ''
    state.dealerPrincipalName = ''
    state.dealerId = ''
    state.dealerWebsiteUrl = ''
    state.tab = ''
    state.id = ''
    state.branchId = ''
    state.facebookUrl = ''
    state.branchCode = ''
    state.instagramUrl = ''
    state.image.preview = null
    state.image.Image = null
    setState({ ...state })
  }

  const handleChange = (e, id) => {
    if (id === 'phone') {
      let value = e.target.value
      if (value.length <= 14) {
        state.phone = e.target.value
        setState({ ...state })
      }
    } else {
      state[e.target.name] = e.target.value
      setState({ ...state })
    }
  }

  const handleGoBack = () => {
    const params = fetchQueryParams(props.query)
    history.push(`/dealer/detail?dealerId=${params.dealerId}&tab=${params.tab}`)
  }

  const hanldeGoBackForUpdate = () => {
    const params = fetchQueryParams(props.query)
    history.push(`/branch/detail?branchId=${params.branchId} `)
  }

  const handleCoordinateChange = (e) => {
    state[e.target.name] = e.target.value
    setState({ ...state })
  }

  const handleCountryChange = (e) => {
    let parsedValue = JSON.parse(e.target.value)
    if (e.target.value !== 'Select Country') {
      state.country = parsedValue.country
      state.countryCode = parsedValue.locality.country
      state.locality = parsedValue.locality
      state.state = ''
      state.city = ''
    }
    setState({ ...state })
    props.handleFetchBranchState(state.countryCode.toUpperCase())
  }

  // const handleStateChange = (e) => {
  //   let parsedValue = JSON.parse(e.target.value);
  //   if (e.target.value !== "Select State") {
  //     state.state = parsedValue.name;
  //     state.stateCode = parsedValue.stateCode;
  //     state.city = "";
  //   }
  //   setState({ ...state });
  //   let data = {
  //     countryCode: state.countryCode.toUpperCase(),
  //     state: state.stateCode,
  //   };
  //   props.handleFetchBranchCity(data);
  // };

  // const handleCityChange = (e) => {
  //   let parsedValue = JSON.parse(e.target.value);
  //   if (e.target.value !== "Select City") {
  //     state.city = parsedValue.name;
  //   }
  //   setState({ ...state });
  // };

  const handleImageChange = (e) => {
    e.preventDefault()
    var fileTypes = ['jpg', 'jpeg', 'png']
    if (e.target.files[0]) {
      var extension = e.target.files[0].name.split('.').pop().toLowerCase(), //file extension from input file
        isSuccess = fileTypes.indexOf(extension) > -1

      if (isSuccess) {
        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onloadend = () => {
          saveImage(reader.result, file)
        }
        reader.readAsDataURL(file)
      } else {
        toast.error(
          _.get(
            elements,
            'branchCreationElement.imageValidationElement',
            "only '.jpg' , '.jpeg' , '.png' file types are accepted",
          ),
        )
      }
    } else {
    }

    e.target.value = ''
  }
  const deleteImage = () => {
    state.image.Image = null
    state.image.preview = null
    setState({ ...state })
  }

  const saveImage = (preview, Image) => {
    const file = {
      preview,
      Image,
    }
    state.image = file
    setState({ ...state })
  }

  const handleAutoFillDealerData = () => {
    let { dealerData } = props

    if (dealerData !== null) {
      console.log(dealerData)
      state.storeManagerName = dealerData.storeManagerName
      state.dealerName = dealerData.dealerName
      state.dealerId = dealerData.dealerId
      state.dealerPrincipalName = dealerData.dealerPrincipalName
      state.dealer_id = dealerData._id
      state.latitude = dealerData.latitude
      state.branchCode = dealerData.branchCode
      state.longitude = dealerData.longitude
      state.addressLine1 = dealerData.addressLine1
      state.branchPrincipalName = dealerData.branchName
      state.websiteUrl = dealerData.websiteUrl
      state.pincode = dealerData.pincode
      state.phone = dealerData.phone
      state.emailId = dealerData.emailId
      state.weeklyOff = dealerData.weeklyOff
      state.facebookUrl = dealerData.facebookUrl
      state.businessHours = dealerData.businessHours
      state.instagramUrl = dealerData.instagramUrl
      state.description = dealerData.description
      state.addressLine2 = dealerData.addressLine2
      state.addressLine3 = dealerData.addressLine3
      state.landmark = dealerData.landmark
      state.altPhone = dealerData.altPhone
      state.country = dealerData.country
      state.state = dealerData.state
      state.city = dealerData.city
      state.locality = dealerData.locality
    }
    setState({ ...state })
  }

  const handleUpdateForm = () => {
    let { branchData } = props
    if (branchData !== null) {
      state.addressLine1 = branchData.addressLine1
      state.addressLine2 = branchData.addressLine2
      state.addressLine3 = branchData.addressLine3
      state.altPhone = branchData.altPhone
      state.businessHours = branchData.businessHours
      state.city = branchData.city
      state.country = branchData.country
      state.branchName = branchData.branchName
      state.branchPrincipalName = branchData.branchPrincipalName
      state.branchStatus = branchData.branchStatus
      state.branchType = branchData.branchType
      state.emailId = branchData.emailId
      state.landmark = branchData.landmark
      state.latitude = branchData.latitude
      state.locality = branchData.locality
      state.longitude = branchData.longitude
      state.phone = branchData.phone
      state.pincode = branchData.pincode
      state.state = branchData.state
      state.storeManagerName = branchData.storeManagerName
      state.description = branchData.branchDescription
      state.weeklyOff = branchData.weeklyOff
      state.websiteUrl = branchData.websiteUrl
      state.dealer_id = branchData.dealer !== null ? branchData.dealer._id : ''
      state.branchId = branchData._id
      state.facebookUrl = branchData.facebookUrl
      state.dealerName =
        branchData.dealer !== null ? branchData.dealer.dealerName : ''
      state.dealerPrincipalName =
        branchData.dealer !== null ? branchData.dealer.dealerPrincipalName : ''
      state.dealerId =
        branchData.dealer !== null ? branchData.dealer.dealerId : ''
      state.branchCode = branchData.branchCode
      state.instagramUrl = branchData.instagramUrl
      state.image.preview = `${Config.imageBaseUrl}${branchData.primary_image}`
      state.image.Image = `${Config.imageBaseUrl}${branchData.primary_image}`
      setState({ ...state })
      props.handleFetchBranchState(branchData.locality.country.toUpperCase())
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    // let payload = {
    //   addressLine1: state.addressLine1,
    //   addressLine2: state.addressLine2,
    //   addressLine3: state.addressLine3,
    //   altPhone: state.altPhone,
    //   businessHours: state.businessHours,
    //   city: state.city,
    //   country: state.country,
    //   branchName: state.branchName,
    //   branchPrincipalName: state.branchPrincipalName,
    //   emailId: state.emailId,
    //   landmark: state.landmark,
    //   latitude: state.latitude,
    //   locality: JSON.stringify(state.locality),
    //   longitude: state.longitude,
    //   phone: state.phone,
    //   pincode: state.pincode,
    //   branchDescription: state.description,
    //   state: state.state,
    //   storeManagerName: state.storeManagerName,
    //   weeklyOff: state.weeklyOff,
    //   websiteUrl: state.websiteUrl,
    //   dealer: state.dealer_id,
    //   dealerId: state.dealerId,
    //   id: state.id,
    //   tab: state.tab,
    //   branchId: state.branchId,
    //   facebookUrl: state.facebookUrl,
    //   branchCode: state.branchCode,
    //   instagramUrl: state.instagramUrl,
    // };

    let formData = new FormData()
    formData.append('addressLine1', state.addressLine1)
    formData.append('addressLine2', state.addressLine2)
    formData.append('addressLine3', state.addressLine3)
    formData.append('altPhone', state.altPhone)
    formData.append('businessHours', state.businessHours)
    formData.append('city', state.city)
    formData.append('country', state.country)
    formData.append('branchName', state.branchName)
    formData.append('branchPrincipalName', state.branchPrincipalName)
    formData.append('emailId', state.emailId)
    formData.append('landmark', state.landmark)
    formData.append('latitude', state.latitude)
    formData.append('locality', JSON.stringify(state.locality))
    formData.append('longitude', state.longitude)
    formData.append('phone', state.phone)
    formData.append('pincode', state.pincode)
    formData.append('state', state.state)
    formData.append('storeManagerName', state.storeManagerName)
    formData.append('weeklyOff', state.weeklyOff)
    formData.append('websiteUrl', state.websiteUrl)
    formData.append('dealer', state.dealer_id)
    formData.append('dealerId', state.dealerId)
    formData.append('id', state.id)
    formData.append('tab', state.tab)
    formData.append('branchId', state.branchId)
    formData.append('facebookUrl', state.facebookUrl)
    formData.append('branchCode', state.branchCode)
    formData.append('instagramUrl', state.instagramUrl)
    formData.append('image', state.image.Image)

    let data = {
      formData: formData,
      tab: state.tab,
      id: state.dealer_id,
    }

    if (state.phone.length >= 8 && state.phone.length <= 15) {
      if (state.country !== '') {
        if (state.state !== '') {
          if (state.city !== '') {
            if (props.page !== 'update-branch') {
              props.handleCreateBranch(data)
            } else {
              props.handleUpdateBranch(data)
            }
          } else {
            toast.error(
              _.get(
                elements,
                'branchCreationElement.cityValidationElement',
                'City cannot be empty',
              ),
            )
          }
        } else {
          toast.error(
            _.get(
              elements,
              'branchCreationElement.stateValidationElement',
              'State cannot be empty',
            ),
          )
        }
      } else {
        toast.error(
          _.get(
            elements,
            'branchCreationElement.countryValidationElement',
            'Country cannot be empty',
          ),
        )
      }
    } else {
      toast.error(
        _.get(
          elements,
          'branchCreationElement.phoneValidationElement',
          'phone Length should be more than 7 and less than 16',
        ),
      )
    }
  }

  console.log(props.countriesBranch)

  return (
    <React.Fragment>
      {props.page !== 'update-branch' ? (
        <div>
          {props.createBranchStatus !== false ? <Loader /> : null}
          {props.dealerDataStatus !== false ? <Loader /> : null}
        </div>
      ) : (
        <div>
          {props.updateBranchStatus !== false ? <Loader /> : null}
          {props.branchSingleDataStatus !== false ? <Loader /> : null}
        </div>
      )}

      <div className="hideSearch">
        <Row>
          <Col sm={12}>
            <CartTitle
              title={
                props.page !== 'update-branch'
                  ? _.get(
                      elements,
                      'branchCreationElement.createHeadingElement',
                      'Branch Creation',
                    )
                  : _.get(
                      elements,
                      'branchCreationElement.updateHeadingElement',
                      'Branch Update',
                    )
              }
              iconClass={'hideexcel'}
              Name={'Search'}
              customClass={'hidebtn'}
              innerTextClass={'hidetext'}
            />
          </Col>
        </Row>

        <Form onSubmit={handleSubmitForm}>
          <Card className="mb-3">
            <CardBody>
              <Row>
                <Col md="12">
                  <h3 className="title-bar secondary-title f-weight-bold mb-3 pb-2 themeColor">
                    <span>
                      {_.get(
                        elements,
                        'branchCreationElement.subHeadingMainInformationElement',
                        'MAIN INFORMATION',
                      )}
                    </span>
                  </h3>
                </Col>
                <Col xl={12}>
                  <Row>
                    <Col xl={4} lg={4} md={12} sm={12} className="mb-2 pt-4">
                      <UploadFile
                        id="image1"
                        image={state.image}
                        handleImageChange={handleImageChange}
                        deleteImage={deleteImage}
                      />
                    </Col>
                    <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                      <Row>
                        <Col xl={6} lg={4} md={6} sm={6} className="mb-2">
                          <InputText
                            labelName={_.get(
                              elements,
                              'branchCreationElement.branchPrincipalNameLabel',
                              'Branch Name*',
                            )}
                            inputType={'text'}
                            inputName={'branchPrincipalName'}
                            InputClass={'my-2 inputText'}
                            customValue={state.branchPrincipalName}
                            inputPlaceholder={_.get(
                              elements,
                              'branchCreationElement.branchPrincipalNamePlaceholder',
                              'Branch Name',
                            )}
                            customOnChange={(e) => handleChange(e)}
                            customRequired={true}
                          />
                        </Col>
                        {/* <Col xl={8} lg={8} md={12} sm={12}>
                      <Row> */}
                        <Col xl={6} lg={6} md={6} sm={6} className="mb-2">
                          <InputText
                            labelName={_.get(
                              elements,
                              'branchCreationElement.emailLabel',
                              'Email ID / Store ID*',
                            )}
                            inputType={'email'}
                            inputName={'emailId'}
                            InputClass={'my-2 inputText'}
                            customValue={state.emailId}
                            inputPlaceholder={_.get(
                              elements,
                              'branchCreationElement.emailPlaceholder',
                              'Email ID / Store ID',
                            )}
                            customOnChange={(e) => handleChange(e)}
                            customRequired={true}
                          />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} className="mb-2">
                          <InputText
                            labelName={_.get(
                              elements,
                              'branchCreationElement.phoneNumberLabel',
                              'Phone Number*',
                            )}
                            inputType={'tel'}
                            inputName={'phone'}
                            InputClass={'my-2 inputText'}
                            inputPlaceholder={_.get(
                              elements,
                              'branchCreationElement.phoneNumberPlaceholder',
                              'Phone Number',
                            )}
                            customValue={state.phone}
                            customOnChange={(e) => handleChange(e, 'phone')}
                            customRequired={true}
                          />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} className="mb-2">
                          <InputText
                            labelName={_.get(
                              elements,
                              'branchCreationElement.alternatePhoneNumberLabel',
                              'Alternate Phone Number',
                            )}
                            inputType={'number'}
                            inputName={'altPhone'}
                            InputClass={'my-2 inputText'}
                            customValue={state.altPhone}
                            inputPlaceholder={_.get(
                              elements,
                              'branchCreationElement.alternatePhoneNumberPlaceholder',
                              'Alternate Phone Number',
                            )}
                            customOnChange={(e) => handleChange(e)}
                          />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} className="mb-2">
                          <Label className="inputLabel">
                            {_.get(
                              elements,
                              'branchCreationElement.countryLabel',
                              'Country*',
                            )}
                          </Label>
                          <FormGroup className=" confirmRiderSelect select_options">
                            <Input
                              type="select"
                              name="country"
                              className="my-2 w-100 customeSelectBtn"
                              onChange={handleCountryChange}
                              placeholder="Select Country"
                            >
                              <option selected="true" disabled="disabled">
                                {state.country !== ''
                                  ? state.country
                                  : 'Select Country'}
                              </option>
                              {props.countriesBranch
                                .sort((a, b) =>
                                  a.name > b.name
                                    ? 1
                                    : b.name > a.name
                                    ? -1
                                    : 0,
                                )
                                .map((item) => (
                                  <option value={JSON.stringify(item)}>
                                    {item.country}
                                  </option>
                                ))}
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={6} className="mb-2">
                          <FormGroup className=" confirmRiderSelect select_options">
                            <InputText
                              labelName={_.get(
                                elements,
                                'branchCreationElement.stateLabel',
                                'State*',
                              )}
                              inputType={'text'}
                              inputName={'state'}
                              InputClass={'my-2 inputText'}
                              customValue={state.state}
                              inputPlaceholder={_.get(
                                elements,
                                'branchCreationElement.stateLabel',
                                'State',
                              )}
                              customOnChange={(e) => handleChange(e)}
                            />

                            {/* <Input
                              type="select"
                              name="branchType"
                              className="my-2 w-100 customeSelectBtn"
                              onChange={handleStateChange}
                            >
                              <option selected="true" disabled="disabled">
                                {" "}
                                {state.state !== ""
                                  ? state.state
                                  : "Select State"}
                              </option>
                              {props.statesBranch
                                .sort((a, b) =>
                                  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                                )
                                .map((item) => (
                                  <option value={JSON.stringify(item)}>
                                    {item.name}
                                  </option>
                                ))}
                            </Input> */}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <FormGroup className="confirmRiderSelect select_options">
                    <InputText
                      labelName={_.get(
                        elements,
                        'branchCreationElement.cityLabel',
                        'City*',
                      )}
                      inputType={'text'}
                      inputName={'city'}
                      InputClass={'my-2 inputText'}
                      customValue={state.city}
                      inputPlaceholder={_.get(
                        elements,
                        'branchCreationElement.cityLabel',
                        'City',
                      )}
                      customOnChange={(e) => handleChange(e)}
                    />

                    {/* <option selected="true" disabled="disabled">
                        {state.city !== "" ? state.city : "Select City"}
                      </option>
                      {props.citiesBranch
                        .sort((a, b) =>
                          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                        )
                        .map((item) => (
                          <option value={JSON.stringify(item)}>
                            {item.name}
                          </option>
                        ))}
                    </Input> */}
                  </FormGroup>
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.landmarkLabel',
                      'Landmark',
                    )}
                    inputType={'text'}
                    inputName={'landmark'}
                    InputClass={'my-2 inputText'}
                    customValue={state.landmark}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.landmarkPlaceholder',
                      'Landmark',
                    )}
                    customOnChange={(e) => handleChange(e)}
                  />
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.pinCodeLabel',
                      'Pincode',
                    )}
                    inputType={'tel'}
                    inputName={'pincode'}
                    InputClass={'my-2 inputText'}
                    customValue={state.pincode}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.pinCodePlaceholder',
                      'Pincode*',
                    )}
                    customOnChange={(e) => handleChange(e)}
                    customRequired={true}
                  />
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <Label for="--">
                    {_.get(
                      elements,
                      'branchCreationElement.addressLineOneLabel',
                      'Address Line 1*',
                    )}
                  </Label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      placeholder={_.get(
                        elements,
                        'branchCreationElement.addressLineOnePlaceholder',
                        'Address Line 1',
                      )}
                      name="addressLine1"
                      id="--"
                      className="my-2 inputText"
                      value={state.addressLine1}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <Label for="--">
                    {' '}
                    {_.get(
                      elements,
                      'branchCreationElement.addressLineTwoLabel',
                      'Address Line 2',
                    )}
                  </Label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      placeholder={_.get(
                        elements,
                        'branchCreationElement.addressLineTwoPlaceholder',
                        'Address Line 2',
                      )}
                      name="addressLine2"
                      id="--"
                      className="my-2 inputText"
                      value={state.addressLine2}
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <Label for="--">
                    {' '}
                    {_.get(
                      elements,
                      'branchCreationElement.addressLineThreeLabel',
                      'Address Line 3',
                    )}
                  </Label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      placeholder={_.get(
                        elements,
                        'branchCreationElement.addressLineThreePlaceholder',
                        'Address Line 3',
                      )}
                      name="addressLine3"
                      id="--"
                      className="my-2 inputText"
                      value={state.addressLine3}
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <Label for="--">
                    {' '}
                    {_.get(
                      elements,
                      'branchCreationElement.descriptionLabelElement',
                      'Description',
                    )}
                  </Label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      placeholder={_.get(
                        elements,
                        'branchCreationElement.descriptionPlaceHolderElement',
                        'Description',
                      )}
                      name="description"
                      id="--"
                      className="my-2 inputText"
                      value={state.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.latitudeLabel',
                      'Latitude*',
                    )}
                    inputType={'number'}
                    inputName={'latitude'}
                    InputClass={'my-2 inputText'}
                    customValue={state.latitude}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.latitudePlaceholder',
                      'Latitude',
                    )}
                    customOnChange={(e) => handleCoordinateChange(e)}
                    customRequired={true}
                  />
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.longitudeLabel',
                      'Longitude*',
                    )}
                    inputType={'number'}
                    inputName={'longitude'}
                    InputClass={'my-2 inputText'}
                    customValue={state.longitude}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.longitudePlaceholder',
                      'Longitude',
                    )}
                    customOnChange={(e) => handleCoordinateChange(e)}
                    customRequired={true}
                  />
                </Col>
              </Row>

              <Row>
                <Col md="12">
                  <h3 className="title-bar secondary-title f-weight-bold my-3 pb-2 themeColor">
                    {_.get(
                      elements,
                      'branchCreationElement.subHeadingPersonalInformationElement',
                      'PERSONAL INFORMATION',
                    )}
                  </h3>
                </Col>

                {/* <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      "branchCreationElement.dealerNameLabel",
                      "Dealer Name"
                    )}
                    inputType={"text"}
                    inputName={"dealerName"}
                    InputClass={"my-2 inputText"}
                    customValue={state.dealerName}
                    inputPlaceholder={_.get(
                      elements,
                      "branchCreationElement.dealerNamePlaceholder",
                      "Dealer Name"
                    )}
                    disabledType={true}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      "branchCreationElement.dealerIdLabel",
                      "Dealer Id"
                    )}
                    inputType={"tel"}
                    inputName={"dealerId"}
                    InputClass={"my-2 inputText"}
                    customValue={state.dealerId}
                    disabledType={true}
                    inputPlaceholder={_.get(
                      elements,
                      "branchCreationElement.dealerIdPlaceholder",
                      "Dealer Id"
                    )}
                  />
                </Col> */}

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.clubCoordinatorNameLabel',
                      'Club Coordinator Name*',
                    )}
                    inputType={'text'}
                    inputName={'storeManagerName'}
                    InputClass={'my-2 inputText'}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.clubCoordinatorPlaceholder',
                      'Club Coordinator Name',
                    )}
                    customValue={state.storeManagerName}
                    customOnChange={(e) => handleChange(e)}
                    customRequired={true}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.branchCodeLabel',
                      'Branch Code',
                    )}
                    inputType={'tel'}
                    inputName={'branchCode'}
                    InputClass={'my-2 inputText'}
                    customValue={state.branchCode}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.branchCodePlaceholder',
                      'Branch Code',
                    )}
                    disabledType={true}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.webUrlLabel',
                      'Website Page URL',
                    )}
                    inputType={'text'}
                    inputName={'websiteUrl'}
                    InputClass={'my-2 inputText'}
                    customValue={state.websiteUrl}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.webUrlPlaceholder',
                      'Website Page URL',
                    )}
                    customOnChange={(e) => handleChange(e)}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.instagramUrlLabel',
                      'Instagram URL',
                    )}
                    inputType={'text'}
                    inputName={'instagramUrl'}
                    InputClass={'my-2 inputText'}
                    customValue={state.instagramUrl}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.instagramUrlPlaceholder',
                      'Instagram URL',
                    )}
                    customOnChange={(e) => handleChange(e)}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.facebookUrlLabel',
                      'Facebook URL',
                    )}
                    inputType={'text'}
                    inputName={'facebookUrl'}
                    InputClass={'my-2 inputText'}
                    customValue={state.facebookUrl}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.facebookUrlPlaceholder',
                      'Facebook URL',
                    )}
                    customOnChange={(e) => handleChange(e)}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <InputText
                    labelName={_.get(
                      elements,
                      'branchCreationElement.weeklyOffLabel',
                      'Weekly Off',
                    )}
                    inputType={'tel'}
                    inputName={'weeklyOff'}
                    InputClass={'my-2 inputText'}
                    customValue={state.weeklyOff}
                    inputPlaceholder={_.get(
                      elements,
                      'branchCreationElement.weeklyOffPlaceholder',
                      'Weekly Off',
                    )}
                    customOnChange={(e) => handleChange(e)}
                  />
                </Col>

                <Col xl={4} lg={4} md={6} sm={6} className="mb-2">
                  <Label className="inputLabel" for="--">
                    {_.get(
                      elements,
                      'branchCreationElement.businessHourLabel',
                      'Business Hours',
                    )}
                  </Label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      placeholder={_.get(
                        elements,
                        'branchCreationElement.businessHourPlaceholder',
                        'Business Hours',
                      )}
                      name="businessHours"
                      id="--"
                      value={state.businessHours}
                      className="my-2 inputText"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <div className="d-flex justify-content-center justify-content-lg-end position-relative ">
                <CustomButton
                  customType={'button'}
                  name={_.get(
                    elements,
                    'branchCreationElement.backButtonElement',
                    'Back',
                  )}
                  customClass={'btn-outline-dark bg-none btnthemeColor'}
                  customClick={
                    props.page !== 'update-branch'
                      ? () => handleGoBack()
                      : () => hanldeGoBackForUpdate()
                  }
                />
                <CustomButton
                  customType={'submit'}
                  name={_.get(
                    elements,
                    'branchCreationElement.submitButtonElement',
                    'Submit',
                  )}
                  customClass={'btn-outline-dark bg-none ml-2 btnthemeColor'}
                />
              </div>
            </CardBody>
          </Card>
        </Form>
      </div>
    </React.Fragment>
  )
}

export default branchCreation
