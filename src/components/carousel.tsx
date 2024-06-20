// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function CarouselHome() {


    return (
        <div className='carousel-home'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    425: {
                        slidesPerView: 1,

                    },
                    768: {
                        slidesPerView: 2,

                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="card__image">
                            <img src="./images/avatar.png" alt="" />
                        </div>
                        <div className="card__body">
                            <div className="stars">
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                            </div>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod”
                            </p>
                            <h6>John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="card__image">
                            <img src="./images/avatar.png" alt="" />
                        </div>
                        <div className="card__body">
                            <div className="stars">
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                            </div>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod”
                            </p>
                            <h6>John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="card__image">
                            <img src="./images/avatar.png" alt="" />
                        </div>
                        <div className="card__body">
                            <div className="stars">
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                            </div>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod”
                            </p>
                            <h6>John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="card__image">
                            <img src="./images/avatar.png" alt="" />
                        </div>
                        <div className="card__body">
                            <div className="stars">
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                            </div>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod”
                            </p>
                            <h6>John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="card__image">
                            <img src="./images/avatar.png" alt="" />
                        </div>
                        <div className="card__body">
                            <div className="stars">
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                                <span className="testimonial__icon">
                                    <i className="uil uil-star"></i></span>
                            </div>
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod”
                            </p>
                            <h6>John Dee 32, Bromo</h6>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}