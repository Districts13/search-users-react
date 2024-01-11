// import axios from 'axios';
// import {useEffect, useState} from "react";
//
//
// export const UseGitHubApi = (user) => {
//
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
