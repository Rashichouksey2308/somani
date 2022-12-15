import React from 'react';
import styles from './index.module.scss';
import Filter from '../Filter';
import FilterBadge from '../FilterBadge';

const Index = (
    {
        searchterm,
        handleSearch,
        filterItem,
        handleFilterChange,
        handleApplyFilter,
        filterItems,
        showBadges,
        handleClose,
        searchView = () => { }
    }
) => {
    return (
        <>
            <div className={styles.search}>
                <div className="input-group">
                    <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                        <img src="/static/search.svg" className="img-fluid" alt="Search" />
                    </div>
                    <input
                        value={searchterm}
                        onChange={handleSearch}
                        type="text"
                        className={`${styles.formControl} border text_area form-control formControl `}
                        placeholder="Search"
                    />
                </div>
                {searchView()}
            </div>
            <Filter {...{ filterItem, handleFilterChange, handleApplyFilter, filterItems }} />
            <div className='row col-6'>
                {showBadges?.length > 0 &&
                    showBadges.map((val, index) => {
                        return <FilterBadge label={val.displayVal} onClose={() => handleClose(index)} />;
                    })}
            </div>

        </>
    )
}

export default Index