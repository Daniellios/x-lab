import React from "react";
import Content from "../components/Content";
import styles from "../styles/Content.module.scss";

const NotFoundPage = () => {
  return (
    <Content>
      <h1 className={styles.title}>404 Страница не найдена</h1>
    </Content>
  );
};

export default NotFoundPage;
