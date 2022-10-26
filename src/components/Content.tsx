import React, { FC } from "react";
import styles from "../styles/Content.module.scss";

interface IContentProps {
  children: React.ReactNode;
}

const Content: FC<IContentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Content;
