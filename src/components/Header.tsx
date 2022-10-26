import React, { FC, useEffect } from "react";
import styles from "../styles/Header.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";

const Header: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_title}>
          <Image
            src={"/assets/ic_logo.svg"}
            layout="fixed"
            width={48}
            height={48}
          ></Image>
          <p> Wrench CRM</p>
        </div>
        <div className={styles.wrapper_profile}>
          <Image
            src={"/assets/ic_person.svg"}
            layout="fixed"
            width={48}
            height={48}
          ></Image>
          <p>Имя Фамилия</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
