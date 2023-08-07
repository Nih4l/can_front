import React, { useRef, useState } from 'react';
import { CgAdd } from 'react-icons/cg';
import { MdOutlineCloudUpload } from 'react-icons/md';
import Page from '../Layouts/Pages';
import { Link } from 'react-router-dom';
const HealthCard1 = () => {
  const hiddenChooseImage = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [healthCardData, setHealthCardData] = useState([])

  const handleInputChange = (event) => {

      setHealthCardData({
        ...healthCardData,
        [event.target.id]: event.target.value,
      });
      console.log(healthCardData)
    }
  
  return (
    <Page
      pageContent={
        <>
          <div className='h-fit w-full bg-[#FEF8FD] flex flex-col gap-4 pb-5 justify-center items-center'>
            <h1 className='lg:ml-[4%] pt-6 font-semibold'>Make Your Health Card</h1>
            <div className='lg:ml-[4%] h-full w-[80%] bg-white rounded-xl py-2'>
              <div className='flex flex-col gap-2 items-center justify-center mt-4'>
                <input
                  type='file'
                  id='upload-button'
                  style={{ display: 'none' }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt='Selected'
                    style={{ borderRadius: '50%', width: '80px', height: '80px' }}
                  />
                )}
                <label htmlFor='upload-button' className='text-[#C31A7F] cursor-pointer'>
                  Upload Picture
                </label>
              </div>

              <form className='flex flex-wrap items-center justify-center gap-7 mx-[4%] my-4' >
              <div class=" md:w-[46%] relative group w-full">
                <input type="text" id="name" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange} />
                <label for="name" class="transform duration-300 peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Name</label>
              </div>

              <div class="md:w-[46%] w-full relative group ">
              <label for="gender" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Gender</label>
                <select id="gender" required class="w-full h-10 px-4 text-sm peer outline-none border rounded-lg " onChange={handleInputChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" onFocus={(e) => {e.target.type = 'date';}} id="dob" required className="block w-full text-sm bg-transparent border rounded-lg p-2 appearance-none focus:outline-none  peer" placeholder=" " onChange={handleInputChange} />
                <label for="dob" className=" absolute px-2 lg:md:text-sm text-xs flex-nowrap duration-300 transform  -translate-y-6 scale-75 top-3 left-2 z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Date of Birth</label>
                
              </div>
              <div class="md:w-[46%] w-full relative group">
              <label for="blood-group" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Blood Group</label>
               <select name="blood-group" required class="block px-2 py-2  w-full text-sm bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " onChange={handleInputChange}>
                  <option value="default"> </option>
                  <option value="A +ive">A +ive</option>
                  <option value="A -ive">A -ive</option>
                  <option value="B +ive">B +ive</option>
                  <option value="B -ive">B -ive</option>
                  <option value="O +ive">O +ive</option>
                  <option value="O -ive">O -ive</option>
                </select>
              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" id="height" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange}/>
                <label for="height" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Height (cm)</label>
              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" id="weight" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange} />
                <label for="weight" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Weight (kg)</label>
              </div>
              <div class="md:w-[46%] w-full relative group">
              <label for="cancer-type" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Cancer Type</label>

          <select name="cancer-type" required class="w-full p-2 px-4 text-sm outline-none border rounded-lg" onChange={handleInputChange}>
            <option value="default"> </option>
            <option value="A +ive">A +ive</option>
            <option value="A -ive">A -ive</option>
            <option value="B +ive">B +ive</option>
            <option value="B -ive">B -ive</option>
            <option value="O +ive">O +ive</option>
            <option value="O -ive">O -ive</option>
          </select>
</div>

              <div class="md:w-[46%] w-full relative group">
              <label for="cancer-stage" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Cancer Stage</label>
                <select name="cancer-stage" required class="w-full p-2 px-4 text-sm  outline-none border rounded-lg" onChange={handleInputChange}>
                  <option value="default"> </option>
                  <option value="A +ive">A +ive</option>
                  <option value="A -ive">A -ive</option>
                  <option value="B +ive">B +ive</option>
                  <option value="B -ive">B -ive</option>
                  <option value="O +ive">O +ive</option>
                  <option value="O -ive">O -ive</option>
                </select>
              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" id="current-treatment" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange}/>
                <label for="current-treatment" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Current Treatment</label>
              </div>
              <div class="md:w-[46%] w-full  relative group">
              <input type="text" id="last-treatment" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange}/>
                <label for="last-treatment" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Last Treatment</label>

              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" id="presiding-doctor" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange} />
                <label for="presiding-doctor" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Preciding Doctor</label>
              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" id="hospital-details-primary" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange} />
                <label for="hospital-details-primary" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Hospital Details (Primary)</label>
              </div>
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" id="hospital-details" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange} />
                <label for="hospital-details" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Hospital Details</label>
              </div>
              <div className='md:w-[46%]'></div>
              <div className='w-full'>
              <h1 className='font-semibold m-2'>Emergency Contact</h1>
              </div> 
              
              <div class="md:w-[46%] w-full  relative group">
                <input type="text" name="emergency-name" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange}/>
                <label for="emergency-name" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Name</label>
              </div>
              <div class="md:w-[46%] w-full  relative group">
              <input type="tele" name="phone" required class="w-full p-2 px-4 text-sm peer  outline-none border rounded-lg " onChange={handleInputChange} />
                <label for="phone" class="transform peer-focus:-translate-y-3 peer-focus:left-2 peer-focus:bg-white absolute top-0 z-10 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-3 peer-valid:left-2 group-focus-within:pl-0 peer-valid:pl-0">Phone No.</label>
              </div>
              <div className='w-full m-2 p-2 flex flex-row gap-4 items-center'>
                <CgAdd color='#C31A7F' size={30} />
                <h1 className='font-semibold'>Add More Emergency Contact</h1>
              </div>
             

              <div className='w-[95%] p-2 m-2 font-semibold'>Add Your Document</div>

              <div className='p-2 m-2 w-fit md:w-[46%]'
                style={{
                  height: 200,
                  borderStyle: 'dashed',
                  borderWidth: 2,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#AFAFAF',
                }}>
                <div className='text-sm text-[#7E7E7E] p-2 w-full'>
                  <p className='w-full text-right'>Max File Size: 3 MB</p>
                </div>

                <div className='flex flex-col items-center mb-4'>
                  <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                  <h1>Drag and drop or</h1>
                  <h1 className='text-[#3F75F3] font-semibold cursor-pointer' >Browse</h1>
                  <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Aadhaar Card</p>
                </div>
              </div>
              <div className='p-2 m-2 w-fit md:w-[46%]'
                style={{
                  height: 200,
                  borderStyle: 'dashed',
                  borderWidth: 2,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#AFAFAF',
                }}>
                <div className='text-sm text-[#7E7E7E] p-2 w-full'>
                  <p className='w-full text-right'>Max File Size: 3 MB</p>
                </div>

                <div className='flex flex-col items-center mb-4'>
                  <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                  <h1>Drag and drop or</h1>
                  <h1 className='text-[#3F75F3] font-semibold cursor-pointer' >Browse</h1>
                  <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Fit to Fly certificate</p>
                </div>
              </div>

              </form>

              <div className='flex flex-row md:items-end md:justify-end md:mx-16 p-4 justify-center'>
                <div className='flex flex-row gap-3'>
                  <div className='h-10 w-28 bg-transparent text-[#7E7E7E] border-2 rounded-xl flex items-center justify-center cursor-pointer'>
                    Cancel
                  </div>
                  <Link to='/HealthCard2'><div className='h-10 w-28 bg-[#EFC319] text-[#FFFF] rounded-xl flex items-center justify-center cursor-pointer'>
                    Save
                  </div></Link>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default HealthCard1;
