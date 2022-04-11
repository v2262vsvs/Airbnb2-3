import React from 'react'
import Image from "next/image"

function MediumCard({ img, title }) {
    return (
        <div className='cursor-pointer transition hover:duration-500 hover:scale-105 ease-out'>
            <div className="relative h-80 w-80 rounded-lg shadow-lg hover:shadow-xl ">
                <Image
                    src={img}
                    layout="fill"
                    className='rounded-lg'
                    alt="" />
            </div>
            <div className='text-3xl mt-3 '>{title}</div>
        </div>
    )
}

export default MediumCard