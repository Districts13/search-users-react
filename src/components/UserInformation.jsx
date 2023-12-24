import React from 'react';

const UserInformation = () => {
    return (
        <div className='profile-info'>
            {/*Аватар профиля*/}
            <header className="profile-avatar">
                <img src="" id="userAvatar" alt=""/>
            </header>
            {/*Юзернейм и имя пользователя*/}
            <section className="profile-name-username">
                <h2 id="userOnPage"></h2>
                <h4 id="nameUserOnPage"></h4>
            </section>
            {/*Количество подписчиков и подписок*/}
            <header className="profile-follows">
                <section className="followersAndIcon">
                    <img width="20" height="20" src="https://img.icons8.com/glyph-neue/32/737373/group--v1.png" alt="group--v1"/>
                    <p id="followersCount"></p>
                    <p>Followers</p>
                </section>
                <section className="followingAndIcon">
                    <img width="20" height="20"
                         src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/737373/external-following-social-media-interface-anggara-glyph-anggara-putra.png"
                         alt=""/>
                    <p id="followingCount"></p>
                    <p>Following</p>
                </section>
            </header>
        </div>
    );
};

export default UserInformation;