import React from 'react'

import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="upper_part border-b border-gray-400 flex flex-col md:flex-row gap-5 md:gap-12  px-5 py-5 m-5">
                    <div className="column_1 md:w-1/3">
                        <h3 className='md:text-3xl text-2xl m-2 font-outfit font-bold'>TaskFlow</h3>
                        <p className='text-md md:text-xl m-2 font-nunito text-gray-600 font-light '>Organize your life, one task at a time</p>
                    </div>
                    <div className="column_2 md:w-1/3">
                        <h2 className='font-outfit text-black md:text-3xl text-2xl font-bold m-2'>Product</h2>
                        <h3 className='md:text-xl text-md font-light text-gray-600 font-nunito m-2'>
                            <Link to="/">Home</Link>
                        </h3>
                        <h3 className='text-md md:text-xl font-light text-gray-600 font-nunito m-2'>
                            <Link to="/about">About</Link>
                        </h3>
                        <h3 className='text-md md:text-xl font-light text-gray-600 font-nunito m-2'>
                            <Link to="/contact">Contact</Link>
                        </h3>

                    </div>
                    <div className="column_3 md:w-1/3">
                        <h2 className='font-outfit text-black md:text-3xl text-2xl font-bold m-2'>Legal</h2>
                        <h3 className='md:text-xl text-md font-light text-gray-600 font-nunito m-2'>
                            <Link to="/">Privacy Policy</Link>
                        </h3>
                        <h3 className='text-md md:text-xl font-light text-gray-600 font-nunito m-2'>
                            <Link to="/about">Terms of Service</Link>
                        </h3>

                    </div>
                </div>
                <div className="below_container flex flex-row justify-center item-center mb-10 text-gray-500 mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copyright-icon lucide-copyright"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
                    <div className="text_copyright ml-1">2025 TaskFlow. All Rights reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer