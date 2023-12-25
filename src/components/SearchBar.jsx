import React, {useState} from 'react';

const SearchBar = ({user, setUser}) => {

    return (
        <header className="header">
            <section className="logo-search">
                <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/github.png" alt="github"/>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Введите юзернейм пользователя Гитхаб"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                />
                <button className="button-search">
                    <img width="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1"/>
                </button>
            </section>
        </header>
    );
};

export default SearchBar;