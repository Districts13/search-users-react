import React, {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import './styles/App.css'
import UserInformation from "./components/UserInformation";
import Repositories from "./components/Repositories";
import axios from "axios";
import useGitHubApi from "./hooks/useGitHubApi";

function App() {

    const {user,
        setUser,
        userData,} = useGitHubApi()

    console.log(userData.repositories)

    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(4);
    const totalPages = Math.ceil(userData.repositories.length / reposPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < Math.ceil(userData.repositories.length / reposPerPage) ? prevPage + 1 : prevPage));
    };
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };


    const numberLastRepo = currentPage * reposPerPage;
    const numberFirstRepo = numberLastRepo - reposPerPage;
    const currentRepos = userData.repositories.slice(numberFirstRepo, numberLastRepo);
    const pagination = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="App">
            <SearchBar user={user} setUser={setUser}/>
            {Object.keys(userData).length
                ?
                <section className="whole-profile">
                    <UserInformation userFullApiInfo={userData}/>
                    <Repositories
                        userFullApiInfo={userData}
                        repositories={userData.repositories}
                        currentRepos={currentRepos}
                        reposPerPage={reposPerPage}
                        pagination={pagination}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        totalPages={totalPages}
                        currentPage={currentPage}
                    />
                </section>
                :
                <img className='maineSearchImg' src="https://img.icons8.com/ios/150/737373/search--v1.png" alt="search picture"/>
            }

        </div>
    );
}

export default App;
