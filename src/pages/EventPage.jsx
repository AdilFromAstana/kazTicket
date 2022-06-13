import { Button, Col, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../http/events';
import { Typography } from 'antd';
import { CalendarTwoTone, CreditCardTwoTone, EnvironmentTwoTone } from '@ant-design/icons';

const EventPage = () => {

    const {id} = useParams();
    const { Title, Text } = Typography;
    const [event, setEvent] = useState({});

    useEffect(()=>{
       getOneEvent(id).then(data=>setEvent(data))
    }, [])

    return (
        <div style={{margin: '0px', padding: '0px 10px'}}>
            <Row gutter={[40, 0]}  style={{margin: '0px', marginTop: '20px', padding: '0px', flexWrap: 'wrap'}} >

                <Col lg={8} xs={24} style={{margin: '0px', padding: '0px'}}>
                    <Image
                        preview={false}
                        width={'100%'}
                        src={event.poster}
                    />
                </Col>
                <Col lg={16} xs={24} style={{margin: '0px', padding: '0px 50px'}}>
                    <Title level={2}>{event.title}</Title>
                    <CalendarTwoTone /> <Text strong>Время проведения:</Text> <Text>{event.data}</Text><br/>
                    <EnvironmentTwoTone /> <Text strong>Место проведения:</Text> <Text>{event.place}</Text><br/>
                    <CreditCardTwoTone /> <Text strong>Стоимость билета:</Text> <Text>{event.price}</Text><br/>
                    <br/>
                    <Button type="primary" size= 'large'>
                        Купить билет
                    </Button>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Title level={3}>
                        ПОДРОБНЕЕ О МЕРОПРИЯТИИ
                    </Title>
                    <Text>
                        1947 год. В суде штата Мэн слушается дело вице-президента крупного банка Энди Дюфрейна (Тим Роббинс), который обвиняется в убийстве жены и её любовника. Дюфрейн не признаёт своей вины, но не может вспомнить, что делал в ночь убийства, так как был пьян. Незадолго до убийства Дюфрейн со скандалом уличил жену в связи с другим мужчиной, но на просьбу жены о разводе ответил отказом. В тот же вечер жена ушла из дома, намереваясь встретиться с любовником, а Дюфрейн, зайдя в бар и употребив изрядное количество алкоголя, отправился к дому, в который поехала его жена, но там никого не оказалось, и он решил дождаться парочку на месте; с собой у него был револьвер. Через какое-то время он протрезвел и, выбросив пистолет в реку, уехал домой, а утром служанка нашла в этом доме тела его супруги и её любовника; они были застрелены из пистолета. Пистолет, который Дюфрейн выбросил в реку, найти не удалось (если бы он был найден, можно было бы определить, что любовники были застрелены не из него); другие косвенные улики также указывают на виновность обвиняемого.
                    </Text>
                </Col>
            </Row>
        </div>
    );
};

export default EventPage;