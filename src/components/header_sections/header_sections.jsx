import React from "react";
import style from "./header_sections.module.scss";
import Sections from "../../data/header_sections";

export const HeaderSections = () => {
  return (
    <div className={style.header_sections}>
      <ul className={style.list}>
        {Sections.map((section) => (
          <li key={section.id} className={style.item}>
            <div className={style.img}>
              <img src={section.img} alt="img" />
            </div>
            <h2 className={style.title}>{section.title}</h2>
          </li>
        ))}
      </ul>
      <div className={style.wrap_btn}>
        <button className={style.btn}></button>
        <button className={style.bnt_filter}>Filters</button>
      </div>
    </div>
  );
};
