import React from "react";
import Items from "../../data/items";
import style from "./main.module.scss";

export const Main = () => {
  return (
    <div>
      <ul className={style.list}>
        {Items.map((item) => {
          return (
            <li className={style.item} key={item.id}>
              <div className={style.img}>
                <img src={item.img} alt="img" />
              </div>
              <h2 className={style.title}>{item.title}</h2>
              <p className={style.text}>{item.text}</p>
              <p className={style.text}>{item.date}</p>
              <p className={style.cost_text}>${item.price} night</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
