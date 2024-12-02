"use client";
import React from "react";
import styles from "./header.module.css";
import { UserProfile } from "../UserProfile";
import { HeaderNavbar } from "@/Components";

export default function Header() {
  return (
    <header className={`py-2 ${styles.header}`}>
      <div className={styles.header_content}>
        <HeaderNavbar />
        <UserProfile />
      </div>
    </header>
  );
}
