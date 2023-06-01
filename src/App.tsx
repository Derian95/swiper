// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Mousewheel } from "swiper";
function App() {

  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
        speed={2500}
      >
        
        <SwiperSlide>
          {({ isActive }) => (
            <div className={`${isActive? 'show2':''}`} style={{width:'100vw', height:'100vh', backgroundColor:'orange'}}>Current slide is {isActive ? 'actives' : 'not active'}
            
         <div className={`${isActive? 'show':''}`} style={{width:'100vw', height:'100vh'}}></div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default App
