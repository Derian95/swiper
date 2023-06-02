import video from '../../assets/video.mp4'

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
                <div className=' opacity-50 bg-black w-full h-full absolute'></div>

                <div className='ml-60  h-full flex flex-col justify-center items-start absolute'>
                    <p className='text-white text-9xl font-bold'>GLADCON</p>
                    <p className='text-white text-9xl font-bold ml-48'>GROUP</p>
                </div>


    </div>
    )
};
