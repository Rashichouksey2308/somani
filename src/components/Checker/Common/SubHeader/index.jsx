import styles from './index.module.scss';

function Index({ subHeader, color, noPadding }) {
    return (
        <div className={`${styles.subHeader} w-100 p-4 sub_header ${!noPadding && 'mt-3 mb-3 '}`}>
            <span className={`${color === 'primary' && styles.primary} font-weight-bold ml-3`}>
                {subHeader}
            </span>
        </div>
    )
}

export default Index