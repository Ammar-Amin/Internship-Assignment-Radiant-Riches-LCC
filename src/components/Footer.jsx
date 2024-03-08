import React from 'react'

export default function Footer() {
    return (
        <div className='footer bg-slate-800 text-slate-400 min-h-[400px] pt-8 flex'>
            <div className='footer1 w-[65%] flex justify-evenly'>
                <div>
                    <p className='text-white text-xl py-2'>CATEGORIES</p>
                    <p className='py-1'>Web Builder</p>
                    <p className='py-1'>Hosting</p>
                    <p className='py-1'>Data Center</p>
                    <p className='py-1'>Robotic-Auto.</p>
                </div>

                <div>
                    <p className='text-white text-xl py-2'>CONTACT</p>
                    <p className='py-1'>Contact</p>
                    <p className='py-1'>Privacy Policy</p>
                    <p className='py-1'>Terms Of Service</p>
                    <p className='py-1'>Categories</p>
                    <p className='py-1'>About</p>
                </div>
            </div>


            <div class="dropdown h-[70px] top-10">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    United States
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    )
}
