import React from 'react'

const About = () => {
  return (
    <div className=' aboutSection w-full shadow-[0px_0px_20px_0px] shadow-black/50 px-10 min-h-[500px] py-[80px] rounded-[40px] mb-10'>
        <div className=' text-white text-center rounded-[40px] py-10'>
        <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#fff] to-[#a3a3a3]
                                inline-block text-transparent bg-clip-text'>SUBHEADING TEXT</h2>
            <h1 className=' font-montserrat text-5xl font-[500] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
            <p className=' mx-auto font-inter font-[500] text-xl w-3/4 text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet impedit repellat tempore illum? Alias fugit expedita voluptate dolores iusto eius nisi beatae iure dignissimos ullam repellat, tenetur sint animi?</p>
        </div>
    </div>
  )
}

export default About