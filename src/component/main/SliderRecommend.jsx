import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { IoPlayCircleSharp } from "react-icons/io5";


export default function SliderRecommend() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                loop={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide id='h25' className='card rounded-lg block relative bg-[url("https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/37/ce/03/37ce0358-84e6-ba7e-6ce3-5313229f3802/cover.jpg/486x486bb.png")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>Eyyub Yaqubov</Link>
                                <p className='underline text-sm text-white'>Unutdun</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h25' className='card rounded-lg block relative bg-[url("https://i.scdn.co/image/ab67616d0000b2734a5584795dc73860653a9a3e")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>One Direction</Link>
                                <p className='underline text-sm text-white'>One Way or Another</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h25' className='card rounded-lg block relative bg-[url("https://images.genius.com/66e5fceba3208f82a426c04e791b62cf.600x600x1.png")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>Kendrick Lamar</Link>
                                <p className='underline text-sm text-white'>Allright</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h25' className='card rounded-lg block relative bg-[url("https://cdn.iticket.az/event/artist/ZsRm9vi7RibGdpTRMoc7OxADhzR8uDld3XKe9Rvy.png")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>Orxan Zeynallı</Link>
                                <p className='underline text-sm text-white'>Sonunda Evdəyəm</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h25' className='card rounded-lg block relative bg-[url("https://img.jakpost.net/c/2020/03/31/2020_03_31_91307_1585623595._large.jpg")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>Dua Lipa</Link>
                                <p className='underline text-sm text-white'>One Kiss</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
