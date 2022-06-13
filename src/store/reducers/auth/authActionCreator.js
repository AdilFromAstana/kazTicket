import {SET_AUTH, SET_ERROR, SET_LOADING, SET_USER} from './index'; 
import axios from 'axios';
import { check } from '../../../http/user';
const userName = document.cookie.replace(/(?:(?:^|.*;\s*)userName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const userPass = document.cookie.replace(/(?:(?:^|.*;\s*)userPass\s*\=\s*([^;]*).*$)|^.*$/, "$1");

export const AuthActionCreator = {
    setUser: (user)=> ({type: SET_USER, payload: user}),
    setIsAuth: (auth)=> ({type: SET_AUTH, payload: auth}),
    setIsLoading: (payload)=> ({type: SET_LOADING, payload}),
    setError: (payload)=> ({type: SET_ERROR, payload}),
    login: (username, password) => async (dispatch) => {
        try{
            dispatch(AuthActionCreator.setIsLoading(true));
            let response = await axios.get('./users.json');
            let user = response.data.find(user => user.username === username && user.password === password)
            if (user){
                document.cookie = `userName=${user.username}; path=/;`
                document.cookie = `userPass=${user.password}; path=/;`
                dispatch(AuthActionCreator.setIsAuth(true));
                dispatch(AuthActionCreator.setUser(user));
            } else {
                dispatch(AuthActionCreator.setError('Некоректный логин или пароль'))
            }
            dispatch(AuthActionCreator.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreator.setError(`Произошла ошибка ${e}`));
        }
    },
    check: () => (dispatch) => {
        try{
            dispatch(AuthActionCreator.setIsLoading(true));
            let response = check();
            if(response){
                dispatch(AuthActionCreator.setIsAuth(true));
                dispatch(AuthActionCreator.setUser(response.userName));
            }
            dispatch(AuthActionCreator.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreator.setError(`Произошла ошибка ${e}`));
        }
    },
    logout: () => (dispatch) => {
        try{
            dispatch(AuthActionCreator.setIsLoading(true));
            dispatch(AuthActionCreator.setIsAuth(false));
            dispatch(AuthActionCreator.setUser({}));
            document.cookie = `userName=${userName}; max-age=0`;
            document.cookie = `userPass=${userPass}; max-age=0`;
            console.log(document.cookie)
            dispatch(AuthActionCreator.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreator.setError(`Произошла ошибка ${e}`));
        }
    }
}