import Page from '../Layouts/Pages';
import React, { useRef, useState } from 'react';
import account from '../Photos/account.jpg';
import Icon from '../Photos/Icon.png'
import flight from '../Photos/MoreIcons/flight.png'
import share from   '../Photos/MoreIcons/share.png'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {BsDownload} from 'react-icons/bs'



const HealthCard2 = () => {
  return (
    <Page
      pageContent={
        <>
        <div className='bg-[#FEF8FD] lg:h-full h-fit flex flex-col w-full items-center'>
            <div className='bg-white flex flex-col md:mx-auto rounded-[30px] lg:p-10 gap-6  relative md:my-auto py-2 lg:overflow-hidden'>
            
                        <div className='w-fit left-0 top-0 absolute ml-0 flex flex-nowrap gap-4 p-4 flex-row bg-[#EFC31933] '>
                            <p>Fit to Fly</p>
                            <img src={flight}/>
                        </div>
                        
                <div className='flex flex-row w-full p-2 justify-end'>
                        <div className='flex lg:gap-4  gap-2'>
                            <div className="bg-[#c31a7f38]  p-2 rounded-[12px] cursor-pointer flex justify-center items-center w-9 shadow-md">
                            <img src={share}/>
                            </div>
                            <div className="bg-[#c31a7f38] text-[#C31A7F] px-3 py-2 rounded-[12px] cursor-pointer flex justify-center shadow-md w-9 items-center">
                            <BsDownload className='flex flex-grow'/>
                            </div>
                            <div className="bg-[#c31a7f38]  text-[#C31A7F] px-3 py-2 bold rounded-[12px] cursor-pointer flex justify-center shadow-md  w-9 items-center">
                            <MdOutlineModeEditOutline className='flex flex-grow'/> 
                            </div>
                        </div>
                </div>
                <div className=' lg:flex-row flex-col flex lg:gap-10 lg:px-10 px-2 gap-2 lg:justify-center'>
                    <div className='flex flex-col bg-transparent gap-10 w-full lg:w-1/3 lg:h-full px-3'>
                    <div className=' border-[#C4C4C4] flex border-[1px] bg-[#FCF5FA] rounded-[20px] flex-col w-full'>
                        <div className='flex flex-nowrap relative flex-row py-4 px-14 items-center justify-center'>
                            <div className='absolute flex top-1 left-0 '><img src={Icon}/></div>
                            <div className='flex  rounded-full overflow-hidden justify-center items-center'>
                                <img src={account} width={100}/>
                            </div> 
                        </div>
                        <div className='flex justify-center text-center '><p className='font-[600] text-[18px]'>Ananya Nagpal</p></div>
                        <div className='flex flex-row gap-4 py-4 px-14 items-center justify-center'>
                        <div className='flex flex-col text-[14px] font-500'><p className='text-[14px] font-[500]'>Fighter</p></div>
                        <div className='color-[#C4C4C4] w-1 flex'> |</div>
                        <div className='flex flex-col flex-nowrap'><p className='text-[14px] font-[500]'>42 years</p></div>
                        </div>   
                    </div>
                    <div className='border-[#C4C4C4] border-[1px] bg-[#FCF5FA] flex rounded-[20px] flex-row  py-6 justify-evenly w-full '>
                <div className='flex flex-col px-[12px] border-r-2 border-[#C4C4C4]'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Weight</h2>
                                <p>Chemo </p>
                </div>
                <div className='flex flex-col px-[12px] border-r-2 border-[#C4C4C4]'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Height</h2>
                                <p>Chemo  </p>
                </div>
                <div className='flex flex-col px-[12px]'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Blood</h2>
                                <p>Chemo </p>
                </div>
                </div>

                    </div>
                    <div className='flex flex-col bg-transparent gap-10 h-full w-full lg:w-1/3 px-3'>
                    <div className='border-[#C4C4C4] border-[1px] bg-[#FCF5FA] flex rounded-[20px] gap-4 flex-col items-start py-6 px-4 justify-evenly w-full h-full'>
                        <div className='flex flex-row justify-around items-start w-full '>
                            <div className='flex flex-col items-start px-4 border-r-2 border-[#C4C4C4]'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Cancer</h2>
                                <p>Gal Bladder</p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Stage</h2>
                                <p>III</p>
                            </div>
                        </div>
                        <hr className='w-full border-[#C4C4C4] my-2' /> 
                        <div className='flex flex-row gap-4 justify-evenly w-full '>
                        <div className='flex flex-col  px-4 border-r-2 border-[#C4C4C4]'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Current Treatment</h2>
                                <p>Radiation    </p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Last Treatment</h2>
                                <p>Chemo Therapy </p>
                            </div>

                        </div>
                    </div>
                    <div className='border-[#C4C4C4] border-[1px] bg-[#FCF5FA] flex rounded-[20px] flex-col py-6 px-4 justify-evenly w-full '>
                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Emergency Contact</h2>
                <div className='flex flex-row justify-between'>
                                <p>Chemo </p>
                                <p>231412</p>
                </div>
                </div>
                </div>
                   
                    <div className='flex px-3 lg:px-0 lg:w-1/3'>
                    <div className='border-[#C4C4C4] border-[1px] bg-[#FCF5FA] flex rounded-[20px] lg:h-fit  gap-4 flex-col items-start py-6 px-4 justify-evenly w-full '>
                        <div className='flex flex-row justify-evenly items-start w-full  '>
                            <div className='flex flex-col items-start px-4 border-r-2 border-[#C4C4C4]'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Presiding Doctor</h2>
                                <p>Dr Rakesh Kumar   </p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Hospital Details (primary)</h2>
                                <p>Chemo Therapy </p>
                            </div>
                            </div>
                            <hr className='w-full border-[#C4C4C4] my-4' /> 
                            <div className='flex flex-col justify-center items-center w-full '>
                            
                                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Hospital Details</h2>
                                <p>Chemo Therapy </p>
                          
                            </div>
                        </div>
                        </div>

                </div>
                <div className='flex flex-row px-10'>
                    <h1 className='font-[500] text-[22px] text-[#C31A7F]'>Certificates</h1>
                </div>
                <div className='flex lg:flex-row flex-col w-full gap-10 px-10'>
                <div className='border-[#C4C4C4] border-[1px] bg-[#FCF5FA] flex rounded-[20px] flex-row  py-6 px-4 justify-evenly lg:w-1/2 w-full'>
                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Aadhar Card</h2>
                <p className='text-[#7E7E7E]'>123</p>
                <p className='text-[#7E7E7E]'>123</p>
                <p className='text-[#7E7E7E]'>123</p>

                </div>
                <div className='border-[#C4C4C4] border-[1px] bg-[#FCF5FA] flex rounded-[20px] flex-row py-6 px-4 justify-evenly lg:w-1/2 w-full'>
                <h2 className='text-[16px] font-[500] text-[#C31A7F]'>Fit to Fly</h2>
                <p className='text-[#7E7E7E]'>123</p>
                <p className='text-[#7E7E7E]'>123</p>
                <p className='text-[#7E7E7E]'>123</p>
                </div>
                </div>

            </div>
        </div>
        </>
      }></Page>
  )
}

export default HealthCard2