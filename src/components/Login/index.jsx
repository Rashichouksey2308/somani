/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { loginUser } from 'redux/authentication/actions';

function Index(props) {
  const dispatch = useDispatch();
  const loggingoutUser = useSelector((state) => state.auth.loggingUserOut);

  useEffect(() => {
    if (loggingoutUser) {
      props.login();
    } else {
    }
  }, [loggingoutUser]);
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const onShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const onInputDataHandler = (e) => {
    const credentials = { ...loginDetails };
    credentials[e.target.name] = e.target.value;
    setLoginDetails(credentials);
  };

  const onSubmitHandler = async (e) => {
    const encodedString = Buffer.from(`${loginDetails.email.trim()}:${loginDetails.password.trim()}`).toString(
      'base64',
    );
    await dispatch(
      loginUser({
        credentials: encodedString,
      }),
    );
  };

  const listener = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault();
      onSubmitHandler();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [loginDetails]);

  return (
    <>
      <div className={`${styles.login}`}>
        <div className="row no-gutters">
          <div className={`${styles.loginBanner} col-sm-4 col-md-5`}>
            <img src="/static/login.png" alt="Login Banner" className="img-fluid" />
            <div className={styles.pattern}>
              <img src="/static/login-pattern.png" alt="banner pattern" className="img-fluid" />
            </div>
            <div className={styles.caption}>{``}</div>
          </div>
          {/* <div className='col-sm-6'> background: #171E27 0% 0% no-repeat padding-box;
                    <div className='row no-gutters'> */}
          <div
            className={`${styles.loginForm} card d-flex col-sm-8 col-md-7 align-items-center justify-content-around`}
          >
            <img src="/static/login-form-bg.png" alt="login form bg" className="img-fluid" />
            <form className={styles.form}>
              <div className={styles.logo}>
                <img src="/static/login-logo.svg" alt="login logo" className="img-fluid" />
              </div>
              <h1 className={`${styles.title} heading_card`}>Welcome To Your Account</h1>
              <p className={`para`}>To continue, log in to Simport</p>
              <div className={`${styles.labelFloat} form-group`}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => onInputDataHandler(e)}
                  className={`${styles.formControl} ${styles.input} input form-control`}
                  required
                />
                <label className={`label_heading_login`} htmlFor="email">
                  Email
                </label>
              </div>
              <div className={`${styles.labelFloat} ${styles.password} form-group`}>
                <div className="input-group align-items-center" id="password">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onChange={(e) => {
                      onInputDataHandler(e);
                    }}
                    className={`${styles.formControl} ${styles.input} input form-control`}
                    required
                  />
                  <label className={`label_heading_login`} htmlFor="password">
                    Password
                  </label>
                  <img
                    src="/static/eye.svg"
                    onClick={onShowPasswordHandler}
                    alt="Show Password"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className={`${styles.remember} form-group`}>
                <div className="input-group align-items-center">
                  <input type="checkbox" id="remember" name="remember" value="Remember for 30 days" />
                  <label htmlFor="remember" className="mb-0 para">
                    Remember for 30 days
                  </label>
                  <a href="#" className={`${styles.forgotPassword} ml-auto`}>
                    Forgot Password
                  </a>
                </div>
              </div>
              <div className={`${styles.labelFloat} form-group`}>
                <button
                  className={`${styles.signin} btn btn-primary btn-block`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmitHandler();
                  }}
                >
                  Sign in
                </button>
                <p className={styles.signUp}>
                  Don&apos;t have an account?<a href="#">Sign up</a>
                </p>
              </div>
            </form>
            {/* <ul className={styles.footerLinks}>
                        <li ><a className={`para`} href='#'>Help</a></li>
                        <li  ><a  className={`para`} href='#'>Privacy</a></li>
                        <li  ><a  className={`para`} href='#'>Terms</a></li>
                    </ul> */}
            <div className={styles.footer}>&copy; 2022 Simport. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
