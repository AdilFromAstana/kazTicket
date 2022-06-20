import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarActionCreator } from '../../store/reducers/calendar/calendarActionCreator';
import '../../styles/CalendarStyles.css';

const AnyDateInCalendar = ({day}) => {
    
    const [selectDate, setSelectDate] = useState(false);

    const dispatch = useDispatch();

    const {selectedArray} = useSelector(state=>state.calendar)

    console.log(selectedArray)

    const selectedDate = () => {
        if(selectedArray.includes(day)){
            if(selectedArray.length == 2){
                dispatch(CalendarActionCreator.setEmpty());
                setSelectDate(!selectDate)
            }
            dispatch(CalendarActionCreator.selectedDates(day));
            setSelectDate(!selectDate)
        }
        dispatch(CalendarActionCreator.setRemove(day));
        setSelectDate(!selectDate)
    }   

    return (
        <div
            onClick={() => selectedDate()}
            className={selectDate ? 'calendarDateActive' : 'calendarDate'}
        >
            <div
                style={{
                    fontSize: '20px'
                }}
            >
                {day.dayNum}
            </div>
            <div
                style={{
                    fontSize: '15px'
                }}
            >
                {day.dayWeekend}
            </div>
        </div>
    );
};

export default AnyDateInCalendar;