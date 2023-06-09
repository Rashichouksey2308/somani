import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

function Index(props) {
  const [state, setState] = useState({
    focused: false,
    emails: [],
    inputValue: '',
    noClass: false,
    className: '',
  });

  useEffect(() => {
    if (props?.emails?.length > 0) {
      setState({ ...state, emails: props.emails });
    } else{
      setState({ ...state, emails: [] });
    }
  }, [props.emails]);

  const emailInputRef = useRef(null);

  const onChangeInputValue = (value) => {
    findEmailAddress(value);
  };

  const findEmailAddress = (value, isEnter) => {
    let inputValue = '';
    const re = /[ ,;]/g;
    let validEmails = [];

    const addEmails = (email) => {
      const emails1 = state.emails;
      for (let i = 0, l = emails1.length; i < l; i++) {
        if (emails1[i] === email) {
          return false;
        }
      }
      validEmails.push(email);
      return true;
    };

    if (value !== '') {
        if (isEnter) {
          addEmails(value);
        } else {
          inputValue = value;
        }
    }

    setState({ ...state, email: validEmails });
    setState({ ...state, inputValue: inputValue });
    if (validEmails.length && props.onChange) {
      props.onChange(validEmails);
    }
  };

  const removeEmail = (index, isDisabled) => {
    if (isDisabled) {
      return;
    }

    let temp = { ...state };
    temp.emails.splice(index, 1);
    setState({ ...temp });
  };
  const handleOnKeydown = (e) => {};

  const handleOnKeyup = (e) => {
    switch (e.keyCode) {
      case 13:
        findEmailAddress(e.currentTarget.value, true);
        if (props.id == 'Existing Supplier(s)') {
          props.setRemoveInput(true);
          setHandleFunc(false);
        }
      case 9: {
        findEmailAddress(e.currentTarget.value, true);
        break;
      }
      case 32: {
        e.preventDefault();

        break;
      }
      default:
    }
  };

  const [handeFunc, setHandleFunc] = useState(false);

  const handleOnChange = (e) => {
    onChangeInputValue(e.currentTarget.value);
    if (props.id == 'Existing Supplier(s)') {
      props.handleSearch(e.currentTarget.value);
    }
  };

  const handleOnBlur = (e) => {
    setState({ ...state, focused: false });
  };

  const handleOnFocus = () =>
    setState({
      ...state,
      focused: true,
    });

  return (    
  <>
    <div
      className={`${state.className} react_multi_email input ${state.noClass ? '' : `${styles.react_multi_email}`} ${
        state.focused ? 'focused' : ''
      } ${state.inputValue === '' && state.emails.length === 0 ? 'empty' : ''}`}
      // style={style}
      onClick={() => {
        if (emailInputRef.current) {
          emailInputRef.current.focus();
        }
      }}
    >
      {state?.emails?.length > 0 &&
        state?.emails?.map((email, index) => {
          return (
            <>
              <span
              // className={email.status === 'Pending' && `${styles.pending}`}
              >
                {props.getLabel(email, index, removeEmail)}
              </span>
            </>
          );
      })}
      <input
        ref={emailInputRef}
        type="text"
        //   placeholder={props.placeholder}
        value={
          props.id == 'Existing Supplier(s)' ? (handeFunc ? props.searchTerm : state.inputValue) : state.inputValue
        }
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onKeyDown={handleOnKeydown}
        onKeyUp={handleOnKeyup}
        className={`${styles.input_field}`}
      />
    </div>    
    {props?.searchedSupplier && props.searchedSupplier?.data?.length > 0 && !props.removeInput && props.searchTerm && (
        <div className={styles.searchResults}>
          <ul>
            {props.searchedSupplier
              ? props?.searchedSupplier?.data?.map((results, index) => (
                  <li
                    onClick={() => {
                      props.handleFilteredData(results);
                      setHandleFunc(true);
                    }}
                    id={results._id}
                    key={index}
                    value={results}
                  >
                    {results?.supplierProfile?.supplierName}
                  </li>
                ))
              : ''}
          </ul>
        </div>
      )}
    {props.placeholder ? (
      <span className={`${styles.data_placeholder} ${styles.label_heading} label_heading`}>{props.placeholder}</span>
    ) : null}
  </>
  );
}

export default Index;
