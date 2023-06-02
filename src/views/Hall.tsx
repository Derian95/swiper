import patter from '../assets/patter.svg'
export const Hall = () => {
	return (
		<div className='h-screen w-full bg-[#FFF7F4]  flex flex-col justify-center items-start gap-8 py-24  px-64  relative'>
            <img src={patter} className='w-40 h-40 absolute ' alt="" />
			<p className='title text-start text-[#313131] font-semibold text-[44px] mb-5'>
				Nuestras salas
			</p>

			<div className='w-full  flex gap-5 h-2/4'>
				<div className='flex items-start flex-col'>
					<p className='text-[#313131] text-[30px] mb-5'>Mision</p>
					<p className='text-[#888888] text-start  font-light leading-7 text-lg'>
						Ser la empresa de entretenimiento más sólida y organizada del país.
					</p>
				</div>
				<div className='flex items-start  flex-col '>
					<p className='text-[#313131] text-[30px] mb-5'>Vision</p>
					<p className='text-[#888888] font-light text-start   leading-7 text-lg'>
						Que los clientes logren la mejor experiencia de entretenimiento.
						Brindar a nuestros colaboradores un medio para su desarrollo y
						bienestar. Incrementar el valor de la Corporación.
					</p>
				</div>
			</div>
		</div>
	)
}
