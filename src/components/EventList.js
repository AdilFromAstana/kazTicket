import { Col, Image, Row } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EVENT_ROUTE } from '../utils/consts';
import { EventTypesActionCreator } from '../store/reducers/eventTypes/eventTypesActionCreator';

const EventList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {events} = useSelector(state=>state.events);

    useEffect(()=>{
        dispatch(EventTypesActionCreator.sortEvents());
    }, [])

    return (
        <Row gutter={[24, 24]}>
            {events.map(e=>
                <Col
                    onClick={()=>navigate(EVENT_ROUTE + '/' + e.id)}
                    key={e.id}
                    xl={8}
                    sm={12}
                    xs={24}
                >
                    <div style={{position: 'relative'}}>
                        <Image
                            style={{
                                borderRadius: '10px',
                            }}
                            preview={false}
                            src='https://image.tmdb.org/t/p/original/uTNLQuDxwX6C5EpHPGGLICXSbXC.jpg'
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '28px',
                            border: '1px solid white',
                            width: '110px',
                            height: '30px',
                            background: '#FFFFFF',
                            borderRadius: '5px',
                            fontWeight: '600',
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            от 10000тг
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                fontWeight: '700',
                                fontSize: '20px'
                            }}
                        >
                            БИ 2
                        </div>
                        <div style={{
                            fontWeight: '600',
                            fontSize: '14px'
                        }}>
                            <span>15 июля, 20:00</span>
                             ---- 
                            <span>КСК Экспресс</span>
                        </div>
                    </div>
                </Col>    
            )}
        </Row>
    );
};

export default EventList;