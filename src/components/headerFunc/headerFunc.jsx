import React from "react";
import style from "./headerFunc.module.scss";
import inet_log from "../../assets/inet_logo.svg";

export const HeaderFunc = () => {
  return (
    <div className={style.box}>
      <p className={style.text}>Airbnb your home</p>
      <a className={style.img} href="#">
        <img src={inet_log} alt="logo" />
      </a>
      <button className={style.drawer_btn}></button>
    </div>
  );
};
