export const SET_EVENT_TYPES = 'SET_EVENT_TYPES';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ERROR = 'SET_ERROR';

const initialState = {
    isLoading: false,
    events: [],
    error: '',
    selectedEvent: ''
} 

export default function eventTypesReducer(state=initialState, action){
    switch(action.type){
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_EVENT_TYPES:
            return {...state, events: action.payload}
        default: 
            return state;
    }
}