import {SET_ERROR, SET_DATES_FOR_TREE_MONTHS, SET_IS_LOADING, SET_SELECTED_ARRAY, SET_ALL_DATES, SET_EMPTY, SET_REMOVE} from './index'; 

export const CalendarActionCreator = {
    setIsLoading: (payload)=> ({type: SET_IS_LOADING, payload}),
    setError: (payload)=> ({type: SET_ERROR, payload}),
    setAllDates: (payload)=> ({type: SET_ALL_DATES, payload}),
    setSelectedArray: (payload)=> ({type: SET_SELECTED_ARRAY, payload}),
    setEmpty: (payload)=> ({type: SET_EMPTY, payload}),
    setRemove: (payload)=> ({type: SET_REMOVE, payload}),
    setDatesForTreeMounts: (payload)=> ({type: SET_DATES_FOR_TREE_MONTHS, payload}),
    getDates: () => (dispatch) => {
        try {
            dispatch(CalendarActionCreator.setIsLoading(true));
            let today = new Date()
            let getDates = (month) => {
                let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                let days = [];
                while(date.getMonth() <= month){
                    let options = { weekday: 'short' };
                    days.push({
                        dayMonth: new Date(date).getMonth(),
                        dayNum: new Date(date).getDate(),
                        dayWeekend: new Intl.DateTimeFormat('ru-RU', options).format(date)
                    });
                    date.setDate(date.getDate() + 1);
                }
                return days
            }
            let allDays = getDates(today.getMonth()+2)

            let treeMonth = [
                {monthName: today.getMonth(), days: allDays.filter(day=>day.dayMonth === today.getMonth())},
                {monthName: today.getMonth()+1, days: allDays.filter(day=>day.dayMonth === today.getMonth()+1)},
                {monthName: today.getMonth()+2, days: allDays.filter(day=>day.dayMonth === today.getMonth()+2)},
            ];
            dispatch(CalendarActionCreator.setDatesForTreeMounts(treeMonth))
            dispatch(CalendarActionCreator.setAllDates(allDays))
            dispatch(CalendarActionCreator.setIsLoading(false));
        } catch (e) {
            dispatch(CalendarActionCreator.setError(`Произошла ошибка ${e}`));
        }
    },
    selectedDates: (payload) => (dispatch) => {
        try{
            dispatch(CalendarActionCreator.setSelectedArray(payload))
        } catch {

        }
    },
    logout: () => async () => {
        try{
            
        } catch (e) {

        }
    }
}