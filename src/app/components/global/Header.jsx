import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full relative max-w-[1920px] fixed top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_5px_5px_2px_rgba(66,75,104,0.13)] z-99">
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className="relative max-w-[158px] w-full h-[23px]">
                        <a href="/" className='absolute left-0 top-0 w-full h-full text-transparent text-0 opacity-0 z-2'></a>
                        <Image
                            src="/images/authentic8-black-logo.svg"
                            alt="man-image"
                            width={158}
                            height={23}
                            className='w-full max-w-full align-top border-0 h-full object-contain'
                        />
                    </div>

                   <nav className='flex justify-between items-center flex-[0_0_calc(100%-158px)] max-w-[calc(100%-158px)]'>
                    <ul className='flex space-x-[30px] pl-[57px]'>
                    <li className='py-[32px] position-[inherit] list-none'>
                        <a className='text-[#151831] text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/" >Products</a>
                    </li>
                    <li className='py-[32px] position-[inherit] list-none'>
                        <a className='text-[#151831] text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/" >Use Cases</a>
                    </li>
                    <li className='py-[32px] position-[inherit] list-none'>
                        <a className='text-[#151831] text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/" >Partners</a>
                    </li>
                    <li className='py-[32px] position-[inherit] list-none'>
                        <a className='text-[#151831] text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/" >Resources</a>
                    </li>
                    <li className='py-[32px] position-[inherit] list-none'>
                        <a className='text-[#151831] text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/">Company</a>
                    </li>
                    </ul>

                    <div className="btn-wrapper">
                        <span></span>
                        <a className='px-[13px] py-[10px] border-[1px] mr-[17px] text-[14px] border-[1px] border-[#68be62] bg-transparent mt-0 text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2  rounded-[5px] overflow-hidden align-middle text-white' href="">
                            <span className='text-[#68be62] leading-[1.23] text-[14px] left-0 inline-block relative font-sans uppercase transition-all duration-300 ease-in-out'> Start a Trial</span>
                        </a>
                        <a className='px-[13px] py-[10px] mt-0 text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white' href="">
                            <span>Book a demo</span>
                        </a>
                    </div>

                   </nav>
                </div> 
            </div>
        </header>
    )
}

export default Header;
