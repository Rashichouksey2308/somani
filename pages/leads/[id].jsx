<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import Register from '../../src/components/Register';
import styles from './register.module.scss';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import { useDispatch } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageName('leads/'));
    dispatch(setDynamicName(null));
  }, []);
=======
import React, { useEffect } from 'react'
import Register from '../../src/components/Register'
import styles from './register.module.scss'
import { setDynamicName, setPageName } from '../../src/redux/userData/action'
import { useDispatch } from 'react-redux'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('leads/'))
    dispatch(setDynamicName(null))
  }, [])
>>>>>>> Stashed changes
  return (
    <div className={styles.root_Container}>
      <Register />
    </div>
<<<<<<< Updated upstream
  );
};

export default Index;
=======
  )
}

export default Index
>>>>>>> Stashed changes
