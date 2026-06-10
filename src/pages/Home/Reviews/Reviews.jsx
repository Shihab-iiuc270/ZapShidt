import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewImg from "../../../assets/customer-top.png"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
          <section className="py-16 px-4 mt-4 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
            <div className="flex items-center justify-center mb-6">
                <img src={reviewImg} alt="" className="mx-auto" />
            </div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What our customers are sayings
        </h2>
        
        
        {/* Description */}
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>
      <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
    </section>
        
        
    );
};

export default Reviews;