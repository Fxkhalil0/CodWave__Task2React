import React, { useState } from "react";
import style from './Leftside.module.css'
import UserImage from '../../assets/1_jZ9v-2QShwnfCwHlEZCmDw.png'
import Image1 from '../../assets/channels4_profile.jpg'
import Image2 from '../../assets/VK_Compact_Logo_(2021-present).svg.png'
import Image3 from '../../assets/Apple Store.png'
import Image4 from '../../assets/300740278_136403862433342_6870799784465250451_n.png'
import Image5 from '../../assets/Screenshot 2023-08-18 165902.png'

function LeftSide() {
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={style["left__side"]}>
                <div className={style["padding__div"]}>
                    <h1>CodWave</h1>
                    <div className={style["main__account"]}>
                        <div className={style["image__name"]}>
                            <img src={UserImage} alt="" />
                            <p>Jhon Done</p>
                        </div>
                        <i className={`fa-solid ${isMenuOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
                            onClick={toggleMenu} />
                    </div>
                    {isMenuOpen && (
                    <div className={style["menu__content"]}>
                        <ul className={style["menu__items"]}>
                            <li
                                className={activeItem === 0 ? style["active"] : ""}
                                onClick={() => handleItemClick(0)}
                            >
                                <i className="fa-solid fa-house" />Home
                            </li>
                            <li
                                className={activeItem === 1 ? style["active"] : ""}
                                onClick={() => handleItemClick(1)}
                            >
                                <i className="fa-solid fa-calendar-week" />Latest
                            </li>
                            <li
                                className={activeItem === 2 ? style["active"] : ""}
                                onClick={() => handleItemClick(2)}
                            >
                                <i className="fa-solid fa-globe" />Explore
                            </li>
                            <li
                                className={activeItem === 3 ? style["active"] : ""}
                                onClick={() => handleItemClick(3)}
                            >
                                <i className="fa-solid fa-newspaper" />News Feed
                            </li>
                            <li
                                className={activeItem === 4 ? style["active"] : ""}
                                onClick={() => handleItemClick(4)}
                            >
                                <i className="fa-solid fa-magnifying-glass-location" />Market Place
                            </li>
                            <li
                                className={activeItem === 5 ? style["active"] : ""}
                                onClick={() => handleItemClick(5)}
                            >
                                <i className="fa-solid fa-store" />Collection
                            </li>
                        </ul>
                    </div>
                    )}
                    <h2>Your Shortcuts</h2>
                    <div className={style["shortcut__item"]}>
                        <figure>
                            <img src={Image1} alt="" />
                        </figure>
                        <div className={style["shortcut__text"]}>
                            <p>Pafinolis</p>
                            <p>15K+ Connects</p>
                        </div>
                    </div>
                    <div className={style["shortcut__item"]}>
                        <figure>
                            <img src={Image2} alt="" />
                        </figure>
                        <div className={style["shortcut__text"]}>
                            <p>The Hip Fish</p>
                            <p>15K+ Connects</p>
                        </div>
                    </div>
                    <div className={style["shortcut__item"]}>
                        <figure>
                            <img src={Image3} alt="" />
                        </figure>
                        <div className={style["shortcut__text"]}>
                            <p>Apple</p>
                            <p>15K+ Connects</p>
                        </div>
                    </div>
                    <div className={style["shortcut__item"]}>
                        <figure>
                            <img src={Image4} alt="" />
                        </figure>
                        <div className={style["shortcut__text"]}>
                            <p>Gaiia</p>
                            <p>15K+ Connects</p>
                        </div>
                    </div>
                    <div className={style["shortcut__item"]}>
                        <figure>
                            <img src={Image5} alt="" />
                        </figure>
                        <div className={style["shortcut__text"]}>
                            <p>Las Muns</p>
                            <p>15K+ Connects</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSide;