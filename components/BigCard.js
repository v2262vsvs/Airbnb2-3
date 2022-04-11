import React from 'react'
import Image from "next/image"

function BigCard({ img, title, description, buttonText }) {
    return (
        <section className='max-w-7xl px-8 sm:px-16 mx-auto pt-6 py-16  relative '>
            <div className='relative h-96 min-w-[300px] '>
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className='rounded-xl'
                    alt="" />
            </div>
            <div className='absolute top-20 left-20 md:left-32 sm:top-20 sm:left-28  '>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <h2>{description}</h2>
                <button className='text-white text-sm bg-gray-900 px-4 py-2 rounded-lg mt-5 cursor-pointer'>{buttonText}</button>
            </div>
        </section>
    )
}

export default BigCard