import React, {useState} from "react";
import TopSide from "./components/TopSide";
import './styles/App.css'
import UserInformation from "./components/UserInformation";
import Repositories from "./components/Repositories";

function App() {
    const [userName, setUserName] = useState();


    return (
        <div className="App">
            <TopSide />
            <header className="whole-profile">
                <UserInformation />
                <Repositories />
            </header>
        </div>
    );
}

export default App;
