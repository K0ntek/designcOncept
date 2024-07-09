import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import gsap from 'gsap'

const Header = () => {

    useEffect(()=>{

        let imageLine = document.querySelectorAll('.imageLine')

        gsap.fromTo(imageLine, {x:'-20%'}, {x:'20%', duration:4, stagger:1, yoyo:true, repeat:-1, ease: 'power1'})

        gsap.fromTo('.descElement', {y:'50px', opacity:0}, {y:'0', opacity:1, duration:.5, stagger:.2,})
        gsap.fromTo('.headerElement', {opacity:0}, {opacity:1, duration:.5, stagger:.2,})
        gsap.fromTo('.imageWrapper', {x:'50px', opacity:0}, {x:'0', opacity:1, duration:.5, delay:.8})
    },[])

  return (
    <div className=' grid lg:grid-cols-2 min-h-screen gap-10 py-[70px]' id='home'>
        <div>
            <div className=' text-center lg:text-start relative top-[50%] translate-y-[-50%]'>
                <h2 className=' headerElement font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>SUBHEADING TEXT</h2>

                <h1 className=' headerElement font-montserrat text-6xl font-[700] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
                <p className=' headerElement font-inter font-[500] text-xl w-3/4 text-justify mb-8 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi sunt voluptatibus nobis aut perspiciatis, delectus eaque rerum necessitatibus vitae.</p>

                <div className=" headerElement flex space-x-5 ml-4">
                    <Link to='about' spy={true} smooth={true}><button className=' border-[2px] border-[#111] bg-[#111] text-white py-2 px-5 font-montserrat font-[500] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>LEARN MORE</button></Link>
                    <Link to='pricing' spy={true} smooth={true}><button className=' border-[2px] border-[#ff9352] bg-transparent text-[#ff9352] py-2 px-5 font-montserrat font-[500] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>SEE OUR PRICING</button></Link>
                </div>

            <div className=' w-4/5 grid sm:grid-cols-3 gap-5 mt-6'>
                <div className='descElement bg-[rgb(240,240,240)] max-w-[250px] ml-10 sm:ml-0 sm:max-w-[300px] text-black px-4 py-3 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/30'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600]'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='descElement bg-zinc-950 max-w-[250px] ml-10 sm:ml-0 sm:max-w-[300px] px-4 py-3 rounded-3xl text-white shadow-[0px_0px_10px_0px] shadow-black/30'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600]'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='descElement bg-[#ebebeb] max-w-[250px] ml-10 sm:ml-0 sm:max-w-[300px] px-4 py-3 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/30'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600]'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            </div>
        </div>

        <div>
        <div className=' imageWrapper max-w-[500px] lg:max-w-full mx-auto lg:w-full space-y-2 relative top-[50%] translate-y-[-50%]'>
            <div className=' imageLine w-1/3 mx-auto bg-black h-[2px]'></div>
            {/* <div className=' w-full  aspect-square bg-black rounded-[40px]'></div> */}
            <div className=' w-full aspect-[12/14]'> <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="headingImage"  className='h-full object-cover rounded-[40px] shadow-[0px_0px_20px_0px] shadow-black/50 '/></div>
            <div className=' imageLine w-1/3 mx-auto bg-black h-[2px]'></div>
        </div>
        </div>

    </div>
  )
}

export default Header