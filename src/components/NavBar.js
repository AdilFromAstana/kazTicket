import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Col, Input, Layout, Row, Select, Space, Typography } from 'antd';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { languageInCookie } from '../i18n';
import { MailOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';

const NavBar = () => {

    const { Search } = Input;
    const { Option } = Select;
    const navigate = useNavigate()
    const { t, i18n } = useTranslation();
    const { Text } = Typography;

    const onSearch = (value) => console.log(value);

    const handleChange = (value) => {
        i18n.changeLanguage(`${value}`)
        document.cookie = `userLang=${value}; path=/;`
    };

    return (
        <Layout.Header className='header'>
            <Row justify="space-between">

                {/*КНОПКА ПОИСКА*/}
                <Col 
                    className='burgerMenu' 
                    xs={4}
                >
                    <SearchOutlined />
                </Col>
                {/*------------------------------------------------*/}

                {/*TITLE KAZ-TICKET*/}
                <Col 
                    lg={4} 
                >
                    <h1
                        style={{color: 'red', cursor:'pointer'}}
                        className='navbarLogo'
                        onClick={()=>navigate(SHOP_ROUTE)}
                    >
                        KAZ TICKET
                    </h1>
                </Col>
                {/*------------------------------------------------*/}

                {/*INPUT*/}
                <Col 
                    lg={12} 
                    className='headerSearch'
                >
                    <Search 
                        style={{paddingTop: '16px'}}
                        placeholder={t('searchInput.placeholder')}
                        enterButton={t('searchInput.button')}
                        onSearch={onSearch}
                    />
                </Col>
                {/*------------------------------------------------*/}

                {/*ВЫБОР ЯЗЫКА*/}
                <Col 
                    className='headerSearch'
                    lg={2}
                >
                    <Select defaultValue={languageInCookie} onChange={handleChange}>
                        <Option value="ru">Русский</Option>
                        <Option value="en">English</Option>
                        <Option value="kz">Қазақша</Option>
                    </Select>
                </Col>
                {/*------------------------------------------------*/}

                {/*КНОПКИ ВХОДА В АККАУНТ*/}
                <Col 
                    lg={2} 
                    className='headerSearch'
                >
                    <Button
                        onClick={()=>navigate(LOGIN_ROUTE)}
                    >   
                        {t('auth.log in')}
                    </Button>
                </Col>
                {/*------------------------------------------------*/}

                {/*МЕНЮ БУРГЕР*/}
                <Col 
                    className='burgerMenu' 
                    xs={4}
                >
                    <MenuOutlined />
                </Col>
                {/*------------------------------------------------*/}

            </Row>

            {/*МЕНЮ БУРГЕР*/}
                <div 
                    className='menu' 
                    //style={{display: 'none'}}
                >
                    
                </div>
                {/*------------------------------------------------*/}

            {/*ВЫБОР ГОРОДА*/}
            <Select
                size='large'
                defaultValue="lucy"
                onChange={handleChange}
                >
                    {t('citiesList', { returnObjects: true }).map(city=>
                        <Option key={city} value={city}>{city}</Option>
                    )}
            </Select>
            {/*------------------------------------------------*/}

            <Space className='events'>
                {t('eventTypes', { returnObjects: true }).map(event => 
                    <Text key={event} underline>{event}</Text>
                )}
            </Space>
        </Layout.Header>
    );
};

export default NavBar;