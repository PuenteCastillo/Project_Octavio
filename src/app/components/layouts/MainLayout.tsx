import React, { Children } from "react";
import Styles from "./mainLayout.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import MainMobileNav from "../mobileNavs/mainMobileNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id={Styles.main_body} className=" bg-gray-100 dark:bg-theme_dark ">
      <Sidebar />
      <MainMobileNav />
      <div className={Styles.content}>{children}</div>
    </div>
  );
}
