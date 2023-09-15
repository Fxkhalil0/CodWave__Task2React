import React, { useState } from "react";
import style from './RightSide.module.css';
import UserImage from '../../assets/1_jZ9v-2QShwnfCwHlEZCmDw.png';
import AvatarImage from '../../assets/feature-image-ai-avatar-maker.png';
import ForestImage from '../../assets/road-car-among-forest-top-view.jpg';

function LeftBody() {
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };
    return (
        <div className={style["left__body"]}>
            <div className={style["add__post"]}>
                <div className={style["img__input"]}>
                    <img src={UserImage} alt="" />
                    <input type="text" name="mind" placeholder="What's on your mind" />
                </div>
                <div className={style["icons__button"]}>
                    <div className={style["post__icons"]}>
                        <i className="fa-solid fa-camera" style={{ color: '#757474', cursor: 'pointer' }} />
                        <i className="fa-solid fa-image" style={{ color: '#757474', cursor: 'pointer' }} />
                        <i className="fa-solid fa-link" style={{ color: '#757474', cursor: 'pointer' }} />
                        <i className="fa-solid fa-location-dot" style={{ color: '#757474', cursor: 'pointer' }} />
                    </div>
                    <button>Post</button>
                </div>
            </div>
            <div className={style["post__content"]}>
                <div className={style["post__creator"]}>
                    <div className={style["user"]}>
                        <img src={AvatarImage} alt="" />
                        <div className={style["user__info"]}>
                            <h4>Jane Cooper</h4>
                            <p>12 April at 9:00AM</p>
                        </div>
                    </div>
                    <p>...</p>
                </div>
                <div className={style["post__text"]}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur perspiciatis quae,
                        velit hic dolore itaque and perferendis id vitae possimus, voluptate voluptates quaerat
                        et eum architecto, quo quas debitis voluptatem accusantium e itaque and perferendis id
                        vitae possimus.</p>
                    <p>#arsitek #art #creative</p>
                    <img src={ForestImage} alt="" />
                </div>
                <div className={style["body__post__actions"]}>
                    <p className={activeItem === 0 ? style["active"] : ""}
                        onClick={() => handleItemClick(0)}><i className="fa-solid fa-thumbs-up" style={{ marginRight: '7px' }} />Like</p>
                    <p className={activeItem === 1 ? style["active"] : ""}
                        onClick={() => handleItemClick(1)}><i className="bx bxs-chat" style={{ marginRight: '7px' }} />Comments</p>
                    <p className={activeItem === 2 ? style["active"] : ""}
                        onClick={() => handleItemClick(2)}><i className="fa-solid fa-bookmark" style={{ marginRight: '7px' }} />Save</p>
                    <p className={activeItem === 3 ? style["active"] : ""}
                        onClick={() => handleItemClick(3)}><i className="fa-solid fa-share-from-square" style={{ marginRight: '7px' }} />Share</p>
                </div>
                <div className={style["body__comment"]}>
                    <div className={style["comment__creator"]}>
                        <img src={UserImage} alt="" />
                        <input type="text" placeholder="Write a comment" />
                        <div className={style["comment__icons"]}>
                            <i className="fa-solid fa-camera" style={{ color: '#757474', cursor: 'pointer' }} />
                            <i className="fa-solid fa-image" style={{ color: '#757474', cursor: 'pointer' }} />
                            <i className="fa-solid fa-link" style={{ color: '#757474', cursor: 'pointer' }} />
                            <i className="fa-solid fa-location-dot" style={{ color: '#757474', cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className={style["all__comments"]}>
                        <p>View Comments <i className="fa-solid fa-chevron-down" style={{ color: '#757474', cursor: 'pointer' }} /></p>
                        <p>Sort by <span>Most popular</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBody;
