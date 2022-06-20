import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { CONTACTS_ROUTE } from '../utils/consts';
import '../styles/FooterNav.css';


const FooterNav = () => {

    const pages = [
        {title: 'Договор оферты', link: ''},
        {title: 'Оформить возврат', link: ''},
        {title: 'Безопасность онлайн-платежей', link: ''},
        {title: 'Контакты', link: ''},
    ]

    const navigate = useNavigate();

    return (
        <Footer className='layout'>
            <div className='footer'>
                {pages.map(page=>
                    <div
                        className='footerLink'
                        onClick={()=>navigate(CONTACTS_ROUTE)}
                    >
                        {page.title}
                    </div>
                )}
            </div>
        </Footer>
    );
};

export default FooterNav;