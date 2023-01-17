import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import API from '../../../utils/endpoints';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import Select from 'react-select';

export default function index(props) {
  const dispatch = useDispatch();

  const { SelectOptions, value } = props;
  const [StatusData, setStatusData] = useState();

  const Status = StatusData?.map(({ _id: { status } }) => ({
    label: status,
    value: status,
  }));
  const customStyles = {
    control: (base) => ({
      ...base,
      width: 200,
      height: 47,
      minHeight: 45,
    }),
  };
  const handleSelect = (e, name) => {
    SelectOptions((prev) => ({
      ...prev,
      [name]: e,
    }));
  };
  useEffect(() => {
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      Axios.get(`${API.corebaseUrl}${API.getStatusFilters}`, {
        headers: headers,
      }).then((response) => {
        setStatusData(response.data.data.status);
        if (response.data.code === 200) {
        } else {
          const toastMessage = 'Could not fetch Order Details';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
        }
      });
    } catch (error) {}
  }, []);

  return (
    <Select
      styles={customStyles}
      isClearable
      options={Status}
      onChange={(e) => handleSelect(e, 'status')}
      value={value?.status}
    />
  );
}
