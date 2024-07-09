import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {

    const socials = [
        { 
            icon: <FaFacebookF />,
            link: ''
        },
        { 
            icon: <FaInstagram />,
            link: ''
        },
        { 
            icon: <FaTiktok />,
            link: ''
        },
        { 
            icon: <FaXTwitter />,
            link: ''
        },
    ]

    const navElements = [
        {
            name: 'home',
            link: 'home'
        },
        {
            name: 'about',
            link: 'about'
        },
        {
            name: 'offer',
            link: 'offer'
        },
        {
            name: 'pricing',
            link: 'pricing'
        },
        {
            name: 'contact',
            link: 'contact'
        },
    ]

  return (
   <div className='w-full'>
        {/* <h1 className=' font-montserrat font-[700] text-2xl tracking-wider ml-10 bg-gradient-to-r from-[#585858] to-[#242424]
                                inline-block text-transparent bg-clip-text'>Lorem ipsum dolor sit amet.</h1> */}
     <div className=' py-5 pb-7 md:flex justify-between space-y-4 md:space-y-0 max-w-[1400px] px-10 mx-auto'>

            <div className=' text-black'>
                <p className=' relative top-[6px] font-[600] font-montserrat text-black text-[12px] text-center'> © 2024 UI <span className=' font-[700]'><a href="https://jakubkontekcv.onrender.com">JAKUB KONTEK</a></span> - All rights reserved</p>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' gap-2 flex mx-auto justify-center'>
                    {navElements.map((element, i)=>{
                        return(
                            <Link to={element.link} spy={true} smooth={true}><p className='cursor-pointer text-lg text-black font-[500] hover:text-[#c2703e] text-center transition-all duration-150'>{element.name}</p></Link>
                        )
                    })}
                </div>
                </div>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' flex space-x-3 mx-auto justify-center'>
                    {socials.map((socialElement, i)=>{
                        return(
                            <p key={i} className=' text-2xl text-black hover:text-[#c2703e] transition-all duration-150'>{socialElement.icon}</p>
                        )
                    })}
                </div>
                </div>
            </div>

    </div>
   </div>
  )
}

export default Footer