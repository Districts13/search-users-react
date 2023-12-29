import React, {useState} from 'react';
import axios from "axios";

const UserInformation = (userFullApiInfo) => {

    return (
        <div className='profile-info'>
            {/*Аватар профиля*/}
            <header className="profile-avatar">
                <img src={userFullApiInfo.avatar_url} id="userAvatar" alt=""/>
            </header>
            {/*Юзернейм и имя пользователя*/}
            <section className="profile-name-username">
                <h2 id="userOnPage">{userFullApiInfo.login}</h2>
                <h4 id="nameUserOnPage">{userFullApiInfo.name}</h4>
            </section>
            {/*Количество подписчиков и подписок*/}
            <header className="profile-follows">
                <section className="followersAndIcon">
                    <img width="20" height="20" src="https://img.icons8.com/glyph-neue/32/737373/group--v1.png" alt="group--v1"/>
                    <p id="followersCount">{userFullApiInfo.followers}</p>
                    <p>Followers</p>
                </section>
                <section className="followingAndIcon">
                    <img width="20" height="20"
                         src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/737373/external-following-social-media-interface-anggara-glyph-anggara-putra.png"
                         alt=""/>
                    <p id="followingCount">{userFullApiInfo.following}</p>
                    <p>Following</p>
                </section>
            </header>
        </div>
    );
};

export default UserInformation;