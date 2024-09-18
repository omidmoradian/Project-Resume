import React from 'react';
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const data = [
    {
        avatar: AVT1,
        name: 'Anita',
        review: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' +
            ' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
            ' consequat. Duis aute irure dolor in reprehenderit' +
            ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
            ' Excepteur sint occaecat cupidatat non proident,' +
            ' sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        avatar: AVT2,
        name: 'ALI',
        review: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' +
            ' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
            ' consequat. Duis aute irure dolor in reprehenderit' +
            ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
            ' Excepteur sint occaecat cupidatat non proident,' +
            ' sunt in culpa qui officia deserunt mollit anim id est laborum.',


    },
    {
        avatar: AVT3,
        name: 'hossein',
        review: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' +
            ' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
            ' consequat. Duis aute irure dolor in reprehenderit' +
            ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
            ' Excepteur sint occaecat cupidatat non proident,' +
            ' sunt in culpa qui officia deserunt mollit anim id est laborum.',


    },
    {
        avatar: AVT4,
        name: 'Zahra',
        review: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' +
            ' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
            ' consequat. Duis aute irure dolor in reprehenderit' +
            ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
            ' Excepteur sint occaecat cupidatat non proident,' +
            ' sunt in culpa qui officia deserunt mollit anim id est laborum.',


    }
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className={'container testimonials__container'}
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}
            >
                {data.map(({avatar, name, review}, index) => {
                    return (

                        <SwiperSlide key={index} className={'testimonial'}>
                            <div className={'client__avatar'}>
                                <img src={avatar} alt='Avatar1'/>
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                                {review}
                            </small>
                        </SwiperSlide>
                    )

                })}
            </Swiper>

        </section>
    );
};

export default Testimonials;
