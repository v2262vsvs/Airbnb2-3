import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"



import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { UsersIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router';

function Header({placeholder}) {
    const router = useRouter(null)
    const [searchInput, setSearchInput] = useState("")

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [nGuests, setnGuests] = useState(1)

    const resetSearch = (e) => {
        setSearchInput("")
        //e.prevent.default()
    }
    const refreshPage = () => {
        window.location.reload();
    }


    const handleSearch = (e) => {
            
            router.push({
                pathname: '/search',
                query: {
                    location: searchInput,
                    startDate: startDate.toDateString().slice(0, 10),
                    endDate: endDate.toISOString().slice(0, 10),
                    nGuests,

                }
            })
            
        

    }
    const handleMainPage = (e) => {
        router.push("/")
    }

    const handleSelect = (e) => {
        setStartDate(e.selection.startDate)
        setEndDate(e.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-5  md:px-10 lg:px-20'>

            <div onClick={handleMainPage} className='relative flex items-center h-8 my-auto hover:scale-105 transition duration-300 easy-out cursor-pointer '>
                
                    <Image
                        src="https://links.papareact.com/qd3"
                        alt=""
                        layout="fill"
                        objectFit='contain'
                        objectPosition='left'
                    />
                
            </div>

            <div className='  flex items-center rounded-full border border-gray-300 p-2  lg:shadow-md md:shadow-sm sm:shadow-sm '>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    className=' flex-grow text-gray-900 pl-5  sm:placeholder:text-gray-600 placeholder-white  text-sm   bg-transparent  outline-none'
                    placeholder={placeholder || 'Start your search'}
                />
                <svg onClick={handleSearch} className=' hover:scale-110   bg-red-400 text-white rounded-full h-7 w-7 cursor-pointer items-center  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                </svg>
            </div>

            <div className='flex items-center space-x-4 justify-end text-gray-800 '>
                <p className='hidden rounded-full hover:bg-gray-100 px-3 py-2 lg:inline cursor-pointer '>Become a Host</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded-full hover:bg-gray-100 hover:shadow-xl cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer hover:scale-110 transition duration-200 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            

            {searchInput && (
                <div className=' flex-col col-span-3 mx-auto hidden sm:flex'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                    />
                    <div className='flex items-center border-b border-gray-200 mb-4 '>
                        <h2 className='text-2xl pl-2 flex-grow   font-semibold'>Number of guests</h2>
                        <UsersIcon className='h-5' />
                        <input value={nGuests} onChange={e => setnGuests(e.target.value)} min={1} className='w-12 pl-2 text-lg outline-none text-red-400 placeholder:text-red-400' type="number" placeholder='1' />
                    </div>
                    <div className='flex  '>
                        <button onClick={resetSearch} className='flex-grow text-gray-500'>Cnacel</button>
                        <button onClick={handleSearch} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}

            

        </header>
    )
}

export default Header