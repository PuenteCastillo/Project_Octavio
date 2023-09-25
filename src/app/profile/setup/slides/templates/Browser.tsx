import React from "react";
import styles from "./browser.module.scss";

export default function Broswer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.browser}>
      <div className={styles.title_row}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
