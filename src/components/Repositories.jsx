import React from 'react';

const Repositories = () => {
    return (
        <div className="profile-repositories">
            <section className="countRepos">
                <h1 className="countRepos">Repositories</h1>
                <h1 className="countRepos">(<p id="countRepos"></p>)</h1>
            </section>

            <div id="reposContainer"></div>

            <nav className="paginationBlock">
                <ul id="pagination" className="pagination">
                    <li><a href="#" onClick="prevPage()">«</a></li>
                    <li><a href="#" onClick="changePage(1)">1</a></li>
                    <li><a href="#" onClick="changePage(2)">2</a></li>
                    <li><a href="#" onClick="changePage(3)">3</a></li>
                    <li><a href="#" onClick="changePage(4)">4</a></li>
                    <li><a href="#" onClick="nextPage()">»</a></li>
                </ul>

            </nav>
        </div>
    );
};

export default Repositories;