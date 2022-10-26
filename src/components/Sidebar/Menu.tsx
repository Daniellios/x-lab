import React, { FC, useEffect, useState } from "react";
import styles from "../../styles/Sidebar.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem";

interface IMenuProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: FC<IMenuProps> = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const router = useRouter().pathname;
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(true);

  const openSettings = (): void => {
    setIsSettingOpen(!isSettingOpen);
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth < 768) {
      setIsSideBarOpen(false);
    } else {
      setIsSideBarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <aside
      className={
        isSideBarOpen ? styles.container_open : styles.container_closed
      }
    >
      <div className={styles.header}>
        <p className={styles.title}>Mеню</p>
      </div>

      <div className={styles.list}>
        <MenuItem tittle="Главная" pathLink="/" imgSrc="ic_main"></MenuItem>
        <MenuItem
          tittle="Поиск адрсов"
          pathLink="/address"
          imgSrc="adress"
        ></MenuItem>
        <MenuItem
          tittle="Таблицы"
          pathLink="/tables"
          imgSrc="vs_tables"
        ></MenuItem>
        <MenuItem
          tittle="Календарь"
          pathLink="/calendar"
          imgSrc="calendar"
        ></MenuItem>
        <MenuItem tittle="Карты" pathLink="/maps" imgSrc="maps"></MenuItem>
        <MenuItem
          tittle="Виджеты"
          pathLink="/vidgets"
          imgSrc="vidgets"
        ></MenuItem>
        <div className={styles.list_item_settings} onClick={openSettings}>
          <div className={styles.list_item_settings_wrap}>
            <Image
              src={"/assets/menu/settings.svg"}
              width={32}
              height={32}
              layout="fixed"
            ></Image>
            <p className={styles.list_item_title}>Настройки </p>
          </div>
          <span
            className={
              isSettingOpen
                ? styles.setting_arrow_open
                : styles.setting_arrow_close
            }
          >
            <Image
              src={"/assets/arrow.svg"}
              layout="fixed"
              width={15}
              height={15}
            ></Image>
          </span>
          {router === "/settings" && <div className={styles.active_line}></div>}
        </div>
        {isSettingOpen && (
          <>
            <MenuItem
              tittle="Настройки профиля"
              pathLink="/profile_settings"
              imgSrc="profile_settings"
              isNested={true}
            ></MenuItem>
            <MenuItem
              tittle="Управление финансами"
              pathLink="/finance"
              imgSrc="finance_mangement"
              isNested={true}
            ></MenuItem>
          </>
        )}
        <MenuItem tittle="Выход" pathLink="/exit" imgSrc="exit"></MenuItem>
      </div>
    </aside>
  );
};
export default Menu;
