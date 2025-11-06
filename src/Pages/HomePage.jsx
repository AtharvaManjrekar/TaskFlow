import React from 'react'
import heroImg from '../assets/hero_img.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { CircleCheckBig } from "lucide-react";
import { Users, Zap, ChartColumn, CircleCheckBig } from "lucide-react";

function HomePage() {
    return (
        <>
            <div className="container">
                <div className="upper_content md:flex mb-5">

                    <div className="left_container p-2 md:p-4 md:mt-8">
                        <h2 className='text-6xl font-extrabold font-outfit m-2 text-center md:text-left md:mt-18 md:mb-12 mb-15'>Master your Productivity with TaskFlow</h2>

                        <h3 className='text-2xl font-light font-nunito text-gray-500 m-3 md:mr-10 md:text-left text-center'>Transform how you work. Create, organize, and complete your tasks with an intuitive system designed for modern productivity. Join thousands who've reclaimed their focus.</h3>

                        <div className="buttons ml-8 md:flex md:flex-row mt-2 md:ml-0 ">
                            <Link to="register" className='m-5 bg-blue-900 text-white w-5xs h-12 flex px-6 text-xl py-3 rounded-xl font-nunito cursor-pointer w-4/5 items-center md:w-2/3 shadow-lg shadow-gray-400 transition-transform duration-200 hover:-translate-y-1'>Get Started Free
                                <div className="arrow">
                                    <FontAwesomeIcon icon={faArrowRightLong} className="text-white ml-2 items-center" />
                                </div>
                            </Link>
                            <Link to='/about' className='m-5 w-5xs border h-12 flex px-6 text-xl py-3 rounded-xl font-nunito cursor-pointer w-4/5 md:w-2/3 shadow-lg shadow-gray-400 transition-transform duration-200 hover:-translate-y-1'>See How It Works</Link>
                        </div>

                    </div>

                    <div className="right_container ml-5">
                        <img src={heroImg} alt="to-do-list-img" className="h-auto w-[96%] object-contain" />
                    </div>

                </div>

                <div className="second_container w-full bg-[rgba(58,153,255,0.67)] pt-10 p-5">
                    <h2 className='text-center text-black text-4xl font-extrabold m-auto font-outfit pb-5'>Everything You Need to Succeed</h2>
                    <h4 className='text-center text-gray-500 text-2xl font-extralight font-nunito mt-1 mb-5'>Packed with powerful features designed to keep you focused and organized</h4>


                    {/* Cards */}

                    <div className="cards flex flex-col md:flex-row gap-12 m-10">

                        <div className="card1 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex flex-col justify-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <div className="icons">
                                <CircleCheckBig className="w-10 h-10 text-blue-900 my-4 mx-2" />
                            </div>

                            <h3 className='text-3xl font-outfit font-bold my-2 mx-2 text-white'>
                                Easy to Use
                            </h3>

                            <p className='text-medium my-2 mx-2 text-gray-800 font-normal'>
                                Clean, intuitive interface that works exactly how you expect it to
                            </p>
                        </div>

                        <div className="card2 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex flex-col justify-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <div className="icons">
                                <Users className="w-10 h-10 text-blue-900 my-4 mx-2" />
                            </div>

                            <h3 className='text-3xl font-outfit font-bold my-2 mx-2 text-white'>
                                Personalized
                            </h3>

                            <p className='text-medium my-2 mx-2 text-gray-800 font-normal'>
                                Customize workflows and preferences to match your unique stlye
                            </p>
                        </div>

                        <div className="card3 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex flex-col justify-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <div className="icons">
                                <Zap className="w-10 h-10 text-blue-900 my-4 mx-2" />
                            </div>

                            <h3 className='text-3xl font-outfit font-bold my-2 mx-2 text-white'>
                                Fast & Reliable
                            </h3>

                            <p className='text-medium my-2 mx-2 text-gray-800 font-normal'>
                            Lightning-fast performance built on modern, scalable infrastructure
                            </p>
                        </div>

                        <div className="card4 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex flex-col justify-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <div className="icons">
                                <ChartColumn className="w-10 h-10 text-blue-900 my-4 mx-2" />
                            </div>

                            <h3 className='text-3xl font-outfit font-bold my-2 mx-2 text-white'>
                                Track Progress
                            </h3>

                            <p className='text-medium my-2 mx-2 text-gray-800 font-normal'>
                            Watch your productivity metrics and celebrate your achievements
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage