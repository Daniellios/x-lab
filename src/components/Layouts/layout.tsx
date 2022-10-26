import React, { useState } from "react";
import Header from "../Header";
import styles from "../../styles/Layout.module.scss";
import Menu from "../Sidebar/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  const openSeideBar = (): void => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main_container}>
        <button className={styles.menu_icon} onClick={openSeideBar}>
          {isSideBarOpen ? (
            <CloseIcon fontSize="large"></CloseIcon>
          ) : (
            <MenuIcon fontSize="large"></MenuIcon>
          )}
        </button>

        <Menu
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        ></Menu>

        {children}
      </main>
    </div>
  );
}
