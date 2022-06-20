import { Layout } from 'antd';
import React from 'react';
import EventList from '../components/EventList';
import 'moment/locale/ru';
import InlineCalendar from './InlineCalendar';
import AnotherSiteLinks from '../components/AnotherSiteLinks';
import '../styles/Shop.css'
import Carusel from '../components/Carusel';

const Shop = () => {

    return (
        <Layout style={{background: '#FFFFFF'}}> 
            <AnotherSiteLinks/>
            <h1 className='afishaTitle'>
                Афиша событий в Нур-Султане
            </h1>
            <InlineCalendar/>
            <Carusel/>
            <br/>
            <EventList style={{margin: '0px'}}/>
        </Layout>
    );
};

export default Shop;