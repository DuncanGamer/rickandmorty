import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'




function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)




    return (
        <div className='  w-screen h-[80px] z-10 bg-green-200 fixed drop-shadow-lg '>
            <div className="  container my-auto mx-auto px-2 flex justify-between items-center w-full h-full  ">
                <div className='flex items-center '>
                    <h1 className='text-xl font-bold mr-4 md:tex-4xl cursor-pointer'> Rick And Morty APP</h1>
                    <ul className=' hidden md:flex ml-11 gap-9 cursor-pointer'>
                      



                    </ul>


                </div>
                <div>
                  <a className=' p-4 ' href='/'>   <button className='hidden md:block bg-green-500 text-white mr-10 px-2 py-2 rounded-md hover:bg-green-600'>HOME</button> </a>

                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {isOpen ? <XIcon className='h-6 w-6' /> : <MenuIcon className='h-6 w-6' />}


                </div>

            </div>

            <ul className={!isOpen ? 'hidden' : 'absolute   bg-zinc-200 w-full h-78  '}>
                <a href='/'> <li className=" p-7 border-b-2 border-zinc-300 w-full">Home</li></a>




                <div className=' pb-9 mx-auto flex flex-col gap-4'>
                    <button className='bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 mx-4'>Get Started</button>
                    <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600  mx-4'>Sign in</button>
                </div>
            </ul>

        </div>
    )
}

export default Navbar