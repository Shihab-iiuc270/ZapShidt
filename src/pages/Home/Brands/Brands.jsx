import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from "../../../assets/brands/amazon.png"
import amazon_vector from "../../../assets/brands/amazon_vector.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import start_people from "../../../assets/brands/start_people.png"
import { Autoplay } from 'swiper/modules';

const brandLoops = [amazon,casio,moonstar,amazon_vector,star,start_people,randstad,moonstar]

const Brands = () => {
    return (
        <div className="mt-12 ">
            <div className="text-center mb-6">
                <h1 className='font-bold text-secondary  sm:text-2xl'>We've helped thousands of sales teams</h1>
            </div>
        <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        >
            {
                brandLoops.map((logo,index) =>
        <SwiperSlide key={index}><img src={logo} alt=''/></SwiperSlide>

                )
            }
        </Swiper>
        </div>
    );
};

export default Brands;