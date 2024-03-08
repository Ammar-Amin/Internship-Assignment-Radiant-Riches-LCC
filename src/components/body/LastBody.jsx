import React from 'react'
import { FaStar } from 'react-icons/fa'
import img from '../../assets/interimg.jpg'

export default function LastBody({ reviewNo, reviewText }) {
    return (
        <div className='modelBox'>
            <div className="container max-w-[950px] bg-white rounded-xl mb-6 relative">
                <span className='text-2xl rounded-full px-2 bg-slate-100 absolute top-5 z-40' >4</span>
                <div className="model row">
                    <div className="img col-3 relative">
                        <img src={img} alt='image' className='img object-cover h-[200px]' />
                        <p className='builder absolute z-10 top-44 left-24'> CDN </p>
                    </div>

                    <div className="col p-2 py-3">
                        <div>
                            <span className='font-bold text-slate-700 py-1'>WixPro 72-Inch Responsive Website Builder - </span>
                            <span className='text-slate-600'>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span>
                        </div>
                        <div>
                            <p className='font-bold py-1'>Main highlights</p>
                            <div className='bg-orange-100 p-2 rounded-lg mx-4'>
                                <div className='flex gap-3 mb-1 mt-1'>
                                    <button className='text-blue-600 px-1 rounded-md  bg-white'>9.9</button><p className='text-slate-600'>Building Responsive</p>
                                </div>
                                <div className='flex gap-3 mb-1 '>
                                    <button className='text-blue-600 px-1 rounded-md bg-white'>9.9</button><p className='text-slate-600'>Cool</p>
                                </div>
                                <div className='flex gap-3 mb-1 '>
                                    <button className='text-blue-600 px-1 rounded-md bg-white'>9.9</button><p className='text-slate-600'>Docs</p>
                                </div>
                            </div>

                            <p className='pl-2 text-slate-600 py-1'>Why we love it</p>
                            <p className='pl-2 text-slate-600 py-1'> <i className="ri-checkbox-circle-line text-slate-700 ml-2"></i> Documentation</p>
                            <p className='pl-2 text-slate-600 py-1'> <i className="ri-checkbox-circle-line text-slate-700 ml-2"></i> Easy Use</p>
                            <p className='pl-2 text-slate-600 py-1'> <i className="ri-checkbox-circle-line text-slate-700 ml-2"></i> Out of Box</p>
                        </div>
                        <div>
                            <p className='text-blue-600 cursor-pointer'>Show more <i className="ri-arrow-down-s-line"></i></p>
                        </div>
                    </div>

                    <div className="col-3 rating w-[240px] ">
                        <div className='w-[150px] m-auto text-center bg-slate-200 p-4 rounded-b-lg'>
                            <div className='text-4xl'>{reviewNo}</div>
                            <p className='py-2'>{reviewText}</p>
                            <div className='flex justify-center '>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-slate-100'></FaStar>
                            </div>
                        </div>

                        <button type="button" className="lastBTN modelBtn btn btn-primary px-[90px] bg-blue-500 ">View</button>
                    </div>
                </div>
            </div >
        </div >
    )
}
