import { AimOutlined, CalendarOutlined, WalletOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllEvents } from '../http/events';
import { EVENT_ROUTE } from '../utils/consts';
import { EventTypesActionCreator } from '../store/reducers/eventTypes/eventTypesActionCreator';

const EventList = () => {

    const { Meta } = Card;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {events} = useSelector(state=>state.events);

    console.log(events)

    useEffect(()=>{
        dispatch(EventTypesActionCreator.sortEvents());
    }, [])

    return (
        <Row gutter={[24, 16]} style={{margin: '0px', padding: '0px'}}>
            {events.map(e=>
                <Col
                    onClick={()=>navigate(EVENT_ROUTE + '/' + e.id)}
                    key={e.id}
                    lg={8}
                    xs={12}
                    style={{ marginBottom: '10px' }}
                >
                    <Card
                        size='small'
                        hoverable
                        cover={<img alt="example" src={e.poster} height={250}/>}
                    >
                        <Meta title={e.title}/><br/>
                        <CalendarOutlined /> {e.data}<br/>
                        <WalletOutlined /> {e.price}<br/>
                        <AimOutlined /> {e.place}
                    </Card>
                </Col>    
            )}
        </Row>
    );
};

export default EventList;