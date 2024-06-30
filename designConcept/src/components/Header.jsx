import React from 'react'

const Header = () => {
  return (
    <div className=' grid lg:grid-cols-2 min-h-screen gap-10 py-[70px]'>
        <div>
            <div className=' text-start relative top-[50%] translate-y-[-50%]'>
                <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>SUBHEADING TEXT</h2>

                <h1 className=' font-montserrat text-6xl font-[700] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
                <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi sunt voluptatibus nobis aut perspiciatis, delectus eaque rerum necessitatibus vitae.</p>

                <div className="flex space-x-5 ml-4">
                    <button className=' border-[2px] border-[#111] bg-[#111] text-white py-2 px-5 font-montserrat font-[500] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>LEARN MORE</button>
                    <button className=' border-[2px] border-[#ff9352] bg-transparent text-[#ff9352] py-2 px-5 font-montserrat font-[500] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>SEE OUR PRICING</button>
                </div>

            <div className=' w-3/4 grid grid-cols-3 gap-5 mt-6'>
                <div className=' bg-[#ff9352] px-4 py-3 rounded-3xl'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600]'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className=' bg-zinc-950 px-4 py-3 rounded-3xl text-white'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600]'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className=' bg-[#ebebeb] px-4 py-3 rounded-3xl'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600]'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            </div>
        </div>

        <div>
        <div className=' w-1/2 mx-auto lg:w-full space-y-2 relative top-[50%] translate-y-[-50%]'>
            <div className=' w-1/3 mx-auto bg-black h-[2px]'></div>
            {/* <div className=' w-full  aspect-square bg-black rounded-[40px]'></div> */}
            <div className=' w-full aspect-[12/14]'> <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="headingImage"  className='h-full object-cover rounded-[40px] shadow-[0px_0px_20px_0px] shadow-black/50 '/></div>
            <div className=' w-1/3 mx-auto bg-black h-[2px]'></div>
        </div>
        </div>

    </div>
  )
}

export default Header