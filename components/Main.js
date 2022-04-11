import next from 'next'
import React from 'react'
import Image from "next/image"

function Main() {
    return (
        <main>
            <section className='max-w-7xl px-8 sm:px-16   mx-auto'>
                <div className='py-10 font-semibold text-2xl lg:text-3xl'>Discover Airbnb Experiences</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 relative  '>

                    <div className=' '>
                        <Image
                            src="/air.png"
                            alt=""
                            width={580}
                            height={580}
                            objectFit='cover'
                            objectPosition='left'
                            className='rounded-lg'
                        />
                        <div className='absolute  left-0 top-0 ml-24 mt-20 md:right-2/4 text-white font-semibold text-5xl'><p>Things to do</p><p> on your trip</p></div>
                        <button className='bg-white hover:bg-gray-200 rounded-xl shadow-md py-3 px-5 absolute left-0 top-0 ml-24 mt-56 '>Expiriences</button>
                    </div>

                    <div className=''>
                        <Image
                            src="/air2.png"
                            alt=""
                            width={580}
                            height={580}
                            objectFit='cover'
                            objectPosition='right'
                            className='rounded-lg'
                        />
                        <div className='absolute ml-24 mt-20 bottom-1/3 left-0 lg:mr-14 md:left-2/4 md:top-0 md:ml-24 md:mt-20 text-white font-semibold text-5xl '><p>Things to do</p> <p>from home</p></div>
                        <button className='bg-white hover:bg-gray-200 ml-24 mt-56  rounded-xl shadow-md py-3 px-5 absolute bottom-1/6  left-0 md:left-2/4 md:top-0 md:ml-24 md:mt-56  '>Online Expiriences</button>
                    </div>
                </div>
            </section>
            
            <div className='max-w-7xl px-8 sm:px-16 py-20  mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='  w-8/12'>
                        <div className='text-5xl font-semibold'><p>Shop Airbnb</p><p>gift cards</p></div>
                        <button className='bg-gray-800 px-6 py-3 mt-5 cursor-pointer hover:bg-black rounded-lg text-white'>Learn more</button>
                    </div>
                    <Image
                        src="/444.png"
                        alt=""
                        width={300}
                        height={200}
                        objectFit='fill'
                        layout="intrinsic"
                    />
                </div>
            </div>
            
            <div className='xl:max-w-7xl px-8 sm:px-16   mx-auto mb-10 '>
                <div className='relative h-[300px] sm:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]  '>
                    
                    <div className='rounded-lg  '>
                        <Image
                            src="/55.png"
                            alt=""
                            layout="fill"
                            objectFit='cover'
                            className='rounded-lg'
                        />
                    </div>
                    <div className='absolute left-20 bottom-20 '>
                        <div className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl   text-white font-semibold '>
                            <div>Questions</div>
                            <div> about</div>
                            <div> hosting?</div>
                            
                        </div>
                        <button className='   text-black bg-white px-5 py-2 shadow-sm rounded-lg  my-3 hover:bg-gray-200 hover:shadow-md transition duration-200 ' >Ask a Superhost</button>
                    </div>
                </div>
            </div>


        </main>
    )
}

export default Main