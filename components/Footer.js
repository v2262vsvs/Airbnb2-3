import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-100'>
            <div className='hidden md:grid md:grid-cols-4 gap-y-10 px-36 py-14 bg-gray-100 text-gray-600  '>
                <div className='space-y-4 text-xs text-gray-800 '>
                    <h5 className=' cursor-pointer font-bold'>ABOUT</h5>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>New Airbnb works</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Newsroom</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Investors</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Our COVID-19 Response</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Airbnb Luxe</p>

                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold cursor-pointer'>COMMUNITY</h5>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Airbnb.org: disaster relief housing</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Support Afghan refugees</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Combating discrimination</p>


                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold cursor-pointer'>HOSTING</h5>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Try hosting</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>AirCover: protection for Hosts</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Explore hosting resources</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Visit our community forum</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>How to host responsibly</p>

                </div>
                <div className='space-y-4 text-xs text-gray-800'>
                    <h5 className='font-bold cursor-pointer'>SUPORT</h5>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Help Center</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Safety information</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Cancellation options</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Supporting people with disabilities</p>
                    <p className='hover:border-b hover:border-black cursor-pointer w-fit'>Report a neighborhood concern</p>

                </div>
            </div>
            <div className='border-t border-gray-200 max-w-7xl mx-auto  px-36 py-7 flex justify-between bg-gray-100 '>
                <div className='flex space-x-2 text-xs text-gray-800'>
                    <div className='hidden sm:inline-block'>© 2022 Airbnb, Inc.</div>
                    <p className='hidden sm:inline-block'>·</p>
                    <div className='hover:border-b hover:border-black cursor-pointer w-fit'>Privacy</div>
                    <p>·</p>
                    <div className='hover:border-b hover:border-black cursor-pointer w-fit'>Terms</div>
                    <p>·</p>
                    <div className='hover:border-b hover:border-black cursor-pointer w-fit'>Sitemap</div>
                </div>
                <div className='flex ml-5 space-x-2 text-xs text-gray-800 text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div className='hidden sm:inline-block border-b border-black  cursor-pointer w-fit'>English (US)</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className='hidden sm:inline-block border-b border-black  cursor-pointer w-fit'>EUR</div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer