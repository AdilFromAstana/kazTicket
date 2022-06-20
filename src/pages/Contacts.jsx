import phoneIcon from '../image/phoneIcon.svg';
import whatsAppIcon from '../image/whatsAppIcon.svg';
import locationIcon from '../image/locationIcon.svg';
import documentIcon from '../image/documentIcon.svg';
import React from 'react';

const Contacts = () => {
    return (
        <div 
            className='h100'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#FFF'
            }}
        >
            <h1
                style={{
                    fontWeight: '700',
                    fontSize: '50px'
                }}
            >  
                Контакты и реквизиты
            </h1>
            <div
                style={{
                    background: '#F7F7F7',
                    padding: '60px 50px'
                }}
            >
                {/* ТЕЛЕФОНЫ */}
                <div style={{
                    display: 'flex'
                }}>
                    <div style={{marginRight: '60px'}}><img src={phoneIcon} alt="phoneIcon" style={{marginRight: '15px'}}/> <span>+7 707 927 75 62</span></div>
                    <div><img src={whatsAppIcon} alt="whatsAppIcon" style={{marginRight: '15px'}}/> <span>+7 707 929 75 62</span></div>
                </div>
                {/* АДРЕС */}
                <div style={{margin: '35px 0px'}}>
                    <img src={locationIcon} alt="locationIcon" style={{marginRight: '15px'}}/> Республика Казахстан, 010000, г. Нур-Султан,  Проспект Рақымжан Қошқарбаев, здание 27
                </div>
                {/* ДАННЫЕ О КОМПАНИИ */}
                <div
                    style={{display:'flex'}}
                >
                    <div style={{marginRight: '60px'}}><img src={documentIcon} alt="documentIcon" style={{marginRight: '15px'}}/> ТОО «KAZTICKET.KZ»</div>
                    <div 
                        style={{
                            display:'flex',
                            opacity: '60%'
                        }}
                    >
                        <span style={{marginRight: '30px'}}>Расчетный счет № KZ3096503F0010868398.</span>
                        <span style={{marginRight: '30px'}}>в АО«ForteBank»</span>
                        <span style={{marginRight: '30px'}}>БИК IRTYKZKA</span>
                        <span style={{marginRight: '30px'}}>БИН 220140006265</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;