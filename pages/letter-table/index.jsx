import React, { useEffect } from 'react';
import LetterCredit from '../../src/components/LetterCredit';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import { useDispatch } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Agreement & LC Module');
      sessionStorage.setItem('loadedSubPage', `LC Module`);
      sessionStorage.setItem('openList', 2);
    }
    dispatch(setPageName('Lc'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  }, []);
  return <LetterCredit />;
};

export default Index;
