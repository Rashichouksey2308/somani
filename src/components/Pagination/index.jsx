import { useMemo } from 'react';
import styles from './index.module.scss';

 function Index({
  currentPage,
  setCurrentPage,
  tableName,
  data,
  totalNumber = 7,
  color = false,
  className = '',
}) {
  const totalPages = useMemo(() => {
    return Math.ceil(data?.totalCount / totalNumber);
  }, [data?.totalCount]);

  const handlePrev = () => {
    if (currentPage === 0) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage + 1 >= totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={`${styles.tableFilter} ${className} d-flex align-items-center justify-content-between`}>
      <h3 className={`heading_card ${color ? styles.text_blue : ''}`}>{tableName}</h3>
      <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
        <span>
          Showing Page {currentPage + 1} out of {totalPages}
        </span>
        <button onClick={handlePrev} className={`${styles.arrow} ${styles.leftArrow} arrow`}>
          <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
        </button>
        <button onClick={handleNext} className={`${styles.arrow} ${styles.rightArrow} arrow`}>
          <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
        </button>
      </div>
    </div>
  );
}

export default Index;