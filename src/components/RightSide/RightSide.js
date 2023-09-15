import React from "react";
import style from './RightSide.module.css'
import UserImage from '../../assets/1_jZ9v-2QShwnfCwHlEZCmDw.png'
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

function RightSide() {
    return (
      <>
      <div className={style["right__side"]}>
          <div className={style["navbar"]}>
            <div className={style["search__input"]}>
              <i className="fa-solid fa-magnifying-glass" style={{color: '#212121'}} />
              <input type="text" name="search" id="search" placeholder="Search" />
            </div>
            <div className={style["nav__icons__img"]}>
              <div className={style["nav__icon"]}>
                <i className="fa-regular fa-bell" style={{color: '#616363', cursor: 'pointer'}} />
                <p />
              </div>
              <div className={style["nav__icon"]}>
                <i className="fa-regular fa-message" style={{color: '#616363', cursor: 'pointer'}} />
                <p />
              </div>
              <img src={UserImage} alt="" />
            </div>
          </div>
          <div className={style["body__feed"]}>
            <LeftBody />
            <RightBody />
          </div>
        </div>
      </>
    );
  }
  
  export default RightSide;
