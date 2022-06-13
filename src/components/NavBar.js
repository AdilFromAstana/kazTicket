import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Input, Layout, Menu, Row, Select } from 'antd';
import { LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { languageInCookie } from '../i18n';
import { AppstoreOutlined, CloseOutlined, EnvironmentOutlined, LoginOutlined, MailOutlined, MenuOutlined, SearchOutlined, SettingOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { EventTypesActionCreator } from '../store/reducers/eventTypes/eventTypesActionCreator';
import kazTicketLogo from '../image/Vector.svg'
import phone from '../image/phone.svg'

const NavBar = () => {

    const { Header } = Layout;
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
        ? getItem(<div onClick={()=>[ navigate(PROFILE_ROUTE), setMenuActive(false)]}>{t('auth.myProfile')}</div>, 'sub4', <UserOutlined />) 
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
        <Header className='header' 
            style={{
                backgroundColor: '#FFFFFF',
                padding: '0px',
                height: '40px'
            }}
        >
            <Row 
                justify="space-between" 
                style={{
                }}
            >

                {/*КНОПКА ПОИСКА - MOBILE*/}
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
                        <img src={kazTicketLogo}/>
                    </h1>
                </Col>
                {/*------------------------------------------------*/}

                {/*INPUT*/}
                <Col 
                    lg={12} 
                    className='headerSearch'
                >
                    <Search 
                        placeholder={t('searchInput.placeholder')}
                        enterButton={t('searchInput.button')}
                        onSearch={onSearch}
                    />
                </Col>
                {/*------------------------------------------------*/}

                {/*ТЕЛЕФОН - DESKTOP*/}
                <Col 
                    style={{
                        display: 'flex',

                    }}
                >
                    <img
                        src={phone}
                        style={{
                            width: '16px'
                        }}
                    />
                    <a
                        style={{
                            fontSize:'20px',
                            fontWeight: '600'
                        }}
                    >
                        +7 707 927 75 62
                    </a>
                </Col>
                {/*------------------------------------------------*/}

                {/*КНОПКИ ВХОДА В АККАУНТ*/}
                <Col 
                    className='headerSearch'
                >
                    <Button
                        type="primary"
                        onClick={
                            ()=>navigate(isAuth ? PROFILE_ROUTE : LOGIN_ROUTE)
                        }
                        style={{
                            width: '120px',
                            height: '40px',
                            borderRadius: '10px',
                            fontSize: '15px',
                            fontWeight: '700',
                        }}
                    >   
                        {isAuth ? 'Аккаунт' : t('auth.log in')}
                    </Button>
                </Col>
                {/*------------------------------------------------*/}

                {/*ВЫБОР ЯЗЫКА - DESKTOP*/}
                <Col 
                    className='headerSearch'
                >
                    <Select 
                        defaultValue={languageInCookie} 
                        onChange={handleChange} 
                        style={{width: '30px', height: '30px'}}
                    >
                        <Option value="ru">RU</Option>
                        <Option value="en">EN</Option>
                        <Option value="kz">KZ</Option>
                    </Select>
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
                    items={menuActive ? items : ''}
                />
            {/*------------------------------------------------*/}            

        </Header>
    );
};

export default NavBar;