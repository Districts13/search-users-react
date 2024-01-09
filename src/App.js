import React, {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import './styles/App.css'
import UserInformation from "./components/UserInformation";
import Repositories from "./components/Repositories";
import axios from "axios";

function App() {
    const [user, setUser] = useState('');
    const [userFullApiInfo, setUserFullApiInfo] = useState({})
    const [repositories, setRepositories] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(4);
    const totalPages = Math.ceil(repositories.length / reposPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < Math.ceil(repositories.length / reposPerPage) ? prevPage + 1 : prevPage));
    };
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };


    const numberLastRepo = currentPage * reposPerPage;
    const numberFirstRepo = numberLastRepo - reposPerPage;
    const currentRepos = repositories.slice(numberFirstRepo, numberLastRepo);
    const pagination = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseUser = await axios.get(`https://api.github.com/users/${user}`);
                setUserFullApiInfo(responseUser.data);
            } catch (error) {
                console.error('Error search user: ', error);
            }
        };
        // Проверка, пустая ли строка
        if (user.trim() !== '') {
            fetchUsers();
        }
    }, [user])

    useEffect(() => {
        const fetchRepos = async () => {
            if (user) {
                try {
                    const responseRepos = await axios.get(`https://api.github.com/users/${user}/repos`);
                    setRepositories(responseRepos.data);
                } catch (e) {
                    console.error('Error search user repos: ', e);
                }
            }
        };
        fetchRepos()

    }, [user])

    return (
        <div className="App">
            <SearchBar user={user} setUser={setUser}/>
            {Object.keys(userFullApiInfo).length
                ?
                <section className="whole-profile">
                    <UserInformation userFullApiInfo={userFullApiInfo}/>
                    <Repositories
                        userFullApiInfo={userFullApiInfo}
                        repositories={repositories}
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
