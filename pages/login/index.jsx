import React from 'react';
import styles from './index.module.scss';

function index() {
    return (
        <div className={styles.login}>
            <div className='row no-gutters'>
                <div className={`${styles.loginBanner} col-sm-6`}>
                    <img src='/static/login.png' alt='Login Banner' className='img-fluid'/>
                    <div className={styles.pattern}><img src='/static/login-pattern.png' alt='banner pattern' className='img-fluid' /></div>
                    <div className={styles.caption}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                </div>
                {/* <div className='col-sm-6'>
                    <div className='row no-gutters'> */}
                <div className={`${styles.loginForm} d-flex col-sm-6 align-items-center justify-content-around`}> 
                    <form className={styles.form}>
                        <div className={styles.logo}>
                            <img src='/static/login-logo.svg' alt='login logo' className='img-fluid' />
                        </div>
                        <h1 className={styles.title}>Log In To Your Account</h1>
                        <p>Welcome back! Please enter your details.</p>
                        <div className={`${styles.labelFloat} form-group`}>
                            <input type='text' id='email' className={`${styles.formControl} form-control`} required />
                            <label for='email'>Email</label>
                        </div>
                        <div className={`${styles.labelFloat} ${styles.password} form-group`}>
                            <div className='input-group align-items-center' id='password'>
                                <input type='password' className={`${styles.formControl} form-control`} required />
                                <label for='password'>Password</label>
                                <img src='/static/eye.svg' alt='Show Password' className='img-fluid' />
                            </div>
                        </div>
                        <div className={`${styles.remember} form-group`}>
                            <div className='input-group align-items-center'>
                                <input type="checkbox" id="remember" name="remember" value="Remember for 30 days" />
                                <label for="remember" className='mb-0 ml-2'>Remember for 30 days</label>
                                <a href='#' className={`${styles.forgotPassword} ml-auto`}>Forgot Password</a>
                            </div>
                        </div>
                        <div className={`${styles.labelFloat} form-group`}>
                            <button className={`${styles.signin} btn btn-primary btn-block`}>Sign in</button>
                        </div>
                    </form>
                    <ul className={styles.footerLinks}>
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'>Privacy</a></li>
                        <li><a href='#'>Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default index;