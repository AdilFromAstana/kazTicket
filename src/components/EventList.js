import { AimOutlined, CalendarOutlined, WalletOutlined } from '@ant-design/icons';
import { Card, Col, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
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
        <Row gutter={[16, 16]}>
            {events.map(e=>
                <Col
                    onClick={()=>navigate(EVENT_ROUTE + '/' + e.id)}
                    key={e.id}
                    lg={8}
                    xs={12}
                >
                    <Image
                        style={{
                            borderRadius: '10px',
                        }}
                        preview={false}
                        src='https://image.tmdb.org/t/p/original/uTNLQuDxwX6C5EpHPGGLICXSbXC.jpg'
                    />
                    <div style={{
                        position: 'absolute'
                    }}>
                        D
                    </div>
                </Col>    
            )}
        </Row>
    );
};

export default EventList;