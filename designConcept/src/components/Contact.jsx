import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import { FaClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-10' id='contact'>

         <div className='w-full mx-auto max-w-[650px]'>
         <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>CONTACT</h2>
                <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6'>GET IN TOUCH.</h1>

                <form action="">
                    <div className=' relative space-y-5 mx-auto mb-10'>
                            <div>
                                <p className=' ml-6 font-montserrat text-sm font-[600]'>full name</p>
                                <input required type="text" name="" id="" className=' w-full p-2 rounded-lg bg-[#eaeaea] focus:outline-none font-montserrat font-[500]'/>
                            </div>

                            <div>
                                <p className=' ml-6 font-montserrat text-sm font-[600]'>e-mail</p>
                                <input required type="text" name="" id="" className=' w-full p-2 rounded-lg bg-[#eaeaea] focus:outline-none font-montserrat font-[500]'/>
                            </div>

                            <div>
                                <p className=' ml-6 font-montserrat text-sm font-[600]'>message</p>
                                <textarea required name="" id="" cols="30" rows="10" className=' w-full p-2 rounded-lg bg-[#eaeaea] focus:outline-none font-montserrat font-[500]'></textarea>
                            </div>

                            <button className=' absolute right-5 py-2 px-5 tracking-widest bg-zinc-950 text-white rounded-lg font-[500]'>SEND</button>
                    </div>
                </form>
         </div>

        <div className=' max-w-[700px] lg:max-w-full mx-auto bg-[#efefef] rounded-[40px] p-10'>
        <div className='relative top-[50%] translate-y-[-50%] mx-auto max-w-[500px]'>
            <div className=' space-y-3 font-montserrat font-[500]'>
            <h1 className=' font-montserrat text-4xl font-[500] mt-1 mb-6'>Let's build an awesome project together!</h1>

                    <div>
                        <div className="flex space-x-2 ">
                            <MdEmail className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1'>Email us</p>
                        </div>
                        <p className=' ml-3'>examplemail@gmail.com</p>
                    </div>
                    
                   <div>
                        <div className="flex space-x-2">
                            <FaPhoneAlt className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1'>Call us</p>
                        </div>
                        <p className=' ml-3'> +48 123 456 789</p>
                   </div>

                   <div>
                        <div className="flex space-x-2">
                            <TiPin className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1'>Find us </p>
                        </div>
                        <p className=' ml-3'> +48 123 456 789</p>
                   </div>

                   <div>
                        <div className="flex space-x-2">
                            <FaClock className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1'>Visit us</p>
                        </div>
                        <p className=' ml-3'> +48 123 456 789</p>
                   </div>

                {/* <img className=' aspect-[25/9] rounded-[40px] object-cover' src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

            </div>
        </div>
        </div>

    </div>
  )
}

export default Contact