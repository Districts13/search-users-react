import React, {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import './styles/App.css'
import UserInformation from "./components/UserInformation";
import Repositories from "./components/Repositories";
import axios from "axios";

function App() {
    const [user, setUser] = useState('');
    const [userFullApiInfo, setUserFullApiInfo] = useState({})

    useEffect(() => {
        const fetchUsers = async() => {
            const responseUser = await axios.get(`https://api.github.com/users/${user}`)
            setUserFullApiInfo(responseUser.data)
        }
        // Проверка, пустая ли строка
        if (user.trim() !== '') {
            fetchUsers();
        }
    }, [user])

    console.log(userFullApiInfo)
    console.log(userFullApiInfo.login)

    return (
        <div className="App">
            <SearchBar user={user} setUser={setUser}/>
            {user.length
                ?
                <section className="whole-profile">
                    <UserInformation userFullApiInfo={userFullApiInfo} />
                    <Repositories userFullApiInfo={userFullApiInfo} />
                </section>
                :
                <img style={{margin: '300px auto', display: 'block',}} width="150" height="150" src="https://img.icons8.com/ios/150/737373/search--v1.png" alt="search--v1"/>
            }

        </div>
    );
}

export default App;
