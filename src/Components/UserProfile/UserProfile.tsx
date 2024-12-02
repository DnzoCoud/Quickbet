import React from "react";
import UserCircle from "./user-circle.svg";
import Image from "next/image";
import styles from "./user-profile.module.css";

export default function UserProfile() {
  return (
    <div className={styles.user_prof__icon}>
      <Image src={UserCircle} alt="Profile of user" width={30} height={30} />
    </div>
  );
}
