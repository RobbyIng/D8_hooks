import styles from "./footer.module.css"
import React from "react"

export const Footer = () => {
console.log("Footer");

return(
    <footer className={styles.wrapper}>Footer</footer>
)
}
export const MemoFooter = React.memo(Footer)
// React.memo HOC не ререндерится при рендере родительского компонента 