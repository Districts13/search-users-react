import React, {useEffect, useState} from 'react';
import axios from "axios";

const useGitHubApi = () => {
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState({});

    const axiosInstance = axios.create({
        baseURL: process.env.GITHUB_API_BASE_URL,
    });

    setUserData({
        avatar_url: null,
        login: null,
        name: null,
        followers: undefined,
        following: undefined,
        public_repos: undefined,
        repositories: [],
    });

    const fetchUserData = async () => {
        try {
            const userResponse = await axiosInstance.get(`/users/${user}`);
            const reposResponse = await axiosInstance.get(`/users/${user}/repos`);

            setUserData({
                avatar_url: userResponse.data.avatar_url,
                login: userResponse.data.login,
                name: userResponse.data.name,
                followers: userResponse.data.followers,
                following: userResponse.data.following,
                public_repos: userResponse.data.public_repos,
                repositories: reposResponse.data,
            });
        } catch (error) {
            console.error('Error fetching user data:', error);

        }
    };

    useEffect(() => {
        if (user) {
            fetchUserData();
        }
    }, [user]);



    return {
        user,
        setUser,
        userData,
    };
};

export default useGitHubApi;




    
//     const instance = axios.create({
//         baseURL: process.env.GITHUB_API_BASE_URL
//     });
//
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const responseUser = await instance.get(`/users/${user}`);
//                 return responseUser.data
//             } catch (error) {
//                 console.error('Error search user: ', error);
//             }
//         };
//         // Проверка, пустая ли строка
//         if (user.trim() !== '') {
//             fetchUsers();
//         }
//     }, [user])
//
//     useEffect(() => {
//         const fetchRepos = async () => {
//             if (user) {
//                 try {
//                     const responseRepos = await instance.get(`/users/${user}/repos`);
//                     return  responseRepos.data
//                 } catch (e) {
//                     console.error('Error search user repos: ', e);
//                 }
//             }
//         };
//         fetchRepos()
//
//     }, [user])
//
//
// };
