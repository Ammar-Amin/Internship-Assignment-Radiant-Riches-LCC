import React from 'react'

export default function Header2() {
    return (
        <div className='mt-[80px]'>
            <div className='threeHeads max-w-[950px] text-slate-600 m-auto'>
                <h1 className='title text-5xl text-black mb-4'>Best Website builders in the US</h1>

                <div className='flex justify-between px-2 py-1 border-t-[1px] border-b-[1px] border-slate-600'>
                    <div className='flex gap-2 items-center'>
                        <i className=" ri-checkbox-circle-line"></i>
                        Last Updated - February 22, 2020

                        <i className="ad-dis ri-information-line"></i>
                        <span className='ad-dis'>Advertising Disclosure</span>

                    </div>

                    <div className='flex items-center'>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle bg-white text-slate-600" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Top Relevant
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='buttons my-4 flex flex-wrap gap-4'>
                    <button type="button" className="btn btn-light text-slate-600 bg-white">Tools</button>
                    <button type="button" className="btn btn-light text-slate-600 bg-white">AWS Builders</button>
                    <button type="button" className="btn btn-light text-slate-600 bg-white">Start Build</button>
                    <button type="button" className="btn btn-light text-slate-600 bg-white">Build Supplies</button>
                    <button type="button" className="btn btn-light text-slate-600 bg-white">Tooling</button>
                    <button type="button" className="btn btn-light text-slate-600 bg-white">BlueHosting</button>

                </div>

                <nav style={{ ' --bsBreadcrumbDivider': ">" }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item cursor-pointer">Home</li>
                        <li className="breadcrumb-item cursor-pointer">Hosting for all</li>
                        <li className="breadcrumb-item cursor-pointer">Hosting</li>
                        <li className="breadcrumb-item cursor-pointer">Hosting6</li>
                        <li className="breadcrumb-item cursor-pointer">Hosting5</li>
                    </ol>
                </nav >
            </div>
        </div>
    )
}
