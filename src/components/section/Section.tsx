import {JSX} from "react";
import styles from "./Section.module.scss"

export const Section = ({children}: {children: JSX.Element}) => {
    return (
        <>
            <section className={styles.sectionWrapper}>
                {children}
            </section>
        </>
    );
};