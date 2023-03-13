import { FC } from "react";

import styles from "./DarkLayout.module.css";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles['layout-container']}>
            { children }
        </div>
    );
};
