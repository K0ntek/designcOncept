import React from 'react'

const SectionThree = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-10 my-10 z-20'>

         <div>
            <div className=' text-start relative top-[50%] translate-y-[-50%]'>
            <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>SUBHEADING TEXT</h2>
                <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
                <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe voluptates numquam a qui, sit quasi iusto, magnam enim maxime accusamus voluptatum commodi quae quos doloribus harum quibusdam. Quas officiis sequi omnis, doloribus saepe illo possimus vitae eaque, autem assumenda unde recusandae sapiente, et distinctio inventore dolor reiciendis aspernatur minus.</p>
            </div>
        </div>

        <div className=' w-1/2 lg:w-full mx-auto grid grid-cols-2 gap-5 '>

              <div className='w-full aspect-[9/16] overflow-hidden bg-zinc-950 rounded-[40px] mt-10'>
                <img src="https://images.unsplash.com/photo-1603783032764-c434d583b10f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
              </div>

            <div className=" space-y-5">

                <div className=' w-full aspect-square overflow-hidden bg-zinc-950 rounded-[40px]'>
                  <img src="https://plus.unsplash.com/premium_photo-1700860838212-10c44393f9e5?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                </div>

                <div className=' w-full aspect-[9/11] overflow-hidden bg-zinc-950 rounded-[40px]'>
                  <img src="https://images.unsplash.com/photo-1605334727599-2bc9d256a61e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                </div>
            
            </div>
        </div>

    </div>
  )
}

export default SectionThree