import { Calendar, Carousel, Col, Layout, Row, Space, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EventList from '../components/EventList';
import 'moment/locale/ru';

const Shop = () => {

    const { Title } = Typography;

    const onPanelChange = (value) => {
        console.log(value.format('LL'));
    };

    return (
        <Layout>
            <br/>
            <Carousel autoplay>
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
            <Title style={{display: 'flex', justifyContent: 'center'}}>Популярные</Title>
            <br/>
            <Row justify='space-between'>
                <Col lg={15} xs={24}>
                    <EventList style={{margin: '0px'}}/>
                </Col>
                <Col lg={8} className='calendar'>
                    <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onSelect={onPanelChange}/>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};

export default Shop;