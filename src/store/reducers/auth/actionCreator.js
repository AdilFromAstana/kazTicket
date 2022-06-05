import {SET_AUTH, SET_ERROR, SET_LOADING, SET_USER} from './index'; 
import axios from 'axios';

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
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', user.username);
                dispatch(AuthActionCreator.setIsAuth(true));
                dispatch(AuthActionCreator.setUser(user));
            } else {
                dispatch(AuthActionCreator.setError('Некоректный логин или пароль'))
            }
            console.log(user)
            dispatch(AuthActionCreator.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreator.setError(`Произошла ошибка ${e}`));
        }
    },
    logout: () => async () => {
        try{
            
        } catch (e) {

        }
    }
}