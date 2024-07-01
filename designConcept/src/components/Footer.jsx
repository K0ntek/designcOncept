import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

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
            name: 'home',
            link: 'home'
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
   <div className='w-full bg-zinc-950'>
        <h1 className=' font-montserrat font-[700] text-6xl tracking-wider py-10 ml-10 bg-gradient-to-r from-[#585858] to-[#242424]
                                inline-block text-transparent bg-clip-text'>Lorem ipsum dolor sit amet.</h1>
     <div className=' py-10 grid sm:grid-cols-3 gap-10 max-w-[1400px] px-10 mx-auto'>

            <div className=' text-white mx-auto'>
                <h1 className=' font-montserrat font-[500] text-4xl'>LOGO</h1>
                <p className=' font-inter text-[12px] text-[#ff9352]'>Lorem, ipsum dolor.</p>
            </div>

            <div className=' w-full'>
                <div className='w-fit mx-auto'>
                <h1 className=' font-montserrat text-center text-3xl font-[500] tracking-tight
                                bg-gradient-to-r from-[#ffffff] to-[#9b9b9b]
                                inline-block text-transparent bg-clip-text'>Follow us!</h1>

                <div className=' flex space-x-3 mt-3 mx-auto justify-center'>
                    {socials.map((socialElement, i)=>{
                        return(
                            <p className=' text-2xl text-white hover:text-[#c2703e] transition-all duration-150'>{socialElement.icon}</p>
                        )
                    })}
                </div>
                </div>
            </div>

            <div className=' w-full'>
                <div className='w-fit mx-auto'>
                <h1 className=' font-montserrat text-center text-3xl font-[500] tracking-tight
                                bg-gradient-to-r from-[#ffffff] to-[#9b9b9b]
                                inline-block text-transparent bg-clip-text'>Menu</h1>

                <div className=' mt-3 gap-2 grid grid-cols-3 mx-auto justify-center'>
                    {navElements.map((element, i)=>{
                        return(
                            <p className=' text-sm text-white hover:text-[#c2703e] text-center transition-all duration-150'>{element.name}</p>
                        )
                    })}
                </div>
                </div>
            </div>

    </div>
    <div className=' bg-black'>
        <p className=' font-montserrat text-white text-[8px] text-center py-2'>designed by JAKUB KONTEK</p>
    </div>
   </div>
  )
}

export default Footer