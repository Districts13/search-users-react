import React from 'react';

const TopSide = () => {
    return (
        <header className="header">
            <section className="logo-search">
                <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/github.png" alt="github"/>
                <input type="text" id="search-field" className="search-bar" placeholder="Введите юзернейм пользователя Гитхаб" aria-label=""/>
                <button className="button-search">
                    <img width="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1"/>
                </button>
            </section>
        </header>
    );
};

export default TopSide;