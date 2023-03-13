import styles from "./DarkLayout.module.css";

export const DarkLayout = ({ children }) => {
    return (
        <div className={styles['layout-container']}>
            { children }
        </div>
    );
};
