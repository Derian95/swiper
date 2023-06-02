import { motion } from 'framer-motion'
import image from '../assets/about1.jpg'

export const About = () => {
	return (
		<div className='h-screen w-full bg-[#FFF7F4]  flex flex-col justify-center items-start gap-10 py-24  pl-10 pr-10 lg:pl-80 lg:pr-28'> 
			<div className=' min-w-h-2/4 w-full h-4/6'>
				<motion.p initial={{opacity:0, translateX:-100}} whileInView={{opacity:1, translateX:0}} transition={{duration:1}} className='title text-start text-[#313131] font-semibold text-4xl mb-14'>Sobre nosotros</motion.p>
                <div className='w-4/6 h-3/4 mb-10 relative'>
				    <img src={image} alt='text' className='h-full w-full object-cover absolute' />
					<motion.div initial={{width:'100%'}} whileInView={{width:0}} transition={{duration:1}} className='h-full w-full bg-[#FFF7F4]  absolute right-0'></motion.div>
                </div>
			</div>
			<div className='w-full  flex gap-14 h-2/4'>
				<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:.5}} className='flex items-start flex-col'>
					<p className='text-[#313131] font-medium text-[30px] mb-5'>Mision</p>
					<p className='text-[#777777] text-start max-w-md  font-light leading-8 text-base'>
						Ser la empresa de entretenimiento más sólida y organizada del país.
					</p>
				</motion.div>
				<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:1}} className='flex items-start  flex-col '>
					<p className='text-[#313131] text-[30px] mb-5 font-medium'>Vision</p>
					<p  className='text-[#777777] font-light text-start max-w-lg  leading-8 text-base'>Que los clientes logren la mejor experiencia de entretenimiento.
						Brindar a nuestros colaboradores un medio para su desarrollo y
						bienestar. Incrementar el valor de la Corporación.
					</p>
				</motion.div>
			</div>
		</div>
	)
}
