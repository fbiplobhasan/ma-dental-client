import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import Treatment1 from '../../../assets/01.jpg'
import Treatment2 from '../../../assets/02.jpg'
import Treatment4 from '../../../assets/04.jpg'
import Treatment5 from '../../../assets/05.jpg'
import Treatment6 from '../../../assets/06.jpg'
import Treatment7 from '../../../assets/07.jpg'
import Treatment8 from '../../../assets/08.jpg'

const CategorySwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img className="h-[500px] w-full" src={Treatment1} />
          <p className="absolute top-90 right-50 font-bold">Teeth Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment2} />
          <p className="absolute top-90 right-50 font-bold">Tooth Extraction</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment4} />
          <p className="absolute top-90 right-50 font-bold">Dental Filling</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment5} />
          <p className="absolute top-90 right-50 font-bold">Root Canel</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment6} />
          <p className="absolute top-90 right-50 font-bold">Braces & Orthodontics</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment7} />
          <p className="absolute top-90 right-50 font-bold">Dental Crown & Bridge</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment8} />
          <p className="absolute top-90 right-50 font-bold">Teeth Whitening</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={Treatment1} />
          <p className="absolute top-90 right-50 font-bold">Dental Implants</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CategorySwiper;
