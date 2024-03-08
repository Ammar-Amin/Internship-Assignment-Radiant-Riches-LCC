import React from 'react'
import img from '../assets/interimg.jpg'

export default function Cards() {
    return (
        <>
            <h1 className='cardTitle max-w-[950px] m-auto text-3xl py-4' > Related deals you might like for</h1>

            <div className='cards max-w-[950px] m-auto flex justify-between'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Webbuilder 1</h5>
                        <p className="card-text">Computer Modern clasic with wiz support</p>
                        <div className='flex gap-2 my-1'>
                            <p className="text-2xl" >$39.96</p>
                            <span className="text-orange-500 mt-2">$49.96</span>
                            <span className="text-orange-500 mt-2">(20% Off)</span>
                        </div>
                        <a href="#" className="btn btn-primary w-full ">View Deal</a>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Webbuilder 1</h5>
                        <p className="card-text">Computer Modern clasic with wiz support</p>
                        <div className='flex gap-2 my-1'>
                            <p className="text-2xl" >$39.96</p>
                            <span className="text-orange-500 mt-2">$49.96</span>
                            <span className="text-orange-500 mt-2">(20% Off)</span>
                        </div>
                        <a href="#" className="btn btn-primary w-full ">View Deal</a>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Webbuilder 1</h5>
                        <p className="card-text">Computer Modern clasic with wiz support</p>
                        <div className='flex gap-2 my-1'>
                            <p className="text-2xl" >$39.96</p>
                            <span className="text-orange-500 mt-2">$49.96</span>
                            <span className="text-orange-500 mt-2">(20% Off)</span>
                        </div>
                        <a href="#" className="btn btn-primary w-full ">View Deal</a>
                    </div>
                </div>
            </div>

            <div className='email max-w-[950px] m-auto flex justify-between my-5'>
                <div className='signupText text-3xl py-4'>
                    <p >Sign up and get exclusive</p>
                    <p>special deals</p>
                </div>
                <div className='my-4 flex items-center'>
                    <input type="text" placeholder='Email'
                        className='rounded-lg py-2 px-3 outline-none border-none text-black' />
                    <button type="button" className="btn btn-primary bg-blue-600 py-[6px] px-3">Sign Up</button>
                </div>
            </div>

        </>
    )
}
