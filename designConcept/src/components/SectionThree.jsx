import React from 'react'

const SectionThree = () => {
  return (
    <div className=' grid grid-cols-2 gap-10 my-10'>

         <div>
            <div className=' text-start relative top-[50%] translate-y-[-50%]'>
                <h2 className=' font-montserrat text-xl font-[600] tracking-tight text-[#dadada]'>SUBHEADING TEXT</h2>
                <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
                <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe voluptates numquam a qui, sit quasi iusto, magnam enim maxime accusamus voluptatum commodi quae quos doloribus harum quibusdam. Quas officiis sequi omnis, doloribus saepe illo possimus vitae eaque, autem assumenda unde recusandae sapiente, et distinctio inventore dolor reiciendis aspernatur minus.</p>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-5 '>
            <div className='w-full aspect-[9/16] bg-zinc-950 rounded-[40px] mt-10'>

            </div>
            <div className=" space-y-5">
                <div className=' w-full aspect-square bg-zinc-950 rounded-[40px]'></div>
                <div className=' w-full aspect-[9/11] bg-zinc-950 rounded-[40px]'></div>
            </div>
        </div>

    </div>
  )
}

export default SectionThree