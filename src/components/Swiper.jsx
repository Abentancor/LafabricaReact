// import Swiper core and required modules
import { Pagination,  Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderCard from './SliderCard';

export default () => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={0}
    modules={[Pagination, Autoplay]}
    pagination={{
    clickable: true,
    }}
    autoplay={{delay:5000 }}
    rewind={true}
    className={`flex justify-between flex-row mt-12 mb-12`}    
    >
      <SwiperSlide>
      <SliderCard
        imagen='src/assets/90642370_509369909747469_1393391283732940476_n.jpg'
        alt='La Fábrica'
        descripcion='Diseñamos y fabricamos todo tipo de muebles y objetos.
        Cocinas, Baños, placares, vestidores, locales comerciales y mucho mas!!'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
        imagen={'https://loremflickr.com/g/320/240/furniture'}
        alt='muebles'
        descripcion='Diseñamos y fabricamos todo tipo de muebles y objetos.
        Cocinas, Baños, placares, vestidores, locales comerciales y mucho mas!!'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          imagen={'https://loremflickr.com/g/320/240/floor'}
          alt='imagen'
          descripcion='instalación de pisos de vinilicos.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          imagen={'https://loremflickr.com/g/320/240/curtains'}
          alt='imagen'
          descripcion='instalación cortinas roller.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          imagen={'https://loremflickr.com/g/320/240/floor'}
          alt='imagen'
          descripcion='instalación de pisos de vinilicos.'
        />
      </SwiperSlide>
    </Swiper>
  );
};