import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Input, Layout, Menu, Row, Select } from 'antd';
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { languageInCookie } from '../i18n';
import { AppstoreOutlined, CloseOutlined, EnvironmentOutlined, LoginOutlined, MailOutlined, MenuOutlined, SearchOutlined, SettingOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { EventTypesActionCreator } from '../store/reducers/eventTypes/eventTypesActionCreator';

const NavBar = () => {

    const {isAuth} = useSelector(state=>state.auth);
    const { Search } = Input;
    const { Option } = Select;
    const navigate = useNavigate()
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const onSearch = (value) => console.log(value);

    const handleChange = (value) => {
        i18n.changeLanguage(`${value}`)
        document.cookie = `userLang=${value}; path=/;`
    };

    const [menuActive, setMenuActive] = useState(false);

    function getItem(label, key, icon, children, type) {
        return {
            label,
            key,
            icon,
            children,
            type,
        };
    };
      
    const items = [
        getItem(t('menu.selectLanguage'), 'sub1', <TranslationOutlined />, [
            getItem(<div onClick={()=>[ setMenuActive(false), handleChange('ru')]}>Русский</div>, 'ru'),
            getItem(<div onClick={()=>[ setMenuActive(false), handleChange('en')]}>English</div>, 'en'),
        ]),
        getItem(t('menu.selectEventTypes'), 'sub2', <AppstoreOutlined />, 
            t('eventTypes', { returnObjects: true }).map(event => 
                getItem(<div onClick={()=>[setMenuActive(false), dispatch(EventTypesActionCreator.sortEvents(event))]}>{event}</div>, event)
            )
        ),
        getItem(t('menu.selectCity'), 'sub3', <EnvironmentOutlined />, 
            t('citiesList', { returnObjects: true }).map(city => 
                getItem(<div onClick={()=>setMenuActive(false)}>{city}</div>, city)
            )
        ),
        isAuth 
        ? getItem(<div onClick={()=>[ navigate(BASKET_ROUTE), setMenuActive(false)]}>{t('auth.myProfile')}</div>, 'sub4', <UserOutlined />) 
        : getItem(<div onClick={()=>[ navigate(LOGIN_ROUTE), setMenuActive(false)]}>{t('auth.log in')}</div>, 'sub5', <LoginOutlined />),
    ];

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    const [openKeys, setOpenKeys] = useState([]);

    const onOpenChange = (keys) => {
        let latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
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

                {/*ВЫБОР ЯЗЫКА - DESKTOP*/}
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
                    <span onClick={()=>setMenuActive(!menuActive)}>
                        {menuActive ? <CloseOutlined /> : <MenuOutlined/>}
                    </span>
                </Col>
                {/*------------------------------------------------*/}

            </Row>

            {/*МЕНЮ БУРГЕР ОТКРЫТЫЙ*/}
                <Menu
                    className={menuActive ? 'menuActive' : 'menu'}
                    mode="inline"
                    theme='dark'
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                />
            {/*------------------------------------------------*/}

            {/*ВЫБОР ГОРОДА
            <Select
                size='large'
                defaultValue="Nur-Sultan"
                onChange={handleChange}
                >
                    {t('citiesList', { returnObjects: true }).map(city=>
                        <Option key={city} value={city}>{city}</Option>
                    )}
            </Select>
            ------------------------------------------------
            */}

        </Layout.Header>
    );
};

export default NavBar;