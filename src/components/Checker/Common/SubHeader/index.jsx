import styles from './index.module.scss';

function Index({ subHeader, color }) {
    return (
        <div className={`${styles.subHeader} w-100 mt-3 mb-3 p-4 sub_header`}>
            <span className={`${color === 'primary' && styles.primary} font-weight-bold ml-3`}>
                {subHeader}
            </span>
        </div>
    )
}

export default Index