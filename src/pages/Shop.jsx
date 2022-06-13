import { Calendar, Carousel, Col, Layout, Row, Typography } from 'antd';
import React from 'react';
import EventList from '../components/EventList';
import 'moment/locale/ru';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { EventTypesActionCreator } from '../store/reducers/eventTypes/eventTypesActionCreator';
import Test from './Test';

const Shop = () => {

    const { t } = useTranslation();
    const { Title, Link } = Typography;
    const dispatch = useDispatch();

    const onPanelChange = (value) => {
        console.log(value.format('LL'));
    };

    const sortEvents = (eventType) => {
        dispatch(EventTypesActionCreator.sortEvents(eventType))
    }

    return (
        <Layout style={{background: '#FFFFFF'}}> 
            <Row justify='space-between' className='eventTypes'>
                {t('eventTypes', { returnObjects: true }).map(eventType=>
                    <Link key={eventType} onClick={()=>sortEvents(eventType)}>
                        {eventType}
                    </Link>
                )}
            </Row>
            <br/>
            <div style={{fontSize: '50px', fontWeight: '700'}}>Афиша событий в Нур-Султане</div>
            <Test/>
            <Carousel 
                autoplay
                style={{
                    width: '1180px',
                    height: '400px'
                }}
            >
                <div>
                    <img src='https://image.tmdb.org/t/p/original/uTNLQuDxwX6C5EpHPGGLICXSbXC.jpg' className='carucel'/>
                </div>
                <div>
                    <img src='https://www.culture.ru/storage/images/fba21575-6b7e-5b76-8096-33f895fadaef' className='carucel'/>
                </div>
                <div>
                    <img src='https://gkzbashkortostan.ru/wp-content/uploads/2021/09/23102021_lebedinoe-ozero1920x1080.png' className='carucel'/>
                </div>
                <div>
                    <img src='https://static.titlovi.com/img/0202/202766-tt1703048.jpg' className='carucel'/>
                </div>
            </Carousel>
            <br/>
            <Row>
                <EventList style={{margin: '0px'}}/>
            </Row>
        </Layout>
    );
};

export default Shop;