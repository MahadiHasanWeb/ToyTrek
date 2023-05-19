import { Swiper, SwiperSlide } from "swiper/react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 6500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='relative grid grid-cols-1 items-center w-full rounded-xl h-full bg-cover bg-center bg-no-repeat mb-8 md:h-[550px] bg-[url(https://i.imgur.com/GJth9C1.jpg)] p-4 '>
                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-7 p-5 md:pl-12 md:w-1/2'>
                            <h2 className='text-5xl md:text-6xl font-bold'>Unleash the Power of Play with<span className=' text-[#57C5B6]'>ToyTrek</span></h2>
                            <p>Welcome to ToyTrek: Unleash Your Imagination, Embark on Epic Adventures! Dive into a world where action figures come to life and play knows no bounds. Fuel your playtime with our thrilling collection of meticulously crafted action figures. From fearless heroes to formidable villains, ToyTrek brings you endless opportunities to conquer new frontiers and create unforgettable stories.</p>
                            <div>
                                <Link to='/allToys'><button className="button bg-[#57C5B6] flex items-center gap-3 mb-8">Explore Now <FaExternalLinkAlt /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative grid grid-cols-1 items-center w-full rounded-xl h-full bg-cover bg-center bg-no-repeat mb-8 md:h-[550px] bg-[url(https://i.imgur.com/ch1YfhY.jpg)] p-4 '>
                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-7 p-5 md:pl-12 md:w-1/2'>
                            <h2 className='text-5xl md:text-6xl font-bold'>Limitless Play Possibilities with<span className=' text-[#57C5B6]'>ToyTrek</span></h2>
                            <p>Welcome to ToyTrek: Unleash Your Imagination, Embark on Epic Adventures! Dive into a world where action figures come to life and play knows no bounds. Fuel your playtime with our thrilling collection of meticulously crafted action figures. From fearless heroes to formidable villains, ToyTrek brings you endless opportunities to conquer new frontiers and create unforgettable stories.</p>
                            <div>
                                <Link to='/allToys'><button className="button bg-[#57C5B6] flex items-center gap-3 mb-8">Explore Now <FaExternalLinkAlt /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;