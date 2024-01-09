import React from 'react';
import classes from "./SearchBar.module.css";

const SearchBar = ({user, setUser}) => {

    const userChange = (event) => {
        setUser(event.target.value)
    }

    return (
        <header className={classes.header}>
            <section className={classes.containerSearchLogoButton}>
                <img className={classes.logoGithub} src="https://img.icons8.com/ios-glyphs/60/FFFFFF/github.png" alt="github logo"/>
                <input
                    type="text"
                    className={classes.searchBar}
                    placeholder="Введите юзернейм пользователя Гитхаб"
                    value={user}
                    onChange={userChange}
                />
                <button type='submit' className={classes.buttonSearch}>
                    <img className={classes.imgSearchButton} src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search logo"/>
                </button>
            </section>
        </header>
    );
};

export default SearchBar;