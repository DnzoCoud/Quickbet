import Image from "next/image";
import React from "react";
import styles from "./header-navbar.module.css";

export default function HeaderNavbar() {
  return (
    <div className={styles.header_nav}>
      <Image
        src={"/assets/QuickBet_Logo.png"}
        alt="QuickBet Logo"
        width={130}
        height={40}
        fetchPriority="high"
        quality={20}
        className="mx-8"
      />
      <nav className={styles.navbar}>
        <ul>
          <li>Popular</li>
          <li>Favorites</li>
        </ul>
      </nav>
    </div>
  );
}
