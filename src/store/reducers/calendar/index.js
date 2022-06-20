export const SET_SELECTED_ARRAY = 'SET_SELECTED_ARRAY';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DATES_FOR_TREE_MONTHS = 'SET_DATES_FOR_TREE_MONTHS';
export const SET_ALL_DATES = 'SET_ALL_DATES';
export const SET_EMPTY = 'SET_EMPTY'
export const SET_REMOVE = 'SET_REMOVE'


const initialState = {
    isLoading: false,
    error: '',
    datesForTreeMounts: [],
    selectedArray: [],
    allDates: [],
    empty: []
} 

export default function eventTypesReducer(state=initialState, action){
    switch(action.type){
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_EMPTY:
            return {...state, selectedArray: []}
        case SET_REMOVE:
            return {...state, selectedArray: state.selectedArray.filter(day=> day.dayNum !== action.payload.dayNum)}
        case SET_ALL_DATES:
            return {...state, allDates: action.payload}
        case SET_DATES_FOR_TREE_MONTHS:
            return {...state, datesForTreeMounts: action.payload}
        case SET_SELECTED_ARRAY:
            return {...state, selectedArray: [...state.selectedArray, action.payload]}
        default: 
            return state;
    }
}