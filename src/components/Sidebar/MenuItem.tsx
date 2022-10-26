import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Sidebar.module.scss";
import { useRouter } from "next/router";

interface IMenuItem {
  tittle: string;
  pathLink?: string;
  imgSrc: string;
  isNested?: boolean;
}

const MenuItem: FC<IMenuItem> = ({ tittle, pathLink, imgSrc, isNested }) => {
  const router = useRouter().pathname;

  return (
    <Link href={pathLink}>
      <div className={isNested ? styles.list_item_nested : styles.list_item}>
        <Image
          src={`/assets/menu/${imgSrc}.svg`}
          width={32}
          height={32}
          layout="fixed"
        ></Image>
        <p className={styles.list_item_title}>{tittle}</p>
        {router === pathLink && <div className={styles.active_line}></div>}
      </div>
    </Link>
  );
};

export default MenuItem;
