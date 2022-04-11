import React from 'react'
import Image from "next/image"

function Banner() {
    return (
        <div>
            <div className='relative h-[300px] sm:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
                <Image
                    src="https://links.papareact.com/0fm"
                    alt=""
                    layout="fill"
                    objectFit='cover'
                    priority="true"
                />
                <div className='absolute top-1/2 w-full text-center'>
                    <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                    <button className='text-purple-500 bg-white px-10 py-4 shadow-sm rounded-full font-bold my-3 hover:scale-95 hover:shadow-md transition duration-200 ' >I'm flexible</button>
                </div>
                


            </div>
        </div>
    )
}

export default Banner