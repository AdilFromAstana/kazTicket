import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, Input, Layout, Menu, Select, Row, Col } from 'antd';
import { LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { languageInCookie } from '../i18n';
import { AppstoreOutlined, EnvironmentOutlined, LoginOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { EventTypesActionCreator } from '../store/reducers/eventTypes/eventTypesActionCreator';
import kazTicketLogo from '../image/Vector.svg';
import searchIcon from '../image/searchIcon.svg';
import phoneIcon from '../image/phoneIcon.svg';
import burgerIcon from '../image/burgerIcon.svg';
import '../styles/Navbar.css';

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
      
    //ЭЛЕМЕНТЫ МЕНЮШКИ ДЛЯ ТЕЛЕФОНА - MOBILE
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

    //ФУНКЦИЯ ОСТАВЛЯЕТ ОТКРЫТЫМ ТОЛЬКО ОДНО ВЫПАДАЮЩЕЕ ОКНО МЕНЮШКИ - MOBILE
    const onOpenChange = (keys) => {
        let latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    //
    const menu = (
        <Menu
          items={[
            {
              key: 'kz',
              label: (
                <div onClick={()=>handleChange('kz')}>
                    KZ
                </div>
              ),
            },
            {
              key: 'en',
              label: (
                <div onClick={()=>handleChange('en')}>
                    EN
                </div>
              ),
            },
            {
              key: 'ru',
              label: (
                <div onClick={()=>handleChange('ru')}>
                    RU
                </div>
              ),
            },
          ]}
        />
      );

    return (
        <Header className='header' >
            <Row align='middle' justify='space-between'>
                {/*ЛОГОТИП KAZ-TICKET*/}
                <Col>
                    <img 
                        src={kazTicketLogo} 
                        className='menuLogo' 
                        onClick={()=>navigate(SHOP_ROUTE)}
                    />
                </Col>

                {/*ПОИСК - DESKTOP*/}
                <Col xl={9} className='searchInputCol'>
                    <Search 
                        className='searchInput'
                        placeholder={t('searchInput.placeholder')}
                        //enterButton={t('searchInput.button')}
                        onSearch={onSearch}
                    />
                </Col>

                <Col xl={9} lg={6} sm={10} xs={8} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <img src={searchIcon} alt='searchIcon' className='searchIcon'/>
                    
                    {/*НОМЕР ТЕЛЕФОНА - DESKTOP*/}
                    <div className='contact'>
                        <img
                            src={phoneIcon}
                            className='phoneIcon'
                        />
                        <span
                            className='phoneNumber'
                        >
                            +7 707 927 75 62
                        </span>
                    </div>

                {/*КНОПКА ВХОДА - DESKTOP*/}
                    <Button
                        type="primary"
                        onClick={
                            ()=>navigate(isAuth ? PROFILE_ROUTE : LOGIN_ROUTE)
                        }
                        className='login'
                    >   
                        {isAuth ? 'Аккаунт' : t('auth.log in')}
                    </Button>

                {/*ВЫБОР ЯЗЫКА - DESKTOP*/}
                    <Dropdown
                        trigger={['click']}
                        overlay={menu}
                        placement="bottomLeft"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className='selectLanguage'
                        >
                            {languageInCookie.toLocaleUpperCase() || 'RU'}
                        </Button>
                    </Dropdown>

                    <img src={searchIcon} alt='searchIcon' className='searchIconMobile'/>

                    <img src={phoneIcon} alt='phoneIcon' className='onlyPhoneIcon'/>

                    <img src={burgerIcon} alt='burgerIcon' className='burgerIcon'/>
                </Col>
                {/*------------------------------------------------*/}

                {/*МЕНЮ БУРГЕР*
                <Col 
                    className='burgerMenu' 
                >
                    <span onClick={()=>setMenuActive(!menuActive)}>
                        {menuActive ? <CloseOutlined /> : <MenuOutlined/>}
                    </span>
                </Col>
                ------------------------------------------------*/

            /*МЕНЮ БУРГЕР ОТКРЫТЫЙ
                <Menu
                    className={menuActive ? 'menuActive' : 'menu'}
                    mode="inline"
                    theme='dark'
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={menuActive ? items : ''}
                />
            ------------------------------------------------*/}            
            </Row>
        </Header>
    );
};

export default NavBar;