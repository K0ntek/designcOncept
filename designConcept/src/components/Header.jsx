import React from 'react'

const Header = () => {
  return (
    <div className=' grid grid-cols-2 min-h-screen gap-5 pt-[70px]'>
        <div>
            <div className=' text-start relative top-[50%] translate-y-[-50%]'>
                <h2 className=' font-montserrat text-xl font-[600] tracking-tight text-[#dadada]'>SUBHEADING TEXT</h2>
                <h1 className=' font-montserrat text-6xl font-[700] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
                <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi sunt voluptatibus nobis aut perspiciatis, delectus eaque rerum necessitatibus vitae.</p>

                <div className="flex space-x-5 ml-4">
                    <button className=' border-[2px] border-[#111] bg-[#111] text-white py-2 px-5 font-montserrat font-[500] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>LEARN MORE</button>
                    <button className=' border-[2px] border-[#111] bg-transparent text-black py-2 px-5 font-montserrat font-[500] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>SEE OUR PRICING</button>
                </div>
            </div>
        </div>

        <div>
        <div className='w-full space-y-1 relative top-[50%] translate-y-[-50%]'>
            <div className=' w-1/3 mx-auto bg-black h-[2px]'></div>
            <div className=' w-full  aspect-square bg-black rounded-[40px]'></div>
            <div className=' w-1/3 mx-auto bg-black h-[2px]'></div>
        </div>
        </div>

    </div>
  )
}

export default Header