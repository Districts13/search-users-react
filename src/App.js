import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import './styles/App.css'
import UserInformation from "./components/UserInformation";
import Repositories from "./components/Repositories";

function App() {
    const [user, setUser] = useState('');
    console.log(user)

    return (
        <div className="App">
            <SearchBar user={user} setUser={setUser} />
            {user.length
                ?
                <section className="whole-profile">
                    <UserInformation user={user} setUser={setUser}/>
                    <Repositories user={user} setUser={setUser}/>
                </section>
                :
                <img style={{margin: '300px auto', display: 'block',}} width="150" height="150" src="https://img.icons8.com/ios/150/737373/search--v1.png" alt="search--v1"/>
            }

        </div>
    );
}

export default App;
