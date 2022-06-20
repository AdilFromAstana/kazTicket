import React from 'react';
import { Carousel, Row, Col } from 'antd';
import '../styles/Carusel.css'
import imgExample from '../image/imgExample.jpg'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const Carusel = () => {

    const carouselRef = React.createRef();

    const images = [
        {id: 0, src: imgExample, alt: 'Описание'},
        {id: 1, src: imgExample, alt: 'Описание'},
        {id: 2, src: imgExample, alt: 'Описание'},
        {id: 3, src: imgExample, alt: 'Описание'}
    ]

    const goTo = (slide) => {
        carouselRef.current.goTo(slide);
    };

    return (
        <div>
            <Carousel
                ref={carouselRef}
                className='carusel'
            >
                {images.map(afisha=>
                    <div key={afisha.id} className='anyAfishaWrapper'>
                        <img src={afisha.src} alt={afisha.alt} className='anyAfisha'/>
                        <LeftCircleOutlined onClick={()=>carouselRef.current.prev()} className='arrowLeft'/>
                        <RightCircleOutlined onClick={()=>carouselRef.current.next()} className='arrowRight' />
                    </div>
                )}
            </Carousel>
            <Row gutter={[16, 0]}>
                {images.map(image=>
                    <Col key={image.id} span={6}>
                        <img 
                            src={image.src} 
                            className='anyAfisha' 
                            onClick={()=>goTo(image.id)}
                        />
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default Carusel;