import Image from 'next/image'
import React from 'react'
import {HeartIcon} from "@heroicons/react/outline"
import {StarIcon} from "@heroicons/react/solid"


function PlaceCard({img,location,title,description,total,long,star,price}) {
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-out '>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} alt=""  objectFit='cover' layout="fill" className='rounded-lg'/>
        </div>
        <div className='flex flex-col flex-grow pl-5 '>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className="h-7 curssor-pointer"  />
            </div>

            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'></div>
            <p className='pt-2 text-sm text-gray-500 flex-grow '>{description}</p>

            <div className='flex justify-between items-end pt-5 '>
                <p>
                    <StarIcon  className='h-5 text-red-500 '/>
                    {star}
                </p>
                <div>
                    <div className='text-lg lg:text-2xl font-semibold pb-2 '>{price}</div>
                    <div className=' text-right font-exatralight'>{total}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceCard