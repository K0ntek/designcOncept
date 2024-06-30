import React from 'react'

const Contact = () => {
  return (
    <div className=' grid grid-cols-2 gap-10'>

         <div>
         <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>CONTACT</h2>
                <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6'>CONTACT US!</h1>

                <form action="">
                    <div className=' space-y-5'>
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

                            <button className=' py-2 px-10 ml-8 bg-zinc-950 text-white rounded-lg font-[600]'>SUBMIT</button>
                    </div>
                </form>
         </div>

        <div className=' mx-auto'>
            <div className=' relative top-[50%] translate-y-[-50%] space-y-3 font-montserrat font-[500]'>
                <p>examplemail@gmail.com</p>
                <p>123 456 789</p>
            </div>
        </div>

    </div>
  )
}

export default Contact