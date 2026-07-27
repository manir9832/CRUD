import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex justify-between items-center h-20 bg-gray-300 shadow px-5'>
            <div className='w-[10%] h-full flex items-center '>
               <h2 className='font-bold text-zink-800'>skyR</h2>
            </div>

            <div className='w-[50%] h-full'>
             <ul className='w-full h-full flex gap-6 list-none items-center text-zink-800 font-medium'>
             <li className='curser-pointer'>HOME</li>
             <li className='curser-pointer'>ABOUT</li>
             <li className='curser-pointer'>CONTACT</li>
             </ul>
            </div>
            
        </div>
    )
}

export default Navbar
