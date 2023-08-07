import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import VerticalAppointment from '../Components/VerticalAppointment'
import VerticalMedicine from '../Components/VerticalMedicine'
import premium from '../Photos/premium.png'
import Healthrecfolder from '../Photos/Healthrecfolder.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import SingleLineCalendar from '../Components/SingleLineCalender'
import VerticalSLC from '../Components/VericalSLC'
import { CgAdd } from 'react-icons/cg'
import { RxCross1 } from 'react-icons/rx'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { TbClipboardList } from 'react-icons/tb'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { BsDownload } from 'react-icons/bs'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'
import SideMenu from '../Components/SideMenu'
import Page from "../Layouts/Pages";

const HealthRecord1 = () => {

    //vertical calender , appointments and Medicine
    const [vertical, setVertical] = useState('Upcoming')
    const [uploadedPDFs, setUploadedPDFs] = useState([]);

    const toggleVertical = (item) => {
        setVertical(item)
    }

    //open medicine upload
    const [pop, setPop] = useState(false)

    function openUpload() {
        setPop(!pop)
    }

    //upload document
    const [PDF, setPDF] = useState()

    const hiddenChoosePDF = useRef()

    function handlePDFUpload(event) {
        const file = event.target.files[0];
        if (file.type === 'application/pdf') {
            setPDF(file);
            setPDFname(file.name);
            const newPDF = {
                name: file.name,
                size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
                date: new Date().toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                }),
                time: new Date().toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                })
            };
            setUploadedPDFs(prevPDFs => [...prevPDFs, newPDF]);
        } else {
            console.log('Invalid file type');
        }
    }

    function uploadPDF() {
        hiddenChoosePDF.current.click()
    }

    const [PDFname, setPDFname] = useState("");

    function closeUploadPDF() {
        setPDF(!PDF)
    }

    //Upload Button
    const [UploadBox, setUploadBox] = useState(false)

    function UploadFile() {
        setUploadBox(!UploadBox)
        // setPop(!pop)
    }


    return (
        <Page pageContent={(
        <>
        
                    <div className='bg-[#FEF8FD] w-full flex flex-row h-full'>

                        <div className='flex flex-col w-[65%] mx-[5%]'>

                            <h1 className='ml-[13%] mt-8 text-lg font-semibold'>
                                Health Record
                            </h1>

                            <div className={UploadBox ? 'bg-white h-max ml-[13%] mt-4 rounded-2xl shadow-xl flex flex-col p-4' : 'bg-white h-[10vh] ml-[13%] mt-4 rounded-2xl shadow-xl flex items-center justify-between px-4'}>
                                <div className=' flex items-center justify-between px-4 w-full' >
                                    <div className='flex gap-2'>
                                        <div>
                                            <img src={Healthrecfolder} alt='folder.jpg' />
                                        </div>
                                        <div>
                                            <h1 className='font-semibold' onClick={UploadFile}>Biopsy / Molecular makers report</h1>
                                            <p className='text-sm text-gray-400'>{uploadedPDFs.length}</p>
                                        </div>
                                    </div>

                                    <div className='cursor-pointer' onClick={openUpload}>
                                        <CgAdd color='#C31A7F' size={30} />
                                    </div>

                                </div>


                                {uploadedPDFs.length > 0 && (
                                    <div className='mt-4 h-auto w-full flex flex-col items-start justify-center'>
                                        {uploadedPDFs.map((pdf, index) => (
                                            <div className='my-4 h-20 w-[100%] border rounded-2xl border-[#7E7E7E] flex items-center justify-between ' key={index}>
                                                <div className='list-none flex flex-row items-center justify-center gap-16 mx-6'>
                                                    <div className='flex flex-row gap-2 items-center'>
                                                        <BsFileEarmarkPdf  size={34} />
                                                        <h1 className='flex-shrink-0'>{pdf.name?.length > 12 ? `${pdf.name?.slice(0, 12)}...` : `${pdf.name}`}</h1>
                                                    </div>

                                                    <div className='flex gap-10 '>
                                                        <span>{pdf.size}</span>
                                                        <span>{pdf.date}</span>
                                                        <span>{pdf.time}</span>
                                                    </div>

                                                </div>

                                                <div className='mx-6'>
                                                <div className='flex gap-4'>
                                                    <div className='p-2 bg-[#c31a7f42] rounded-xl'><BsDownload /></div>
                                                    <div className='p-2 bg-[#c31a7f42] rounded-xl'><AiOutlineShareAlt /></div>
                                                    <div className='p-2 bg-[#c31a7f42] rounded-xl'><BsTrash3 /></div>
                                                    <div className='p-2 bg-[#c31a7f42] rounded-xl'><BsPencil /></div>
                                                </div>
                                                </div>
                                                
                                            </div>
                                                
                                        
                                ))}
                            </div>
                                )}


                        </div>


                    </div>

                    {/* right side */}
                    <div className='w-max pt-8 px-4 h-max relative'>
                        <div className=''>
                            <div className='bg-gradient-to-r from-[#D4F1FF] to-[#FFFFFF] h-[15%] w-[150%] rounded-2xl shadow-xl '>
                                <img src={premium} alt='none' className=' h-[100%] w-[60%] top-[0%] left-[43%] relative' />
                            </div>

                            <div className='text-center w-max absolute top-[18%] left-[20%] font-semibold'>
                                <h1>Try Premium</h1>
                                <h1>for free</h1>
                            </div>

                            <div className='w-max absolute top-[45%] left-[20%] text-xs text-[#00000073]'>
                                One month free
                            </div>

                            <div className='w-max absolute top-[68%] left-[15%] bg-gradient-to-r from-[#efc41955] to-[#ed839a54] p-2 px-8 rounded-3xl'>
                                Try free
                            </div>

                        </div>
                    </div>

                    {/* calender */}
                    <div className='h-[60%] w-[20%] bg-white top-[40%] left-[76%] absolute rounded-2xl shadow-xl overflow-hidden px-2'>

                        <div className=' pt-2'>
                            <SingleLineCalendar />
                        </div>

                        <div className='p-4'>
                            <hr />
                        </div>

                        <div className='px-3 font-semibold flex justify-between'>
                            <h1 onClick={() => toggleVertical('Upcoming')}
                                className={vertical === 'Upcoming' ? 'text-black' : 'text-[#C4C4C4]'}>Upcoming</h1>
                            <h1 onClick={() => toggleVertical('Appointment')}
                                className={vertical === 'Appointment' ? 'text-black' : 'text-[#C4C4C4]'}>Appointment</h1>
                            <h1 onClick={() => toggleVertical('Medicines')}
                                className={vertical === 'Medicines' ? 'text-black' : 'text-[#C4C4C4]'}>Medicines</h1>
                        </div>

                        <div className=''>
                            <div className='flex flex-col'>
                                {vertical === 'Upcoming' &&
                                    (<div className='w-full'>
                                        <VerticalSLC />
                                    </div>)}
                                {vertical === 'Appointment' &&
                                    (<div className='w-full'>
                                        <VerticalAppointment />
                                    </div>)}
                                {vertical === 'Medicines' &&
                                    (<div className='w-full'>
                                        <VerticalMedicine />
                                    </div>)}

                                <div className='w-full h-[10%] absolute top-[90%] bg-white flex justify-center items-center font-semibold'>
                                    <div className='bg-[#c31a7f3c] flex items-center gap-2 pl-2 rounded-2xl'>
                                        <div className='flex px-4 items-center'>
                                            View all
                                            <RiArrowDropDownLine size={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
          
    
        


            {/* pop up */ }
    {
        pop && (
            <div
                className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
                style={{ backdropFilter: 'blur(2px)' }}>

                <div className='w-[40%] h-[60%] bg-white rounded-3xl flex flex-col justify-center my-2 px-5 relative'>

                    <div className='flex items-center justify-center h-max font-semibold  '>
                        <h1 className='text-lg'>Upload Record</h1>
                        <div className='absolute right-[8%]' onClick={openUpload}>
                            <RxCross1 />
                        </div>
                    </div>

                    <div className='h-[80%] w-[100%] flex flex-col items-center'>
                        <div className='w-[90%] h-[65%] mt-[3%] border-dotted rounded-lg border-2 border-gray-300'>
                            {!PDF && (<><div className='flex justify-between text-sm text-[#7E7E7E] p-2'>
                                <p>Biopsy/Molecular Markers Reports</p>
                                <p>Max File Size: 3 MB</p>
                            </div>
                                <div className='flex flex-col items-center'>
                                    <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                                    <h1>Drag and drop or</h1>
                                    <h1 className='text-[#3F75F3] font-semibold cursor-pointer' onClick={uploadPDF}>Browse</h1>
                                    <p className='text-sm w-[60%] text-center text-[#7E7E7E]'>Upload your Biopsy/PET CT reports of the patient to verify the case.</p>
                                </div></>)}

                            {PDF && (
                                <div className='relative flex items-center justify-center h-full'>
                                    <div className='flex items-center gap-2'>
                                        <BsFileEarmarkPdf className='cursor-pointer' size={30} />
                                        <p className='font-semibold text-xl'>{PDFname}</p>
                                        {/* <embed src={URL.createObjectURL(PDF)} className='h-[38%]' type='application/pdf' />    actual PDF */}

                                    </div>

                                    <button className='absolute top-5 right-5' onClick={closeUploadPDF} >
                                        <IoCloseCircleSharp color='black' />
                                    </button>
                                </div>
                            )}

                            <input
                                type='file'
                                accept='application/pdf'
                                ref={hiddenChoosePDF}
                                style={{ display: 'none' }}
                                onChange={handlePDFUpload}
                            />
                        </div>

                        <h2 className='my-3'>OR</h2>

                        <div className='w-[90%] border-2 border-[#ABABAB] p-2 flex items-center gap-2 px-4 rounded-2xl'>
                            <TbClipboardList />
                            <h1>|</h1>
                            <input placeholder='Document Name' className='outline-none w-[90%]' />
                        </div>

                        <div className='flex justify-end w-[90%] mt-4 gap-4'>
                            <h1 className='px-2 py-1 border-2 border-[#ABABAB] rounded-xl cursor-pointer' onClick={openUpload}>Cancel</h1>
                            <h1 className='px-2 py-1 bg-[#EFC319] rounded-xl text-white cursor-pointer' onClick={UploadFile}>Upload</h1>
                        </div>

                    </div>

                </div>

            </div>
            
            )
    };
            
    </>
    )} />
)
}

export default HealthRecord1