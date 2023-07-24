import ProjectCards from './ProjectCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Carousel = () => {

    const cards = [
        {
            title:"Todo MERN",
            src:"/todo-mern.jpg",
            description:"Todo Application built using MERN [MongoDB, Express.js, React.js, Node.js] ,It uses jsonwebtoken for Authentication and Authorization. crypto-js is used for AES & SHA3 encyption. AES - for encrypting & decrypting data sent through API calls. SHA3 for hashing password in database."
        },
        {
            title:"Favourite Books App",
            src:"/favBook.jpg",
            description:"Favourite Books Keeping app is a React application. Where we  can add, update, delete our favorite books. "
        },
        {
            title:"Real-time Chat App",
            src:"/chatApp.jpg",
            description:"A real-time Chat application built using Vanilla Node.js, Socket.io and MongoDB. Allows users to create and join chat-rooms."
        },
        {
            title:"Keeper App",
            src:"/keeper.jpg",
            description:"A simple Notes keeping React application inspired by Google's Keep app."
        },
        {
            title:"Blog Site",
            src:"/blogSite.jpg",
            description:"Blog-site is a node application for composing blogs. This project was built to learn EJS and routing in express. "
        },
        {
            title:"NullNet",
            src:"/nullNet.jpg",
            description:"An Android application for chat and file sharing using. Built using java and xml. The App uses WiFi-P2P to Search, Connect and exchange data with another Android device."
        }
    ]

    return<>
        <Swiper
            className=''
            modules={[EffectCoverflow, Pagination, Navigation]}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={
                {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable:true
                }
            }
            centeredSlides={true}
            effect={'coverflow'}
            grabCursor={true}
            loop={false}
            slidesPerView={'auto'}
            coverflowEffect={ 
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier:2.5
                }
            }
        >

            {
                cards.map((item)=>{
                    return (
                        <SwiperSlide>
                            <ProjectCards data={item}/>
                        </SwiperSlide>
                    )
                })
            }

            
            <div className='container'>
                <div className='swiper-button-prev'>
                    <button></button>
                </div>
                <div className='swiper-button-next'>
                    <button></button>
                </div>
            </div>
            <div className='swiper-pagination'>

            </div>
        </Swiper>
    </>
}

export default Carousel;