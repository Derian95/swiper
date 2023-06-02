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
import { useEffect, useState } from 'react'
import { Decorator } from './components/ui/Decorator'

import logo from './assets/logo.svg'
import fb from './assets/facebook-square logo.svg'
import ims from './assets/instagram logo.svg'
import tw from './assets/twitter logo.svg'
import Hamburger from 'hamburger-react'

function App() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isOpen, setOpen] = useState(false)
	const handleSlideTransitionEnd = (swiper: any) => {
		const newIndex = swiper.activeIndex
		setActiveIndex(newIndex)
	}

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return (
				'<span class=" ' +
				className +
				' ">' +
				'<p >' +
				(index == 0
					? 'Inicio'
					: index == 1
					? 'Nosotros'
					: index == 2
					? 'Salas'
					: index == 3
					? 'Club'
					: index == 4
					? 'Servicios'
					: '') +
				'</p>' +
				'</span>'
			)
		},
	}

	useEffect(() => {
		const bullets = document.querySelectorAll('.swiper-pagination-bullet')

		bullets.forEach((bullet) => {
			if (activeIndex != 0) {
				bullet.classList.add('black')
			} else {
				bullet.classList.remove('black')
			}
		})

		console.log(activeIndex)
	}, [activeIndex])

	return (
		<>
			<SideBar />
			<Decorator />
			<img
				src={logo}
				alt=''
				className='max-w-fit absolute w-16 z-20 left-2 top-4 mix-blend-multiply '
			/>
			<div className='fixed top-5 right-5 z-20'>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					color={`${activeIndex == 0 ? 'white' : '#313131'}`}
				/>
        <div className='fixed top-5 left-72 flex gap-5'>
        <img src={fb} className='w-6' alt="" />
        <img src={ims} className='w-7' alt="" />
        <img src={tw} className='w-9' alt="" />
        </div>
      
				<div className='fixed bottom-20 right-14 z-20' >
					<div className='scroll-downs' >
						<div className='mousey' >
							<div className='scroller' ></div>
						</div>
					</div>
				</div>
			</div>
			<Swiper
				onSlideChange={handleSlideTransitionEnd}
				direction={'vertical'}
				pagination={pagination}
        freeMode={true}
        
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
				<SwiperSlide>Slide 8</SwiperSlide>
			</Swiper>
		</>
	)
}

export default App
