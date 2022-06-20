import React from 'react';
import {Image, Button, Row, Col} from 'antd';
import '../styles/AnotherSiteLinks.css'

const AnotherSiteLinks = () => {

    const eventInfo = [
        {
            title: 'Билеты в авкапарк Оазис',
            description: 'Перейдите на наш сайт для покупки билетов в авкопарк',
            link: 'https://oasis.kazticket.kz/ru',
            img: 'https://sun9-20.userapi.com/impf/c639627/v639627258/5dcca/ObEteVuDs3M.jpg?size=604x340&quality=96&sign=bb73c273bd858b83baeb0699f45fb580&type=album'
        },
        {
            title: 'Билеты в Extreme-park',
            description: 'Перейдите на наш сайт для покупки билетов Extreme-park',
            link: 'https://park.kazticket.kz/ru',
            img: 'https://sun9-20.userapi.com/impf/c639627/v639627258/5dcca/ObEteVuDs3M.jpg?size=604x340&quality=96&sign=bb73c273bd858b83baeb0699f45fb580&type=album'
        }
    ]

    return (
        <Row   
            gutter={[24, 24]}
            justify='space-between'
            className='linksRow'
        >
            {eventInfo.map(event=>
                <Col
                    className='linksCol'
                    span={12}
                >
                    <img
                        className='img'
                        src={event.img}
                        alt={event.img}
                    />
                    {/*ОПИСАНИЕ СОБЫТИЯ*/}
                    <div 
                        style={{
                            background: '#F7F7F7',
                            padding: '30px'
                        }}
                    >
                        {/*TITLE*/}
                        <div className='title'>
                            {event.title}
                        </div>
                        {/*DISCRIPTION*/}
                        <div className='description'>
                            {event.description}
                        </div>
                        {/*PRICE AND LINK*/}
                        <div className='linkAndPrice'>
                            {/*LINK*/}
                            <Button
                                target='_blank'
                                href={event.link}
                                type="primary"
                                size='large'
                                className='button'
                            >
                                <span>
                                    Перейти на сайт
                                </span>
                            </Button>
                            {/*PRICE*/}
                            <div className='price'>
                                от 10 000 т
                            </div>
                        </div>
                    </div>
                </Col>
            )}
            
        </Row>
    );
};

export default AnotherSiteLinks;