import React from 'react'

function Search() {
  return (
    <div className='text-center bg-white md:hidden '>
        <h1 className='pt-5 text-2xl font-bold'>SEARCH BY VEICLE</h1>
        <div className='grid grid-cols-2 gap-4 max-w-[1240px] mx-auto px-4 py-5'>
            <div>
                <select className='md:hidden outline-0 w-full border-2 p-5 rounded-md text-gray-400'>
                    <option value>Select Make</option>
                    <option value="car-batteries">BMW</option>
                    <option value="brake">Ford</option>
                    <option value="electric-brakes">Hyundai</option>
                    <option value="emergency-brakes">Lexus</option>
                    <option value="hydraulic-brakes">Mazda</option>
                    <option value="mechanical-brakes">Mercerdess</option>
                </select>
            </div>
            <div>
                <select className='md:hidden outline-0 w-full border-2 p-5 rounded-md text-gray-400'>
                    <option value>Select Model</option>
                    <option value="car-batteries">124 GT</option>
                    <option value="brake">124 SPIDER</option>
                    <option value="electric-brakes">500</option>
                    <option value="emergency-brakes">500C</option>
                    <option value="hydraulic-brakes">595</option>
                    <option value="mechanical-brakes">595C</option>
                </select>
            </div>
            <div>
                <select className='md:hidden outline-0 w-full border-2 p-5 rounded-md text-gray-400'>
                    <option value>Select Engine</option>
                    <option value="car-batteries">1.2</option>
                    <option value="brake">1.3</option>
                    <option value="electric-brakes">1.4</option>
                    <option value="emergency-brakes">1.5</option>
                </select>
            </div>
            <div>
                <select className='md:hidden outline-0 w-full border-2 p-5 rounded-md text-gray-400'>
                    <option value>Select Year</option>
                    <option value="car-batteries">2019</option>
                    <option value="brake">2020</option>
                    <option value="electric-brakes">2021</option>
                    <option value="emergency-brakes">2022</option>
                    <option value="hydraulic-brakes">2023</option>
                    <option value="mechanical-brakes">2024</option>
                </select>
            </div>
        </div>
        <div className='pt-2 pb-4 px-5'>
            <button className='w-full bg-yellow-400 py-2 rounded-3xl font-bold hover:bg-black hover:text-yellow-400 ease-in-out duration-500'>Go</button>
        </div>
    </div>
  )
}

export default Search