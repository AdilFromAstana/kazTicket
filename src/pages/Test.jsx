import React from 'react';
import { useState } from 'react';
import moment from 'moment'
import { useEffect } from 'react';

const Test = () => {

    const [click, setClick] = useState(0);

    const [calendar, setCalendar] = useState([]);

    const today = new Date()

    const getDaysInMonth = () => {
        let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        let days = [];
        while (date.getMonth() === today.getMonth()) {
        let options = { weekday: 'short'};
        days.push({
            dayNum:new Date(date).getDate(),
            dayWeekend: new Intl.DateTimeFormat('ru-RU', options).format(date)
        });
          date.setDate(date.getDate()+1);
        }
        console.log(days)
        return setCalendar(days)
    }

    useEffect(()=>{
        getDaysInMonth()
    }, [])

    return (
        <div>
            June 
            <div style={{display: 'flex', alignItems: 'center' }}>
                {calendar.map(day=>
                    <div key={day.dayNum} onClick={()=>console.log(day)} style={{marginRight: '6px'}}>
                        <div>{day.dayNum}</div>
                        <span>{day.dayWeekend}</span>
                    </div>    
                )}
            </div>
        </div>
    );
};

export default Test;