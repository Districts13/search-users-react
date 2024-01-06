import React, {useState} from 'react';
import axios from "axios";

const UserInformation = (userFullApiInfo) => {

    if (!userFullApiInfo) {
        return null;
    }

    return (
        <div className='profile-info'>
            <header className="profile-avatar">
                <img src={userFullApiInfo.userFullApiInfo.avatar_url} id="userAvatar" alt=""/>
            </header>

            <section className="profile-name-username">
                <h2 id="userOnPage">{userFullApiInfo.userFullApiInfo.login}</h2>
                <h4 id="nameUserOnPage">{userFullApiInfo.userFullApiInfo.name}</h4>
            </section>

            <header className="profile-follows">
                <section className="followersAndIcon">
                    <img width="20" height="20" src="https://img.icons8.com/glyph-neue/32/737373/group--v1.png" alt="group--v1"/>
                    <p id="followersCount">{(userFullApiInfo.userFullApiInfo.followers/1000).toFixed(1) +'k'}</p>
                    <p>Followers</p>
                </section>
                <section className="followingAndIcon">
                    <img width="20" height="20"
                         src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/737373/external-following-social-media-interface-anggara-glyph-anggara-putra.png"
                         alt=""/>
                    <p id="followingCount">{userFullApiInfo.userFullApiInfo.following}</p>
                    <p>Following</p>
                </section>
            </header>
        </div>
    );
};

export default UserInformation;