import React from 'react'
import { FaStar } from 'react-icons/fa'
import img from '../../assets/interimg.jpg'

export default function SubBody({ no, reviewNo, reviewText }) {
    return (
        <div>
            <div className="container max-w-[950px] bg-white rounded-xl mb-6 relative">
                <span className='text-2xl rounded-full px-2 bg-slate-100 absolute top-5 z-40' >{no}</span>
                <div className="model row">
                    <div className="img col-3 relative">
                        <img src={img} alt='image' className='img object-cover h-[200px]' />
                        <p className='builder absolute z-10 bottom-10 left-20'>Builder {no}</p>
                    </div>

                    <div className="col p-2 py-3">
                        <div>
                            <span className='font-bold text-slate-700 py-1'>WixPro 72-Inch Responsive Website Builder - </span>
                            <span className='text-slate-600'>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span>
                        </div>
                        <div>
                            <p className='font-bold py-1'>Main highlights</p>
                            <p className='pl-2 text-slate-600 py-1'>[What You Get]: Recieve the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                        </div>
                        <div>
                            <p className='text-blue-600 cursor-pointer'>Show more <i className="ri-arrow-down-s-line"></i></p>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className='w-[150px] m-auto text-center bg-slate-200 p-4 rounded-b-lg'>
                            <div className='text-4xl'>{reviewNo}</div>
                            <p className='py-2'>{reviewText}</p>
                            <div className='flex justify-center '>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                            </div>
                        </div>

                        <button type="button" className="modelBtn btn btn-primary w-full bg-blue-500 mt-10">View</button>
                    </div>
                </div>
            </div >
        </div >
    )
}
