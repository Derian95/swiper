// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Pagination, Mousewheel } from 'swiper'
import { VideoBackground } from './components/home/VideoBackground'
import { About } from './views/About'
import { SideBar } from './components/ui/SideBar'
import { Hall } from './views/Hall'
import { Club } from './views/Club'


function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index:number, className:string) {
      return '<span class=" left-0 ' + className + ' text-white">' + (index==0 ? 'Inicio':index==1?'Nosotros':index==2? 'Salas': index==3? 'Club':index==4? 'Servicios':index==5? 'Anuncios':'') + "</span>";
    },
  };

  return (
		<>
			<SideBar />
			<Swiper
				direction={'vertical'}
				pagination={pagination}
				mousewheel={true}
				modules={[Pagination, Mousewheel]}
				className='mySwiper'
				speed={1200}>
				<SwiperSlide>
					<VideoBackground />
				</SwiperSlide>
				<SwiperSlide>
					<About />
				</SwiperSlide>
				<SwiperSlide>
					<Hall />
				</SwiperSlide>
				<SwiperSlide>
					<Club />
				</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	)
}

export default App
