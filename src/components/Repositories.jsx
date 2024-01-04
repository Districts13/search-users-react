import React from 'react';

const Repositories = ({userFullApiInfo, repositories, numberLastRepo, numberFirstRepo, currentRepos}) => {
    if (!userFullApiInfo && !repositories) {
        return null;
    }

    console.log(repositories)

    return (
        <div className="profile-repositories">
            <h1 className="countRepos">Repositories (<p id="countRepos">{userFullApiInfo.public_repos}</p>)</h1>
            <ul>
                {currentRepos.map((repo) => (
                    <li key={repo.id}>
                        <p>{repo.name}</p>
                        <p>{repo.description || 'N/A'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repositories;






// <div id="reposContainer"></div>
//
//             <nav className="paginationBlock">
//                 <ul id="pagination" className="pagination">
//                     <li><a href="#">«</a></li>
//                     <li><a href="#">1</a></li>
//                     <li><a href="#">2</a></li>
//                     <li><a href="#">3</a></li>
//                     <li><a href="#">4</a></li>
//                     <li><a href="#">»</a></li>
//                 </ul>
//
//             </nav>