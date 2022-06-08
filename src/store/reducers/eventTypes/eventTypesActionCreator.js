import {SET_ERROR, SET_EVENT_TYPES, SET_IS_LOADING} from './index'; 
import axios from 'axios';

export const EventTypesActionCreator = {
    setIsLoading: (payload)=> ({type: SET_IS_LOADING, payload}),
    setError: (payload)=> ({type: SET_ERROR, payload}),
    setEvents: (events)=> ({type: SET_EVENT_TYPES, payload: [...events]}),
    sortEvents: (type) => async (dispatch) => {
        try {
            dispatch(EventTypesActionCreator.setIsLoading(true));
            if (!type){
                let response = await axios.get('./events.json');
                dispatch(EventTypesActionCreator.setEvents(response.data));
            }
            if (type){
                let response = await axios.get('./events.json');
                let eventList = response.data.filter(event => event.type == type)
                console.log(eventList)
                dispatch(EventTypesActionCreator.setEvents(eventList));
            } else {
                dispatch(EventTypesActionCreator.setError('Такие события пока не ожидаются'))
            }
            dispatch(EventTypesActionCreator.setIsLoading(false));
        } catch (e) {
            dispatch(EventTypesActionCreator.setError(`Произошла ошибка ${e}`));
        }
    },
    logout: () => async () => {
        try{
            
        } catch (e) {

        }
    }
}