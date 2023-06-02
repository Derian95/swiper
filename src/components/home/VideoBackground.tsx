import { motion } from 'framer-motion';
import video from '../../assets/aa.mp4'

export const VideoBackground = () => {
  return (
    <div className='h-full w-full'>
      

               
                <video
					// style={{ scale }}
					autoPlay
					loop
					muted
					playsInline
					onLoad={() => {
						console.log('estoy listo')
					}}
					onLoadStart={() => {
						console.log('estoy cargandome')
					}}
					className='h-screen w-screen object-cover  z-0 absolute '>
					<source src={video} type='video/mp4' />
				</video>
                <div className=' opacity-40 bg-black w-full h-full absolute'></div>

                <div className='ml-60  h-full flex flex-col justify-center items-start absolute -translate-y-28 translate-x-24'>
                    <motion.p initial={{opacity:0, translateX:200}} transition={{duration:1.5}} whileInView={{opacity:1, translateX:0}} className='text-white lg:text-[180px] font-semibold'>GLADCON</motion.p>
                    <motion.p initial={{opacity:0, translateX:400}} whileInView={{opacity:1, translateX:0}} transition={{duration:1.5, delay:.5}} className='text-white lg:text-[180px] font-semibold '>GROUP</motion.p>
                </div>
				<div className='fixed bottom-10 right-72 flex gap-5'>
        <button className='bg-transparent border border-[#ff863c] text-white px-8 py-3 rounded-lg text-lg'>Empezar</button>
        </div>

    </div>
    )
};
