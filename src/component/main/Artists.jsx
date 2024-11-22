import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Artists() {
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
                        slidesPerView: 2,
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
                <SwiperSlide>
                    <Link className="rounded-md block hover:bg-[#191919] p-6 text-center w-[220px]">
                        <img className="mx-auto object-cover h-40 w-40 rounded-full xl:h-56 xl:w-56" src='https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg' alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 mt-5 text-lg font-medium leading-6">
                                <h3 className="text-white">Zayn Malik</h3>
                                <p className="text-gray-400">Artist</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="rounded-md block hover:bg-[#191919] p-6 text-center w-[220px]">
                        <img className="mx-auto object-cover h-40 w-40 rounded-full xl:h-56 xl:w-56" src='https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg' alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 mt-5 text-lg font-medium leading-6">
                                <h3 className="text-white">Zayn Malik</h3>
                                <p className="text-gray-400">Artist</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="rounded-md block hover:bg-[#191919] p-6 text-center w-[220px]">
                        <img className="mx-auto object-cover h-40 w-40 rounded-full xl:h-56 xl:w-56" src='https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg' alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 mt-5 text-lg font-medium leading-6">
                                <h3 className="text-white">Zayn Malik</h3>
                                <p className="text-gray-400">Artist</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="rounded-md block hover:bg-[#191919] p-6 text-center w-[220px]">
                        <img className="mx-auto object-cover h-40 w-40 rounded-full xl:h-56 xl:w-56" src='https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg' alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 mt-5 text-lg font-medium leading-6">
                                <h3 className="text-white">Zayn Malik</h3>
                                <p className="text-gray-400">Artist</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="rounded-md block hover:bg-[#191919] p-6 text-center w-[220px]">
                        <img className="mx-auto object-cover h-40 w-40 rounded-full xl:h-56 xl:w-56" src='https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg' alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 mt-5 text-lg font-medium leading-6">
                                <h3 className="text-white">Zayn Malik</h3>
                                <p className="text-gray-400">Artist</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link className="rounded-md block hover:bg-[#191919] p-6 text-center w-[220px]">
                        <img className="mx-auto object-cover h-40 w-40 rounded-full xl:h-56 xl:w-56" src='https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg' alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 mt-5 text-lg font-medium leading-6">
                                <h3 className="text-white">Zayn Malik</h3>
                                <p className="text-gray-400">Artist</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
