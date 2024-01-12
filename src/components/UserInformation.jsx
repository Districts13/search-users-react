import React from 'react';
import classes from "./UserInformation.module.css";

const UserInformation = (userFullApiInfo) => {

    if (!userFullApiInfo) {
        return null;
    }

    return (
        <div className={classes.profileInfo}>
            <header className={classes.profileAvatar}>
                <img src={userFullApiInfo.avatar_url} id={classes.userAvatar} alt=""/>
            </header>

            <section className={classes.profileNameUsername}>
                <h2 id={classes.userOnPage}>{userFullApiInfo.login}</h2>
                <h4 id={classes.nameUserOnPage}>{userFullApiInfo.name}</h4>
            </section>

            <header className={classes.profileFollows}>
                <section className={classes.followersAndIcon}>
                    <img className={classes.imgFollowFollowers} src="https://img.icons8.com/glyph-neue/32/737373/group--v1.png" alt="logo Followers"/>
                    <p id={classes.followersCount}>{(userFullApiInfo.followers/1000).toFixed(1) +'k'}</p>
                    <p>Followers</p>
                </section>
                <section className={classes.followingAndIcon}>
                    <img className={classes.imgFollowFollowers}
                         src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/737373/external-following-social-media-interface-anggara-glyph-anggara-putra.png"
                         alt="logo Following"/>
                    <p id={classes.followingCount}>{userFullApiInfo.following}</p>
                    <p>Following</p>
                </section>
            </header>
        </div>
    );
};

export default UserInformation;