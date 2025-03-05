import React from 'react'
import Image from 'next/image'
const Herobanner = () => {
    return (
        <section className='w-full relative py-[100px] overflow-hidden max-w-[1920px] bg-white mx-auto min-h-[632px] flex flex-col justify-center'>
            <div className="absolute w-full h-full inset-0 block">
                <video controls muted autoplay  loop  allowfullscreen playsinline preload="auto" className='block w-full h-full object-cover'>
                    <source src="/videos/authentic8.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className='max-w-[712px] ml-0'>
                    <h1 className='text-[62px] font-[500] leading-[1.2] tracking-normal mb-[15px] text-white'>Digital investigations without the risk</h1>
                    <h4 className='font-[500] leading-[1.13] tracking-normal text-white max-w-[640px] text-[30px]'>Stay isolated from malware and anonymous to prying eyes on the surface, deep and dark web with Authentic8's Silo for Research.</h4>
                    <div className='mt-[32px]'>
                        <a className='px-[40px] py-[16px] mt-0 text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white no-underline ' href="">
                            <span className='inline-block text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>Free trial</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herobanner;
