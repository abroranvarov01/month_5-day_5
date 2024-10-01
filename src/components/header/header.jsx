import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/logo.svg";
import { HeaderFunc } from "../headerFunc/headerFunc";
import { HeaderSections } from "../header_sections/header_sections";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.top}>
        <div className={style.wrap}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className={style.input_wrap}>
            <form className={style.form}>
              <input
                placeholder="Anywhere"
                className={style.input}
                type="text"
              />
              <input
                placeholder="Any week"
                className={style.input_mid}
                type="text"
              />
              <input
                placeholder="Add guests"
                className={style.input}
                type="text"
              />
              <button className={style.btn}></button>
            </form>
          </div>
          <HeaderFunc />
        </div>
      </div>
      <HeaderSections />
    </div>
  );
};
