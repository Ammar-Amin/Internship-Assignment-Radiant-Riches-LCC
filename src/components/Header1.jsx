import React from 'react'

export default function Header1() {
    return (
        <div className='mb-4'>

            <div className=
                'w-full h-[60px] bg-slate-700 text-slate-300 flex justify-center items-center fixed top-0 z-50'>
                <div className='w-[50%] flex justify-between'>
                    <div className='w-[350px]'>
                        <i className="mx-1 ri-search-line"></i>
                        <input type="text" placeholder='Search' className='headingSearch w-[80%] rounded-lg py-2 px-3 outline-none border-none text-black' />
                    </div>
                    <div className='heading flex gap-9 items-center' >
                        <span className='hover:text-white cursor-pointer heading'>Categories</span>
                        <span className='hover:text-white cursor-pointer heading'>Website Builders</span>
                        <span className='hover:text-white cursor-pointer heading'>Today's deals</span>
                    </div>

                </div>
            </div>


        </div>
    )
}
