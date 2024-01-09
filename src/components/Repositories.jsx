import React from 'react';
import classes from './Repositories.module.css';

const Repositories = ({userFullApiInfo, repositories, currentRepos, reposPerPage, pagination, handleNextPage, handlePrevPage, totalPages, currentPage}) => {
    if (!userFullApiInfo && !repositories) {
        return null;
    }

    console.log(repositories)

    return (
        <div className={classes.profileRepositories}>
            <h1 className={classes.countRepos}>Repositories (<p id={classes.countRepos}>{userFullApiInfo.public_repos}</p>)</h1>
            <ul>
                {currentRepos.map((repo) => (
                    <li className={classes.reposNameReadme} key={repo.id}>
                        <p className={classes.reposName}>{repo.name}</p>
                        <p>{repo.description || 'Readme'}</p>
                    </li>
                ))}
            </ul>
            <div className={classes.paginationBlock}>
                <button className={classes.pagination} onClick={handlePrevPage} disabled={currentPage === 1}>
                    «
                </button>
                {Array.from({length: Math.ceil(repositories.length / reposPerPage)}).map((_, index) => (
                    <button className={classes.pagination} key={index} onClick={() => pagination(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button className={classes.pagination} onClick={handleNextPage} disabled={currentPage === totalPages}>
                    »
                </button>
            </div>
        </div>
    );
};

export default Repositories;

