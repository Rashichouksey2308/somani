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
    }
  }, [props.emails]);
 
  const emailInputRef = useRef(0);
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
      if (false) {
        let splitData = value.split(re).filter((n) => {
          return n !== '' && n !== undefined && n !== null;
        });
       
        const setArr = new Set(splitData);
        let arr = [...setArr];

        do {
          addEmails('' + arr.shift());
        } while (arr.length);
      } else {
        if (isEnter) {
          addEmails(value);
        } else {
          inputValue = value;
        }
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
    // if (props.onChange) {
    //       props.onChange(temp.emails);
    // }
  };
  const handleOnKeydown = (e) => {
    // switch (e.keyCode) {
    //   case 13:
    //   case 9: {
    //     e.preventDefault();
    //     break;
    //   }
    //   case 8: {
    //     if (!e.currentTarget.value) {
    //       // removeEmail(state.emails.length - 1, false);
    //     }
    //     break;
    //   }
    //   case 32: {
    //       if (!e.currentTarget.value) {
    //       // removeEmail(state.emails.length - 1, false);
    //     }
    //     break;
    //   }
    //   default:
    // }
  };

  const handleOnKeyup = (e) => {
    
    switch (e.keyCode) {
      case 13:
        findEmailAddress(e.currentTarget.value, true);
      case 9: {
        findEmailAddress(e.currentTarget.value, true);
        break;
      }
      case 32: {
        //  findEmailAddress(e.currentTarget.value);
        e.preventDefault();

        break;
      }
      default:
    }
  };
  const handleOnChange = (e) => {onChangeInputValue(e.currentTarget.value); props.handleSearch(e.currentTarget.value); console.log(e.currentTarget.value, 'currentTarget')};

  const handleOnBlur = (e) => {
    setState({ ...state, focused: false });
    // findEmailAddress(e.currentTarget.value, true);
  };

  const handleOnFocus = () =>
    setState({
      ...state,
      focused: true,
    });

  return (
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
      {props.placeholder ? (
        <span className={`${styles.data_placeholder} ${styles.label_heading} label_heading`}>{props.placeholder}</span>
      ) : null}
      {state?.emails?.length > 0 &&
        state?.emails?.map((email, index) => {
          return <>{props.getLabel(email, index, removeEmail)}</>;
        })}
      <input
        ref={emailInputRef}
        type="text"
        //   placeholder={props.placeholder}
        value={state.inputValue}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onKeyDown={handleOnKeydown}
        onKeyUp={handleOnKeyup}
        className={`${styles.input_field}`}
      />      
      {/* <div className={`${styles.searchResults}`}>
        <ul>
          <li>ADN FIRE SAFETY PRIVATE LIMITED<span>IMH220000081</span></li>
        </ul>
      </div> */}
      {props?.searchedSupplier && props.searchTerm &&  (
                <div className={styles.searchResults}>
                  <ul>
                    {props.searchedSupplier
                      ? props?.searchedSupplier?.data?.map((results, index) => (
                          <li onClick={() => props.handleFilteredData(results)} id={results._id} key={index} value={results}>
                            {results?.supplierProfile?.supplierName}
                          </li>
                        ))
                      : ''}
                  </ul>
                </div>
              )}
    </div>
  );
}

export default Index;
