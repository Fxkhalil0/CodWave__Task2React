import React, { useState } from "react";
import style from './RightSide.module.css';
import SuggestionImage from '../../assets/2.jpeg';
import FriendInfo from '../../assets/c52c1d23c25b40158fa02efa0837a64f.jpeg';

function RightBody() {
    const suggestionData = [
        { name: "Pafinolis", connects: "15K+", id: "1" },
        { name: "Pafinolis", connects: "15K+", id: "2" },
        { name: "Pafinolis", connects: "15K+", id: "3" },
        { name: "Pafinolis", connects: "15K+", id: "4" },
        { name: "Pafinolis", connects: "15K+", id: "5" },
    ];

    const friendsData = [
        { name: "Theresa Webb", status: "Last Active Recently", count: 3 },
        { name: "Theresa Webb", status: "Last Active Recently", count: 2 },
        { name: "Theresa Webb", status: "Last Active Recently", count: 1 },
        { name: "Theresa Webb", status: "Active", state: "active" },
        { name: "Theresa Webb", status: "Active", state: "active" },
    ];
    const [suggestionButtonState, setSuggestionButtonState] = useState({});

    const toggleFriendButton = (id) => {
        setSuggestionButtonState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <div className={style["right__body"]}>
            <div className={style["padding__div"]}>
                <h2>Suggestions for you</h2>
                {suggestionData.map((item, index) => (
                    <div className={style["suggestion__item"]} key={index}>
                        <div className={style["suggestion__info"]}>
                            <figure>
                                <img src={SuggestionImage} alt="" />
                            </figure>
                            <div className={style["shortcut__text"]}>
                                <p>{item.name}</p>
                                <p>{item.connects} Connects</p>
                            </div>
                        </div>
                        <div className={style["add__friend"]}>
                        {suggestionButtonState[item.id] ? (
                                <button onClick={() => toggleFriendButton(item.id)}>
                                    <i className="fa-solid fa-user-xmark" style={{ color: 'white' }} /> Cancel
                                </button>
                            ) : (
                                <button onClick={() => toggleFriendButton(item.id)}>
                                    <i className="fa-solid fa-user-plus" style={{ color: 'white' }} /> Add friend
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                <div className={style["border__div"]} />
                <h2>My Friends</h2>
                {friendsData.map((item, index) => (
                    <div className={style["my__friend"]} key={index}>
                        <div className={style["friend__info"]}>
                            <figure>
                                <img src={FriendInfo} alt="" />
                            </figure>
                            <div className={style["state__text"]}>
                                <p>{item.name}</p>
                                <p style={{ color: item.state === "active" ? "#4CD080" : "#616363" }}>{item.status}</p>
                            </div>
                        </div>
                        {item.count && <p>{item.count}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RightBody;
