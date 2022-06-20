import { DatePicker } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AnyDateInCalendar from '../components/CalendarComponents/AnyDateInCalendar';
import arrow from '../image/arrow.svg';
import { CalendarActionCreator } from '../store/reducers/calendar/calendarActionCreator';
import '../styles/CalendarStyles.css';

const InlineCalendar = () => {

    const [translate, setTranslate] = useState(0);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [selectDate, setSelectDate] = useState(false);

    const {datesForTreeMounts, allDates} = useSelector(state=>state.calendar)

    const [arrows, setArrows] = useState({ left: 'none', right: 'flex' });

    const changeTranslate = () => {
        switch (translate) {
            case 0: {
                setArrows({ right: 'flex', left: 'none' })
                break;
            }
            case -180: {
                setArrows({ right: 'none', left: 'flex' })
                break;
            }
            default: {
                setArrows({ right: 'flex', left: 'flex' })
                break;
            }
        }
    }

    const [range, setRange] = useState({min:'', max: ''})

    useEffect(() => {
        changeTranslate()
    }, [translate])

    useEffect(() => {
        dispatch(CalendarActionCreator.getDates());
    }, [])

    const date = useSelector(state=>state.calendar.selectedArray)

    return (
        <div className='shellInlineCalendar'>
            <div
                style={{
                    transform: `translate3d(${translate}%, 0px, 0px)`,
                }}
                className="inlineCalendar"
            >
                {
                    datesForTreeMounts.map(month=>
                        <div style={{display: 'block'}} key={month.monthName}>
                            <span
                                style={{marginLeft: '10px', color: 'gray', fontSize: '15px'}}
                            >
                                {t('months', { returnObjects: true })[month.monthName]}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {month.days.map(day =>
                                    <AnyDateInCalendar day={day} key={day.dayNum}/>
                                )}
                            </div>
                        </div>
                    )
                }
                <DatePicker style={{height: '50px'}}/>
            </div>
            <div
                onClick={() => setTranslate(translate + 10)}
                style={{
                    background: 'linear-gradient(to right, #ffffff 0%, #ffffff 38.67%, rgba(255, 255, 255, 0) 100%)',
                    width: '100px',
                    position: 'absolute',
                    display: `${arrows.left}`,
                    height: '100%',
                    userSelect: 'none',
                    cursor: 'pointer',
                    top:'0',
                    left: '0',
                    alignItems: 'center',
                }}
            >
                <img
                    style={{
                        transform: 'rotate(180deg)',
                        width: '12px',
                        height: '22px',
                        display: `flex`,
                    }}
                    src={arrow}
                    alt="arrow"
                />
            </div>
            <div
                onClick={() => setTranslate(translate - 10)}
                style={{
                    background: 'linear-gradient(to left, #ffffff 0%, #ffffff 38.67%, rgba(255, 255, 255, 0) 100%)',
                    width: '100px',
                    position: 'absolute',
                    display: `${arrows.right}`,
                    userSelect: 'none',
                    top:'0',
                    cursor: 'pointer',
                    height: '100%',
                    justifyContent: 'flex-end',
                    right: '0',
                    alignItems: 'center',
                }}
            >
                <img
                    style={{
                        width: '12px',
                        height: '22px',
                        display: `flex`,
                    }}
                    src={arrow}
                    alt="arrow"
                />
            </div>
        </div>
    );
};

export default InlineCalendar;