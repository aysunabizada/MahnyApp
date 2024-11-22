import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { IoPlayCircleSharp } from "react-icons/io5";


export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Autoplay]}
                loop={true}
                speed={3500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
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
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper my-8"
            >
                <SwiperSlide id='h35' className='card rounded-lg block relative bg-[url("https://i.ebayimg.com/images/g/kYwAAOSwImRmzG9R/s-l1200.jpg")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>The Weekend</Link>
                                <p className='underline text-sm text-white'>Heartless</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h35' className='card rounded-lg block relative bg-[url("https://cdn-images.dzcdn.net/images/cover/cf979d162bdd9430a742be2ba588c7f6/0x1900-000000-80-0-0.jpg")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>The Weekend</Link>
                                <p className='underline text-sm text-white'>Heartless</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h35' className='card rounded-lg block relative bg-[url("https://media.pitchfork.com/photos/5ac234a8ad9bce569e0acf13/1:1/w_1024%2Cc_limit/My%2520Dear%2520Melancholy%2C.jpg")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>The Weekend</Link>
                                <p className='underline text-sm text-white'>Heartless</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h35' className='card rounded-lg block relative bg-[url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ea8e5125647899.61de0127430db.jpg")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>The Weekend</Link>
                                <p className='underline text-sm text-white'>Heartless</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide id='h35' className='card rounded-lg block relative bg-[url("https://lakecentralnews.com/wp-content/uploads/2020/02/Shah1-900x900.jpg")] bg-cover bg-center'>
                    <Link>
                        <div className="album-hover bg-black/50 bottom-0 w-full opacity-0 translate-y-5 flex justify-between p-4 items-center absolute z-10 transition-all duration-500">
                            <div>
                                <Link className='font-bold text-white hover:text-[#950101] transition-all duration-300'>The Weekend</Link>
                                <p className='underline text-sm text-white'>Heartless</p>
                            </div>
                            <IoPlayCircleSharp className='text-white text-5xl hover:scale-110 transition-all duration-300' />
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
