import React from 'react';

const Repositories = ({userFullApiInfo, repositories, currentRepos, reposPerPage, pagination, handleNextPage, handlePrevPage, totalPages, currentPage}) => {
    if (!userFullApiInfo && !repositories) {
        return null;
    }

    console.log(repositories)

    return (
        <div className="profile-repositories">
            <h1 className="countRepos">Repositories (<p id="countRepos">{userFullApiInfo.public_repos}</p>)</h1>
            <ul>
                {currentRepos.map((repo) => (
                    <li className="reposNameReadme" key={repo.id}>
                        <p className='reposName'>{repo.name}</p>
                        <p>{repo.description || 'Readme'}</p>
                    </li>
                ))}
            </ul>
            <div className='paginationBlock'>
                <button className='pagination' onClick={handlePrevPage} disabled={currentPage === 1} >
                    «
                </button>
                {Array.from({length: Math.ceil(repositories.length / reposPerPage)}).map((_, index) => (
                    <button className='pagination' key={index} onClick={() => pagination(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button className='pagination' onClick={handleNextPage} disabled={currentPage === totalPages} >
                    »
                </button>
            </div>
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