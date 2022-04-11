import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from "date-fns"
import PlaceCard from "../components/PlaceCard"
import Mapp from "../components/Mapp"

function Search({ searchResult }) {



  const router = useRouter(null)
  const { location, startDate, endDate, nGuests } = router.query;
  //const formatedStartDate = format(new Date(startDate),'D MMMM YYYY')
  //const formatedEndDate = format(new Date(endDate),'D MMMM YYYY');
  const range = `${startDate} – ${endDate}`
  return (
    <div className='h-screen'>
      <Header placeholder={`${location} | ${range} | ${nGuests} guests`} />
      <main className='flex  '>
        <section className='flex-grow pt-5 px-6 '>
          <p className='text-xs'>300+ Stays – {range} – for {nGuests} guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap relative'>

            <button className=' flex hover:shadow-md hover:scale-95 active:bg-gray-100 duration-300 transition easy-out text-sm rounded-full text-center border border-gray-200 cursor-pointer items-center  px-4 py-2 '>
              <p >Guests</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className=' flex hover:shadow-md hover:scale-95 active:bg-gray-100 duration-300 transition easy-out text-sm rounded-full text-center border border-gray-200 cursor-pointer items-center  px-4 py-2 '>
              <p >Price</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className=' flex hover:shadow-md hover:scale-95 active:bg-gray-100 duration-300 transition easy-out text-sm rounded-full text-center border border-gray-200 cursor-pointer items-center  px-4 py-2 '>
              <p >Language offered</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className=' flex hover:shadow-md hover:scale-95 active:bg-gray-100 duration-300 transition easy-out text-sm rounded-full text-center border border-gray-200 cursor-pointer items-center  px-4 py-2 '>
              <p >Time of day</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className=' flex hover:shadow-md hover:scale-95 active:bg-gray-100 duration-300 transition easy-out text-sm rounded-full text-center border border-gray-200 cursor-pointer items-center  px-4 py-2 '>
              <p >Cancellation Flexibility</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown */}

          </div>
        </section>
      </main>
      <div className='flex  border-t pl-0 md:pl-16 md:pr-16 xl:pr-0 pr-0 xl:pl-0  border-gray-200'>
        <div>
          {searchResult.map(searchResult => (

            <PlaceCard
              key={searchResult.img}
              img={searchResult.img}
              location={searchResult.location}
              title={searchResult.title}
              description={searchResult.description}
              total={searchResult.total}
              long={searchResult.long}
              star={searchResult.star}
              price={searchResult.price}
            />
          ))}

        </div>
        <section className='hidden xl:inline-block xl:min-w-[600px]   '>
          <Mapp searchResult={searchResult} />
        </section>
      </div>

      <Footer />
    </div >
  )
}

export async function getServerSideProps() {
  const searchResult = await fetch('https://links.papareact.com/isz').then(res => res.json())
  return {
    props: {
      searchResult
    }
  }
}

export default Search