import React from 'react'

const Navbar = () => {

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
        // {
        //     name: 'contact',
        //     link: 'contact'
        // },
    ]

  return (
    <div className=' fixed top-0 left-0 w-full py-5 bg-white z-[99]'>
        <div className=' absolute top-1 left-5 font-[500] font-montserrat'>
            <h1 className=' text-4xl'>LOGO</h1>
            <p className=' text-[11px]'>Lorem, ipsum dolor.</p>
        </div>
       <div>
       <ul className=' flex space-x-4 mx-auto justify-center'>
       {navElements.map((element, i)=>{
            return(
                <li key={i} className='... cursor-pointer text-black text-md font-montserrat font-[600]'>{element.name}</li>
            )
        })}
       </ul>
       <div className=' relative'>
        <button className=' text-md font-montserrat absolute top-[50%] translate-y-[-80%] right-5 bg-[#111] text-white py-2 px-4 rounded-lg'>CONTACT US</button>
       </div>
       </div>
    </div>
  )
}

export default Navbar